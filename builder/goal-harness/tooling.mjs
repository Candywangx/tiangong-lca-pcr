import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";

export function ensureCorepackToolPath(stateDir) {
  const binDir = path.join(stateDir, "tools", "corepack-bin");
  const pnpmPath = path.join(binDir, process.platform === "win32" ? "pnpm.cmd" : "pnpm");
  if (!existsSync(pnpmPath)) {
    mkdirSync(binDir, { recursive: true });
    try {
      execFileSync("corepack", ["enable", "--install-directory", binDir], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    } catch (error) {
      throw new GoalHarnessError("GOAL_COREPACK_SHIM_FAILED", `Cannot provision the runtime pnpm shim without changing repository dependencies: ${error.message}`);
    }
  }
  return { bin_dir: binDir, environment: { ...process.env, PATH: `${binDir}${path.delimiter}${process.env.PATH ?? ""}` } };
}
