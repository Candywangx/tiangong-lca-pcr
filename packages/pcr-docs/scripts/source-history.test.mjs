import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
import { pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";
import { ensureSourceHistory } from "./source-history.mjs";
test("shallow hosting checkouts regain real source ancestry without advancing HEAD", () => {
  const root = fs.mkdtempSync(path.join(tmpdir(), "pcr-source-history-")),
    source = path.join(root, "source"),
    clone = path.join(root, "clone");
  fs.mkdirSync(source);
  const git = (cwd, ...args) =>
    execFileSync("git", args, { cwd, encoding: "utf8", stdio: "pipe" }).trim();
  try {
    git(source, "init", "-q", "-b", "main");
    fs.writeFileSync(path.join(source, "source.md"), "original");
    git(source, "add", "source.md");
    git(
      source,
      "-c",
      "user.name=Fixture",
      "-c",
      "user.email=fixture@example.invalid",
      "commit",
      "-qm",
      "Original source",
    );
    fs.writeFileSync(path.join(source, "other.md"), "later");
    git(source, "add", "other.md");
    git(
      source,
      "-c",
      "user.name=Fixture",
      "-c",
      "user.email=fixture@example.invalid",
      "commit",
      "-qm",
      "Unrelated change",
    );
    git(root, "clone", "-q", "--depth", "1", pathToFileURL(source).href, clone);
    const head = git(clone, "rev-parse", "HEAD");
    assert.equal(git(clone, "rev-parse", "--is-shallow-repository"), "true");
    ensureSourceHistory(clone);
    assert.equal(git(clone, "rev-parse", "HEAD"), head);
    assert.equal(git(clone, "rev-parse", "--is-shallow-repository"), "false");
    assert.equal(
      git(clone, "log", "--format=%s", "--", "source.md"),
      "Original source",
    );
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
