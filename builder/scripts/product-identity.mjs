import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { lstatSync, readFileSync, realpathSync } from "node:fs";
import path from "node:path";
import { compareSemver } from "../lib/lifecycle-policy.ts";

export const PRODUCT_VERSION_FILE = "product-release.json";
export const PRODUCT_MIRRORS = [
  ["packages/tiangong-pcr-cli/package.json", "@tiangong-lca/pcr"],
  ["packages/tiangong-pcr-library/package.json", "@tiangong-lca/pcr-library"],
  ["packages/pcr-docs/package.json", "@tiangong-lca/pcr-docs"],
];
export const productGit = (root, ...args) => execFileSync("git", args, {
  cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], maxBuffer: 32 * 1024 * 1024,
}).trim();
export const productSha256 = bytes => `sha256:${createHash("sha256").update(bytes).digest("hex")}`;

export function assertProductSemver(version) {
  if (typeof version !== "string" || version !== version.trim() || !/^[0-9]+\.[0-9]+\.[0-9]+(?:-[0-9A-Za-z.-]+)?$/u.test(version))
    throw new Error("Invalid product version; SemVer build metadata is not supported.");
  compareSemver(version, version);
  return version;
}

function sourceJson(root, relative, ref) {
  return JSON.parse(ref === null ? readFileSync(path.join(root, relative), "utf8") : productGit(root, "show", `${ref}:${relative}`));
}

export function readProductVersion(root, { ref = null, verifyMirrors = true } = {}) {
  const config = sourceJson(root, PRODUCT_VERSION_FILE, ref);
  if (config.schema !== 1 || Object.keys(config).sort().join(",") !== "node,npm,schema,version,web")
    throw new Error("Invalid product version source shape.");
  assertProductSemver(config.version);
  if (config.version.includes("-")) throw new Error("Unified product publication currently supports stable production versions only.");
  for (const key of ["node", "npm"]) {
    if (typeof config[key] !== "string" || !/^[0-9]+\.[0-9]+\.[0-9]+$/u.test(config[key]))
      throw new Error(`Product ${key} must pin an exact stable version.`);
    compareSemver(config[key], config[key]);
  }
  if (config.web?.site !== "global" || config.web?.origin !== "https://pcr.tiangong.earth"
    || Object.keys(config.web).sort().join(",") !== "origin,site") throw new Error("Product web target must be the existing global PCR project.");
  if (verifyMirrors) for (const [relative, name] of PRODUCT_MIRRORS) {
    const mirror = sourceJson(root, relative, ref);
    if (mirror.name !== name || mirror.private !== true || mirror.version !== config.version)
      throw new Error(`Product version mirror differs: ${relative}`);
  }
  return config;
}

export function assertCleanProductSource(root) {
  if (productGit(root, "status", "--porcelain", "--untracked-files=normal")) throw new Error("Product release requires a clean source checkout.");
}

export function assertProductIdentity(identity) {
  if (!identity || Object.keys(identity).sort().join(",") !== "schema,sourceCommit,sourceFingerprint,tag,version"
    || identity.schema !== 1 || identity.tag !== `v${assertProductSemver(identity.version)}`
    || typeof identity.sourceCommit !== "string" || identity.sourceCommit.length !== 40 || !/^[a-f0-9]{40}$/u.test(identity.sourceCommit)
    || typeof identity.sourceFingerprint !== "string" || identity.sourceFingerprint.length !== 71 || !/^sha256:[a-f0-9]{64}$/u.test(identity.sourceFingerprint)) throw new Error("Invalid product identity.");
  return identity;
}

export function readProductIdentity(root, { requireClean = true } = {}) {
  root = realpathSync(root);
  if (requireClean) assertCleanProductSource(root);
  const config = readProductVersion(root);
  const sourceCommit = productGit(root, "rev-parse", "HEAD");
  const tracked = execFileSync("git", ["ls-files", "--stage", "-z", "--", "library", "classifications"], {
    cwd: root, encoding: "utf8", maxBuffer: 32 * 1024 * 1024,
  }).split("\0").filter(Boolean).map(entry => {
    const match = /^(100644|100755) [a-f0-9]+ 0\t(.+)$/su.exec(entry);
    if (!match) throw new Error("Product content must contain only regular tracked files without unresolved index stages.");
    return match[2];
  }).sort();
  if (!tracked.length) throw new Error("Product content inventory is empty.");
  const hash = createHash("sha256");
  hash.update("tiangong-pcr-product-content-v1\n");
  for (const relative of tracked) {
    if (!/^(?:library|classifications)\//u.test(relative) || relative.split("/").some(part => part === ".." || part === ""))
      throw new Error("Unsafe product content path.");
    const file = path.join(root, relative);
    if (!lstatSync(file).isFile() || realpathSync(file) !== file) throw new Error(`Product content is not a canonical regular file: ${relative}`);
    hash.update(`${JSON.stringify([relative, productSha256(readFileSync(file))])}\n`);
  }
  if (productGit(root, "rev-parse", "HEAD") !== sourceCommit) throw new Error("Product source commit changed during identity collection.");
  if (requireClean) assertCleanProductSource(root);
  return assertProductIdentity({ schema: 1, version: config.version, tag: `v${config.version}`, sourceCommit,
    sourceFingerprint: `sha256:${hash.digest("hex")}` });
}
