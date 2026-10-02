import { appendFileSync, cpSync, mkdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { compareSemver } from "../lib/lifecycle-policy.mjs";

export const packages = {
  tool: { name: "@tiangong-lca/pcr", prefix: "pcr-v", manifest: "packages/tiangong-pcr-cli/package.json" },
  library: { name: "@tiangong-lca/pcr-library", prefix: "library-v", manifest: "packages/tiangong-pcr-library/package.json" },
};
const repository = "tiangong-lca/pcr";
const registry = "https://registry.npmjs.org";
const git = (root, ...args) => execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
const json = (file) => JSON.parse(readFileSync(file, "utf8"));
const writeJson = (file, value) => writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
const digest = (bytes, algorithm, encoding = "hex") => createHash(algorithm).update(bytes).digest(encoding);

export function releaseSpec(tag) {
  const entry = Object.entries(packages).find(([, spec]) => tag.startsWith(spec.prefix));
  if (!entry) throw new Error(`Unknown release tag: ${tag}`);
  const [kind, spec] = entry;
  const version = tag.slice(spec.prefix.length);
  // No build metadata: npm versions cannot distinguish it. Prereleases use next.
  if (!/^[0-9]+\.[0-9]+\.[0-9]+(?:-[0-9A-Za-z.-]+)?$/u.test(version)) throw new Error("Invalid release version");
  compareSemver(version, version);
  return { kind, ...spec, version, tag, dist_tag: version.includes("-") ? "next" : "latest" };
}

function readVersion(root, ref, spec) {
  const manifest = JSON.parse(git(root, "show", `${ref}:${spec.manifest}`));
  if (manifest.name !== spec.name || manifest.private !== true) throw new Error(`Invalid private version source: ${spec.manifest}`);
  releaseSpec(`${spec.prefix}${manifest.version}`);
  return manifest.version;
}

export function detectReleases(root, base, head) {
  if (!/^[0-9a-f]{40}$/u.test(base) || /^0+$/u.test(base) || !/^[0-9a-f]{40}$/u.test(head)) throw new Error("Expected existing full base/head SHAs");
  git(root, "merge-base", "--is-ancestor", base, head);
  return Object.values(packages).flatMap((spec) => {
    const version = readVersion(root, head, spec);
    // Introducing version metadata is bootstrap, not an implicit first publication.
    const exists = spawnSync("git", ["cat-file", "-e", `${base}:${spec.manifest}`], { cwd: root }).status === 0;
    if (!exists) return [];
    if (JSON.parse(git(root, "show", `${base}:${spec.manifest}`)).name !== spec.name) return [];
    const previous = readVersion(root, base, spec);
    if (previous === version) return [];
    if (compareSemver(version, previous) <= 0) throw new Error(`${spec.name} version must increase (${previous} -> ${version})`);
    return [releaseSpec(`${spec.prefix}${version}`)];
  });
}

export function assertIdentity(env) {
  if (env.GITHUB_REPOSITORY !== repository || env.GITHUB_REPOSITORY_ID !== "1277836444" || env.GITHUB_REPOSITORY_OWNER_ID !== "327771381") throw new Error("Release requires the canonical PCR repository identity");
}

export function releaseContext(root, tag, env) {
  assertIdentity(env);
  const spec = releaseSpec(tag);
  if (!["push", "workflow_dispatch"].includes(env.GITHUB_EVENT_NAME) || env.GITHUB_REF !== `refs/tags/${tag}`) throw new Error("Run publication at the exact release tag ref");
  const head = git(root, "rev-parse", `refs/tags/${tag}^{commit}`);
  if (env.GITHUB_SHA !== head || env.GITHUB_WORKFLOW_SHA !== head || git(root, "rev-parse", "HEAD") !== head) throw new Error("Release event, workflow, checkout and tag SHAs must match");
  git(root, "merge-base", "--is-ancestor", head, "refs/remotes/origin/main");
  if (readVersion(root, head, spec) !== spec.version) throw new Error("Release tag does not match its package version source");
  return { ...spec, source_commit: head };
}

function npm(args, cwd) {
  if (!process.env.npm_execpath) throw new Error("Invoke through npm run release:build so the exact npm CLI is used");
  return execFileSync(process.execPath, [process.env.npm_execpath, ...args], { cwd, encoding: "utf8", maxBuffer: 20 * 1024 * 1024 });
}

export async function buildRelease(root, tag, output) {
  const spec = releaseSpec(tag);
  const head = git(root, "rev-parse", "HEAD");
  if (readVersion(root, head, spec) !== spec.version) throw new Error("Build tag/version mismatch");
  if (git(root, "status", "--porcelain", "--untracked-files=normal")) throw new Error("Release builds require a clean checkout");
  mkdirSync(path.dirname(output), { recursive: true });
  mkdirSync(output, { recursive: false });
  output = realpathSync(output);
  const stage = path.join(output, spec.name);
  if (spec.kind === "tool") {
    const { buildOfflineTool } = await import("./build-offline-packages.mjs");
    buildOfflineTool({ root, output: stage, version: spec.version });
  } else {
    const { buildOfflineLibrary } = await import("./build-offline-library.mjs");
    buildOfflineLibrary({ root, output: stage, version: spec.version, sourceCommit: head });
  }
  const manifestPath = path.join(stage, "package.json");
  const manifest = json(manifestPath);
  manifest.repository = { type: "git", url: `git+https://github.com/${repository}.git` };
  manifest.gitHead = head;
  manifest.publishConfig = { access: "public", registry };
  writeJson(manifestPath, manifest);
  const [packed] = JSON.parse(npm(["pack", stage, "--json", "--ignore-scripts", "--pack-destination", output], root));
  if (packed.name !== spec.name || packed.version !== spec.version || (spec.kind === "tool" && !packed.bundled?.includes("ajv"))) throw new Error("Packed artifact identity or bundled dependencies are invalid");
  const filename = `${spec.name}-${spec.version}.tgz`.replace(/^@/u, "").replaceAll("/", "-");
  if (packed.filename !== filename) throw new Error("Unexpected npm pack filename");
  const bytes = readFileSync(path.join(output, filename));
  const receipt = { ...spec, source_commit: head, node: process.version, npm: npm(["--version"], root).trim(), filename, bytes: bytes.length, sha256: digest(bytes, "sha256"), integrity: `sha512-${digest(bytes, "sha512", "base64")}` };
  const assets = [filename];
  if (spec.kind === "library") {
    for (const file of ["library.sqlite", "library.sqlite.json"]) {
      cpSync(path.join(stage, file), path.join(output, file));
      assets.push(file);
    }
  }
  writeJson(path.join(output, "release.json"), receipt);
  assets.push("release.json");
  writeFileSync(path.join(output, "SHA256SUMS"), assets.map((file) => `${digest(readFileSync(path.join(output, file)), "sha256")}  ${file}\n`).join(""));
  return receipt;
}

export function checkPublished(metadata, receipt) {
  if (metadata.name !== receipt.name || metadata.version !== receipt.version || metadata.dist?.integrity !== receipt.integrity || metadata.gitHead !== receipt.source_commit) throw new Error("Existing npm version differs from this release; never overwrite or silently skip it");
}

export async function registryState(receipt, fetcher = fetch) {
  const spec = releaseSpec(receipt.tag);
  if (spec.name !== receipt.name || spec.version !== receipt.version) throw new Error("Invalid release receipt");
  const response = await fetcher(`${registry}/${encodeURIComponent(spec.name)}/${spec.version}`, { signal: AbortSignal.timeout(30_000) });
  if (response.status === 404) return "missing";
  if (!response.ok) throw new Error(`npm registry check failed: HTTP ${response.status}`);
  checkPublished(await response.json(), receipt);
  return "identical";
}

export async function assertBootstrap(tag, env, fetcher = fetch) {
  assertIdentity(env);
  if (env.GITHUB_EVENT_NAME !== "workflow_dispatch" || env.GITHUB_REF !== `refs/tags/${tag}`) throw new Error("Bootstrap requires explicit dispatch at the release tag");
  const spec = releaseSpec(tag);
  const response = await fetcher(`${registry}/${encodeURIComponent(spec.name)}`, { signal: AbortSignal.timeout(30_000) });
  if (response.status !== 404) throw new Error(`Bootstrap requires an unregistered package name; registry returned ${response.status}`);
}

export async function assertChannelAdvance(tag, fetcher = fetch) {
  const spec = releaseSpec(tag);
  const response = await fetcher(`${registry}/${encodeURIComponent(spec.name)}/${spec.dist_tag}`, { signal: AbortSignal.timeout(30_000) });
  if (response.status === 404) return;
  if (!response.ok) throw new Error(`Cannot verify npm channel: HTTP ${response.status}`);
  const current = await response.json();
  if (current.name !== spec.name || compareSemver(spec.version, current.version) <= 0) throw new Error(`Refusing to move npm ${spec.dist_tag} backwards or reuse its version`);
}

export async function tagAndDispatch(spec, head, request) {
  const endpoint = `/repos/${repository}/git/refs`;
  const existing = await request(`/repos/${repository}/git/ref/tags/${spec.tag}`, "GET");
  if (existing.status === 404) {
    const created = await request(endpoint, "POST", { ref: `refs/tags/${spec.tag}`, sha: head });
    if (created.status !== 201) throw new Error(`Cannot create tag: HTTP ${created.status}`);
  } else if (existing.status !== 200 || existing.body?.object?.type !== "commit" || existing.body?.object?.sha !== head) {
    throw new Error("Tag exists at a different commit or tag lookup failed");
  }
  // GITHUB_TOKEN tag pushes do not trigger workflows; dispatch explicitly.
  const dispatch = await request(`/repos/${repository}/actions/workflows/publish.yml/dispatches`, "POST", { ref: spec.tag, inputs: { tag_name: spec.tag } });
  if (dispatch.status !== 204) throw new Error(`Publish dispatch failed: HTTP ${dispatch.status}; retry the tag workflow without moving the tag`);
}

async function githubRequest(endpoint, method, body) {
  if (!process.env.GH_TOKEN) throw new Error("Missing job-scoped GH_TOKEN");
  const response = await fetch(`https://api.github.com${endpoint}`, {
    method, headers: { Authorization: `Bearer ${process.env.GH_TOKEN}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" },
    ...(body ? { body: JSON.stringify(body) } : {}), signal: AbortSignal.timeout(30_000),
  });
  return { status: response.status, body: response.status === 204 ? null : await response.json() };
}

function emit(values) {
  console.log(JSON.stringify(values, null, 2));
  if (process.env.GITHUB_OUTPUT) for (const [key, value] of Object.entries(values)) appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${typeof value === "object" ? JSON.stringify(value) : value}\n`);
}

async function main() {
  const [command, ...args] = process.argv.slice(2);
  const root = process.cwd();
  if (command === "detect" && args.length === 0) {
    const releases = detectReleases(root, process.env.BASE_REF, process.env.HEAD_REF);
    emit({ any_changed: releases.length > 0, releases });
  } else if (command === "context" && args.length === 1) {
    emit(releaseContext(root, args[0], process.env));
  } else if (command === "build" && args.length === 2) {
    emit(await buildRelease(root, args[0], path.resolve(args[1])));
  } else if (command === "registry" && args.length === 1) {
    const receipt = json(args[0]);
    const bytes = readFileSync(path.join(path.dirname(args[0]), receipt.filename));
    if (`sha512-${digest(bytes, "sha512", "base64")}` !== receipt.integrity) throw new Error("Local tarball no longer matches its receipt");
    emit({ registry_state: await registryState(receipt) });
  } else if (command === "bootstrap" && args.length === 1) {
    await assertBootstrap(args[0], process.env);
  } else if (command === "channel" && args.length === 1) {
    await assertChannelAdvance(args[0]);
  } else if (command === "tag" && args.length === 0) {
    assertIdentity(process.env);
    const head = process.env.HEAD_REF;
    if (process.env.GITHUB_EVENT_NAME !== "push" || process.env.GITHUB_REF !== "refs/heads/main" || process.env.GITHUB_SHA !== head || process.env.GITHUB_WORKFLOW_SHA !== head || git(root, "rev-parse", "HEAD") !== head) throw new Error("Tag automation requires the exact main push checkout");
    git(root, "merge-base", "--is-ancestor", head, "refs/remotes/origin/main");
    for (const spec of detectReleases(root, process.env.BASE_REF, head)) await tagAndDispatch(spec, head, githubRequest);
  } else throw new Error("Usage: npm-release.mjs detect | tag | context <tag> | build <tag> <new-output-directory> | registry <release.json> | bootstrap <tag> | channel <tag>");
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) main().catch((error) => { console.error(error.message); process.exitCode = 1; });
