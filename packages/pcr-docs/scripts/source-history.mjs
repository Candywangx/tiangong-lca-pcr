import { execFileSync } from "node:child_process";
/** File modification dates require ancestry; a shallow hosting checkout must not invent fresh dates. */
export function ensureSourceHistory(root) {
  const git = (...args) =>
    execFileSync("git", args, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      timeout: 120000,
    }).trim();
  if (git("rev-parse", "--is-shallow-repository") !== "true") return;
  const head = git("rev-parse", "HEAD");
  try {
    git("fetch", "--unshallow", "--no-tags", "--filter=blob:none", "origin");
  } catch {
    throw new Error(
      "Complete Git history is required for source modification dates; fetch origin history before building.",
    );
  }
  if (
    git("rev-parse", "--is-shallow-repository") === "true" ||
    git("rev-parse", "HEAD") !== head
  )
    throw new Error(
      "Source history preparation did not retain a complete, pinned checkout.",
    );
}
