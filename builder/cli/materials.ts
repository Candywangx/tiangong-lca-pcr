#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { parseArgs, type ParseArgsConfig } from "node:util";
import { queryMaterials, readMaterial, registerMaterial, resolveMaterialsRoot } from "../lib/shared-materials.ts";

import { errorMessage } from "../../packages/pcr-core/src/types.ts";

try {
  const options: NonNullable<ParseArgsConfig["options"]> = Object.fromEntries([
    "root", "input", "request", "product", "process", "need", "doi", "url", "route", "state", "basis", "unit", "required-version", "limit", "offset", "id", "fragment", "start-line", "end-line",
  ].map(key => [key, { type: "string" as const }]).concat([]));
  options.help={type:"boolean"};
  const { values, positionals } = parseArgs({allowPositionals:true,options});
  const flags: Record<string,string | undefined>={};
  for (const [key,value] of Object.entries(values)) if(typeof value === "string") flags[key]=value;
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
    const root = resolveMaterialsRoot({ root: flags.root });
    const rawRequest: unknown = flags.request ? JSON.parse(readFileSync(flags.request, "utf8")) : {};
    const request = rawRequest;
    const setRequest=(key:string,value:string)=> {if(request===null || typeof request!=="object")throw new TypeError(`Cannot set material request property ${key}`);Reflect.set(request,key,value);};
    for (const key of ["product", "process", "need", "doi", "url", "route", "state", "basis", "unit"]) {const value=flags[key];if(value)setRequest(key,value);}
    if (flags["required-version"]) setRequest("required_version",flags["required-version"]);
    let result;
    if (positionals[0] === "query") result = queryMaterials({ root, request, limit: Number(flags.limit ?? 5), offset: Number(flags.offset ?? 0) });
    else if (positionals[0] === "read") result = readMaterial({ root, id: flags.id, fragment: flags.fragment, request, startLine: flags["start-line"] === undefined ? undefined : Number(flags["start-line"]), endLine: flags["end-line"] === undefined ? undefined : Number(flags["end-line"]) });
    else if (positionals[0] === "register") {
      if (!flags.input) throw new Error("register requires --input");
      const saved = registerMaterial({ root, input: JSON.parse(readFileSync(flags.input === "-" ? 0 : flags.input, "utf8")) });
      result = { root, id: saved.id, created: saved.created, source_id: saved.record.source.id, original: saved.record.original ?? null, extraction: saved.record.extraction ?? null };
    } else throw new Error(`Unknown command: ${positionals[0]}`);
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  }
} catch (error) {
  process.stderr.write(`${JSON.stringify({ code: "PCR_MATERIALS_ERROR", message: errorMessage(error) })}\n`);
  process.exitCode = 1;
}
