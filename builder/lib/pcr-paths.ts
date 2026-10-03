import { existsSync, lstatSync, readdirSync, realpathSync } from "node:fs";
import path from "node:path";

export const PCR_WORKSPACES = Object.freeze(["current", "revision"] as const);
export type PcrWorkspace = typeof PCR_WORKSPACES[number];
export interface PcrFilesystemIdentity {
  root: string; rootRealpath: string; pcrRoot: string; pcrRootRealpath: string; pcrDir: string; relativePcrPath: string;
  domain: string; subdomain: string; slug: string; filesystemCaseInsensitive: boolean;
}
export interface PcrWorkspacePaths extends PcrFilesystemIdentity {
  pcrRealpath: string; workspace: PcrWorkspace; workspaceDir: string; workspaceRealpath: string;
  manifestPath: string; manifestRealpath: string; currentManifestPath: string; currentManifestRealpath: string;
}
export interface PcrRecoveryLocation extends PcrFilesystemIdentity { pcrRealpath: string | null; domainRealpath: string; subdomainRealpath: string }
type LexicalIdentity = Omit<PcrFilesystemIdentity, 'filesystemCaseInsensitive'>;
function errorCode(error: unknown): unknown { return error !== null && typeof error === 'object' ? Reflect.get(error, 'code') : undefined; }
function segmentAt(segments: readonly string[], index: number): string {
  const segment = segments[index]; if (segment === undefined) throw new PcrPathError('PCR_PATH_CANONICAL_IDENTITY_INVALID', 'Missing canonical PCR path segment.'); return segment;
}
function isWorkspace(value: unknown): value is PcrWorkspace { return PCR_WORKSPACES.some(workspace => workspace === value); }

const WORKSPACE_MANIFEST = Object.freeze({
  current: "manifest.yaml",
  revision: "manifest.next.yaml",
});

export class PcrPathError extends Error {
  readonly code: string;
  constructor(code: string, message: string) {
    super(message);
    this.name = "PcrPathError";
    this.code = code;
  }
}

function fail(code: string, message: string): never {
  throw new PcrPathError(code, message);
}

function isInside(parent: string, candidate: string, { allowEqual = false }: { allowEqual?: boolean } = {}): boolean {
  const relative = path.relative(parent, candidate);
  if (relative === "") {
    return allowEqual;
  }
  return relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

function slashPath(value: string): string {
  return value.replaceAll(path.sep, "/");
}

function filesystemCanonicalEntryName(parent: string, requestedName: string, label: string): string {
  const target = path.join(parent, requestedName);
  const targetEntry = lstatSync(target);
  const matches = readdirSync(parent).filter((entryName) => {
    try {
      const candidate = lstatSync(path.join(parent, entryName));
      return candidate.dev === targetEntry.dev && candidate.ino === targetEntry.ino;
    } catch (error) {
      if (errorCode(error) === "ENOENT") {
        return false;
      }
      throw error;
    }
  });
  if (matches.length !== 1) {
    fail(
      "PCR_PATH_CANONICAL_IDENTITY_INVALID",
      `${label} does not have one unambiguous filesystem-canonical directory entry: ${target}`,
    );
  }
  return segmentAt(matches, 0);
}

function filesystemCanonicalSegments(pcrRoot: string, requestedSegments: readonly string[], label: string): string[] {
  const canonical: string[] = [];
  let parent = pcrRoot;
  for (const requestedName of requestedSegments) {
    const canonicalName = filesystemCanonicalEntryName(parent, requestedName, label);
    canonical.push(canonicalName);
    parent = path.join(parent, canonicalName);
  }
  return canonical;
}

function alternateCase(value: string): string | null {
  let changed = false;
  const alternate = [...value].map((character) => {
    const lower = character.toLocaleLowerCase("en-US");
    const upper = character.toLocaleUpperCase("en-US");
    if (lower === upper) {
      return character;
    }
    changed = true;
    return character === lower ? upper : lower;
  }).join("");
  return changed && alternate !== value ? alternate : null;
}

/**
 * Detect case-folding from an existing directory entry without creating a probe file. Comparing
 * inode identity is important on case-sensitive Darwin volumes where two differently-cased,
 * legitimate directory names may coexist.
 */
function directoryEntryLookupIsCaseInsensitive(target: string): boolean {
  const alternateName = alternateCase(path.basename(target));
  if (alternateName === null) {
    return false;
  }
  const alternatePath = path.join(path.dirname(target), alternateName);
  try {
    const actual = lstatSync(target);
    const alternate = lstatSync(alternatePath);
    return actual.dev === alternate.dev && actual.ino === alternate.ino;
  } catch (error) {
    if (errorCode(error) === "ENOENT") {
      return false;
    }
    throw error;
  }
}

function filesystemUsesCaseInsensitiveLookup(identity: LexicalIdentity, domainRealpath: string, subdomainRealpath: string): boolean {
  return [subdomainRealpath, domainRealpath, identity.pcrRootRealpath]
    .some((target) => directoryEntryLookupIsCaseInsensitive(target));
}

function validatedRecordedPcrPath(value: unknown): string[] | null {
  if (typeof value !== "string" || value.includes("\\")) {
    return null;
  }
  const segments = value.split("/");
  if (
    segments.length !== 3 ||
    segments.some((segment) => segment.length === 0 || segment === "." || segment === "..")
  ) {
    return null;
  }
  return segments;
}

function rejectTraversalSyntax(rawPcr: string): void {
  const segments = rawPcr.split(/[\\/]/u);
  if (segments.some((segment) => segment === "." || segment === "..")) {
    fail("PCR_PATH_TRAVERSAL", `PCR path must not contain . or .. segments: ${rawPcr}`);
  }
}

function requirePlainDirectory(target: string, label: string): void {
  let entry;
  try {
    entry = lstatSync(target);
  } catch (error) {
    if (errorCode(error) === "ENOENT") {
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

function requirePlainFile(target: string, label: string): void {
  let entry;
  try {
    entry = lstatSync(target);
  } catch (error) {
    if (errorCode(error) === "ENOENT") {
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

function realpathInside(parent: string, target: string, label: string, { allowEqual = false }: {allowEqual?: boolean} = {}): {realParent: string; realTarget: string} {
  const realParent = realpathSync(parent);
  const realTarget = realpathSync(target);
  if (!isInside(realParent, realTarget, { allowEqual })) {
    fail("PCR_PATH_ESCAPE", `${label} resolves outside ${parent}: ${target} -> ${realTarget}`);
  }
  return { realParent, realTarget };
}

function lexicalIdentity(rootValue: unknown, pcrValue: unknown): LexicalIdentity {
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
  let relativePcrPath;
  if (isInside(pcrRoot, candidate)) {
    relativePcrPath = slashPath(path.relative(pcrRoot, candidate));
  } else {
    // macOS commonly exposes /var through the /private/var realpath. Resolve the existing parent
    // so lexical aliases are accepted only when filesystem identity still proves containment.
    if (!isInside(root, candidate) && !isInside(rootRealpath, candidate)) {
      fail("PCR_PATH_OUTSIDE_ROOT", `PCR path must be inside ${pcrRoot}: ${rawPcr}`);
    }
    let candidateParentRealpath;
    try {
      candidateParentRealpath = realpathSync(path.dirname(candidate));
    } catch (error) {
      if (errorCode(error) === "ENOENT") {
        fail("PCR_PATH_OUTSIDE_ROOT", `PCR path must be inside ${pcrRoot}: ${rawPcr}`);
      }
      throw error;
    }
    if (!isInside(pcrRootRealpath, candidateParentRealpath)) {
      fail("PCR_PATH_OUTSIDE_ROOT", `PCR path must be inside ${pcrRoot}: ${rawPcr}`);
    }
    relativePcrPath = slashPath(
      path.join(path.relative(pcrRootRealpath, candidateParentRealpath), path.basename(candidate)),
    );
  }
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
    domain: segmentAt(segments, 0),
    subdomain: segmentAt(segments, 1),
    slug: segmentAt(segments, 2),
  };
}

function requireSafePcrAncestors(identity: LexicalIdentity): string {
  let cursor = identity.pcrRoot;
  for (const segment of [identity.domain, identity.subdomain, identity.slug]) {
    cursor = path.join(cursor, segment);
    requirePlainDirectory(cursor, "PCR path component");
  }
  const { realTarget } = realpathInside(identity.pcrRoot, identity.pcrDir, "PCR directory");
  return realTarget;
}

function existingFilesystemIdentity(identity: LexicalIdentity): PcrFilesystemIdentity & {pcrRealpath: string} {
  requireSafePcrAncestors(identity);
  const segments = filesystemCanonicalSegments(
    identity.pcrRoot,
    [identity.domain, identity.subdomain, identity.slug],
    "PCR directory",
  );
  const pcrDir = path.join(identity.pcrRoot, ...segments);
  const pcrRealpath = realpathSync(pcrDir);
  return Object.freeze({
    ...identity,
    pcrDir,
    relativePcrPath: segments.join("/"),
    domain: segmentAt(segments, 0),
    subdomain: segmentAt(segments, 1),
    slug: segmentAt(segments, 2),
    pcrRealpath,
    filesystemCaseInsensitive: filesystemUsesCaseInsensitiveLookup(
      identity,
      path.dirname(path.dirname(pcrRealpath)),
      path.dirname(pcrRealpath),
    ),
  });
}

/**
 * Compare a journal/owner PCR identity with a resolved filesystem identity. Case aliases are
 * equivalent only after the containing filesystem has been proven case-insensitive.
 */
export function pcrPathMatchesFilesystemIdentity(location: Pick<PcrFilesystemIdentity, "relativePcrPath" | "filesystemCaseInsensitive">, recordedPcrPath: unknown): boolean {
  const recordedSegments = validatedRecordedPcrPath(recordedPcrPath);
  if (recordedSegments === null) {
    return false;
  }
  const recorded = recordedSegments.join("/");
  if (recorded === location.relativePcrPath) {
    return true;
  }
  if (!location.filesystemCaseInsensitive) {
    return false;
  }
  return recorded.toLocaleLowerCase("en-US") === location.relativePcrPath.toLocaleLowerCase("en-US");
}

/**
 * Resolve an existing canonical PCR workspace. This is the strict path entrypoint for normal commands.
 * It always requires a direct top-level manifest.yaml, even when the selected workspace is revision.
 */
export function resolvePcrWorkspacePaths({ root, pcr, workspace = "current" }: {root: unknown; pcr: unknown; workspace?: unknown}): Readonly<PcrWorkspacePaths> {
  if (!isWorkspace(workspace)) {
    fail(
      "PCR_WORKSPACE_INVALID",
      `PCR workspace must be one of ${PCR_WORKSPACES.join(" or ")}; received ${workspace}.`,
    );
  }
  const identity = existingFilesystemIdentity(lexicalIdentity(root, pcr));
  const { pcrRealpath } = identity;

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
 * Resolve the filesystem-canonical PCR identity from its existing parents. Recovery may call this
 * while the leaf is temporarily absent between the two directory renames of a transaction.
 */
export function resolvePcrLocationForRecovery({ root, pcr }: {root: unknown; pcr: unknown}): Readonly<PcrRecoveryLocation> {
  const lexical = lexicalIdentity(root, pcr);
  const domainDir = path.join(lexical.pcrRoot, lexical.domain);
  const subdomainDir = path.join(domainDir, lexical.subdomain);
  requirePlainDirectory(domainDir, "PCR domain directory");
  requirePlainDirectory(subdomainDir, "PCR subdomain directory");
  const domainRealpath = realpathInside(lexical.pcrRoot, domainDir, "PCR domain directory").realTarget;
  const subdomainRealpath = realpathInside(
    lexical.pcrRoot,
    subdomainDir,
    "PCR subdomain directory",
  ).realTarget;
  const parentSegments = filesystemCanonicalSegments(
    lexical.pcrRoot,
    [lexical.domain, lexical.subdomain],
    "PCR subdomain directory",
  );
  const filesystemCaseInsensitive = filesystemUsesCaseInsensitiveLookup(
    lexical,
    domainRealpath,
    subdomainRealpath,
  );

  let pcrDir = path.join(subdomainRealpath, lexical.slug);
  let relativePcrPath = [...parentSegments, lexical.slug].join("/");
  let pcrRealpath = null;

  if (existsSync(lexical.pcrDir)) {
    requirePlainDirectory(lexical.pcrDir, "PCR directory");
    pcrRealpath = realpathInside(lexical.pcrRoot, lexical.pcrDir, "PCR directory").realTarget;
    const pcrSegments = filesystemCanonicalSegments(
      lexical.pcrRoot,
      [lexical.domain, lexical.subdomain, lexical.slug],
      "PCR directory",
    );
    pcrDir = pcrRealpath;
    relativePcrPath = pcrSegments.join("/");
  }
  return Object.freeze({
    ...lexical,
    pcrDir,
    relativePcrPath,
    domain: segmentAt(parentSegments, 0),
    subdomain: segmentAt(parentSegments, 1),
    slug: segmentAt(relativePcrPath.split("/"), 2),
    domainRealpath,
    subdomainRealpath,
    pcrRealpath,
    filesystemCaseInsensitive,
  });
}

export function repoRelativePcrPath(paths: Pick<PcrFilesystemIdentity, "root" | "pcrDir">): string {
  return slashPath(path.relative(paths.root, paths.pcrDir));
}
