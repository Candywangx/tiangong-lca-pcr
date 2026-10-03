import { readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export interface RuntimeIdentity {
  node: string;
  npm?: string;
  platform: string;
  arch: string;
}

export interface ToolchainPins {
  node: string;
  npm: string;
}

/** Development pins and product qualification must identify the same runtime. */
export function readToolchainPins(root: string): ToolchainPins {
  const node = readFileSync(path.join(root, ".nvmrc"), "utf8").trim();
  if (!/^24\.\d+\.\d+$/u.test(node)) {
    throw new Error("PCR_NODE_PIN_INVALID: .nvmrc must name an exact Node 24 version.");
  }
  const product: unknown = JSON.parse(readFileSync(path.join(root, "product-release.json"), "utf8"));
  if (typeof product !== "object" || product === null || !("node" in product) || product.node !== node
    || !("npm" in product) || typeof product.npm !== "string" || !/^\d+\.\d+\.\d+$/u.test(product.npm)) {
    throw new Error("PCR_TOOLCHAIN_PIN_MISMATCH: product-release.json must match .nvmrc and pin npm exactly.");
  }
  return { node, npm: product.npm };
}

export function verifyRuntime(pins: ToolchainPins, actual: RuntimeIdentity, release = false): void {
  const supported = new Set(["linux-x64", "linux-arm64", "darwin-arm64", "win32-x64"]);
  if (!supported.has(`${actual.platform}-${actual.arch}`)) {
    throw new Error("PCR_PLATFORM_UNSUPPORTED: use Linux x64/arm64, Windows x64, or macOS Apple Silicon (arm64).");
  }
  if (actual.node.replace(/^v/u, "") !== pins.node) {
    throw new Error(`PCR_NODE_VERSION_MISMATCH: expected ${pins.node}; run nvm install && nvm use.`);
  }
  if (release && actual.npm !== pins.npm) {
    throw new Error(`PCR_NPM_VERSION_MISMATCH: release qualification requires npm ${pins.npm}.`);
  }
}

export function main(args: string[], root = process.cwd()): number {
  try {
    if (args.some((arg) => arg !== "--release") || args.length > 1) {
      throw new Error("Usage: node scripts/engineering/runtime.ts [--release]");
    }
    const pins = readToolchainPins(root);
    const npm = /^npm\/(\S+)/u.exec(process.env.npm_config_user_agent ?? "")?.[1];
    verifyRuntime(pins, { node: process.versions.node, platform: process.platform, arch: process.arch,
      ...(npm === undefined ? {} : { npm }) }, args.includes("--release"));
    process.stdout.write(`${JSON.stringify({ verified: true, node: pins.node, npm: pins.npm,
      npmChecked: args.includes("--release"), platform: `${process.platform}-${process.arch}` })}\n`);
    return 0;
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    return 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  process.exitCode = main(process.argv.slice(2));
}
