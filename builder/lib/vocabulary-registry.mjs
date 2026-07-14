import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const DEFAULT_VOCABULARY_DIRECTORY = path.resolve(__dirname, "../vocab");

const TOKEN_PATTERN = /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/u;
const DOCUMENT_KEYS = new Set(["schema_version", "vocab", "values"]);

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function freezeDeep(value) {
  if (Array.isArray(value)) {
    for (const child of value) {
      freezeDeep(child);
    }
  } else if (isPlainObject(value)) {
    for (const child of Object.values(value)) {
      freezeDeep(child);
    }
  }
  return value && typeof value === "object" ? Object.freeze(value) : value;
}

function duplicateMappingKeyProblems(text) {
  const problems = [];
  const scopes = [{ indent: -1, path: [], keys: new Set() }];
  const lines = String(text ?? "").replace(/^\uFEFF/u, "").split(/\r?\n/u);

  for (let index = 0; index < lines.length; index += 1) {
    const raw = lines[index];
    if (/^\s*$/u.test(raw) || /^\s*#/u.test(raw)) {
      continue;
    }
    if (/^\t/u.test(raw)) {
      problems.push(`line ${index + 1} uses a tab for indentation`);
      continue;
    }
    const indent = raw.match(/^ */u)?.[0].length ?? 0;
    const trimmed = raw.trim();
    if (trimmed.startsWith("- ")) {
      continue;
    }
    const colonIndex = trimmed.indexOf(":");
    if (colonIndex <= 0) {
      continue;
    }
    const key = trimmed.slice(0, colonIndex).trim();
    while (scopes.length > 1 && scopes.at(-1).indent >= indent) {
      scopes.pop();
    }
    const scope = scopes.at(-1);
    if (scope.keys.has(key)) {
      const location = [...scope.path, key].join(".");
      problems.push(`line ${index + 1} repeats mapping key ${location}`);
    } else {
      scope.keys.add(key);
    }
    if (trimmed.slice(colonIndex + 1).trim() === "") {
      scopes.push({ indent, path: [...scope.path, key], keys: new Set() });
    }
  }

  return problems;
}

function validateValueMap(document, field, fileName, problems) {
  const valueMap = document[field];
  if (!isPlainObject(valueMap) || Object.keys(valueMap).length === 0) {
    problems.push(`${fileName}: ${field} must be a non-empty mapping`);
    return;
  }
  for (const [value, definition] of Object.entries(valueMap)) {
    if (!TOKEN_PATTERN.test(value)) {
      problems.push(`${fileName}: ${field}.${value} must use a lower_snake_case token`);
    }
    if (!isPlainObject(definition)) {
      problems.push(`${fileName}: ${field}.${value} must be a mapping`);
      continue;
    }
    if (typeof definition.description !== "string" || definition.description.trim() === "") {
      problems.push(`${fileName}: ${field}.${value}.description must be a non-empty string`);
    }
  }
}

function validateDocument(document, fileName) {
  const problems = [];
  if (!isPlainObject(document)) {
    return [`${fileName}: document must be a mapping`];
  }
  for (const key of Object.keys(document)) {
    if (!DOCUMENT_KEYS.has(key)) {
      problems.push(`${fileName}: unsupported top-level field ${key}`);
    }
  }
  if (document.schema_version !== 1) {
    problems.push(`${fileName}: schema_version must be integer 1`);
  }
  if (typeof document.vocab !== "string" || !TOKEN_PATTERN.test(document.vocab)) {
    problems.push(`${fileName}: vocab must be a lower_snake_case token`);
  } else {
    const expectedVocab = fileName.replace(/\.yaml$/u, "").replaceAll("-", "_");
    if (document.vocab !== expectedVocab) {
      problems.push(`${fileName}: vocab must be ${expectedVocab}; found ${document.vocab}`);
    }
  }

  validateValueMap(document, "values", fileName, problems);
  return problems;
}

export class VocabularyRegistryError extends Error {
  constructor(directory, problems) {
    super(
      [
        `Vocabulary registry validation failed for ${directory}.`,
        ...problems.map((problem) => `- ${problem}`),
      ].join("\n"),
    );
    this.name = "VocabularyRegistryError";
    this.directory = directory;
    this.problems = Object.freeze([...problems]);
  }
}

export function loadVocabularyRegistry({ directory = DEFAULT_VOCABULARY_DIRECTORY } = {}) {
  const resolvedDirectory = path.resolve(String(directory));
  if (!existsSync(resolvedDirectory) || !statSync(resolvedDirectory).isDirectory()) {
    throw new VocabularyRegistryError(resolvedDirectory, ["vocabulary directory does not exist"]);
  }

  const vocabularyEntries = readdirSync(resolvedDirectory, { withFileTypes: true })
    .filter((entry) => entry.name.endsWith(".yaml"))
    .sort((left, right) => (left.name < right.name ? -1 : left.name > right.name ? 1 : 0));
  const fileNames = vocabularyEntries.map((entry) => entry.name);
  if (fileNames.length === 0) {
    throw new VocabularyRegistryError(resolvedDirectory, ["no .yaml vocabulary files found"]);
  }

  const problems = [];
  const documents = {};
  const sourceFiles = {};
  for (const entry of vocabularyEntries) {
    const fileName = entry.name;
    if (!entry.isFile()) {
      problems.push(`${fileName}: vocabulary source must be a regular file`);
      continue;
    }
    const sourceText = readFileSync(path.join(resolvedDirectory, fileName), "utf8");
    for (const problem of duplicateMappingKeyProblems(sourceText)) {
      problems.push(`${fileName}: ${problem}`);
    }
    const document = parseYaml(sourceText);
    problems.push(...validateDocument(document, fileName));
    if (typeof document?.vocab !== "string") {
      continue;
    }
    if (documents[document.vocab]) {
      problems.push(
        `${fileName}: vocab ${document.vocab} is already defined by ${sourceFiles[document.vocab]}`,
      );
      continue;
    }
    documents[document.vocab] = document;
    sourceFiles[document.vocab] = fileName;
  }

  if (problems.length > 0) {
    throw new VocabularyRegistryError(resolvedDirectory, problems);
  }

  const ids = Object.freeze(Object.keys(documents).sort());
  freezeDeep(documents);
  freezeDeep(sourceFiles);
  return Object.freeze({
    directory: resolvedDirectory,
    ids,
    get(vocab) {
      const document = documents[vocab];
      if (!document) {
        throw new Error(`Unknown vocabulary: ${vocab}`);
      }
      return document;
    },
    sourceFile(vocab) {
      const sourceFile = sourceFiles[vocab];
      if (!sourceFile) {
        throw new Error(`Unknown vocabulary: ${vocab}`);
      }
      return sourceFile;
    },
    values(vocab) {
      const valueMap = this.get(vocab).values;
      if (!isPlainObject(valueMap)) {
        throw new Error(`Vocabulary ${vocab} does not define values`);
      }
      return Object.freeze(Object.keys(valueMap));
    },
  });
}

export const DEFAULT_VOCABULARY_REGISTRY = loadVocabularyRegistry();

export function vocabularyValues(vocab) {
  return DEFAULT_VOCABULARY_REGISTRY.values(vocab);
}

export function vocabularyValueSet(vocab) {
  return new Set(vocabularyValues(vocab));
}
