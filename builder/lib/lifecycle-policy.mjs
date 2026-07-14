import {
  CONTENT_MATURITY_VALUES,
  PCR_STATUS_VALUES,
  TRANSLATION_STATUS_VALUES,
} from "./lifecycle-vocab.mjs";

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

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function hasMeaningfulValue(value) {
  if (Array.isArray(value)) {
    return value.some(hasMeaningfulValue);
  }
  if (isPlainObject(value)) {
    return Object.values(value).some(hasMeaningfulValue);
  }
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function hasNonEmptyScalar(value) {
  return (
    value !== undefined &&
    value !== null &&
    !Array.isArray(value) &&
    !isPlainObject(value) &&
    String(value).trim() !== ""
  );
}

function collectReviewBlockers(value, prefix = "review_metadata") {
  if (!isPlainObject(value)) {
    return [];
  }
  const blockers = [];
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

export function isValidSemver(value) {
  return SEMVER_PATTERN.test(String(value ?? ""));
}

export function isValidUtcTimestamp(value) {
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

export function compareSemver(left, right) {
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
    const comparison = compareNumericIdentifier(leftMatch[index], rightMatch[index]);
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
    const rightIdentifier = rightIdentifiers[index];
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

function compareNumericIdentifier(left, right) {
  if (left.length !== right.length) {
    return Math.sign(left.length - right.length);
  }
  if (left === right) {
    return 0;
  }
  return left < right ? -1 : 1;
}

export function manifestReviewBlockers(manifest) {
  return collectReviewBlockers(manifest?.review_metadata);
}

export function manifestIdentityProblems(manifest) {
  const problems = [];
  const requireScalar = (value, field) => {
    if (!hasNonEmptyScalar(value)) {
      problems.push(`manifest requires non-empty ${field}`);
    }
  };

  requireScalar(manifest?.schema_version, "schema_version");
  requireScalar(manifest?.id, "id");
  requireScalar(manifest?.title?.["en-US"], "title.en-US");
  requireScalar(manifest?.title?.["zh-CN"], "title.zh-CN");
  requireScalar(manifest?.status, "status");
  requireScalar(manifest?.pcr_kind, "pcr_kind");
  requireScalar(manifest?.content_maturity, "content_maturity");

  if (!Array.isArray(manifest?.target_entities) || manifest.target_entities.length === 0) {
    problems.push("manifest requires non-empty target_entities array");
  }

  const canonicalLanguage = manifest?.languages?.canonical;
  requireScalar(canonicalLanguage, "languages.canonical");
  if (hasNonEmptyScalar(canonicalLanguage) && canonicalLanguage !== "en-US") {
    problems.push(`languages.canonical must be "en-US"; found "${canonicalLanguage}"`);
  }
  const availableLanguages = manifest?.languages?.available;
  if (!Array.isArray(availableLanguages) || availableLanguages.length === 0) {
    problems.push("manifest requires non-empty languages.available array");
  } else {
    for (const language of ["en-US", "zh-CN"]) {
      if (!availableLanguages.includes(language)) {
        problems.push(`languages.available must include "${language}"`);
      }
    }
  }

  return problems;
}

export function manifestLifecycleProblems(manifest) {
  const problems = ["active", "published"].includes(manifest?.status)
    ? [...manifestIdentityProblems(manifest)]
    : [];
  const status = manifest?.status;
  const maturity = manifest?.content_maturity;

  if (!PCR_STATUS_VALUES.includes(status)) {
    problems.push(`invalid manifest status "${status}"`);
  }
  if (!CONTENT_MATURITY_VALUES.includes(maturity)) {
    problems.push(`invalid manifest content_maturity "${maturity}"`);
  }

  const translationStatus = manifest?.translation_status ?? {};
  if (isPlainObject(translationStatus)) {
    for (const [language, translation] of Object.entries(translationStatus)) {
      if (!TRANSLATION_STATUS_VALUES.includes(translation)) {
        problems.push(`invalid translation_status.${language} "${translation}"`);
      }
    }
  } else if (translationStatus !== null) {
    problems.push("translation_status must be a map");
  }

  if (PCR_STATUS_VALUES.includes(status) && CONTENT_MATURITY_VALUES.includes(maturity)) {
    const allowedMaturity = STATUS_MATURITY.get(status);
    if (!allowedMaturity?.has(maturity)) {
      problems.push(
        `status "${status}" is incompatible with content_maturity "${maturity}"`,
      );
    }
  }

  if (manifest?.version !== undefined && !isValidSemver(manifest.version)) {
    problems.push(`manifest version "${manifest.version}" is not valid semver`);
  }
  if (manifest?.updated_at_utc !== undefined && !isValidUtcTimestamp(manifest.updated_at_utc)) {
    problems.push(`manifest updated_at_utc "${manifest.updated_at_utc}" is not a valid UTC timestamp`);
  }
  if (manifest?.published_at_utc !== undefined && !isValidUtcTimestamp(manifest.published_at_utc)) {
    problems.push(`manifest published_at_utc "${manifest.published_at_utc}" is not a valid UTC timestamp`);
  }

  if (status === "active") {
    const zhStatus = translationStatus?.["zh-CN"];
    if (!["aligned", "reviewed"].includes(zhStatus)) {
      problems.push(
        "status \"active\" requires translation_status.zh-CN to be aligned or reviewed",
      );
    }
  }

  if (status === "published") {
    if (translationStatus?.["zh-CN"] !== "reviewed") {
      problems.push("status \"published\" requires translation_status.zh-CN to be reviewed");
    }
    if (!isValidSemver(manifest?.version)) {
      problems.push("published PCR requires a valid semver version");
    }
    if (!isValidUtcTimestamp(manifest?.published_at_utc)) {
      problems.push("published PCR requires a valid published_at_utc timestamp");
    }
    for (const blocker of manifestReviewBlockers(manifest)) {
      problems.push(`published PCR has unresolved review blocker at ${blocker}`);
    }
  }

  return [...new Set(problems)];
}

export function lifecycleTransitionProblems(currentManifest, nextManifest, operation = "lifecycle") {
  const problems = [];
  const currentStatus = currentManifest?.status;
  const nextStatus = nextManifest?.status;

  if (operation === "publish") {
    if (currentStatus !== "active") {
      problems.push(
        `publish requires current status "active"; found "${currentStatus}". Run lifecycle review before publishing`,
      );
    }
    if (currentManifest?.content_maturity !== "reviewed_methodology") {
      problems.push(
        `publish requires current content_maturity "reviewed_methodology"; found "${currentManifest?.content_maturity}"`,
      );
    }
  } else {
    if (nextStatus === "published" && currentStatus !== "published") {
      problems.push("status published can only be assigned by the publish command");
    }
    if (
      nextManifest?.content_maturity === "published_methodology" &&
      currentManifest?.content_maturity !== "published_methodology"
    ) {
      problems.push("content_maturity published_methodology can only be assigned by the publish command");
    }
    const allowed = STATUS_TRANSITIONS.get(currentStatus);
    if (allowed && !allowed.has(nextStatus)) {
      problems.push(`illegal PCR status transition from "${currentStatus}" to "${nextStatus}"`);
    }
  }

  problems.push(...manifestLifecycleProblems(nextManifest));
  return [...new Set(problems)];
}
