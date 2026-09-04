import { createHash } from "node:crypto";
import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fsyncSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  readlinkSync,
  realpathSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
  writeSync,
} from "node:fs";
import path from "node:path";

export const VIEWER_DEPLOYMENT_MARKER = ".tiangong-pcr-viewer-build";
const GENERATIONS_DIRECTORY = ".generations";
const CURRENT_POINTER = "current";
const GENERATION_NAME = /^[a-f0-9]{64}$/u;

export class ViewerDeploymentError extends Error {
  constructor(code, message, options = {}) {
    super(message, options);
    this.name = "ViewerDeploymentError";
    this.code = code;
  }
}

/** Install an immutable generation, then expose it by replacing one small symlink. */
export function commitViewerDeployment({ stageDir, outDir, failurePhase = null } = {}) {
  const target = path.resolve(requiredPath(outDir, "deployment output"));
  const stage = path.resolve(requiredPath(stageDir, "deployment stage"));
  const parent = path.dirname(target);
  if (path.dirname(stage) !== parent || stage === target) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_STAGE_INVALID", "Viewer deployment stage must be a distinct sibling of the output directory.");
  }
  recoverViewerDeployment({ outDir: target });
  assertOwnedDirectory(stage, "Viewer deployment stage");
  assertSafeTree(stage, "Viewer deployment stage");
  ensureStableRoot(target);

  const generationName = directoryDigest(stage);
  const generation = path.join(target, GENERATIONS_DIRECTORY, generationName);
  const pointerTempName = `.current-${process.pid}-${Date.now()}`;
  const journalPath = deploymentJournalPath(target);
  let journal = {
    schema_version: 2,
    kind: "viewer-deployment-journal",
    phase: "generation_prepared",
    output_name: path.basename(target),
    stage_name: path.basename(stage),
    generation_name: generationName,
    pointer_temp_name: pointerTempName,
  };
  writeJournal(journalPath, journal);
  interrupt(failurePhase, journal.phase);

  try {
    installGeneration({ stage, generation, generationName });
    journal = { ...journal, phase: "generation_installed" };
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);

    preparePointer({ target, pointerTempName, generationName });
    journal = { ...journal, phase: "pointer_prepared" };
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);

    commitPointer({ target, pointerTempName, generationName });
    journal = { ...journal, phase: "pointer_committed" };
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);

    finishDeployment({ target, journalPath, pointerTempName, generationName });
    return Object.freeze({ committed: true, recovered: false, generation: generationName });
  } catch (error) {
    if (error?.code !== "VIEWER_DEPLOYMENT_INTERRUPTED") {
      try { recoverViewerDeployment({ outDir: target }); } catch { /* keep the original error and journal */ }
    }
    throw error;
  }
}

export function recoverViewerDeployment({ outDir } = {}) {
  const target = path.resolve(requiredPath(outDir, "deployment output"));
  const journalPath = deploymentJournalPath(target);
  if (!existsSync(journalPath)) return Object.freeze({ recovered: false });
  assertRegularFile(journalPath, "Viewer deployment journal");
  const journal = JSON.parse(readFileSync(journalPath, "utf8"));
  validateJournal(journal, target);
  ensureStableRoot(target);

  const stage = path.join(path.dirname(target), journal.stage_name);
  const generation = path.join(target, GENERATIONS_DIRECTORY, journal.generation_name);
  if (journal.phase === "generation_prepared") {
    installGeneration({ stage, generation, generationName: journal.generation_name });
  } else {
    assertGeneration(generation, journal.generation_name);
    if (existsSync(stage)) removeMatchingStage(stage, generation);
  }
  preparePointer({ target, pointerTempName: journal.pointer_temp_name, generationName: journal.generation_name });
  commitPointer({ target, pointerTempName: journal.pointer_temp_name, generationName: journal.generation_name });
  finishDeployment({ target, journalPath, pointerTempName: journal.pointer_temp_name, generationName: journal.generation_name });
  return Object.freeze({ recovered: true, phase: journal.phase, generation: journal.generation_name });
}

/** Resolve and pin the immutable generation used for one read/request. */
export function resolveViewerDeploymentGeneration(outDir) {
  const target = path.resolve(requiredPath(outDir, "deployment output"));
  if (!existsSync(target)) return target;
  const stat = lstatSync(target);
  if (stat.isSymbolicLink() || !stat.isDirectory()) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", "Viewer deployment output must be a real directory.");
  }
  const pointer = path.join(target, CURRENT_POINTER);
  let pointerStat;
  try {
    pointerStat = lstatSync(pointer);
  } catch (error) {
    if (error?.code === "ENOENT") return realpathSync(target);
    throw error;
  }
  if (!pointerStat.isSymbolicLink()) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment current pointer must be a symbolic link.");
  }
  const relativeTarget = readlinkSync(pointer);
  const match = /^\.generations\/([a-f0-9]{64})$/u.exec(relativeTarget);
  if (!match) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment current pointer has an unsafe target.");
  }
  // Resolve the path named by the readlink result, not `current` again. If a
  // publisher flips the pointer now, this request remains pinned to the old
  // immutable generation.
  const generation = realpathSync(path.resolve(target, relativeTarget));
  const generationsRoot = realpathSync(path.join(target, GENERATIONS_DIRECTORY));
  if (!isInsideOrEqual(generationsRoot, generation) || path.basename(generation) !== match[1]) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment current pointer escapes its generation store.");
  }
  assertOwnedDirectory(generation, "Viewer deployment generation");
  return generation;
}

function ensureStableRoot(target) {
  if (!existsSync(target)) mkdirSync(target);
  const stat = lstatSync(target);
  if (stat.isSymbolicLink() || !stat.isDirectory()) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", "Viewer deployment output must be a real directory.");
  }
  const marker = path.join(target, VIEWER_DEPLOYMENT_MARKER);
  if (!existsSync(marker)) {
    if (readdirSync(target).length !== 0) {
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", "Viewer deployment output is not owned by the Viewer builder.");
    }
    writeFileSync(marker, "Stable PCR Viewer deployment root.\n", { flag: "wx" });
    fsyncFile(marker);
  } else {
    assertRegularFile(marker, "Viewer deployment output marker");
  }
  const generations = path.join(target, GENERATIONS_DIRECTORY);
  if (!existsSync(generations)) mkdirSync(generations);
  const generationsStat = lstatSync(generations);
  if (generationsStat.isSymbolicLink() || !generationsStat.isDirectory()) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", "Viewer deployment generations path must be a real directory.");
  }
  fsyncDirectory(target);
}

function installGeneration({ stage, generation, generationName }) {
  if (existsSync(generation)) {
    assertGeneration(generation, generationName);
    if (existsSync(stage)) removeMatchingStage(stage, generation);
    return;
  }
  assertOwnedDirectory(stage, "Viewer deployment stage");
  if (directoryDigest(stage) !== generationName) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_STAGE_CHANGED", "Viewer deployment stage changed after its journal was written.");
  }
  renameSync(stage, generation);
  fsyncDirectory(path.dirname(generation));
  assertGeneration(generation, generationName);
}

function removeMatchingStage(stage, generation) {
  assertOwnedDirectory(stage, "Viewer deployment stage");
  assertSafeTree(stage, "Viewer deployment stage");
  const expected = path.basename(generation);
  if (directoryDigest(stage) !== expected || directoryDigest(generation) !== expected) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_GENERATION_CONFLICT", "An immutable Viewer generation has conflicting bytes.");
  }
  rmSync(stage, { recursive: true });
}

function assertGeneration(generation, generationName) {
  if (!GENERATION_NAME.test(generationName)) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_GENERATION_INVALID", "Viewer deployment generation identity is invalid.");
  }
  assertOwnedDirectory(generation, "Viewer deployment generation");
  assertSafeTree(generation, "Viewer deployment generation");
  if (directoryDigest(generation) !== generationName) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_GENERATION_CONFLICT", "An immutable Viewer generation was substituted.");
  }
}

function preparePointer({ target, pointerTempName, generationName }) {
  const pointerTemp = path.join(target, pointerTempName);
  const relativeTarget = `${GENERATIONS_DIRECTORY}/${generationName}`;
  if (existsSync(pointerTemp)) {
    const stat = lstatSync(pointerTemp);
    if (!stat.isSymbolicLink() || readlinkSync(pointerTemp) !== relativeTarget) {
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment temporary pointer was substituted.");
    }
    return;
  }
  symlinkSync(relativeTarget, pointerTemp);
  fsyncDirectory(target);
}

function commitPointer({ target, pointerTempName, generationName }) {
  const pointer = path.join(target, CURRENT_POINTER);
  if (pointerTargets(pointer, generationName)) {
    const pointerTemp = path.join(target, pointerTempName);
    if (existsSync(pointerTemp)) rmSync(pointerTemp);
    return;
  }
  const pointerTemp = path.join(target, pointerTempName);
  const tempStat = lstatSync(pointerTemp);
  if (!tempStat.isSymbolicLink() || readlinkSync(pointerTemp) !== `${GENERATIONS_DIRECTORY}/${generationName}`) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment temporary pointer was substituted.");
  }
  if (existsSync(pointer) && !lstatSync(pointer).isSymbolicLink()) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment current pointer is not replaceable.");
  }
  renameSync(pointerTemp, pointer);
  fsyncDirectory(target);
  if (!pointerTargets(pointer, generationName)) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment current pointer did not commit exactly.");
  }
}

function finishDeployment({ target, journalPath, pointerTempName, generationName }) {
  const generation = path.join(target, GENERATIONS_DIRECTORY, generationName);
  assertGeneration(generation, generationName);
  if (!pointerTargets(path.join(target, CURRENT_POINTER), generationName)) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment recovery did not select the journaled generation.");
  }
  const pointerTemp = path.join(target, pointerTempName);
  if (existsSync(pointerTemp)) rmSync(pointerTemp);
  for (const entry of readdirSync(target)) {
    if ([VIEWER_DEPLOYMENT_MARKER, GENERATIONS_DIRECTORY, CURRENT_POINTER].includes(entry)) continue;
    rmSync(path.join(target, entry), { recursive: true, force: true });
  }
  rmSync(journalPath);
  fsyncDirectory(path.dirname(journalPath));
  fsyncDirectory(target);
}

function pointerTargets(pointer, generationName) {
  try {
    return lstatSync(pointer).isSymbolicLink() && readlinkSync(pointer) === `${GENERATIONS_DIRECTORY}/${generationName}`;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

function validateJournal(journal, target) {
  const keys = Object.keys(journal ?? {}).sort();
  const expected = ["generation_name", "kind", "output_name", "phase", "pointer_temp_name", "schema_version", "stage_name"].sort();
  if (
    JSON.stringify(keys) !== JSON.stringify(expected) ||
    journal.schema_version !== 2 ||
    journal.kind !== "viewer-deployment-journal" ||
    journal.output_name !== path.basename(target) ||
    !["generation_prepared", "generation_installed", "pointer_prepared", "pointer_committed"].includes(journal.phase) ||
    !GENERATION_NAME.test(journal.generation_name) ||
    !safeSiblingName(journal.stage_name) ||
    !new RegExp(`^\\.${escapeRegExp(journal.output_name)}-(?:build|mirror)-`, "u").test(journal.stage_name) ||
    !/^\.current-[0-9]+-[0-9]+$/u.test(journal.pointer_temp_name)
  ) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_JOURNAL_INVALID", "Viewer deployment journal is invalid or targets another output.");
  }
}

function writeJournal(journalPath, journal) {
  const parent = path.dirname(journalPath);
  mkdirSync(parent, { recursive: true });
  const stage = path.join(parent, `.${path.basename(journalPath)}-${process.pid}-${Date.now()}`);
  const descriptor = openSync(stage, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
  try {
    writeSync(descriptor, Buffer.from(`${JSON.stringify(journal)}\n`, "utf8"));
    fsyncSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
  renameSync(stage, journalPath);
  fsyncDirectory(parent);
}

function deploymentJournalPath(outDir) {
  return path.join(path.dirname(outDir), `.${path.basename(outDir)}-deployment-journal.json`);
}

function assertOwnedDirectory(directory, label) {
  const stat = lstatSync(directory);
  if (stat.isSymbolicLink() || !stat.isDirectory()) throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", `${label} must be a real directory.`);
  assertRegularFile(path.join(directory, VIEWER_DEPLOYMENT_MARKER), `${label} marker`);
}

function assertSafeTree(directory, label) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    const stat = lstatSync(target);
    if (stat.isSymbolicLink() || (!stat.isDirectory() && !stat.isFile())) {
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", `${label} contains an unsafe path.`);
    }
    if (stat.isDirectory()) assertSafeTree(target, label);
  }
}

function directoryDigest(directory) {
  const hash = createHash("sha256");
  for (const relativePath of listFiles(directory).sort()) {
    hash.update(relativePath, "utf8");
    hash.update("\0");
    hash.update(readFileSync(path.join(directory, ...relativePath.split("/"))));
    hash.update("\0");
  }
  return hash.digest("hex");
}

function listFiles(directory, prefix = "") {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) return listFiles(path.join(directory, entry.name), relativePath);
    if (!entry.isFile()) throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", "Viewer deployment tree contains an unsafe path.");
    return [relativePath];
  });
}

function assertRegularFile(filePath, label) {
  const stat = lstatSync(filePath);
  if (stat.isSymbolicLink() || !stat.isFile()) throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", `${label} must be a regular file.`);
}

function safeSiblingName(value) {
  return typeof value === "string" && value.length > 1 && path.basename(value) === value && value !== "." && value !== "..";
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

function requiredPath(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_REQUIRED", `${label} path is required.`);
  return value;
}

function isInsideOrEqual(root, candidate) {
  const relative = path.relative(root, candidate);
  return relative === "" || (relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative));
}

function fsyncFile(filePath) {
  const descriptor = openSync(filePath, fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW);
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function fsyncDirectory(directory) {
  const descriptor = openSync(directory, fsConstants.O_RDONLY | fsConstants.O_DIRECTORY | fsConstants.O_NOFOLLOW);
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function interrupt(requested, phase) {
  if (requested === phase) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_INTERRUPTED", `Viewer deployment interrupted at ${phase}.`);
  }
}
