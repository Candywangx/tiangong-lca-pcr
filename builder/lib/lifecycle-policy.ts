import { unknownField, errorMessage, type UnknownRecord } from "../../packages/pcr-core/src/types.ts";
import {
  REQUIRED_PCR_LANGUAGES,
  assertPcrLanguageCode,
  declaredPcrLanguages,
} from "../../packages/pcr-core/src/languages.ts";
import {
  CONTENT_MATURITY_VALUES,
  PCR_STATUS_VALUES,
  TRANSLATION_STATUS_VALUES,
} from "./lifecycle-vocab.ts";

const SEMVER_PATTERN =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*))*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/u;
const UTC_TIMESTAMP_PATTERN =
  /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(?:\.(\d+))?Z$/u;

const STATUS_MATURITY = new Map([
  ["scaffold", new Set(["empty_scaffold"])],
  ["candidate", new Set(["draft_methodology", "authored_methodology"])],
  ["active", new Set(["reviewed_methodology"])],
  ["published", new Set(["published_methodology"])],
  ["deprecated", new Set(["deprecated_methodology"])],
]);

const STATUS_TRANSITIONS = new Map([
  ["scaffold", new Set(["scaffold", "candidate"])],
  ["candidate", new Set(["candidate", "active"])],
  ["active", new Set(["active"])],
  ["published", new Set(["published", "deprecated"])],
  ["deprecated", new Set(["deprecated"])],
]);

function isPlainObject(value: unknown): value is UnknownRecord {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function hasMeaningfulValue(value: unknown): boolean {
  if (Array.isArray(value)) {
    return value.some(hasMeaningfulValue);
  }
  if (isPlainObject(value)) {
    return Object.values(value).some(hasMeaningfulValue);
  }
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function hasNonEmptyScalar(value: unknown): boolean {
  return (
    value !== undefined &&
    value !== null &&
    !Array.isArray(value) &&
    !isPlainObject(value) &&
    String(value).trim() !== ""
  );
}

function collectReviewBlockers(value: unknown, prefix = "review_metadata"): string[] {
  if (!isPlainObject(value)) {
    return [];
  }
  const blockers: string[] = [];
  for (const [key, child] of Object.entries(value)) {
    const childPath = `${prefix}.${key}`;
    const blockerKey = /(?:^|_)(?:unresolved|blocker|blockers|blocking)(?:_|$)/iu.test(key);
    const blockedStatus = /status$/iu.test(key) && /^(?:blocked|blocking)$/iu.test(String(child ?? ""));
    if ((blockerKey || blockedStatus) && hasMeaningfulValue(child)) {
      blockers.push(childPath);
      continue;
    }
    if (isPlainObject(child)) {
      blockers.push(...collectReviewBlockers(child, childPath));
    }
  }
  return blockers;
}

export function isValidSemver(value: unknown): boolean {
  return SEMVER_PATTERN.test(String(value ?? ""));
}

export function isValidUtcTimestamp(value: unknown): boolean {
  const text = String(value ?? "");
  const match = UTC_TIMESTAMP_PATTERN.exec(text);
  if (!match) {
    return false;
  }
  const parsed = Date.parse(text);
  if (Number.isNaN(parsed)) {
    return false;
  }
  const instant = new Date(parsed);
  const [, year, month, day, hour, minute, second] = match;
  return (
    instant.getUTCFullYear() === Number(year) &&
    instant.getUTCMonth() + 1 === Number(month) &&
    instant.getUTCDate() === Number(day) &&
    instant.getUTCHours() === Number(hour) &&
    instant.getUTCMinutes() === Number(minute) &&
    instant.getUTCSeconds() === Number(second)
  );
}

export function compareSemver(left: unknown, right: unknown): number {
  const leftValue = String(left ?? "");
  const rightValue = String(right ?? "");
  const leftMatch = SEMVER_PATTERN.exec(leftValue);
  const rightMatch = SEMVER_PATTERN.exec(rightValue);

  if (!leftMatch) {
    throw new TypeError(`Cannot compare invalid semver value "${leftValue}"`);
  }
  if (!rightMatch) {
    throw new TypeError(`Cannot compare invalid semver value "${rightValue}"`);
  }

  for (const index of [1, 2, 3]) {
    const comparison = compareNumericIdentifier(group(leftMatch, index), group(rightMatch, index));
    if (comparison !== 0) {
      return comparison;
    }
  }

  const leftPrerelease = leftMatch[4];
  const rightPrerelease = rightMatch[4];
  if (leftPrerelease === undefined && rightPrerelease === undefined) {
    return 0;
  }
  if (leftPrerelease === undefined) {
    return 1;
  }
  if (rightPrerelease === undefined) {
    return -1;
  }

  const leftIdentifiers = leftPrerelease.split(".");
  const rightIdentifiers = rightPrerelease.split(".");
  const sharedLength = Math.min(leftIdentifiers.length, rightIdentifiers.length);
  for (let index = 0; index < sharedLength; index += 1) {
    const leftIdentifier = leftIdentifiers[index];
    if (leftIdentifier === undefined) throw new Error("SemVer identifier invariant failed.");
    const rightIdentifier = rightIdentifiers[index];
    if (rightIdentifier === undefined) throw new Error("SemVer identifier invariant failed.");
    const leftNumeric = /^[0-9]+$/u.test(leftIdentifier);
    const rightNumeric = /^[0-9]+$/u.test(rightIdentifier);

    if (leftNumeric && rightNumeric) {
      const comparison = compareNumericIdentifier(leftIdentifier, rightIdentifier);
      if (comparison !== 0) {
        return comparison;
      }
      continue;
    }
    if (leftNumeric !== rightNumeric) {
      return leftNumeric ? -1 : 1;
    }
    if (leftIdentifier !== rightIdentifier) {
      return leftIdentifier < rightIdentifier ? -1 : 1;
    }
  }

  return Math.sign(leftIdentifiers.length - rightIdentifiers.length);
}

function compareNumericIdentifier(left: string, right: string): number {
  if (left.length !== right.length) {
    return Math.sign(left.length - right.length);
  }
  if (left === right) {
    return 0;
  }
  return left < right ? -1 : 1;
}

export function manifestReviewBlockers(manifest: unknown): string[] {
  return collectReviewBlockers(unknownField(manifest, 'review_metadata'));
}

export function manifestIdentityProblems(manifest: unknown): string[] {
  const problems: string[] = [];
  const requireScalar = (value: unknown, field: string) => {
    if (!hasNonEmptyScalar(value)) {
      problems.push(`manifest requires non-empty ${field}`);
    }
  };

  requireScalar(unknownField(manifest, 'schema_version'), "schema_version");
  requireScalar(unknownField(manifest, 'id'), "id");
  requireScalar(unknownField(unknownField(manifest, 'title'), "en-US"), "title.en-US");
  requireScalar(unknownField(unknownField(manifest, 'title'), "zh-CN"), "title.zh-CN");
  requireScalar(unknownField(manifest, 'status'), "status");
  requireScalar(unknownField(manifest, 'pcr_kind'), "pcr_kind");
  requireScalar(unknownField(manifest, 'content_maturity'), "content_maturity");

  if (!Array.isArray(unknownField(manifest, 'target_entities')) || unknownField(unknownField(manifest, 'target_entities'), 'length') === 0) {
    problems.push("manifest requires non-empty target_entities array");
  }

  const canonicalLanguage = unknownField(unknownField(manifest, 'languages'), 'canonical');
  requireScalar(canonicalLanguage, "languages.canonical");
  if (hasNonEmptyScalar(canonicalLanguage) && canonicalLanguage !== "en-US") {
    problems.push(`languages.canonical must be "en-US"; found "${canonicalLanguage}"`);
  }
  const availableLanguages = unknownField(unknownField(manifest, 'languages'), 'available');
  if (!Array.isArray(availableLanguages) || availableLanguages.length === 0) {
    problems.push("manifest requires non-empty languages.available array");
  } else {
    for (const language of REQUIRED_PCR_LANGUAGES) {
      if (!availableLanguages.includes(language)) {
        problems.push(`languages.available must include "${language}"`);
      }
    }
    for (const language of availableLanguages) {
      if (typeof language !== "string") {
        problems.push(`languages.available entries must be language strings; found ${JSON.stringify(language)}`);
        continue;
      }
      try {
        assertPcrLanguageCode(language);
      } catch (error) {
        problems.push(errorMessage(error));
      }
    }
  }

  problems.push(...declaredLanguageProblems(manifest));
  return problems;
}

/**
 * The canonical declaration contract: every declared language carries a title
 * and a translation status, and no title or translation status is declared for
 * a language the manifest does not declare.
 */
function declaredLanguageProblems(manifest: unknown): string[] {
  let languages;
  try {
    languages = declaredPcrLanguages(manifest);
  } catch {
    // The identity checks already report a missing or malformed declaration.
    return [];
  }
  const concerns: readonly [string, unknown][] = [
    ["title", unknownField(manifest, 'title')],
    ["translation_status", unknownField(manifest, 'translation_status')],
  ];
  const problems: string[] = [];
  for (const [field, value] of concerns) {
    if (!isPlainObject(value)) {
      continue;
    }
    for (const language of Object.keys(value)) {
      if (!languages.includes(language)) {
        problems.push(`${field}.${language} is not declared in languages.available`);
      }
    }
  }
  for (const language of languages) {
    if (language === unknownField(unknownField(manifest, 'languages'), 'canonical')) {
      continue;
    }
    if (!hasNonEmptyScalar(unknownField(unknownField(manifest, 'title'), language))) {
      problems.push(`manifest requires non-empty title.${language} for declared language ${language}`);
    }
    if (!has(TRANSLATION_STATUS_VALUES, unknownField(unknownField(manifest, 'translation_status'), language))) {
      problems.push(`manifest requires translation_status.${language} for declared language ${language}`);
    }
  }
  return problems;
}

/**
 * Release gates for a published or deprecated manifest. `languages.available` is
 * the exact declared included set, so English is the canonical source and every
 * declared translation must be reviewed before it can enter an immutable
 * snapshot; the Chinese translation keeps its mandatory reviewed gate.
 */
export function manifestReleaseLanguageProblems(manifest: unknown): string[] {
  const problems: string[] = [];
  let languages;
  try {
    languages = declaredPcrLanguages(manifest);
  } catch {
    // A malformed declaration is reported by the lifecycle problems that own it.
    return [];
  }
  const translationStatus = unknownField(manifest, 'translation_status');

  if (unknownField(translationStatus, "zh-CN") !== "reviewed") {
    problems.push("status \"published\" requires translation_status.zh-CN to be reviewed");
  }
  for (const language of languages) {
    if (REQUIRED_PCR_LANGUAGES.includes(language)) {
      continue;
    }
    const status = unknownField(translationStatus, language);
    if (status === "reviewed") {
      continue;
    }
    problems.push(
      `released language ${language} requires translation_status.${language} to be reviewed; ` +
        "review the translation before publishing, or remove the language file and its declaration",
    );
  }
  return problems;
}

export function manifestLifecycleProblems(manifest: unknown): string[] {
  const problems = has(["active", "published"], unknownField(manifest, 'status'))
    ? [...manifestIdentityProblems(manifest)]
    : [];
  const status = unknownField(manifest, 'status');
  const maturity = unknownField(manifest, 'content_maturity');

  if (!has(PCR_STATUS_VALUES, status)) {
    problems.push(`invalid manifest status "${status}"`);
  }
  if (!has(CONTENT_MATURITY_VALUES, maturity)) {
    problems.push(`invalid manifest content_maturity "${maturity}"`);
  }

  const translationStatus = unknownField(manifest, 'translation_status') ?? {};
  if (isPlainObject(translationStatus)) {
    for (const [language, translation] of Object.entries(translationStatus)) {
      if (has(TRANSLATION_STATUS_VALUES, translation)) {
        continue;
      }
      // The canonical source may be marked as the canonical rendering rather
      // than pretending to be one of its own dependent translations.
      if (language === unknownField(unknownField(manifest, 'languages'), 'canonical') && translation === "canonical") {
        continue;
      }
      problems.push(`invalid translation_status.${language} "${translation}"`);
    }
  } else if (translationStatus !== null) {
    problems.push("translation_status must be a map");
  }

  if (has(PCR_STATUS_VALUES, status) && has(CONTENT_MATURITY_VALUES, maturity)) {
    const allowedMaturity = typeof status === "string" ? STATUS_MATURITY.get(status) : undefined;
    if (!(typeof maturity === "string" && allowedMaturity?.has(maturity))) {
      problems.push(
        `status "${status}" is incompatible with content_maturity "${maturity}"`,
      );
    }
  }

  if (unknownField(manifest, 'version') !== undefined && !isValidSemver(unknownField(manifest, 'version'))) {
    problems.push(`manifest version "${unknownField(manifest, 'version')}" is not valid semver`);
  }
  if (unknownField(manifest, 'updated_at_utc') !== undefined && !isValidUtcTimestamp(unknownField(manifest, 'updated_at_utc'))) {
    problems.push(`manifest updated_at_utc "${unknownField(manifest, 'updated_at_utc')}" is not a valid UTC timestamp`);
  }
  if (unknownField(manifest, 'published_at_utc') !== undefined && !isValidUtcTimestamp(unknownField(manifest, 'published_at_utc'))) {
    problems.push(`manifest published_at_utc "${unknownField(manifest, 'published_at_utc')}" is not a valid UTC timestamp`);
  }

  if (status === "active") {
    const zhStatus = unknownField(translationStatus, "zh-CN");
    if (!has(["aligned", "reviewed"], zhStatus)) {
      problems.push(
        "status \"active\" requires translation_status.zh-CN to be aligned or reviewed",
      );
    }
  }

  if (status === "published") {
    problems.push(...manifestReleaseLanguageProblems(manifest));
    if (!isValidSemver(unknownField(manifest, 'version'))) {
      problems.push("published PCR requires a valid semver version");
    }
    if (!isValidUtcTimestamp(unknownField(manifest, 'published_at_utc'))) {
      problems.push("published PCR requires a valid published_at_utc timestamp");
    }
    for (const blocker of manifestReviewBlockers(manifest)) {
      problems.push(`published PCR has unresolved review blocker at ${blocker}`);
    }
  }

  return [...new Set(problems)];
}

export function lifecycleTransitionProblems(currentManifest: unknown, nextManifest: unknown, operation = "lifecycle"): string[] {
  const problems: string[] = [];
  const currentStatus = unknownField(currentManifest, 'status');
  const nextStatus = unknownField(nextManifest, 'status');

  if (operation === "publish") {
    if (currentStatus !== "active") {
      problems.push(
        `publish requires current status "active"; found "${currentStatus}". Run lifecycle review before publishing`,
      );
    }
    if (unknownField(currentManifest, 'content_maturity') !== "reviewed_methodology") {
      problems.push(
        `publish requires current content_maturity "reviewed_methodology"; found "${unknownField(currentManifest, 'content_maturity')}"`,
      );
    }
  } else {
    if (nextStatus === "published" && currentStatus !== "published") {
      problems.push("status published can only be assigned by the publish command");
    }
    if (
      unknownField(nextManifest, 'content_maturity') === "published_methodology" &&
      unknownField(currentManifest, 'content_maturity') !== "published_methodology"
    ) {
      problems.push("content_maturity published_methodology can only be assigned by the publish command");
    }
    const allowed = typeof currentStatus === "string" ? STATUS_TRANSITIONS.get(currentStatus) : undefined;
    if (allowed && !(typeof nextStatus === "string" && allowed.has(nextStatus))) {
      problems.push(`illegal PCR status transition from "${currentStatus}" to "${nextStatus}"`);
    }
  }

  problems.push(...manifestLifecycleProblems(nextManifest));
  return [...new Set(problems)];
}

function group(match: RegExpExecArray, index: number): string { const value = match[index]; if (value === undefined) throw new Error('SemVer group invariant failed.'); return value; }
function has(values: readonly string[], value: unknown): boolean { return typeof value === 'string' && values.includes(value); }
