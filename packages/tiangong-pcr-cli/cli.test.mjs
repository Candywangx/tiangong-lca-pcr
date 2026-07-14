import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
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

import { parsePcrMarkdownToStructured } from "../../builder/lib/markdown-projection.mjs";
import { structuredProjectionYaml } from "../../builder/lib/structured-yaml-projection.mjs";

const cliPath = path.resolve("packages/tiangong-pcr-cli/bin/tiangong-pcr.mjs");
const repoRoot = path.resolve(".");
const wheatSeedPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const scaffoldPcrId =
  "pcr.community-social-and-personal-services.education-services.primary-education-services";

function runCli(args) {
  return execFileSync(process.execPath, [cliPath, "--root", repoRoot, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function runCliFailure(args) {
  return execFileSync(process.execPath, [cliPath, "--root", repoRoot, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

test("list prints PCR records as JSON", () => {
  const output = runCli(["list", "--status", "candidate", "--format", "json"]);
  const page = JSON.parse(output);

  assert.equal(page.page, 1);
  assert.equal(page.page_size, 10);
  assert.ok(page.items.some((entry) => entry.id === wheatSeedPcrId));
});

test("list paginates to 10 records by default and suggests the next page", () => {
  const output = runCli(["list"]);

  assert.match(output, /PCR id \| Status \| Readiness \| Title/);
  assert.match(output, /Showing 1-10 of /);
  assert.match(output, /Next page:/);
  assert.match(output, /npm --silent run tiangong-pcr -- list --page 2/);
  assert.match(output, /--root /);
  assert.match(output, /usable_for_guidance/);
});

test("list next commands preserve custom root and output format", () => {
  const page = JSON.parse(runCli(["list", "--format", "json"]));

  assert.match(page.next_command, /--root /);
  assert.match(page.next_command, /--format json/);
  assert.match(page.next_command, /--page 2/);
});

test("list path-prefix filters the catalog and survives pagination", () => {
  const pathPrefix =
    "agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening";
  const page = JSON.parse(runCli([
    "list",
    "--path-prefix",
    pathPrefix,
    "--page-size",
    "1",
    "--format",
    "json",
  ]));

  assert.equal(page.page_size, 1);
  assert.ok(page.total_count > 1);
  assert.ok(page.items.every((entry) => entry.path.includes(pathPrefix)));
  assert.deepEqual(page.filters, {
    status: null,
    content_maturity: null,
    path_prefix: pathPrefix,
  });
  assert.equal(page.has_more, true);
  assert.match(page.next_command, /npm --silent run tiangong-pcr -- list/);
  assert.match(page.next_command, new RegExp(`--path-prefix ${pathPrefix}`));
});

test("help explains the Agent selection workflow", () => {
  const output = runCli(["--help"]);

  assert.match(output, /Usage:/);
  assert.match(output, /Agent workflow/);
  assert.match(output, /resolve --classification/);
  assert.match(output, /tree\/list/);
  assert.match(output, /guidance --pcr/);
  assert.match(output, /validate-model/);
  assert.match(output, /validate-dataset/);
});

test("list help explains pagination and JSON output", () => {
  const output = runCli(["list", "--help"]);

  assert.match(output, /Usage: tiangong-pcr list/);
  assert.match(output, /Defaults to 10 records per page/);
  assert.match(output, /JSON output/);
  assert.match(output, /next_command/);
});

test("resolve help explains deterministic mapping usage", () => {
  const output = runCli(["resolve", "--help"]);

  assert.match(output, /Usage: tiangong-pcr resolve/);
  assert.match(output, /deterministic classification mapping/);
  assert.match(output, /cpc:3.0:01111/);
  assert.match(output, /does not prove that the methodology is usable/);
});

test("guidance help keeps foreground dataset production as the primary workflow", () => {
  const output = runCli(["guidance", "--help"]);

  assert.match(output, /foreground data package/);
  assert.match(output, /validate-dataset/);
  assert.match(output, /process or lifecyclemodel.*downstream projection/);
});

test("feedback draft help lists feedback types", () => {
  const output = runCli(["feedback", "draft", "--help"]);

  assert.match(output, /Usage: tiangong-pcr feedback draft/);
  assert.match(output, /range_evidence_update/);
  assert.match(output, /translation_mismatch/);
});

test("validate-dataset help documents input, coverage, and exit semantics", () => {
  const output = runCli(["validate-dataset", "--help"]);

  assert.match(output, /Usage: tiangong-pcr validate-dataset/);
  assert.match(output, /foreground data package JSON/);
  assert.match(output, /validation_status/);
  assert.match(output, /check_coverage/);
  assert.match(output, /--fail-on never\|error\|warning/);
  assert.match(output, /Defaults to error/);
  assert.match(output, /Exit codes:/);
  assert.match(output, /inconclusive/);
});

test("resolve prints deterministic classification mapping as JSON", () => {
  const output = runCli(["resolve", "--classification", "cpc:3.0:01111", "--format", "json"]);
  const result = JSON.parse(output);

  assert.equal(result.mapping.pcr_id, wheatSeedPcrId);
  assert.equal(result.mapping.mapping_type, "exact");
  assert.match(result.next_command, /--root /);
  assert.match(result.next_command, /--format json/);
});

test("guidance prints Agent-facing data-production PCR rules", () => {
  const output = runCli(["guidance", "--pcr", wheatSeedPcrId, "--format", "json"]);
  const guidance = JSON.parse(output);

  assert.equal(guidance.reference_flow.reference_unit, "kg");
  assert.ok(guidance.system_boundary.rules.length > 0);
  assert.equal(guidance.boundary_abstraction.declared_starting_condition, "source_seed_lot");
  assert.ok(guidance.process_map.length > 0);
  assert.ok(guidance.production_guidance.collection_protocols.length > 0);
  assert.ok(guidance.allocation_rules.length > 0);
  assert.ok(guidance.validation_rules.length > 0);
  assert.equal(guidance.published_dataset_profile.downstream_use.includes("secondary_dataset"), true);
  assert.equal(guidance.readiness.usable_for_guidance, true);
});

test("guidance rejects an empty scaffold with no JSON stdout", () => {
  assert.throws(
    () => runCliFailure(["guidance", "--pcr", scaffoldPcrId, "--format", "json"]),
    (error) => {
      assert.equal(String(error.stdout), "");
      assert.match(String(error.stderr), /not usable for guidance/);
      assert.match(String(error.stderr), /empty_scaffold/);
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
    const result = JSON.parse(output);

    assert.equal(result.validation_status, "failed");
    assert.equal(result.completeness, "partial");
    assert.equal(result.input.accepted, true);
    assert.ok(result.check_coverage.checks_performed.length > 0);
    assert.ok(result.findings.some((finding) => finding.code === "missing_collection_protocol_record"));
    assert.ok(result.findings.some((finding) => finding.message.includes("cp_harvested_seed_mass")));
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
        assert.equal(String(error.stdout), "");
        assert.match(String(error.stderr), /Malformed dataset JSON/);
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
        assert.equal(error.status, 2);
        assert.equal(JSON.parse(String(error.stdout)).validation_status, "failed");
        assert.equal(String(error.stderr), "");
        return true;
      },
    );

    const reportOnly = JSON.parse(runCli([
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
        assert.equal(error.status, 2);
        assert.equal(JSON.parse(String(error.stdout)).validation_status, "inconclusive");
        assert.equal(String(error.stderr), "");
        return true;
      },
    );

    const reportOnly = JSON.parse(execFileSync(
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

  assert.match(output, /PCR feedback: translation_mismatch/);
  assert.match(output, /Chinese and English process names diverge/);
});

test("unknown command fails explicitly", () => {
  assert.throws(
    () => runCliFailure(["nope"]),
    (error) => {
      assert.notEqual(error.status, 0);
      assert.match(String(error.stderr), /Unknown command: nope/);
      return true;
    },
  );
});

test("invalid output format fails explicitly", () => {
  assert.throws(
    () => runCliFailure(["list", "--format", "xml"]),
    (error) => {
      assert.notEqual(error.status, 0);
      assert.match(String(error.stderr), /Invalid --format "xml"/);
      return true;
    },
  );
});

test("invalid numeric options fail explicitly", () => {
  assert.throws(
    () => runCliFailure(["tree", "--depth", "abc"]),
    (error) => {
      assert.notEqual(error.status, 0);
      assert.match(String(error.stderr), /Invalid --depth "abc"/);
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["list", "--page-size", "0"]),
    (error) => {
      assert.notEqual(error.status, 0);
      assert.match(String(error.stderr), /Invalid --page-size "0"/);
      return true;
    },
  );
});

test("unknown options and out-of-range pages fail explicitly", () => {
  assert.throws(
    () => runCliFailure(["list", "--wat", "yes"]),
    (error) => {
      assert.match(String(error.stderr), /Unknown option --wat/);
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["list", "--status", "candidate", "--page", "999"]),
    (error) => {
      assert.match(String(error.stderr), /--page 999 is out of range/);
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
            const envelope = JSON.parse(String(error.stderr));
            assert.equal(envelope.error.code, "PCR_CLI_INVALID_CHOICE");
            assert.equal(envelope.error.details.option, "format");
          } else {
            assert.match(String(error.stderr), /PCR_CLI_INVALID_CHOICE/);
          }
          return true;
        },
      );
    });
  }

  assert.equal(
    JSON.parse(runCli(["resolve", "--classification", "cpc:3.0:01111"])).mapping.pcr_id,
    wheatSeedPcrId,
  );
  assert.equal(JSON.parse(runCli(["guidance", "--pcr", wheatSeedPcrId])).pcr.id, wheatSeedPcrId);
});

test("tree defaults to depth 2 and reports readiness on rendered PCR leaves", () => {
  const defaultTree = runCli(["tree"]);
  assert.doesNotMatch(defaultTree, new RegExp(wheatSeedPcrId.replaceAll(".", "\\.")));
  assert.match(defaultTree, /partial at depth 2/);
  assert.match(defaultTree, /list --path-prefix <visible-path>/);

  const jsonTree = JSON.parse(runCli(["tree", "--format", "json"]));
  assert.equal(jsonTree.scope, "library/pcrs");
  assert.equal(jsonTree.depth, 2);
  assert.equal(jsonTree.completeness, "partial");
  assert.ok(jsonTree.tree);
  assert.ok(jsonTree.next_steps.some((step) => step.includes("--path-prefix")));

  const leafTree = runCli(["tree", "--depth", "3"]);
  assert.match(leafTree, new RegExp(wheatSeedPcrId.replaceAll(".", "\\.")));
  assert.match(leafTree, /readiness: [a-z_]+; usable_for_guidance: (?:true|false)/);
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
          const stderr = String(error.stderr);
          if (testCase.args.at(-1) === "json") {
            assert.equal(JSON.parse(stderr).error.code, testCase.code);
          } else {
            assert.match(stderr, new RegExp(testCase.code));
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
          assert.equal(JSON.parse(String(error.stderr)).error.code, "PCR_CLI_INVALID_INTEGER_OPTION");
          return true;
        },
      );
    });
  }

  assert.throws(
    () => runCliFailure(["list", "--limit", "5", "--format", "json"]),
    (error) => {
      assert.equal(JSON.parse(String(error.stderr)).error.code, "PCR_CLI_UNKNOWN_OPTION");
      return true;
    },
  );
});

test("JSON error envelopes retain core usability code and readiness details", () => {
  assert.throws(
    () => runCliFailure(["guidance", "--pcr", scaffoldPcrId, "--format", "json"]),
    (error) => {
      assert.equal(String(error.stdout), "");
      const envelope = JSON.parse(String(error.stderr));
      assert.equal(envelope.error.code, "PCR_NOT_USABLE_FOR_GUIDANCE");
      assert.equal(envelope.error.exit_code, 1);
      assert.equal(envelope.error.details.readiness.usable_for_guidance, false);
      assert.ok(envelope.error.details.readiness.blockers.length > 0);
      return true;
    },
  );
});

test("JSON errors retain controlled core error details", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-invalid-mapping-cli-"));
  try {
    const mappingDir = path.join(root, "classifications/mappings");
    mkdirSync(mappingDir, { recursive: true });
    writeFileSync(
      path.join(mappingDir, "cpc-3.0-to-pcr.yaml"),
      `schema_version: 1
classification_system: cpc
classification_version: "3.0"
mappings:
  - code: "01111"
    pcr_id: pcr.example
    mapping_type: ambiguous
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
        assert.equal(String(error.stdout), "");
        const envelope = JSON.parse(String(error.stderr));
        assert.equal(envelope.error.code, "PCR_INVALID_CLASSIFICATION_MAPPING");
        assert.equal(envelope.error.details.mapping_type, "ambiguous");
        assert.ok(envelope.error.details.allowed_mapping_types.includes("manual_review"));
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
      const envelope = JSON.parse(String(error.stderr));
      assert.equal(envelope.error.code, "PCR_CLI_INVALID_CHOICE");
      assert.equal(envelope.error.details.option, "type");
      assert.ok(envelope.error.details.choices.includes("translation_mismatch"));
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["--format", "json"]),
    (error) => {
      assert.equal(JSON.parse(String(error.stderr)).error.code, "PCR_CLI_UNKNOWN_OPTION");
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["list", "--format", "json", "--format", "markdown"]),
    (error) => {
      assert.equal(JSON.parse(String(error.stderr)).error.code, "PCR_CLI_DUPLICATE_OPTION");
      return true;
    },
  );
});
