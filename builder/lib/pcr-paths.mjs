import { existsSync, lstatSync, realpathSync } from "node:fs";
import path from "node:path";

export const PCR_WORKSPACES = Object.freeze(["current", "revision"]);

const WORKSPACE_MANIFEST = Object.freeze({
  current: "manifest.yaml",
  revision: "manifest.next.yaml",
});

export class PcrPathError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "PcrPathError";
    this.code = code;
  }
}

function fail(code, message) {
  throw new PcrPathError(code, message);
}

function isInside(parent, candidate, { allowEqual = false } = {}) {
  const relative = path.relative(parent, candidate);
  if (relative === "") {
    return allowEqual;
  }
  return relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

function slashPath(value) {
  return value.replaceAll(path.sep, "/");
}

function rejectTraversalSyntax(rawPcr) {
  const segments = rawPcr.split(/[\\/]/u);
  if (segments.some((segment) => segment === "." || segment === "..")) {
    fail("PCR_PATH_TRAVERSAL", `PCR path must not contain . or .. segments: ${rawPcr}`);
  }
}

function requirePlainDirectory(target, label) {
  let entry;
  try {
    entry = lstatSync(target);
  } catch (error) {
    if (error?.code === "ENOENT") {
      fail("PCR_PATH_NOT_FOUND", `${label} does not exist: ${target}`);
    }
    throw error;
  }
  if (entry.isSymbolicLink()) {
    fail("PCR_PATH_SYMLINK", `${label} must not be a symbolic link: ${target}`);
  }
  if (!entry.isDirectory()) {
    fail("PCR_PATH_NOT_DIRECTORY", `${label} must be a directory: ${target}`);
  }
}

function requirePlainFile(target, label) {
  let entry;
  try {
    entry = lstatSync(target);
  } catch (error) {
    if (error?.code === "ENOENT") {
      fail("PCR_MANIFEST_NOT_FOUND", `${label} does not exist: ${target}`);
    }
    throw error;
  }
  if (entry.isSymbolicLink()) {
    fail("PCR_PATH_SYMLINK", `${label} must not be a symbolic link: ${target}`);
  }
  if (!entry.isFile()) {
    fail("PCR_MANIFEST_NOT_FILE", `${label} must be a regular file: ${target}`);
  }
}

function realpathInside(parent, target, label, { allowEqual = false } = {}) {
  const realParent = realpathSync(parent);
  const realTarget = realpathSync(target);
  if (!isInside(realParent, realTarget, { allowEqual })) {
    fail("PCR_PATH_ESCAPE", `${label} resolves outside ${parent}: ${target} -> ${realTarget}`);
  }
  return { realParent, realTarget };
}

function lexicalIdentity(rootValue, pcrValue) {
  const root = path.resolve(String(rootValue));
  const rawPcr = String(pcrValue ?? "").trim();
  if (!rawPcr) {
    fail("PCR_PATH_REQUIRED", "A PCR path is required.");
  }
  rejectTraversalSyntax(rawPcr);

  const pcrRoot = path.join(root, "library", "pcrs");
  requirePlainDirectory(root, "Repository root");
  requirePlainDirectory(path.join(root, "library"), "Library directory");
  requirePlainDirectory(pcrRoot, "PCR root");

  const rootRealpath = realpathSync(root);
  const pcrRootRealpath = realpathSync(pcrRoot);
  if (!isInside(rootRealpath, pcrRootRealpath)) {
    fail("PCR_ROOT_ESCAPE", `PCR root resolves outside repository root: ${pcrRootRealpath}`);
  }

  const candidate = path.isAbsolute(rawPcr) ? path.resolve(rawPcr) : path.resolve(root, rawPcr);
  if (!isInside(pcrRoot, candidate)) {
    fail("PCR_PATH_OUTSIDE_ROOT", `PCR path must be inside ${pcrRoot}: ${rawPcr}`);
  }
  const relativePcrPath = slashPath(path.relative(pcrRoot, candidate));
  const segments = relativePcrPath.split("/");
  if (segments.length !== 3 || segments.some((segment) => segment.length === 0)) {
    fail(
      "PCR_PATH_NOT_CANONICAL_LEAF",
      `PCR path must be exactly <domain>/<subdomain>/<slug> below ${pcrRoot}: ${rawPcr}`,
    );
  }

  return {
    root,
    rootRealpath,
    pcrRoot,
    pcrRootRealpath,
    pcrDir: candidate,
    relativePcrPath,
    domain: segments[0],
    subdomain: segments[1],
    slug: segments[2],
  };
}

function requireSafePcrAncestors(identity) {
  let cursor = identity.pcrRoot;
  for (const segment of [identity.domain, identity.subdomain, identity.slug]) {
    cursor = path.join(cursor, segment);
    requirePlainDirectory(cursor, "PCR path component");
  }
  const { realTarget } = realpathInside(identity.pcrRoot, identity.pcrDir, "PCR directory");
  return realTarget;
}

/**
 * Resolve an existing canonical PCR workspace. This is the strict path entrypoint for normal commands.
 * It always requires a direct top-level manifest.yaml, even when the selected workspace is revision.
 */
export function resolvePcrWorkspacePaths({ root, pcr, workspace = "current" }) {
  if (!PCR_WORKSPACES.includes(workspace)) {
    fail(
      "PCR_WORKSPACE_INVALID",
      `PCR workspace must be one of ${PCR_WORKSPACES.join(" or ")}; received ${workspace}.`,
    );
  }
  const identity = lexicalIdentity(root, pcr);
  const pcrRealpath = requireSafePcrAncestors(identity);

  const currentManifestPath = path.join(identity.pcrDir, "manifest.yaml");
  requirePlainFile(currentManifestPath, "Canonical PCR manifest");
  const currentManifestRealpath = realpathSync(currentManifestPath);
  if (path.dirname(currentManifestRealpath) !== pcrRealpath) {
    fail("PCR_MANIFEST_NOT_DIRECT", `Canonical manifest must be directly inside ${identity.pcrDir}.`);
  }

  const workspaceDir = workspace === "current" ? identity.pcrDir : path.join(identity.pcrDir, "revision");
  if (workspace === "revision") {
    requirePlainDirectory(workspaceDir, "PCR revision workspace");
    realpathInside(identity.pcrDir, workspaceDir, "PCR revision workspace");
  }
  const manifestPath = path.join(workspaceDir, WORKSPACE_MANIFEST[workspace]);
  requirePlainFile(manifestPath, `${workspace} PCR manifest`);
  const manifestRealpath = realpathSync(manifestPath);
  if (path.dirname(manifestRealpath) !== realpathSync(workspaceDir)) {
    fail("PCR_MANIFEST_NOT_DIRECT", `${workspace} manifest must be directly inside ${workspaceDir}.`);
  }

  return Object.freeze({
    ...identity,
    pcrRealpath,
    workspace,
    workspaceDir,
    workspaceRealpath: realpathSync(workspaceDir),
    manifestPath,
    manifestRealpath,
    currentManifestPath,
    currentManifestRealpath,
  });
}

/**
 * Resolve only the lexical PCR identity and its existing parents. Recovery may call this while the
 * leaf is temporarily absent between the two directory renames of a transaction.
 */
export function resolvePcrLocationForRecovery({ root, pcr }) {
  const identity = lexicalIdentity(root, pcr);
  const domainDir = path.join(identity.pcrRoot, identity.domain);
  const subdomainDir = path.join(domainDir, identity.subdomain);
  requirePlainDirectory(domainDir, "PCR domain directory");
  requirePlainDirectory(subdomainDir, "PCR subdomain directory");
  realpathInside(identity.pcrRoot, domainDir, "PCR domain directory");
  realpathInside(identity.pcrRoot, subdomainDir, "PCR subdomain directory");

  if (existsSync(identity.pcrDir)) {
    requirePlainDirectory(identity.pcrDir, "PCR directory");
    realpathInside(identity.pcrRoot, identity.pcrDir, "PCR directory");
  }
  return Object.freeze(identity);
}

export function repoRelativePcrPath(paths) {
  return slashPath(path.relative(paths.root, paths.pcrDir));
}
