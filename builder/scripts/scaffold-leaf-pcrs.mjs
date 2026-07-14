import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cliPath = path.resolve(__dirname, "../cli/index.mjs");
process.stderr.write(
  "Compatibility warning: pcr:scaffold:cpc creates legacy empty PCR records; use pcr:import:cpc for new classification imports.\n",
);
const result = spawnSync(process.execPath, [
  cliPath,
  "scaffold-cpc",
  ...process.argv.slice(2),
], {
  stdio: "inherit",
});

process.exit(result.status ?? 1);
