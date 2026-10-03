#!/usr/bin/env node
import { runTiangongPcr } from "../src/commands.ts";

const result = runTiangongPcr(process.argv.slice(2));

if (result.stdout) {
  process.stdout.write(result.stdout);
}
if (result.stderr) {
  process.stderr.write(result.stderr);
}
process.exitCode = result.exitCode;
