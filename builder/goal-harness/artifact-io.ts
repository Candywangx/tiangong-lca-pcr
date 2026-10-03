import { isRecord, errorCode, errorMessage, type UnknownRecord } from "./domain.ts";
import { createHash, randomUUID, type BinaryLike } from "node:crypto";
import {
  closeSync,
  constants,
  fstatSync,
  lstatSync,
  mkdirSync,
  openSync,
  readSync,
  fsyncSync,
  writeFileSync,
  linkSync,
  unlinkSync,
  type BigIntStats,
} from "node:fs";
import path from "node:path";
import { GoalHarnessError } from "./errors.ts";

export const artifactSha256 = (bytes: BinaryLike): string =>
  `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
export function stableArtifactJson(value: UnknownRecord | readonly unknown[]): string;
export function stableArtifactJson(value: unknown): string | undefined;
export function stableArtifactJson(value: unknown): string | undefined {
  if (Array.isArray(value))
    return `[${value.map((v) => stableArtifactJson(v) ?? "null").join(",")}]`;
  if (isRecord(value))
    return `{${Object.keys(value)
      .filter((k) => value[k] !== undefined)
      .sort()
      .map((k) => `${JSON.stringify(k)}:${stableArtifactJson(value[k])}`)
      .join(",")}}`;
  return JSON.stringify(value);
}

// Descriptor-anchored traversal also rejects links in ancestor directories. Existing
// coordinator hold uses the same Linux /proc boundary. Unsupported hosts fail closed.
export function withArtifactDirectory<T>(
  directory: string,
  callback: (directory: string, verify: () => void) => T,
  { create = false }: {create?: boolean} = {},
): T {
  const fds: number[] = [],
    bindings: {anchored: string; identity: string}[] = [];
  try {
    if (process.platform !== "linux" || constants.O_NOFOLLOW === undefined)
      throw new Error("Secure traversal unavailable.");
    const resolved = path.resolve(directory);
    let fd = openSync(
      path.parse(resolved).root,
      constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW,
    );
    fds.push(fd);
    for (const part of resolved.split(path.sep).filter(Boolean)) {
      const anchored = `/proc/self/fd/${fd}/${part}`;
      if (create) {
        try {
          mkdirSync(anchored, { mode: 0o700 });
        } catch (e) {
          if (errorCode(e) !== "EEXIST") throw e;
        }
      }
      const before = lstatSync(anchored, { bigint: true });
      if (!before.isDirectory() || before.isSymbolicLink())
        throw new Error("Non-directory or linked ancestor.");
      fd = openSync(
        anchored,
        constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW,
      );
      fds.push(fd);
      if (identity(before) !== identity(fstatSync(fd, { bigint: true })))
        throw new Error("Directory changed during open.");
      bindings.push({ anchored, identity: identity(before) });
    }
    const verify = () => {
      for (const b of bindings)
        if (identity(lstatSync(b.anchored, { bigint: true })) !== b.identity)
          throw new Error("Directory binding changed.");
    };
    verify();
    const result = callback(`/proc/self/fd/${fd}`, verify);
    verify();
    return result;
  } catch (error) {
    if (error instanceof GoalHarnessError) throw error;
    throw new GoalHarnessError(
      "GOAL_ARTIFACT_UNSAFE",
      "Cannot safely access an audit artifact.",
      { path: directory, cause: errorMessage(error) },
    );
  } finally {
    for (const fd of fds.reverse()) closeSync(fd);
  }
}

export function readArtifact(
  file: string,
  { root = null, maxBytes = 1024 * 1024 }: {root?: string | null; maxBytes?: number} = {},
): Buffer {
  const resolved = path.resolve(file);
  if (root && !resolved.startsWith(`${path.resolve(root)}${path.sep}`))
    throw new GoalHarnessError(
      "GOAL_ARTIFACT_UNSAFE",
      "Artifact escapes its allowed root.",
    );
  return withArtifactDirectory(path.dirname(resolved), (dir) => {
    let fd: number | undefined;
    try {
      const name = path.join(dir, path.basename(resolved));
      const before = lstatSync(name, { bigint: true });
      if (
        !before.isFile() ||
        before.isSymbolicLink() ||
        before.size > BigInt(maxBytes)
      )
        throw new Error("Expected a bounded regular file.");
      fd = openSync(
        name,
        constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK,
      );
      if (signature(before) !== signature(fstatSync(fd, { bigint: true })))
        throw new Error("File changed during open.");
      const buffer = Buffer.alloc(Number(before.size) + 1);
      let size = 0;
      while (size < buffer.length) {
        const n = readSync(fd, buffer, size, buffer.length - size, size);
        if (!n) break;
        size += n;
      }
      if (
        BigInt(size) !== before.size ||
        signature(before) !== signature(fstatSync(fd, { bigint: true })) ||
        signature(before) !== signature(lstatSync(name, { bigint: true }))
      )
        throw new Error("File changed during read.");
      return buffer.subarray(0, size);
    } finally {
      if (fd !== undefined) closeSync(fd);
    }
  });
}

export function writeArtifactExclusive(file: string, bytes: string | NodeJS.ArrayBufferView): void {
  return withArtifactDirectory(
    path.dirname(file),
    (dir) => {
      const target = path.join(dir, path.basename(file));
      const staged = `${target}.${process.pid}.${randomUUID()}.stage`;
      let fd: number | undefined;
      try {
        fd = openSync(
          staged,
          constants.O_WRONLY |
            constants.O_CREAT |
            constants.O_EXCL |
            constants.O_NOFOLLOW,
          0o600,
        );
        writeFileSync(fd, bytes);
        fsyncSync(fd);
        closeSync(fd);
        fd = undefined;
        linkSync(staged, target); // atomic no-replace publication
        const dirFd = openSync(dir, constants.O_RDONLY);
        try {
          fsyncSync(dirFd);
        } finally {
          closeSync(dirFd);
        }
      } finally {
        if (fd !== undefined) closeSync(fd);
        try {
          unlinkSync(staged);
        } catch (e) {
          if (errorCode(e) !== "ENOENT") throw e;
        }
      }
    },
    { create: true },
  );
}
const identity = (s: BigIntStats) => `${s.dev}:${s.ino}:${s.mode}`;
const signature = (s: BigIntStats) => `${identity(s)}:${s.size}:${s.mtimeNs}:${s.ctimeNs}`;
