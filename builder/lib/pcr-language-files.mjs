/**
 * Optional PCR language artifacts.
 *
 * `en-US` and `zh-CN` are always required and keep the legacy v1 hash fields.
 * Any other canonical BCP 47 language is optional: it is declared in
 * `manifest.languages.available` and materializes as a sibling
 * `pcr.<language>.md`. Because the declaration is the exact included language
 * set, a declared language whose file is missing fails; every present language
 * file is validated, hashed, and copied by exact bytes, and a present file that
 * is not declared fails too. Undeclared locales never affect the required
 * languages.
 */

import {
  existsSync,
  lstatSync,
  readdirSync,
  readFileSync,
} from "node:fs";
import path from "node:path";

import {
  REQUIRED_PCR_LANGUAGES,
  assertPcrLanguageCode,
  declaredPcrLanguages,
  pcrMarkdownFile,
} from "../../packages/pcr-core/src/languages.mjs";

import { manifestReleaseArtifacts } from "./artifact-hashes.mjs";
import { PCR_EN_FILE, PCR_ZH_FILE } from "./scaffold-templates.mjs";

export const PCR_LANGUAGE_MARKDOWN_PATTERN = /^pcr\.([a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*)\.md$/u;
export const PCR_MARKDOWN_FILE_PATTERN = /^pcr\.[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*\.md$/u;

/** `pcr.de-DE.md` -> `de-DE`; anything else -> null. */
export function pcrLanguageFromMarkdownFile(fileName) {
  const match = PCR_LANGUAGE_MARKDOWN_PATTERN.exec(String(fileName ?? ""));
  return match ? match[1] : null;
}

/** Languages that are optional: declared canonical but not one of the two required languages. */
export function optionalPcrLanguages(manifest) {
  return declaredPcrLanguages(manifest).filter(
    (language) => !REQUIRED_PCR_LANGUAGES.includes(language),
  );
}

/** Canonical ordering: required languages first, then declared optional languages in declaration order. */
export function orderedPcrLanguages(languages) {
  const unique = [...new Set(languages)];
  const required = REQUIRED_PCR_LANGUAGES.filter((language) => unique.includes(language));
  return [...required, ...unique.filter((language) => !required.includes(language))];
}

function readLanguageFile(filePath) {
  const bytes = readFileSync(filePath);
  return { bytes, text: new TextDecoder("utf-8", { fatal: true }).decode(bytes) };
}

/**
 * Resolves the language Markdown files of one PCR workspace directory against
 * the languages its manifest declares.
 *
 * `languages.available` is the exact declared included set: every declared
 * language must have its `pcr.<language>.md` file, so `required` lists en-US and
 * zh-CN and `optional` lists the declared optional files. A declared language
 * without a file is a problem rather than an omission, and a present language
 * file that is not declared is a problem too. Structural findings — a declared
 * language with no file, an undeclared language file, malformed names,
 * non-regular files, unreadable or non-UTF-8 content — are returned for the
 * caller to report.
 */
export function resolvePcrLanguageFiles({ manifest, directory, displayRoot = null }) {
  const locateTarget = (target) =>
    displayRoot ? path.relative(displayRoot, target).replaceAll(path.sep, "/") : target;
  let declared;
  try {
    declared = declaredPcrLanguages(manifest);
  } catch (error) {
    // The manifest owns its declaration error; language resolution simply
    // reports it instead of turning inspection into an unhandled failure.
    return {
      declared: [],
      present: [],
      absent: [],
      required: [],
      optional: [],
      languageFiles: new Map(),
      undeclaredFiles: [],
      unreadableFiles: [],
      problems: [`${locateTarget(path.join(directory, "manifest.yaml"))}: ${error.message}`],
    };
  }
  const requiredPresent = new Map();
  const optionalPresent = new Map();
  const problems = [];
  const unreadableFiles = [];
  const locate = (target) =>
    displayRoot
      ? path.relative(displayRoot, target).replaceAll(path.sep, "/")
      : target;

  for (const language of declared) {
    const filePath = path.join(directory, pcrMarkdownFile(language));
    const fileName = path.basename(filePath);
    if (!existsSync(filePath)) {
      continue;
    }
    const stats = lstatSync(filePath);
    if (stats.isSymbolicLink() || !stats.isFile()) {
      problems.push(
        `${locate(filePath)}: PCR language Markdown must be a regular file and must not be a symbolic link`,
      );
      continue;
    }
    // A present language file is part of the record even when it cannot be
    // read: reporting it keeps the file set exact instead of silently dropping it.
    if (REQUIRED_PCR_LANGUAGES.includes(language)) {
      requiredPresent.set(language, { language, fileName, filePath });
    } else {
      optionalPresent.set(language, { language, fileName, filePath });
    }
    let artifact;
    try {
      artifact = readLanguageFile(filePath);
    } catch (error) {
      problems.push(
        `${locate(filePath)}: PCR language Markdown could not be read (${error.code ?? error.message})`,
      );
      unreadableFiles.push(fileName);
      continue;
    }
    Object.assign(requiredPresent.get(language) ?? optionalPresent.get(language), artifact);
  }

  const undeclaredFiles = [];
  for (const name of readdirSync(directory).sort()) {
    const language = pcrLanguageFromMarkdownFile(name);
    if (language === null && /^pcr\..*\.md$/u.test(name)) {
      problems.push(`${locate(path.join(directory, name))}: malformed PCR language filename`);
    }
    if (language === null || declared.includes(language)) {
      continue;
    }
    const problem =
      `${locate(path.join(directory, name))}: language Markdown file is not declared in manifest.languages.available`;
    undeclaredFiles.push(problem);
    problems.push(problem);
  }

  const present = [
    ...REQUIRED_PCR_LANGUAGES.filter((language) => requiredPresent.has(language)),
    ...optionalPresent.keys(),
  ];
  const absent = declared.filter((language) => !present.includes(language));
  for (const language of absent) {
    problems.push(
      `${locate(path.join(directory, pcrMarkdownFile(language)))}: declared language Markdown file is missing; ` +
        `manifest.languages.available declares ${language}, so its file is required, or remove the declaration`,
    );
  }

  return {
    declared,
    present,
    absent,
    required: REQUIRED_PCR_LANGUAGES.map((language) => requiredPresent.get(language)).filter(Boolean),
    optional: [...optionalPresent.values()],
    languageFiles: new Map([
      ...requiredPresent,
      ...optionalPresent,
    ]),
    undeclaredFiles,
    unreadableFiles,
    problems,
  };
}

/** Marks every non-canonical declared language out of sync after the canonical source changes. */
export function outOfSyncTranslationStatus(manifest) {
  const canonical = manifest.languages?.canonical ?? "en-US";
  const status = { ...(manifest.translation_status ?? {}) };
  for (const language of declaredPcrLanguages(manifest)) {
    if (language === canonical) {
      continue;
    }
    status[language] = "out_of_sync";
  }
  return status;
}

/** The current-workspace fingerprints matching a language file set: v1 for exactly the two required languages, v2 otherwise. */
export function currentReleaseArtifacts({ languages, languageFiles, structuredBytes, structuredText }) {
  const twoLanguage =
    languages.length === REQUIRED_PCR_LANGUAGES.length &&
    REQUIRED_PCR_LANGUAGES.every((language) => languages.includes(language));
  if (twoLanguage) {
    return manifestReleaseArtifacts({
      englishBytes: languageFiles.get("en-US").bytes,
      chineseBytes: languageFiles.get("zh-CN").bytes,
      structuredBytes,
      structuredText,
    });
  }
  return manifestReleaseArtifacts({
    markdownSha256ByLanguage: Object.fromEntries(
      languages.map((language) => [language, languageFiles.get(language).bytes]),
    ),
    structuredBytes,
    structuredText,
  });
}

export { PCR_EN_FILE, PCR_ZH_FILE, assertPcrLanguageCode, declaredPcrLanguages };
