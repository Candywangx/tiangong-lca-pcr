// Diagnostic presentation only; collection and severity remain in lint-rules.mjs.
import { createHash, randomUUID } from "node:crypto";
import { closeSync, lstatSync, mkdirSync, openSync, realpathSync, renameSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectLintDiagnostics } from "./lint-rules.mjs";

const defaultRoot = fileURLToPath(new URL("../../", import.meta.url));
const SAMPLE_LIMIT = 20;
const MESSAGE_LIMIT = 400;

export function formatLintSummary(report) {
  const sample = [
    ...report.problems.slice(0, SAMPLE_LIMIT).map((message) => `error: ${message}`),
    ...report.warnings.slice(0, Math.max(0, SAMPLE_LIMIT - report.problems.length)).map((message) => `warning: ${message}`),
  ];
  return [
    `PCR library lint: ${report.status}; ${report.counts.problems} errors, ${report.counts.warnings} warnings; complete=${report.complete}.`,
    ...sample.map((message) => message.replace(/[\u0000-\u001f\u007f]/gu, " ").slice(0, MESSAGE_LIMIT)),
    `Showing ${sample.length} of ${report.counts.problems + report.counts.warnings} diagnostics; full text is in the report.`,
  ];
}

// Narrow output policy: one regular JSON file directly in the root's ignored
// .reports directory. Never write through links or into product/transaction files.
export function saveLintReport({ root, reportPath, diagnostics }) {
  let directory;
  let destination;
  const complete = diagnostics.complete !== false;
  const report = {
    schema: "tiangong-pcr.lint-report.v1",
    complete,
    status: !complete || diagnostics.problems.length ? "fail" : diagnostics.warnings.length ? "warnings" : "pass",
    counts: { problems: diagnostics.problems.length, warnings: diagnostics.warnings.length },
    problems: diagnostics.problems,
    warnings: diagnostics.warnings,
  };
  const serialized = JSON.stringify(report, null, 2) + "\n";
  let temporary;
  try {
    root = realpathSync(root);
    directory = path.join(root, ".reports");
    destination = path.resolve(root, reportPath);
    if (path.dirname(destination) !== directory || !/^[A-Za-z0-9][A-Za-z0-9._-]*\.json$/u.test(path.basename(destination))) {
      throw new Error("--report must name a JSON file directly inside <root>/.reports.");
    }
    const directoryStat = lstatSync(directory, { throwIfNoEntry: false });
    if (directoryStat && (!directoryStat.isDirectory() || directoryStat.isSymbolicLink())) {
      throw new Error("The report directory must be a canonical directory, not a link.");
    }
    if (!directoryStat) mkdirSync(directory, { mode: 0o700 });
    const previous = lstatSync(destination, { throwIfNoEntry: false });
    if (previous && (!previous.isFile() || previous.isSymbolicLink() || previous.nlink !== 1)) {
      throw new Error("The report destination must be a regular unlinked file.");
    }
    temporary = path.join(directory, `.lint-${randomUUID()}.tmp`);
    const fd = openSync(temporary, "wx", 0o600);
    try { writeFileSync(fd, serialized, "utf8"); } finally { closeSync(fd); }
    renameSync(temporary, destination);
    temporary = undefined;
  } catch (error) {
    // Preserve every collected diagnostic on the failure channel when the full
    // file cannot be retained; never print a successful summary or stale link.
    let cleanupError = "";
    if (temporary) {
      try { rmSync(temporary, { force: true }); }
      catch (failure) { cleanupError = `; temporary cleanup also failed: ${failure.message}`; }
    }
    throw new Error(`Lint report was not saved: ${error.message}${cleanupError}\nFull diagnostics (unsaved):\n${serialized}`);
  }
  return {
    messages: [...formatLintSummary(report),
      `Full report: ${destination} (sha256 ${createHash("sha256").update(serialized).digest("hex")})`],
    exitCode: report.status === "fail" ? 1 : 0,
  };
}

export function lintWithReport(options) {
  let diagnostics;
  try {
    diagnostics = collectLintDiagnostics(options);
  } catch (error) {
    // An interrupted collector has no complete library verdict. Retain its
    // original error and explicitly distinguish it from a completed scan.
    diagnostics = { problems: [error.message], warnings: [], complete: false };
  }
  return saveLintReport({ root: path.resolve(options.root ?? defaultRoot), reportPath: options.report, diagnostics });
}
