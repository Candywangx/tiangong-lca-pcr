import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { parsePcrMarkdownToStructured } from "../../builder/lib/markdown-projection.ts";
import { structuredProjectionYaml } from "../../builder/lib/structured-yaml-projection.ts";

const cliPath = path.resolve("packages/tiangong-pcr-cli/bin/tiangong-pcr.ts");
const repoRoot = path.resolve(".");

function record(value: unknown): Record<string, unknown> {
  assert.ok(value !== null && typeof value === "object" && !Array.isArray(value), "expected an object");
  return value as Record<string, unknown>;
}
function array(value: unknown): unknown[] { assert.ok(Array.isArray(value)); return value; }
function number(value: unknown): number { assert.equal(typeof value, "number"); return value as number; }
function match(value: unknown, pattern: RegExp): void { assert.match(string(value), pattern); }
function string(value: unknown): string { assert.equal(typeof value, "string"); return value as string; }
function errorEnvelope(text: string | Buffer): Record<string, unknown> { return record(json(text).error); }
function json(text: string | Buffer): Record<string, unknown> { const value: unknown = JSON.parse(String(text)); return record(value); }
function childError(value: unknown): { status: unknown; stdout: unknown; stderr: unknown } {
  const error = record(value);
  assert.ok(Object.hasOwn(error, "stdout") && Object.hasOwn(error, "stderr"));
  return { status: error.status, stdout: error.stdout, stderr: error.stderr };
}

const cpcCoverageIndex = json(
  readFileSync(
    path.join(repoRoot, "classifications/indexes/cpc-3.0-coverage.json"),
    "utf8",
  ),
);
const wheatSeedPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const scaffoldPcrId =
  "pcr.community-social-and-personal-services.education-services.primary-education-services";

function runCli(args: readonly string[]): string {
  return execFileSync(process.execPath, [cliPath, "--root", repoRoot, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function runCliFailure(args: readonly string[]): string {
  return execFileSync(process.execPath, [cliPath, "--root", repoRoot, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function runCliAtRoot(root: string, args: readonly string[]): string {
  return execFileSync(process.execPath, [cliPath, "--root", root, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function installEmptyPcrAliasBinding(root: string): void {
  const registryPath = path.join(
    root,
    "classifications/aliases/pcr-id-aliases.yaml",
  );
  const registry = `schema_version: 1
registry_kind: legacy-pcr-id-aliases
status: current
aliases: []
`;
  mkdirSync(path.dirname(registryPath), { recursive: true });
  writeFileSync(registryPath, registry);

  const digest = createHash("sha256").update(registry).digest("hex");
  const catalogPath = path.join(root, "library/catalog.yaml");
  mkdirSync(path.dirname(catalogPath), { recursive: true });
  writeFileSync(
    catalogPath,
    `schema_version: 1
catalog_status: current
pcr_id_aliases:
  path: classifications/aliases/pcr-id-aliases.yaml
  hash_mode: exact_bytes
  sha256: sha256:${digest}
  entry_count: 0
`,
  );
}

test("list prints PCR records as JSON", () => {
  const output = runCli(["list", "--status", "candidate", "--format", "json"]);
  const page = json(output);

  assert.equal(page.page, 1);
  assert.equal(page.page_size, 10);
  assert.equal(array(page.items).length, 10);
  assert.ok(array(page.items).every((entry) => record(entry).status === "candidate"));
  assert.ok(array(page.items).every((entry) => typeof record(entry).id === "string"));
});

test("list defaults to material scope and derives legacy scope for scaffold filters", () => {
  const material = json(runCli(["list", "--format", "json"]));
  const legacy = json(runCli([
    "list",
    "--status",
    "scaffold",
    "--page-size",
    "2",
    "--format",
    "json",
  ]));

  assert.equal(material.requested_scope, null);
  assert.equal(material.effective_scope, "material");
  assert.equal(material.scope_source, "default");
  assert.equal(record(material.filters).scope, "material");
  assert.ok(array(material.items).every((entry) => record(entry).record_kind === "methodology"));

  assert.equal(legacy.requested_scope, null);
  assert.equal(legacy.effective_scope, "legacy");
  assert.equal(legacy.scope_source, "derived_from_status");
  assert.equal(record(legacy.filters).scope, "legacy");
  assert.ok(array(legacy.items).every((entry) => record(entry).record_kind === "legacy_scaffold_reference"));
});

test("list paginates to 10 records by default and suggests the next page", () => {
  const output = runCli(["list", "--scope", "all"]);

  match(output, /PCR id \| Status \| Readiness \| Title/);
  match(output, /Showing 1-10 of /);
  match(output, /Next page:/);
  match(output, /npm --silent run tiangong-pcr -- list --scope all --page 2/);
  match(output, /--root /);
  match(output, /usable_for_guidance/);
});

test("list next commands preserve custom root and output format", () => {
  const page = json(runCli(["list", "--scope", "all", "--format", "json"]));

  match(page.next_command, /--root /);
  match(page.next_command, /--format json/);
  match(page.next_command, /--page 2/);
});

test("list path-prefix filters the catalog and survives pagination", () => {
  const pathPrefix =
    "agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening";
  const page = json(runCli([
    "list",
    "--scope",
    "all",
    "--path-prefix",
    pathPrefix,
    "--page-size",
    "1",
    "--format",
    "json",
  ]));

  assert.equal(page.page_size, 1);
  assert.ok(number(page.total_count) > 1);
  assert.ok(array(page.items).every((entry) => string(record(entry).path).includes(pathPrefix)));
  assert.deepEqual(page.filters, {
    scope: "all",
    status: null,
    content_maturity: null,
    path_prefix: pathPrefix,
  });
  assert.equal(page.has_more, true);
  match(page.next_command, /npm --silent run tiangong-pcr -- list/);
  match(page.next_command, new RegExp(`--path-prefix ${pathPrefix}`));
});

test("help explains the Agent selection workflow", () => {
  const output = runCli(["--help"]);

  match(output, /Usage:/);
  match(output, /Agent workflow/);
  match(output, /resolve --classification/);
  match(output, /tree\/list/);
  match(output, /guidance --pcr/);
  match(output, /validate-model/);
  match(output, /validate-dataset/);
});

test("list help explains pagination and JSON output", () => {
  const output = runCli(["list", "--help"]);

  match(output, /Usage: tiangong-pcr list/);
  match(output, /Defaults to 10 records per page/);
  match(output, /JSON output/);
  match(output, /next_command/);
});

test("resolve help explains deterministic mapping usage", () => {
  const output = runCli(["resolve", "--help"]);

  match(output, /Usage: tiangong-pcr resolve/);
  match(output, /deterministic contracts/);
  match(output, /cpc:3.0:01111/);
  match(output, /--pcr <pcr-id>/);
  match(output, /never silently follows/);
  match(output, /does not prove that the methodology is usable/);
});

test("coverage help exposes bounded deterministic browsing and no auto-selection", () => {
  const parentHelp = runCli(["coverage", "--help"]);
  const summaryHelp = runCli(["coverage", "summary", "--help"]);
  const listHelp = runCli(["coverage", "list", "--help"]);

  match(parentHelp, /Usage: tiangong-pcr coverage <summary\|list>/);
  match(parentHelp, /coverage summary --classification <system>:<version>/);
  match(parentHelp, /coverage list --classification <system>:<version>/);
  match(parentHelp, /summary and list support json\|table/);
  match(parentHelp, /npm --silent run tiangong-pcr -- coverage summary --classification cpc:3\.0 --format json/);
  match(summaryHelp, /bounded aggregate coverage/);
  match(summaryHelp, /cpc:3\.0/);
  match(listHelp, /not fuzzy search/);
  match(listHelp, /never selected as accepted PCR mappings/);
  match(listHelp, /previous_command/);
});

test("coverage parent errors name both valid subcommands", () => {
  for (const args of [["coverage"], ["coverage", "nope"]]) {
    assert.throws(
      () => runCliFailure(args),
      (error) => {
        const stderr = String(childError(error).stderr);
        match(stderr, /coverage summary --classification <system>:<version>/);
        match(stderr, /coverage list --classification <system>:<version>/);
        return true;
      },
    );
  }

  assert.throws(
    () => runCliFailure(["coverage", "--format", "json"]),
    (error) => {
      assert.equal(String(childError(error).stdout), "");
      const envelope = json(String(childError(error).stderr));
      assert.equal(record(envelope.error).code, "PCR_CLI_MISSING_SUBCOMMAND");
      assert.deepEqual(record(record(envelope.error).details).valid_subcommands, ["summary", "list"]);
      return true;
    },
  );
});

test("coverage summary is bounded and coverage list exposes stable pagination context", () => {
  const summary = json(runCli([
    "coverage",
    "summary",
    "--classification",
    "cpc:3.0",
    "--format",
    "json",
  ]));
  const page = json(runCli([
    "coverage",
    "list",
    "--classification",
    "cpc:3.0",
    "--status",
    "unmapped",
    "--page-size",
    "2",
    "--format",
    "json",
  ]));

  assert.deepEqual(summary.summary, record(cpcCoverageIndex.summary));
  assert.equal(record(summary.completeness).bounded, true);
  assert.equal(record(summary.completeness).entry_details_included, false);
  assert.equal(Object.hasOwn(summary, "entries"), false);
  match(summary.next_command, /coverage list --classification cpc:3\.0/);

  assert.deepEqual(page.filters, { status: "unmapped" });
  assert.equal(record(page.completeness).page, 1);
  assert.equal(record(page.completeness).page_size, 2);
  assert.equal(record(page.completeness).returned_count, 2);
  assert.equal(record(page.completeness).total_count, record(cpcCoverageIndex.summary).unmapped);
  assert.equal(record(page.completeness).has_more, true);
  assert.ok(array(page.items).every((entry) => record(entry).coverage_status === "unmapped"));
  assert.ok(array(page.items).every((entry) => record(entry).mapping === null));
  match(page.next_command, /--status unmapped/);
  match(page.next_command, /--page 2/);
  match(page.next_command, /--root /);
  match(page.next_command, /--format json/);
});

test("guidance help routes authoring and existing-data review with source-cited topic selection", () => {
  const output = runCli(["guidance", "--help"]);

  match(output, /general LCA authoring/);
  match(output, /optional TIDAS authoring or existing-data review/);
  match(output, /--topic/);
  match(output, /--pointer/);
  match(output, /applicability and declared scope/);
});

test("feedback draft help lists feedback types", () => {
  const output = runCli(["feedback", "draft", "--help"]);

  match(output, /Usage: tiangong-pcr feedback draft/);
  match(output, /range_evidence_update/);
  match(output, /translation_mismatch/);
});

test("validate-dataset help documents input, coverage, and exit semantics", () => {
  const output = runCli(["validate-dataset", "--help"]);

  match(output, /Usage: tiangong-pcr validate-dataset/);
  match(output, /foreground data package JSON/);
  match(output, /validation_status/);
  match(output, /check_coverage/);
  match(output, /--fail-on never\|error\|warning/);
  match(output, /Defaults to error/);
  match(output, /Exit codes:/);
  match(output, /inconclusive/);
});

test("resolve prints deterministic classification mapping as JSON", () => {
  const output = runCli(["resolve", "--classification", "cpc:3.0:01111", "--format", "json"]);
  const result = json(output);

  assert.equal(record(result.mapping).pcr_id, wheatSeedPcrId);
  assert.equal(record(result.mapping).mapping_type, "exact");
  assert.equal(result.resolution_status, "mapped");
  assert.equal(result.coverage_status, "mapped");
  assert.equal(record(result.coverage).code, "01111");
  match(result.next_command, /--root /);
  match(result.next_command, /--format json/);
});

test("resolve returns retired classification leaves as known unmapped coverage", () => {
  const result = json(runCli([
    "resolve",
    "--classification",
    "cpc:3.0:99000",
    "--format",
    "json",
  ]));

  assert.equal(result.resolution_status, "unmapped");
  assert.equal(result.coverage_status, "unmapped");
  assert.equal(record(result.mapping), null);
  assert.equal(result.pcr, null);
  match(result.next_command, /coverage list/);
});

test("resolve accepts exactly one selector and does not auto-follow retired PCR ids", () => {
  const redirected = json(runCli([
    "resolve",
    "--pcr",
    scaffoldPcrId,
    "--format",
    "json",
  ]));
  assert.equal(redirected.resolution_status, "legacy_id_redirect");
  assert.equal(redirected.requested_pcr_id, scaffoldPcrId);
  assert.equal(redirected.pcr, null);
  assert.equal(record(redirected.redirect).source_pcr_id, scaffoldPcrId);
  assert.equal(record(record(redirected.redirect).target).kind, "classification_coverage");
  match(redirected.next_command, /resolve --classification cpc:3\.0:92200/);
  match(redirected.next_command, /--root /);
  assert.equal(record(redirected.redirect).next_command, redirected.next_command);
  assert.ok(array(redirected.next_steps).some((step) => string(step).includes("not automatically selected")));

  const canonical = json(runCli([
    "resolve",
    "--pcr",
    wheatSeedPcrId,
    "--format",
    "json",
  ]));
  assert.equal(canonical.resolution_status, "canonical");
  assert.equal(record(canonical.pcr).id, wheatSeedPcrId);
  assert.equal(record(record(canonical.pcr).readiness).usable_for_guidance, true);
  match(canonical.next_command, /guidance --pcr/);

  for (const args of [
    ["resolve", "--format", "json"],
    [
      "resolve",
      "--classification",
      "cpc:3.0:01111",
      "--pcr",
      wheatSeedPcrId,
      "--format",
      "json",
    ],
  ]) {
    assert.throws(
      () => runCliFailure(args),
      (error) => {
        assert.equal(String(childError(error).stdout), "");
        const envelope = json(String(childError(error).stderr));
        assert.equal(record(envelope.error).code, "PCR_CLI_EXACTLY_ONE_SELECTOR_REQUIRED");
        return true;
      },
    );
  }
});

test("resolve returns known non-mapped coverage as success and rejects only unknown codes", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-cli-unmapped-"));
  try {
    writeKnownUnmappedCoverage(root);
    const known = json(runCliAtRoot(root, [
      "resolve",
      "--classification",
      "cpc:3.0:X-1",
      "--format",
      "json",
    ]));
    assert.equal(known.resolution_status, "unmapped");
    assert.equal(known.coverage_status, "unknown");
    assert.equal(known.mapping, null);
    assert.equal(known.pcr, null);
    match(known.next_command, /coverage list/);

    assert.throws(
      () => runCliAtRoot(root, [
        "resolve",
        "--classification",
        "cpc:3.0:NOT-THERE",
        "--format",
        "json",
      ]),
      (error) => {
        assert.equal(String(childError(error).stdout), "");
        const envelope = json(String(childError(error).stderr));
        assert.equal(record(envelope.error).code, "PCR_CLASSIFICATION_CODE_UNKNOWN");
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("guidance prints Agent-facing data-production PCR rules", () => {
  const output = runCli(["guidance", "--pcr", wheatSeedPcrId, "--format", "json"]);
  const guidance = json(output);

  assert.equal(record(guidance.reference_flow).reference_unit, "kg");
  assert.ok(array(record(guidance.system_boundary).rules).length > 0);
  assert.equal(record(guidance.boundary_abstraction).declared_starting_condition, "source_seed_lot");
  assert.ok(array(guidance.process_map).length > 0);
  assert.ok(array(record(guidance.production_guidance).collection_protocols).length > 0);
  assert.ok(array(guidance.allocation_rules).length > 0);
  assert.ok(array(guidance.validation_rules).length > 0);
  assert.equal(string(record(guidance.published_dataset_profile).downstream_use).includes("secondary_dataset"), true);
  assert.equal(record(guidance.readiness).usable_for_guidance, true);
});

test("guidance redirects a retired scaffold id with no JSON stdout", () => {
  assert.throws(
    () => runCliFailure(["guidance", "--pcr", scaffoldPcrId, "--format", "json"]),
    (error) => {
      assert.equal(String(childError(error).stdout), "");
      const envelope = json(String(childError(error).stderr));
      assert.equal(record(envelope.error).code, "PCR_LEGACY_ID_REDIRECT");
      assert.equal(record(record(envelope.error).details).source_pcr_id, scaffoldPcrId);
      match(record(record(envelope.error).details).next_command, /resolve --classification/);
      match(record(record(envelope.error).details).next_command, /--root /);
      return true;
    },
  );
});

test("show returns the stable retired-id redirect code before content lookup", () => {
  assert.throws(
    () => runCliFailure(["show", "--pcr", scaffoldPcrId]),
    (error) => {
      assert.equal(String(childError(error).stdout), "");
      match(String(childError(error).stderr), /\[PCR_LEGACY_ID_REDIRECT\]/);
      match(String(childError(error).stderr), /resolve --classification cpc:3\.0:92200/);
      match(String(childError(error).stderr), /--root /);
      return true;
    },
  );
});

test("validate-dataset reports missing collection protocol records", () => {
  const tempDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-dataset-"));
  try {
    const inputPath = path.join(tempDir, "dataset.json");
    writeFileSync(inputPath, JSON.stringify({ collection_records: [{ protocol_id: "cp_source_seed_lot_mass" }] }));

    const output = runCli([
      "validate-dataset",
      "--pcr",
      wheatSeedPcrId,
      "--input",
      inputPath,
      "--format",
      "json",
      "--fail-on",
      "never",
    ]);
    const result = json(output);

    assert.equal(result.validation_status, "failed");
    assert.equal(result.completeness, "partial");
    assert.equal(record(result.input).accepted, true);
    assert.ok(array(record(result.check_coverage).checks_performed).length > 0);
    assert.ok(array(result.findings).some((finding) => record(finding).code === "missing_collection_protocol_record"));
    assert.ok(array(result.findings).some((finding) => string(record(finding).message).includes("cp_harvested_seed_mass")));
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});

test("validate-dataset rejects malformed JSON with a non-zero exit and clean stdout", () => {
  const tempDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-invalid-dataset-"));
  try {
    const inputPath = path.join(tempDir, "dataset.json");
    writeFileSync(inputPath, "{ definitely not json");

    assert.throws(
      () => runCliFailure(["validate-dataset", "--pcr", wheatSeedPcrId, "--input", inputPath, "--format", "json"]),
      (error) => {
        assert.equal(String(childError(error).stdout), "");
        match(String(childError(error).stderr), /Malformed dataset JSON/);
        return true;
      },
    );
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});

test("validate-dataset defaults to an error gate and supports explicit report-only mode", () => {
  const tempDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-fail-on-"));
  try {
    const inputPath = path.join(tempDir, "dataset.json");
    writeFileSync(inputPath, JSON.stringify({ collection_records: [] }));

    assert.throws(
      () => runCliFailure([
        "validate-dataset",
        "--pcr",
        wheatSeedPcrId,
        "--input",
        inputPath,
        "--format",
        "json",
      ]),
      (error) => {
        assert.equal(childError(error).status, 2);
        assert.equal(json(String(childError(error).stdout)).validation_status, "failed");
        assert.equal(String(childError(error).stderr), "");
        return true;
      },
    );

    const reportOnly = json(runCli([
      "validate-dataset",
      "--pcr",
      wheatSeedPcrId,
      "--input",
      inputPath,
      "--format",
      "json",
      "--fail-on",
      "never",
    ]));
    assert.equal(reportOnly.validation_status, "failed");
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});

test("validation treats an inconclusive report as non-zero unless report-only mode is explicit", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-inconclusive-"));
  const relativePcrPath =
    "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed";
  const pcrDir = path.join(root, relativePcrPath);
  const inputPath = path.join(root, "dataset.json");
  try {
    installEmptyPcrAliasBinding(root);
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, relativePcrPath), pcrDir, { recursive: true });
    const markdown = readFileSync(path.join(pcrDir, "pcr.en-US.md"), "utf8");
    const projection = parsePcrMarkdownToStructured(markdown);
    projection.collectionProtocols = [];
    writeFileSync(
      path.join(pcrDir, "structured.yaml"),
      structuredProjectionYaml(projection, { sourceMarkdown: markdown }),
    );
    writeFileSync(inputPath, "{}\n");

    const args = [
      cliPath,
      "--root",
      root,
      "validate-dataset",
      "--pcr",
      wheatSeedPcrId,
      "--input",
      inputPath,
      "--format",
      "json",
    ];
    assert.throws(
      () => execFileSync(process.execPath, args, { encoding: "utf8" }),
      (error) => {
        assert.equal(childError(error).status, 2);
        assert.equal(json(String(childError(error).stdout)).validation_status, "inconclusive");
        assert.equal(String(childError(error).stderr), "");
        return true;
      },
    );

    const reportOnly = json(execFileSync(
      process.execPath,
      [...args, "--fail-on", "never"],
      { encoding: "utf8" },
    ));
    assert.equal(reportOnly.validation_status, "inconclusive");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("feedback draft prints issue-ready Markdown", () => {
  const output = runCli([
    "feedback",
    "draft",
    "--pcr",
    wheatSeedPcrId,
    "--type",
    "translation_mismatch",
    "--summary",
    "Chinese and English process names diverge.",
  ]);

  match(output, /PCR feedback: translation_mismatch/);
  match(output, /Chinese and English process names diverge/);
});

test("unknown command fails explicitly", () => {
  assert.throws(
    () => runCliFailure(["nope"]),
    (error) => {
      assert.notEqual(childError(error).status, 0);
      match(String(childError(error).stderr), /Unknown command: nope/);
      return true;
    },
  );
});

test("invalid output format fails explicitly", () => {
  assert.throws(
    () => runCliFailure(["list", "--format", "xml"]),
    (error) => {
      assert.notEqual(childError(error).status, 0);
      match(String(childError(error).stderr), /Invalid --format "xml"/);
      return true;
    },
  );
});

test("invalid numeric options fail explicitly", () => {
  assert.throws(
    () => runCliFailure(["tree", "--depth", "abc"]),
    (error) => {
      assert.notEqual(childError(error).status, 0);
      match(String(childError(error).stderr), /Invalid --depth "abc"/);
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["list", "--page-size", "0"]),
    (error) => {
      assert.notEqual(childError(error).status, 0);
      match(String(childError(error).stderr), /Invalid --page-size "0"/);
      return true;
    },
  );
});

test("unknown options and out-of-range pages fail explicitly", () => {
  assert.throws(
    () => runCliFailure(["list", "--wat", "yes"]),
    (error) => {
      match(String(childError(error).stderr), /Unknown option --wat/);
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["list", "--status", "candidate", "--page", "999"]),
    (error) => {
      match(String(childError(error).stderr), /--page 999 is out of range/);
      return true;
    },
  );
});

test("commands enforce their own output formats and defaults", async (t) => {
  const invalidCases = [
    {
      name: "show rejects json",
      args: ["show", "--pcr", wheatSeedPcrId, "--format", "json"],
      jsonError: true,
    },
    {
      name: "guidance rejects markdown",
      args: ["guidance", "--pcr", wheatSeedPcrId, "--format", "markdown"],
      jsonError: false,
    },
    {
      name: "feedback draft rejects table",
      args: ["feedback", "draft", "--type", "translation_mismatch", "--format", "table"],
      jsonError: false,
    },
  ];

  for (const testCase of invalidCases) {
    await t.test(testCase.name, () => {
      assert.throws(
        () => runCliFailure(testCase.args),
        (error) => {
          if (testCase.jsonError) {
            const envelope = json(String(childError(error).stderr));
            assert.equal(record(envelope.error).code, "PCR_CLI_INVALID_CHOICE");
            assert.equal(record(record(envelope.error).details).option, "format");
          } else {
            match(String(childError(error).stderr), /PCR_CLI_INVALID_CHOICE/);
          }
          return true;
        },
      );
    });
  }

  assert.equal(
    record(json(runCli(["resolve", "--classification", "cpc:3.0:01111"])).mapping).pcr_id,
    wheatSeedPcrId,
  );
  assert.equal(record(json(runCli(["guidance", "--pcr", wheatSeedPcrId])).pcr).id, wheatSeedPcrId);
});

test("tree defaults to depth 2 and reports readiness on rendered PCR leaves", () => {
  const defaultTree = runCli(["tree"]);
  assert.doesNotMatch(defaultTree, new RegExp(wheatSeedPcrId.replaceAll(".", "\\.")));
  match(defaultTree, /partial at depth 2/);
  match(defaultTree, /list --path-prefix <visible-path>/);

  const jsonTree = json(runCli(["tree", "--format", "json"]));
  assert.equal(jsonTree.scope, "library/pcrs");
  assert.equal(jsonTree.depth, 2);
  assert.equal(jsonTree.completeness, "partial");
  assert.ok(jsonTree.tree);
  assert.ok(array(jsonTree.next_steps).some((step) => string(step).includes("--path-prefix")));

  const leafTree = runCli(["tree", "--depth", "3"]);
  match(leafTree, new RegExp(wheatSeedPcrId.replaceAll(".", "\\.")));
  match(leafTree, /readiness: [a-z_]+; usable_for_guidance: (?:true|false)/);
});

test("classification, language, vocabulary filters, and validation policy are strict", async (t) => {
  const cases = [
    {
      name: "classification has exactly three segments",
      args: ["resolve", "--classification", "cpc:3.0:01111:extra", "--format", "json"],
      code: "PCR_CLI_INVALID_CLASSIFICATION",
    },
    {
      name: "language is controlled",
      args: ["show", "--pcr", wheatSeedPcrId, "--lang", "fr-FR", "--format", "markdown"],
      code: "PCR_CLI_INVALID_CHOICE",
    },
    {
      name: "status is controlled",
      args: ["list", "--status", "canddiate", "--format", "json"],
      code: "PCR_CLI_INVALID_CHOICE",
    },
    {
      name: "content maturity is controlled",
      args: ["list", "--content-maturity", "reviewd", "--format", "json"],
      code: "PCR_CLI_INVALID_CHOICE",
    },
    {
      name: "catalog scope is controlled",
      args: ["list", "--scope", "everything", "--format", "json"],
      code: "PCR_CLI_INVALID_CHOICE",
    },
    {
      name: "coverage classification has exactly two segments",
      args: [
        "coverage",
        "summary",
        "--classification",
        "cpc:3.0:01111",
        "--format",
        "json",
      ],
      code: "PCR_CLI_INVALID_CLASSIFICATION",
    },
    {
      name: "coverage status is controlled",
      args: [
        "coverage",
        "list",
        "--classification",
        "cpc:3.0",
        "--status",
        "maybe",
        "--format",
        "json",
      ],
      code: "PCR_CLI_INVALID_CHOICE",
    },
    {
      name: "fail-on is checked before reading input",
      args: [
        "validate-dataset",
        "--pcr",
        wheatSeedPcrId,
        "--input",
        "/definitely/missing.json",
        "--fail-on",
        "sometimes",
        "--format",
        "json",
      ],
      code: "PCR_CLI_INVALID_CHOICE",
    },
  ];

  for (const testCase of cases) {
    await t.test(testCase.name, () => {
      assert.throws(
        () => runCliFailure(testCase.args),
        (error) => {
          const stderr = String(childError(error).stderr);
          if (testCase.args.at(-1) === "json") {
            assert.equal(errorEnvelope(stderr).code, testCase.code);
          } else {
            match(stderr, new RegExp(testCase.code));
          }
          return true;
        },
      );
    });
  }
});

test("pagination accepts only bounded positive safe integer tokens", async (t) => {
  const cases = [
    ["--page", "1.5"],
    ["--page", "9007199254740992"],
    ["--page-size", "101"],
    ["--page-size", "1e2"],
  ];

  for (const args of cases) {
    await t.test(args.join(" "), () => {
      assert.throws(
        () => runCliFailure(["list", ...args, "--format", "json"]),
        (error) => {
          assert.equal(errorEnvelope(String(childError(error).stderr)).code, "PCR_CLI_INVALID_INTEGER_OPTION");
          return true;
        },
      );
    });
  }

  assert.throws(
    () => runCliFailure(["list", "--limit", "5", "--format", "json"]),
    (error) => {
      assert.equal(errorEnvelope(String(childError(error).stderr)).code, "PCR_CLI_UNKNOWN_OPTION");
      return true;
    },
  );
});

test("JSON error envelopes retain stable retired-id redirect details", () => {
  assert.throws(
    () => runCliFailure(["guidance", "--pcr", scaffoldPcrId, "--format", "json"]),
    (error) => {
      assert.equal(String(childError(error).stdout), "");
      const envelope = json(String(childError(error).stderr));
      assert.equal(record(envelope.error).code, "PCR_LEGACY_ID_REDIRECT");
      assert.equal(record(envelope.error).exit_code, 1);
      assert.equal(record(record(envelope.error).details).source_pcr_id, scaffoldPcrId);
      assert.equal(record(record(record(envelope.error).details).target).kind, "classification_coverage");
      assert.equal(record(record(envelope.error).details).reason, "empty_scaffold_migration");
      assert.ok(record(record(envelope.error).details).decision_ref);
      match(record(record(envelope.error).details).next_command, /resolve --classification/);
      match(record(record(envelope.error).details).next_command, /--root /);
      return true;
    },
  );
});

test("JSON errors retain fail-closed missing-coverage details", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-invalid-mapping-cli-"));
  try {
    const mappingDir = path.join(root, "classifications/mappings");
    mkdirSync(mappingDir, { recursive: true });
    writeFileSync(
      path.join(mappingDir, "cpc-3.0-to-pcr.yaml"),
      `schema_version: 2
classification_system: cpc
classification_version: "3.0"
status: current
mappings:
  - code: "01111"
    label: Example
    pcr_id: pcr.example
    mapping_type: ambiguous
    confidence: reviewed
    acceptance:
      status: accepted
      decided_by: test-maintainer
      decided_at_utc: "2026-07-14T00:00:00Z"
      decision_ref: docs/test-decision.md
`,
    );

    assert.throws(
      () => execFileSync(
        process.execPath,
        [
          cliPath,
          "--root",
          root,
          "resolve",
          "--classification",
          "cpc:3.0:01111",
          "--format",
          "json",
        ],
        { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
      ),
      (error) => {
        assert.equal(String(childError(error).stdout), "");
        const envelope = json(String(childError(error).stderr));
        assert.equal(record(envelope.error).code, "PCR_CLASSIFICATION_COVERAGE_NOT_FOUND");
        assert.deepEqual(record(record(envelope.error).details), {
          classification: "cpc:3.0",
          coverage_index: "classifications/indexes/cpc-3.0-coverage.json",
        });
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("feedback type and malformed global invocations fail with actionable JSON", () => {
  assert.throws(
    () => runCliFailure(["feedback", "draft", "--type", "bogus", "--format", "json"]),
    (error) => {
      const envelope = json(String(childError(error).stderr));
      assert.equal(record(envelope.error).code, "PCR_CLI_INVALID_CHOICE");
      assert.equal(record(record(envelope.error).details).option, "type");
      assert.ok(array(record(record(envelope.error).details).choices).includes("translation_mismatch"));
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["--format", "json"]),
    (error) => {
      assert.equal(errorEnvelope(String(childError(error).stderr)).code, "PCR_CLI_UNKNOWN_OPTION");
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["list", "--format", "json", "--format", "markdown"]),
    (error) => {
      assert.equal(errorEnvelope(String(childError(error).stderr)).code, "PCR_CLI_DUPLICATE_OPTION");
      return true;
    },
  );
});

function writeKnownUnmappedCoverage(root: string): void {
  const leavesPath = path.join(
    root,
    "classifications/systems/cpc/3.0/normalized/leaves.json",
  );
  mkdirSync(path.dirname(leavesPath), { recursive: true });
  writeFileSync(
    leavesPath,
    `${JSON.stringify({
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [
        {
          code: "X-1",
          title: "Known code without mapping",
          path_codes: ["X", "X-1"],
          path_titles: ["Fixture", "Known code without mapping"],
        },
      ],
    }, null, 2)}\n`,
  );
  const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
  mkdirSync(path.dirname(mappingPath), { recursive: true });
  writeFileSync(
    mappingPath,
    `schema_version: 2
classification_system: CPC
classification_version: "3.0"
status: current
mappings:
  []
`,
  );
  const indexDir = path.join(root, "classifications/indexes");
  mkdirSync(indexDir, { recursive: true });
  writeFileSync(
    path.join(indexDir, "cpc-3.0-coverage.json"),
    `${JSON.stringify({
      schema_version: 1,
      index_kind: "classification-pcr-coverage",
      classification_system: "CPC",
      classification_version: "3.0",
      source: {
        contract_version: "2",
        generator: "builder/scripts/build-catalog.mjs",
        generator_version: "2",
        normalized_leaves: {
          path: "classifications/systems/cpc/3.0/normalized/leaves.json",
          hash_mode: "exact_bytes",
          sha256: exactFileSha256(leavesPath),
        },
        mapping: {
          path: "classifications/mappings/cpc-3.0-to-pcr.yaml",
          hash_mode: "exact_bytes",
          sha256: exactFileSha256(mappingPath),
        },
      },
      summary: {
        total: 1,
        mapped: 0,
        unmapped: 0,
        candidate_suggestion: 0,
        manual_review: 0,
        unknown: 1,
      },
      entries: [
        {
          code: "X-1",
          label: "Known code without mapping",
          path_codes: ["X", "X-1"],
          path_titles: ["Fixture", "Known code without mapping"],
          coverage_status: "unknown",
          mapping: null,
          legacy_reference: null,
        },
      ],
    }, null, 2)}\n`,
  );
}

function exactFileSha256(filePath: string): string {
  return `sha256:${createHash("sha256").update(readFileSync(filePath)).digest("hex")}`;
}
