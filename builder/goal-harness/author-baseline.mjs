import { execFileSync } from "node:child_process";

export function resolveAuthorContentBaseCommit({ projectRoot, task, fallbackCommit }) {
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

function recoverSingleParentAuthorBaseline({ projectRoot, authorCommit, allowedFiles }) {
  if (!Array.isArray(allowedFiles) || allowedFiles.length === 0) return null;
  try {
    const revision = execFileSync("git", ["rev-list", "--parents", "-n", "1", authorCommit], {
      cwd: projectRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim().split(/\s+/u);
    if (revision.length !== 2 || revision[0] !== authorCommit) return null;
    const parent = revision[1];
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

function isCommitId(value) {
  return /^[a-f0-9]{40,64}$/u.test(String(value ?? ""));
}
