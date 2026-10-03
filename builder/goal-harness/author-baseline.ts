import { execFileSync } from "node:child_process";

export interface AuthorContentBaselineTask {
  author_content_base_commit?: unknown;
  uuid_enrichment_history?: readonly { author_commit?: unknown }[];
  author_commit?: unknown;
  repair_history?: readonly { original_commit?: unknown; new_commit?: unknown }[];
  allowed_files?: readonly string[];
  author_base_commit?: string | null;
}
export function resolveAuthorContentBaseCommit({ projectRoot, task, fallbackCommit }: { projectRoot: string; task: AuthorContentBaselineTask; fallbackCommit: string }): string {
  if (isCommitId(task.author_content_base_commit)) return task.author_content_base_commit;

  const preservedAuthorCommits = [
    ...(task.uuid_enrichment_history ?? []).map((entry) => entry?.author_commit),
    task.author_commit,
    ...(task.repair_history ?? []).flatMap((entry) => [entry?.original_commit, entry?.new_commit]),
  ].filter(isCommitId);
  for (const authorCommit of [...new Set(preservedAuthorCommits)]) {
    const recovered = recoverSingleParentAuthorBaseline({ projectRoot, authorCommit, allowedFiles: task.allowed_files });
    if (recovered) return recovered;
  }

  return task.author_base_commit ?? fallbackCommit;
}

function recoverSingleParentAuthorBaseline({ projectRoot, authorCommit, allowedFiles }: { projectRoot: string; authorCommit: string; allowedFiles: readonly string[] | undefined }): string | null {
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) return null;
  try {
    const revision = execFileSync("git", ["rev-list", "--parents", "-n", "1", authorCommit], {
      cwd: projectRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim().split(/\s+/u);
    if (revision.length !== 2 || revision[0] !== authorCommit) return null;
    const parent = revision[1];
    if (parent === undefined) return null;
    const changed = execFileSync("git", ["diff", "--name-only", "-z", parent, authorCommit, "--"], {
      cwd: projectRoot,
      encoding: "buffer",
      stdio: ["ignore", "pipe", "pipe"],
    }).toString("utf8").split("\0").filter(Boolean).sort();
    const allowed = [...new Set(allowedFiles)].sort();
    return changed.length === allowed.length && changed.every((entry, index) => entry === allowed[index])
      ? parent
      : null;
  } catch {
    return null;
  }
}

function isCommitId(value: unknown): value is string {
  return typeof value === "string" && /^[a-f0-9]{40,64}$/u.test(value);
}
