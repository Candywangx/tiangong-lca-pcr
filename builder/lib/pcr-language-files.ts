import { unknownField, errorMessage, errorCode } from "../../packages/pcr-core/src/types.ts";
import type { ReleaseHashOptions } from "./artifact-hashes.ts";
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
} from "../../packages/pcr-core/src/languages.ts";

import { manifestReleaseArtifacts } from "./artifact-hashes.ts";
import { PCR_EN_FILE, PCR_ZH_FILE } from "./scaffold-templates.ts";

export interface PcrLanguageFile { language: string; fileName: string; filePath: string; bytes?: Buffer; text?: string }
export interface ResolvedPcrLanguages {
  declared: string[]; present: string[]; absent: string[]; required: PcrLanguageFile[]; optional: PcrLanguageFile[];
  languageFiles: Map<string, PcrLanguageFile>; undeclaredFiles: string[]; unreadableFiles: string[]; problems: string[];
}

export const PCR_LANGUAGE_MARKDOWN_PATTERN = /^pcr\.([a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*)\.md$/u;
export const PCR_MARKDOWN_FILE_PATTERN = /^pcr\.[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*\.md$/u;

/** `pcr.de-DE.md` -> `de-DE`; anything else -> null. */
export function pcrLanguageFromMarkdownFile(fileName: unknown): string | null {
  const match = PCR_LANGUAGE_MARKDOWN_PATTERN.exec(String(fileName ?? ""));
  return match?.[1] ?? null;
}

/** Languages that are optional: declared canonical but not one of the two required languages. */
export function optionalPcrLanguages(manifest: unknown): string[] {
  return declaredPcrLanguages(manifest).filter(
    (language) => !REQUIRED_PCR_LANGUAGES.includes(language),
  );
}

/** Canonical ordering: required languages first, then declared optional languages in declaration order. */
export function orderedPcrLanguages(languages: readonly string[]): string[] {
  const unique = [...new Set(languages)];
  const required = REQUIRED_PCR_LANGUAGES.filter((language) => unique.includes(language));
  return [...required, ...unique.filter((language) => !required.includes(language))];
}

function readLanguageFile(filePath: string): {bytes: Buffer; text: string} {
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
export function resolvePcrLanguageFiles({ manifest, directory, displayRoot = null }: { manifest: unknown; directory: string; displayRoot?: string | null }): ResolvedPcrLanguages {
  const locateTarget = (target: string) =>
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
      problems: [`${locateTarget(path.join(directory, "manifest.yaml"))}: ${errorMessage(error)}`],
    };
  }
  const requiredPresent = new Map<string, PcrLanguageFile>();
  const optionalPresent = new Map<string, PcrLanguageFile>();
  const problems: string[] = [];
  const unreadableFiles: string[] = [];
  const locate = (target: string) =>
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
        `${locate(filePath)}: PCR language Markdown could not be read (${errorCode(error) === "UNKNOWN" ? errorMessage(error) : errorCode(error)})`,
      );
      unreadableFiles.push(fileName);
      continue;
    }
    const target = requiredPresent.get(language) ?? optionalPresent.get(language);
    if (!target) throw new Error("Resolved language file invariant failed.");
    Object.assign(target, artifact);
  }

  const undeclaredFiles: string[] = [];
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
    required: REQUIRED_PCR_LANGUAGES.map((language) => requiredPresent.get(language)).filter((file): file is PcrLanguageFile => file !== undefined),
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
export function outOfSyncTranslationStatus(manifest: unknown): Record<string, unknown> {
  const canonical = unknownField(unknownField(manifest, "languages"), "canonical") ?? "en-US";
  const original: unknown = unknownField(manifest, "translation_status") ?? {};
  const entries: [string, unknown][] = Object.entries(Object(original));
  const status: Record<string, unknown> = Object.fromEntries(entries);
  for (const language of declaredPcrLanguages(manifest)) {
    if (language === canonical) {
      continue;
    }
    status[language] = "out_of_sync";
  }
  return status;
}

/** The current-workspace fingerprints matching a language file set: v1 for exactly the two required languages, v2 otherwise. */
export function currentReleaseArtifacts({ languages, languageFiles, structuredBytes, structuredText }: { languages: readonly string[]; languageFiles: ReadonlyMap<string, Pick<PcrLanguageFile, "bytes" | "text">> } & Pick<ReleaseHashOptions, "structuredBytes" | "structuredText">) {
  const twoLanguage =
    languages.length === REQUIRED_PCR_LANGUAGES.length &&
    REQUIRED_PCR_LANGUAGES.every((language) => languages.includes(language));
  if (twoLanguage) {
    return manifestReleaseArtifacts({
      englishBytes: requiredBytes(languageFiles, "en-US"),
      chineseBytes: requiredBytes(languageFiles, "zh-CN"),
      ...(structuredBytes === undefined ? {} : {structuredBytes}),
      ...(structuredText === undefined ? {} : {structuredText}),
    });
  }
  return manifestReleaseArtifacts({
    markdownSha256ByLanguage: Object.fromEntries(
      languages.map((language) => [language, requiredBytes(languageFiles, language)]),
    ),
    ...(structuredBytes === undefined ? {} : {structuredBytes}),
    ...(structuredText === undefined ? {} : {structuredText}),
  });
}

export { PCR_EN_FILE, PCR_ZH_FILE, assertPcrLanguageCode, declaredPcrLanguages };

function requiredBytes(files: ReadonlyMap<string, Pick<PcrLanguageFile, "bytes" | "text">>, language: string): Buffer {
  const file = files.get(language);
  if (!file?.bytes) throw new TypeError(`Missing release artifact bytes for ${language}.`);
  return file.bytes;
}
