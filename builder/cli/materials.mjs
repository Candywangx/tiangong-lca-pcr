#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { parseArgs } from "node:util";
import { queryMaterials, readMaterial, registerMaterial, resolveMaterialsRoot } from "../lib/shared-materials.mjs";

try {
  const { values, positionals } = parseArgs({ allowPositionals: true, options: Object.fromEntries([
    "root", "input", "request", "product", "process", "need", "doi", "url", "route", "state", "basis", "unit", "required-version", "limit", "offset", "id", "fragment", "start-line", "end-line",
  ].map(key => [key, { type: "string" }]).concat([["help", { type: "boolean" }]])) });
  if (values.help || !positionals.length) {
    process.stdout.write(`PCR shared materials (production only; no network or extraction calls)
  query --product NAME --process PROCESS --need QUESTION [--request request.json] [--limit 5 --offset 0]
  read --id RECORD [--fragment FRAGMENT | --start-line N --end-line N] [--request request.json]
  register --input registration.json   (use --input - for stdin)
All commands accept --root DIR. Default: TIANGONG_PCR_MATERIALS_DIR, then Git common-dir/pcr-materials.
JSON results are bounded candidates, never automatic evidence adoption. Read fragments, assess scope and gaps,
use existing source tools only for gaps, then register reusable results. See builder/docs/tools/shared-materials.md.
`);
  } else {
    const root = resolveMaterialsRoot({ root: values.root });
    const request = values.request ? JSON.parse(readFileSync(values.request, "utf8")) : {};
    for (const key of ["product", "process", "need", "doi", "url", "route", "state", "basis", "unit"]) if (values[key]) request[key] = values[key];
    if (values["required-version"]) request.required_version = values["required-version"];
    let result;
    if (positionals[0] === "query") result = queryMaterials({ root, request, limit: Number(values.limit ?? 5), offset: Number(values.offset ?? 0) });
    else if (positionals[0] === "read") result = readMaterial({ root, id: values.id, fragment: values.fragment, request, startLine: values["start-line"] === undefined ? undefined : Number(values["start-line"]), endLine: values["end-line"] === undefined ? undefined : Number(values["end-line"]) });
    else if (positionals[0] === "register") {
      if (!values.input) throw new Error("register requires --input");
      const saved = registerMaterial({ root, input: JSON.parse(readFileSync(values.input === "-" ? 0 : values.input, "utf8")) });
      result = { root, id: saved.id, created: saved.created, source_id: saved.record.source.id, original: saved.record.original ?? null, extraction: saved.record.extraction ?? null };
    } else throw new Error(`Unknown command: ${positionals[0]}`);
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  }
} catch (error) {
  process.stderr.write(`${JSON.stringify({ code: "PCR_MATERIALS_ERROR", message: error.message })}\n`);
  process.exitCode = 1;
}
