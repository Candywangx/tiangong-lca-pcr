import path from "node:path";
import { resolvePcrWorkspacePaths } from "./pcr-paths.mjs";
import { inspectPcrDirectory } from "./lint-rules.mjs";

export function checkPcr({
  root = process.cwd(),
  pcr,
  workspace = "current",
} = {}) {
  if (!pcr)
    throw Object.assign(new Error("--pcr is required."), {
      code: "PCR_CHECK_TARGET_REQUIRED",
    });
  const paths = resolvePcrWorkspacePaths({
    root: path.resolve(root),
    pcr,
    workspace,
  });
  const inspection = inspectPcrDirectory({
    root: path.resolve(root),
    pcrDir: paths.workspaceDir,
    manifestFileName: path.basename(paths.manifestPath),
    checkManifestLifecycle: true,
    checkBilingualRuleAlignment: true,
    measurementPolicy: "enforce",
  });
  const result = {
    pcr_path: path.relative(root, paths.pcrDir),
    workspace,
    problems: inspection.problems,
    warnings: inspection.warnings,
    measurement: inspection.measurement ?? null,
  };
  if (inspection.problems.length || inspection.measurement?.status !== "pass") {
    const code =
      inspection.measurementReviewRequired === true
        ? "PCR_MEASUREMENT_REVIEW_REQUIRED"
        : "PCR_CHECK_FAILED";
    throw Object.assign(
      new Error("Target PCR checks did not establish a complete pass."),
      { code, details: result },
    );
  }
  return { ok: true, ...result };
}
export const PCR_CHECK_HELP = `Check one PCR without modifying its files or shared indexes.

Usage: node builder/cli/index.mjs check --pcr <PCR directory> [--root <repository>] [--workspace current|revision] [--format human|json]

Checks: four-file contracts, lifecycle, bilingual alignment, structured projection freshness and bounded measurement consistency.
A missing conversion is an error; unsupported relationships require manual review. No machine weight is invented.
JSON success reports measurement coverage, findings and warnings. JSON failures have empty stdout and a stable error/details object on stderr.
Next: repair the selected draft or open revision, sync structured.yaml, repeat check, then run npm run validate.
`;
