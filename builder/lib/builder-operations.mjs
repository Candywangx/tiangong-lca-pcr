import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  lstatSync,
  mkdirSync,
  openSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { MODULE_EN_FILE, MODULE_ZH_FILE, PCR_EN_FILE, PCR_ZH_FILE, pcrManifest, pcrMarkdown, structuredYaml } from "./scaffold-templates.mjs";
import { REQUIRED_DIRS } from "./builder-constants.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(__dirname, "../..");

function rootFromOptions(options) {
  const resolved = path.resolve(String(options.root ?? defaultRoot));
  let stats = lstatSync(resolved, { throwIfNoEntry: false });
  if (!stats) {
    mkdirSync(resolved, { recursive: true, mode: 0o755 });
    stats = lstatSync(resolved);
  }
  const root = realpathSync(resolved);
  if (!lstatSync(root).isDirectory()) {
    throw new Error(`PCR repository root is not a directory: ${root}`);
  }
  return root;
}

function ensureDir(root, relativePath) {
  const segments = relativePath.split("/");
  let current = root;
  for (const segment of segments) {
    current = path.join(current, segment);
    let stats = lstatSync(current, { throwIfNoEntry: false });
    if (!stats) {
      try {
        mkdirSync(current, { mode: 0o755 });
      } catch (error) {
        if (error?.code !== "EEXIST") {
          throw error;
        }
      }
      stats = lstatSync(current, { throwIfNoEntry: false });
    }
    if (!stats?.isDirectory() || stats.isSymbolicLink()) {
      throw new Error(`PCR scaffold path is not a safe directory: ${relativePath}`);
    }
  }
  return current;
}

function writeIfMissing(root, relativePath, content) {
  const portablePath = relativePath.split(path.sep).join("/");
  if (
    path.posix.isAbsolute(portablePath)
    || path.posix.normalize(portablePath) !== portablePath
    || portablePath.includes("\\")
  ) {
    throw new Error(`Invalid PCR scaffold path: ${relativePath}`);
  }
  const parent = ensureDir(root, path.posix.dirname(portablePath));
  const target = path.join(root, relativePath);
  const existing = lstatSync(target, { throwIfNoEntry: false });
  if (existing) {
    if (!existing.isFile() || existing.isSymbolicLink()) {
      throw new Error(`PCR scaffold target is not a safe regular file: ${relativePath}`);
    }
    return false;
  }
  let descriptor;
  try {
    descriptor = openSync(
      path.join(parent, path.basename(target)),
      fsConstants.O_WRONLY
        | fsConstants.O_CREAT
        | fsConstants.O_EXCL
        | (fsConstants.O_NOFOLLOW ?? 0),
      0o644,
    );
    if (!fstatSync(descriptor).isFile()) {
      throw new Error(`PCR scaffold target is not a regular file: ${relativePath}`);
    }
    writeFileSync(descriptor, content);
    return true;
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }
}

function normalizeSlug(value) {
  const slug = String(value ?? "")
    .trim()
    .replace(/^\/+|\/+$/gu, "")
    .replaceAll("\\", "/")
    .replace(/\/{2,}/gu, "/");
  const segments = slug.split("/");
  if (
    segments.length !== 3
    || segments.some((segment) => !/^[a-z0-9][a-z0-9-]*$/u.test(segment))
    || path.posix.normalize(slug) !== slug
  ) {
    throw new Error(
      "--sample-pcr must be a safe <domain>/<subdomain>/<pcr-slug> path using lowercase letters, digits, and hyphens",
    );
  }
  return slug;
}

export function init(options) {
  const root = rootFromOptions(options);
  const sampleSlug = options["sample-pcr"] ? normalizeSlug(options["sample-pcr"]) : null;
  for (const dir of REQUIRED_DIRS) {
    ensureDir(root, dir);
  }

  const emptyAliasRegistry = `schema_version: 1
registry_kind: legacy-pcr-id-aliases
status: current
aliases: []
`;
  const emptyAliasRegistrySha256 =
    `sha256:${createHash("sha256").update(emptyAliasRegistry).digest("hex")}`;

  writeIfMissing(
    root,
    "library/catalog.yaml",
    `schema_version: 1
catalog_status: scaffold
pcr_index: library/indexes/pcr-index.yaml
pcr_id_aliases:
  path: classifications/aliases/pcr-id-aliases.yaml
  hash_mode: exact_bytes
  sha256: ${emptyAliasRegistrySha256}
  entry_count: 0
classification_mappings: []
notes:
  - Canonical PCR ids are independent from classification codes.
  - Add deterministic classification mapping files as they become available.
`,
  );

  writeIfMissing(
    root,
    "classifications/aliases/pcr-id-aliases.yaml",
    emptyAliasRegistry,
  );

  writeIfMissing(
    root,
    "library/pcrs/README.md",
    `# PCR Records

Each canonical PCR is represented as a directory:

\`\`\`text
library/pcrs/<domain>/<subdomain>/<pcr-slug>/
  manifest.yaml
  ${PCR_EN_FILE}
  ${PCR_ZH_FILE}
  structured.yaml
\`\`\`

The PCR directory is the stable identity boundary. Classification systems map to PCR ids through \`classifications/mappings/\`.
`,
  );

  writeIfMissing(
    root,
    "library/modules/README.md",
    `# PCR Method Modules

Reusable modules use the same directory pattern when localized:

\`\`\`text
library/modules/<group>/<module-slug>/
  manifest.yaml
  ${MODULE_EN_FILE}
  ${MODULE_ZH_FILE}
  structured.yaml
\`\`\`
`,
  );

  writeIfMissing(
    root,
    "builder/README.md",
    `# PCR Library Builder

Human and agent documentation lives under \`builder/docs/\`. Machine-facing builder assets such as CLI, scripts, schemas, templates, and vocabularies stay directly under \`builder/\`.

## Builder CLI

\`\`\`bash
node builder/cli/index.mjs init
node builder/cli/index.mjs lint
\`\`\`

\`init\` creates the expected scaffold directories and optional PCR scaffold records. \`lint\` validates the repository structure.
`,
  );

  writeIfMissing(
    root,
    "builder/docs/index.md",
    `# Builder Documentation Index

Use this index to route to the smallest relevant builder documentation for the current task.

- \`workflows/\`: PCR create, update, translate, review, and publish workflows.
- \`contracts/\`: Markdown, manifest, structured projection, evidence, and UUID contracts.
- \`methods/\`: reusable modelling method notes.
- \`tools/\`: authoring-time tool and source guidance.
- \`prompts/\`: thin agent prompt entrypoints.
`,
  );

  if (sampleSlug) {
    const sampleRoot = path.join("library/pcrs", sampleSlug);
    writeIfMissing(root, path.join(sampleRoot, "manifest.yaml"), pcrManifest(options));
    writeIfMissing(root, path.join(sampleRoot, PCR_EN_FILE), pcrMarkdown(options, "en-US"));
    writeIfMissing(root, path.join(sampleRoot, PCR_ZH_FILE), pcrMarkdown(options, "zh-CN"));
    writeIfMissing(root, path.join(sampleRoot, "structured.yaml"), structuredYaml());
  }

  return [`Initialized PCR library scaffold at ${root}`];
}
