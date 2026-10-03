import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.ts";
import type { YamlObject, YamlValue } from "../../packages/pcr-core/src/yaml-lite.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const DEFAULT_VOCABULARY_DIRECTORY = path.resolve(__dirname, "../vocab");

const TOKEN_PATTERN = /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/u;
const DOCUMENT_KEYS = new Set(["schema_version", "vocab", "values"]);

export interface VocabularyValueDefinition {
  readonly [key: string]: YamlValue;
  readonly description: string;
}

export interface VocabularyDocument {
  readonly schema_version: 1;
  readonly vocab: string;
  readonly values: Readonly<Record<string, VocabularyValueDefinition>>;
}

export interface VocabularyRegistry {
  readonly directory: string;
  readonly ids: readonly string[];
  get(vocab: string): VocabularyDocument;
  sourceFile(vocab: string): string;
  values(vocab: string): readonly string[];
}

function isPlainObject(value: YamlValue | undefined): value is YamlObject {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function freezeDeep(value: unknown): void {
  if (value === null || typeof value !== "object") return;
  for (const child of Object.values(value)) freezeDeep(child);
  Object.freeze(value);
}

interface MappingScope {
  indent: number;
  path: string[];
  keys: Set<string>;
}

function duplicateMappingKeyProblems(text: string): string[] {
  const problems: string[] = [];
  const rootScope: MappingScope = { indent: -1, path: [], keys: new Set() };
  const scopes = [rootScope];
  const lines = text.replace(/^\uFEFF/u, "").split(/\r?\n/u);

  for (const [index, raw] of lines.entries()) {
    if (/^\s*$/u.test(raw) || /^\s*#/u.test(raw)) continue;
    if (/^\t/u.test(raw)) {
      problems.push(`line ${index + 1} uses a tab for indentation`);
      continue;
    }
    const indent = raw.match(/^ */u)?.[0].length ?? 0;
    const trimmed = raw.trim();
    if (trimmed.startsWith("- ")) continue;
    const colonIndex = trimmed.indexOf(":");
    if (colonIndex <= 0) continue;
    const key = trimmed.slice(0, colonIndex).trim();
    while (scopes.length > 1 && (scopes.at(-1) ?? rootScope).indent >= indent) {
      scopes.pop();
    }
    const scope = scopes.at(-1) ?? rootScope;
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

function validateValueMap(
  document: YamlObject,
  fileName: string,
  problems: string[],
): Readonly<Record<string, VocabularyValueDefinition>> | undefined {
  const valueMap = document.values;
  if (!isPlainObject(valueMap) || Object.keys(valueMap).length === 0) {
    problems.push(`${fileName}: values must be a non-empty mapping`);
    return undefined;
  }
  const definitions = new Map<string, VocabularyValueDefinition>();
  for (const [value, definition] of Object.entries(valueMap)) {
    if (!TOKEN_PATTERN.test(value)) {
      problems.push(`${fileName}: values.${value} must use a lower_snake_case token`);
    }
    if (!isPlainObject(definition)) {
      problems.push(`${fileName}: values.${value} must be a mapping`);
      continue;
    }
    const description = definition.description;
    if (typeof description !== "string" || description.trim() === "") {
      problems.push(`${fileName}: values.${value}.description must be a non-empty string`);
      continue;
    }
    definitions.set(value, { ...definition, description });
  }
  return Object.fromEntries(definitions);
}

function validateDocument(
  document: YamlValue,
  fileName: string,
  problems: string[],
): VocabularyDocument | undefined {
  const initialProblemCount = problems.length;
  if (!isPlainObject(document)) {
    problems.push(`${fileName}: document must be a mapping`);
    return undefined;
  }
  for (const key of Object.keys(document)) {
    if (!DOCUMENT_KEYS.has(key)) problems.push(`${fileName}: unsupported top-level field ${key}`);
  }
  const schemaVersion = document.schema_version;
  if (schemaVersion !== 1) problems.push(`${fileName}: schema_version must be integer 1`);
  const vocab = document.vocab;
  if (typeof vocab !== "string" || !TOKEN_PATTERN.test(vocab)) {
    problems.push(`${fileName}: vocab must be a lower_snake_case token`);
  } else {
    const expectedVocab = fileName.replace(/\.yaml$/u, "").replaceAll("-", "_");
    if (vocab !== expectedVocab) {
      problems.push(`${fileName}: vocab must be ${expectedVocab}; found ${vocab}`);
    }
  }

  const values = validateValueMap(document, fileName, problems);
  if (problems.length !== initialProblemCount || schemaVersion !== 1 || typeof vocab !== "string" || !values) {
    return undefined;
  }
  return { schema_version: schemaVersion, vocab, values };
}

export class VocabularyRegistryError extends Error {
  readonly directory: string;
  readonly problems: readonly string[];

  constructor(directory: string, problems: readonly string[]) {
    super([
      `Vocabulary registry validation failed for ${directory}.`,
      ...problems.map((problem) => `- ${problem}`),
    ].join("\n"));
    this.name = "VocabularyRegistryError";
    this.directory = directory;
    this.problems = Object.freeze([...problems]);
  }
}

export function loadVocabularyRegistry(
  { directory = DEFAULT_VOCABULARY_DIRECTORY }: { directory?: string } = {},
): VocabularyRegistry {
  const resolvedDirectory = path.resolve(String(directory));
  if (!existsSync(resolvedDirectory) || !statSync(resolvedDirectory).isDirectory()) {
    throw new VocabularyRegistryError(resolvedDirectory, ["vocabulary directory does not exist"]);
  }
  const vocabularyEntries = readdirSync(resolvedDirectory, { withFileTypes: true })
    .filter((entry) => entry.name.endsWith(".yaml"))
    .sort((left, right) => (left.name < right.name ? -1 : left.name > right.name ? 1 : 0));
  if (vocabularyEntries.length === 0) {
    throw new VocabularyRegistryError(resolvedDirectory, ["no .yaml vocabulary files found"]);
  }

  const problems: string[] = [];
  const documents = new Map<string, VocabularyDocument>();
  const sourceFiles = new Map<string, string>();
  for (const entry of vocabularyEntries) {
    const fileName = entry.name;
    if (!entry.isFile()) {
      problems.push(`${fileName}: vocabulary source must be a regular file`);
      continue;
    }
    const sourceText = readFileSync(path.join(resolvedDirectory, fileName), "utf8");
    const duplicateProblems = duplicateMappingKeyProblems(sourceText);
    if (duplicateProblems.length > 0) {
      problems.push(...duplicateProblems.map((problem) => `${fileName}: ${problem}`));
      continue;
    }
    let parsedDocument: YamlValue;
    try {
      parsedDocument = parseYaml(sourceText);
    } catch (error) {
      problems.push(`${fileName}: ${error instanceof Error ? error.message : String(error)}`);
      continue;
    }
    const document = validateDocument(parsedDocument, fileName, problems);
    if (!isPlainObject(parsedDocument) || typeof parsedDocument.vocab !== "string") continue;
    const vocab = parsedDocument.vocab;
    const existingSource = sourceFiles.get(vocab);
    if (existingSource !== undefined) {
      problems.push(`${fileName}: vocab ${vocab} is already defined by ${existingSource}`);
      continue;
    }
    sourceFiles.set(vocab, fileName);
    if (document) documents.set(vocab, document);
  }
  if (problems.length > 0) throw new VocabularyRegistryError(resolvedDirectory, problems);

  const ids = Object.freeze([...documents.keys()].sort());
  for (const document of documents.values()) freezeDeep(document);
  return Object.freeze({
    directory: resolvedDirectory,
    ids,
    get(vocab: string): VocabularyDocument {
      const document = documents.get(vocab);
      if (!document) throw new Error(`Unknown vocabulary: ${vocab}`);
      return document;
    },
    sourceFile(vocab: string): string {
      const sourceFile = sourceFiles.get(vocab);
      if (!sourceFile) throw new Error(`Unknown vocabulary: ${vocab}`);
      return sourceFile;
    },
    values(vocab: string): readonly string[] {
      return Object.freeze(Object.keys(this.get(vocab).values));
    },
  });
}

export const DEFAULT_VOCABULARY_REGISTRY = loadVocabularyRegistry();

export function vocabularyValues(vocab: string): readonly string[] {
  return DEFAULT_VOCABULARY_REGISTRY.values(vocab);
}

export function vocabularyValueSet(vocab: string): Set<string> {
  return new Set(vocabularyValues(vocab));
}
