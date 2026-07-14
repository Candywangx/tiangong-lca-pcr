import {
  existsSync,
  readFileSync,
  realpathSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  CONTENT_MATURITY_VALUES,
  PCR_STATUS_VALUES,
  TRANSLATION_STATUS_VALUES,
  formatOneOf,
} from "./lifecycle-vocab.mjs";
import { inspectPcrDirectory } from "./lint-rules.mjs";
import {
  isValidSemver,
  lifecycleTransitionProblems,
  manifestReviewBlockers,
} from "./lifecycle-policy.mjs";
import { parsePcrMarkdownToStructured, structuredProjectionYaml } from "./markdown-projection.mjs";
import { PCR_EN_FILE } from "./scaffold-templates.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(__dirname, "../..");

function rootFromOptions(options) {
  return path.resolve(String(options.root ?? defaultRoot));
}

function toRepoRelative(root, absolutePath) {
  return path.relative(root, absolutePath).replaceAll(path.sep, "/");
}

function isStrictDescendant(parent, candidate) {
  const relative = path.relative(parent, candidate);
  return relative !== "" && relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

function pcrDirectoryFromOptions(root, options) {
  const pcr = options.pcr ? String(options.pcr).trim() : null;
  if (!pcr) {
    throw new Error("Missing required --pcr <library/pcrs/...> option.");
  }
  const candidate = path.resolve(root, pcr);
  const pcrRoot = path.resolve(root, "library/pcrs");
  if (!isStrictDescendant(pcrRoot, candidate)) {
    throw new Error(
      `PCR path must be inside ${toRepoRelative(root, pcrRoot)}/; received ${pcr}.`,
    );
  }
  if (!existsSync(candidate)) {
    throw new Error(`PCR directory not found: ${candidate}`);
  }
  if (!statSync(candidate).isDirectory()) {
    throw new Error(`PCR path is not a directory: ${candidate}`);
  }
  const realRoot = realpathSync(root);
  const realPcrRoot = realpathSync(pcrRoot);
  if (!isStrictDescendant(realRoot, realPcrRoot)) {
    throw new Error(
      `PCR root must resolve inside repository root; ${toRepoRelative(root, pcrRoot)} resolves to ${realPcrRoot}.`,
    );
  }
  if (!isStrictDescendant(realPcrRoot, realpathSync(candidate))) {
    throw new Error(`PCR directory resolves outside ${toRepoRelative(root, pcrRoot)}/: ${candidate}`);
  }
  return candidate;
}

function atomicWrite(filePath, content) {
  const tempPath = path.join(
    path.dirname(filePath),
    `.${path.basename(filePath)}.${process.pid}.${Date.now()}.tmp`,
  );
  try {
    writeFileSync(tempPath, content, { flag: "wx" });
    renameSync(tempPath, filePath);
  } finally {
    rmSync(tempPath, { force: true });
  }
}

function publicationPreflightError(root, pcrDir, problems) {
  return new Error(
    [
      `PCR publication preflight failed for ${toRepoRelative(root, pcrDir)}.`,
      ...problems.map((problem) => `- ${problem}`),
      "",
      "Next:",
      "- Resolve every finding, run `npm run validate`, then retry the publish command.",
    ].join("\n"),
  );
}

export function syncStructured(options) {
  const root = rootFromOptions(options);
  const pcrDir = pcrDirectoryFromOptions(root, options);
  const markdownPath = path.join(pcrDir, PCR_EN_FILE);
  if (!existsSync(markdownPath)) {
    throw new Error(`Missing canonical markdown file: ${markdownPath}`);
  }
  const markdown = readFileSync(markdownPath, "utf8");
  const projection = parsePcrMarkdownToStructured(markdown);
  atomicWrite(
    path.join(pcrDir, "structured.yaml"),
    structuredProjectionYaml(projection, { sourceMarkdown: markdown }),
  );
  return [`Synced structured PCR from ${toRepoRelative(root, markdownPath)}.`];
}

function readManifest(root, pcrDir) {
  const manifestPath = path.join(pcrDir, "manifest.yaml");
  if (!existsSync(manifestPath)) {
    throw new Error(`Missing manifest file: ${toRepoRelative(root, manifestPath)}`);
  }
  return { manifestPath, text: readFileSync(manifestPath, "utf8") };
}

function requireAllowedOption(options, key, values) {
  const value = options[key];
  if (value === undefined) {
    return null;
  }
  const normalized = String(value);
  if (!values.includes(normalized)) {
    throw new Error(`--${key} must be one of ${formatOneOf(values)}.`);
  }
  return normalized;
}

function parseTranslationOption(value) {
  if (value === undefined) {
    return null;
  }
  const raw = String(value);
  const separatorIndex = raw.indexOf("=");
  if (separatorIndex <= 0 || separatorIndex === raw.length - 1) {
    throw new Error("--translation must use <language>=<status>, for example zh-CN=aligned.");
  }
  const language = raw.slice(0, separatorIndex).trim();
  const status = raw.slice(separatorIndex + 1).trim();
  if (!language) {
    throw new Error("--translation language must not be empty.");
  }
  if (!TRANSLATION_STATUS_VALUES.includes(status)) {
    throw new Error(`--translation status must be one of ${formatOneOf(TRANSLATION_STATUS_VALUES)}.`);
  }
  return { language, status };
}

function incrementVersion(current, level) {
  if (current !== null && current !== undefined && !isValidSemver(current)) {
    throw new Error(
      `Cannot bump invalid manifest version "${current}"; use a valid semver version before retrying.`,
    );
  }
  const match = String(current ?? "0.0.0").match(/^(\d+)\.(\d+)\.(\d+)/u);
  const [majorValue, minorValue, patchValue] = match.slice(1).map(Number);
  let [major, minor, patch] = [majorValue, minorValue, patchValue];
  if (level === "major") {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (level === "minor") {
    minor += 1;
    patch = 0;
  } else {
    patch += 1;
  }
  return `${major}.${minor}.${patch}`;
}

export function bump(options) {
  const level = String(options.level ?? "patch");
  if (!["major", "minor", "patch"].includes(level)) {
    throw new Error("--level must be one of major, minor, or patch.");
  }
  const root = rootFromOptions(options);
  const pcrDir = pcrDirectoryFromOptions(root, options);
  const { manifestPath, text } = readManifest(root, pcrDir);
  const manifest = parseYaml(text);
  if (
    ["published", "deprecated"].includes(manifest.status) ||
    ["published_methodology", "deprecated_methodology"].includes(manifest.content_maturity)
  ) {
    throw new Error(
      [
        `Cannot bump ${manifest.status}/${manifest.content_maturity} PCR in place at ${toRepoRelative(root, manifestPath)}.`,
        "",
        "Next:",
        "- Reopen the PCR through the revision workflow before assigning a new version.",
        "- The published revision contract is defined, but its workflow is not implemented; do not mutate this published or deprecated record in place.",
      ].join("\n"),
    );
  }
  const now = new Date().toISOString();
  manifest.version = incrementVersion(manifest.version, level);
  manifest.updated_at_utc = now;
  atomicWrite(manifestPath, renderYaml(manifest));
  return [`Updated PCR manifest version at ${toRepoRelative(root, manifestPath)}.`];
}

export function publish(options) {
  const root = rootFromOptions(options);
  const pcrDir = pcrDirectoryFromOptions(root, options);
  const { manifestPath, text } = readManifest(root, pcrDir);
  const currentManifest = parseYaml(text);
  const version = String(options.version ?? currentManifest.version ?? "");
  const preflightProblems = [];
  if (!isValidSemver(version)) {
    preflightProblems.push(
      `--version must be valid semver (for example 1.0.0); received "${version || "(missing)"}"`,
    );
  }
  for (const blocker of manifestReviewBlockers(currentManifest)) {
    preflightProblems.push(`unresolved review blocker at ${blocker}`);
  }

  const markdownPath = path.join(pcrDir, PCR_EN_FILE);
  if (!existsSync(markdownPath)) {
    preflightProblems.push(`missing canonical markdown file: ${toRepoRelative(root, markdownPath)}`);
    throw publicationPreflightError(root, pcrDir, preflightProblems);
  }
  const markdown = readFileSync(markdownPath, "utf8");
  const projection = parsePcrMarkdownToStructured(markdown);
  const structuredText = structuredProjectionYaml(projection, { sourceMarkdown: markdown });
  const now = new Date().toISOString();
  const nextManifest = {
    ...currentManifest,
    status: "published",
    content_maturity: "published_methodology",
    version,
    published_at_utc: now,
    updated_at_utc: now,
  };
  preflightProblems.push(...lifecycleTransitionProblems(currentManifest, nextManifest, "publish"));

  const nextManifestText = renderYaml(nextManifest);
  const inspection = inspectPcrDirectory({
    root,
    pcrDir,
    manifestText: nextManifestText,
    structuredText,
    checkManifestLifecycle: false,
    checkBilingualRuleAlignment: true,
  });
  preflightProblems.push(...inspection.problems);
  if (preflightProblems.length > 0) {
    throw publicationPreflightError(root, pcrDir, [...new Set(preflightProblems)]);
  }

  const structuredPath = path.join(pcrDir, "structured.yaml");
  const previousStructured = readFileSync(structuredPath, "utf8");
  atomicWrite(structuredPath, structuredText);
  try {
    atomicWrite(manifestPath, nextManifestText);
  } catch (error) {
    atomicWrite(structuredPath, previousStructured);
    throw error;
  }

  return [
    `Synced structured PCR from ${toRepoRelative(root, markdownPath)}.`,
    `Published PCR manifest at ${toRepoRelative(root, manifestPath)}.`,
  ];
}

export function lifecycle(options) {
  const status = requireAllowedOption(options, "status", PCR_STATUS_VALUES);
  const contentMaturity = requireAllowedOption(options, "content-maturity", CONTENT_MATURITY_VALUES);
  const translation = parseTranslationOption(options.translation);
  if (!status && !contentMaturity && !translation) {
    throw new Error("Provide at least one lifecycle change: --status, --content-maturity, or --translation.");
  }

  const now = new Date().toISOString();
  const root = rootFromOptions(options);
  const pcrDir = pcrDirectoryFromOptions(root, options);
  const { manifestPath, text } = readManifest(root, pcrDir);
  const currentManifest = parseYaml(text);
  const manifest = structuredClone(currentManifest);
  const changed = [];

  if (status) {
    manifest.status = status;
    changed.push(`status: ${status}`);
  }
  if (contentMaturity) {
    manifest.content_maturity = contentMaturity;
    changed.push(`content_maturity: ${contentMaturity}`);
  }
  if (translation) {
    manifest.translation_status = manifest.translation_status && typeof manifest.translation_status === "object"
      ? manifest.translation_status
      : {};
    manifest.translation_status[translation.language] = translation.status;
    changed.push(`translation_status.${translation.language}: ${translation.status}`);
  }
  manifest.updated_at_utc = now;

  const transitionProblems = lifecycleTransitionProblems(currentManifest, manifest);
  if (transitionProblems.length > 0) {
    throw new Error(
      [
        `PCR lifecycle update rejected for ${toRepoRelative(root, pcrDir)}.`,
        ...transitionProblems.map((problem) => `- ${problem}`),
      ].join("\n"),
    );
  }

  if (manifest.status === "active") {
    const inspection = inspectPcrDirectory({
      root,
      pcrDir,
      manifestText: renderYaml(manifest),
      checkManifestLifecycle: false,
    });
    if (inspection.problems.length > 0) {
      throw new Error(
        [
          `PCR lifecycle review preflight failed for ${toRepoRelative(root, pcrDir)}.`,
          ...inspection.problems.map((problem) => `- ${problem}`),
          "",
          "Next:",
          "- Resolve every finding and sync structured.yaml before marking the PCR active.",
        ].join("\n"),
      );
    }
  }

  atomicWrite(manifestPath, renderYaml(manifest));
  return [
    `Updated PCR lifecycle at ${toRepoRelative(root, manifestPath)}.`,
    "",
    "Summary:",
    ...changed.map((entry) => `- ${entry}`),
    `- updated_at_utc: ${now}`,
    "",
    "Next:",
    "- Run `npm run validate` before committing lifecycle changes.",
    `- If publication-ready, run \`npm run pcr:publish -- --pcr ${toRepoRelative(root, pcrDir)} --version <semver>\`.`,
  ];
}
