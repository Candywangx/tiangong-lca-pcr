import assert from "node:assert/strict";
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  validateManifest,
  validateMarkdownFrontmatter,
} from "./schema-contracts.mjs";
import { lifecycle, publish, revise } from "./manifest-lifecycle.mjs";
import { inspectPcrDirectory } from "./lint-rules.mjs";
import {
  manifestIdentityProblems,
  manifestLifecycleProblems,
} from "./lifecycle-policy.mjs";
import { inspectPublishedRevisionState } from "./published-revision-state.mjs";
import {
  currentReleaseArtifacts,
  pcrLanguageFromMarkdownFile,
  resolvePcrLanguageFiles,
} from "./pcr-language-files.mjs";
import { createAuthoringPcr } from "./pcr-authoring-fixture.mjs";

const DE_LANGUAGES = ["en-US", "zh-CN", "de-DE"];
const DE_TITLES = {
  "en-US": "Wheat seed production",
  "zh-CN": "小麦种子生产",
  "de-DE": "Weizen-Saatgutproduktion",
};

function createRoot(t) {
  const root = mkdtempSync(path.join(tmpdir(), "pcr-optional-language-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  return root;
}

/** An authoring workspace whose canonical source changed after the German translation was written. */
function createOptionalAuthoringWorkspace(t, options = {}) {
  const root = createRoot(t);
  const fixture = createAuthoringPcr(root, {
    languages: DE_LANGUAGES,
    schemaVersion: 2,
    titles: DE_TITLES,
    optionalTranslations: { "de-DE": "out_of_sync" },
    ...options,
  });
  return { ...fixture, root };
}

function reviewTranslation({ root, libraryPath, language, status }) {
  lifecycle({
    root,
    pcr: libraryPath,
    translation: `${language}=${status}`,
  });
}

/** Active + reviewed, the publication precondition. */
function activate({ root, libraryPath, optionalLanguages = [] }) {
  for (const language of optionalLanguages) {
    reviewTranslation({ root, libraryPath, language, status: "aligned" });
  }
  lifecycle({
    root,
    pcr: libraryPath,
    status: "active",
    "content-maturity": "reviewed_methodology",
    translation: "zh-CN=reviewed",
  });
  for (const language of optionalLanguages) {
    reviewTranslation({ root, libraryPath, language, status: "reviewed" });
  }
}

function readManifest(pcrDir, fileName = "manifest.yaml") {
  return parseYaml(readFileSync(path.join(pcrDir, fileName), "utf8"));
}

/** The exact YAML frontmatter of one PCR Markdown file. */
function frontmatter(filePath) {
  const lines = readFileSync(filePath, "utf8").split("\n");
  return parseYaml(lines.slice(lines.indexOf("---") + 1, lines.indexOf("---", 1)).join("\n"));
}

test("declared optional languages require titles, statuses, and schema v2", () => {
  const manifest = {
    schema_version: 2,
    id: "pcr.example",
    title: { ...DE_TITLES },
    status: "candidate",
    pcr_kind: "product_category_rule",
    content_maturity: "authored_methodology",
    languages: { canonical: "en-US", available: [...DE_LANGUAGES] },
    translation_status: { "zh-CN": "aligned", "de-DE": "out_of_sync" },
    target_entities: ["flow"],
  };

  assert.deepEqual(manifestIdentityProblems(manifest), []);
  assert.deepEqual(
    manifestIdentityProblems({ ...manifest, title: { "en-US": "Wheat seed production", "zh-CN": "小麦种子生产" } }),
    ["manifest requires non-empty title.de-DE for declared language de-DE"],
  );
  assert.deepEqual(
    manifestIdentityProblems({ ...manifest, translation_status: { "zh-CN": "aligned" } }),
    ["manifest requires translation_status.de-DE for declared language de-DE"],
  );
  assert.deepEqual(
    manifestIdentityProblems({ ...manifest, translation_status: { "zh-CN": "aligned", "de-DE": "aligned", "fr-FR": "aligned" } }),
    ["translation_status.fr-FR is not declared in languages.available"],
  );
  for (const malformed of ["de-de", "DE", "de_DE", "../de-DE", "de-DE.md", "en/US"]) {
    const problems = manifestIdentityProblems({
      ...manifest,
      languages: { canonical: "en-US", available: ["en-US", "zh-CN", malformed] },
      title: { ...DE_TITLES, [malformed]: "Weizen" },
      translation_status: { "zh-CN": "aligned", [malformed]: "aligned" },
    });
    assert.ok(
      problems.some((problem) => /Invalid PCR language code|canonical BCP 47/u.test(problem)),
      `${malformed}: ${JSON.stringify(problems)}`,
    );
  }
});

test("the language schema stays open to en-* and zh-* siblings and canonical variants", () => {
  const manifest = {
    schema_version: 2,
    id: "pcr.example",
    title: { "en-US": "Example", "zh-CN": "示例" },
    status: "candidate",
    pcr_kind: "product_category_rule",
    content_maturity: "authored_methodology",
    languages: { canonical: "en-US", available: ["en-US", "zh-CN"] },
    translation_status: { "zh-CN": "aligned" },
    target_entities: ["flow"],
  };

  for (const language of ["en-GB", "zh-TW", "es-419", "de-1996", "de-DE", "pt-BR", "zh-Hant-TW"]) {
    const candidate = {
      ...manifest,
      languages: { canonical: "en-US", available: ["en-US", "zh-CN", language] },
      title: { ...manifest.title, [language]: "Localized title" },
      translation_status: { "zh-CN": "aligned", [language]: "out_of_sync" },
    };
    assert.equal(validateManifest(candidate).valid, true, language);
    assert.deepEqual(manifestIdentityProblems(candidate), [], language);
  }

  // The same shape is required in Markdown frontmatter.
  for (const language of ["en-GB", "zh-TW", "es-419", "de-1996"]) {
    assert.equal(
      validateMarkdownFrontmatter({
        schema_version: 1,
        pcr_id: "pcr.example",
        language,
        status: "candidate",
        sync_with: `pcr.${language}.md`,
      }).valid,
      true,
      language,
    );
  }

  // Separator and traversal mistakes fail the shape itself; a non-canonical
  // case spelling passes the syntactic shape and is rejected by the builder's
  // runtime Intl.getCanonicalLocales check instead.
  for (const malformed of ["en_US", "de_DE", "DE", "../de-DE", "de-DE "]) {
    const candidate = {
      ...manifest,
      languages: { canonical: "en-US", available: ["en-US", "zh-CN", malformed] },
      title: { ...manifest.title, [malformed]: "Localized title" },
      translation_status: { "zh-CN": "aligned", [malformed]: "out_of_sync" },
    };
    assert.equal(validateManifest(candidate).valid, false, `schema ${malformed}`);
    assert.ok(
      manifestIdentityProblems(candidate).some((problem) =>
        /Invalid PCR language code|canonical BCP 47/u.test(problem),
      ),
      malformed,
    );
  }
  for (const nonCanonical of ["en-us", "de-de"]) {
    const candidate = {
      ...manifest,
      languages: { canonical: "en-US", available: ["en-US", "zh-CN", nonCanonical] },
      title: { ...manifest.title, [nonCanonical]: "Localized title" },
      translation_status: { "zh-CN": "aligned", [nonCanonical]: "out_of_sync" },
    };
    assert.equal(validateManifest(candidate).valid, true, `shape ${nonCanonical}`);
    assert.ok(
      manifestIdentityProblems(candidate).some((problem) =>
        /canonical BCP 47 spelling/u.test(problem),
      ),
      nonCanonical,
    );
  }
  for (const malformed of ["en_US", "de_DE", "en-US.md", "../de-DE"]) {
    assert.equal(
      validateMarkdownFrontmatter({
        schema_version: 1,
        pcr_id: "pcr.example",
        language: malformed,
        status: "candidate",
        sync_with: "pcr.en-US.md",
      }).valid,
      false,
      malformed,
    );
  }
});

test("a canonical variant language survives the full release cycle", (t) => {
  const root = createRoot(t);
  const { libraryPath, pcrDir } = createAuthoringPcr(root, {
    languages: ["en-US", "zh-CN", "de-1996"],
    schemaVersion: 2,
    titles: { "en-US": DE_TITLES["en-US"], "zh-CN": DE_TITLES["zh-CN"], "de-1996": "Weizen-Saatgutproduktion (1996)" },
    optionalTranslations: { "de-1996": "out_of_sync" },
  });

  assert.deepEqual(inspectPcrDirectory({ root, pcrDir }).problems, []);
  activate({ root, libraryPath, optionalLanguages: ["de-1996"] });
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const manifest = readManifest(pcrDir);
  assert.deepEqual(manifest.languages.available, ["en-US", "zh-CN", "de-1996"]);
  assert.deepEqual(Object.keys(manifest.release_artifacts.markdown_sha256), [
    "en-US",
    "zh-CN",
    "de-1996",
  ]);
  assert.deepEqual(inspectPublishedRevisionState({ root, pcrDir }).problems, []);
});

test("a published manifest requires a reviewed status for every released optional language", () => {
  const published = {
    schema_version: 2,
    id: "pcr.example",
    title: { ...DE_TITLES },
    status: "published",
    pcr_kind: "product_category_rule",
    content_maturity: "published_methodology",
    version: "1.0.0",
    published_at_utc: "2026-07-01T00:00:00Z",
    languages: { canonical: "en-US", available: [...DE_LANGUAGES] },
    translation_status: { "zh-CN": "reviewed", "de-DE": "out_of_sync" },
    target_entities: ["flow"],
    release_artifacts: {
      markdown_sha256: { "en-US": "sha256:1", "zh-CN": "sha256:2", "de-DE": "sha256:3" },
      structured_sha256: "sha256:4",
    },
  };

  assert.deepEqual(manifestLifecycleProblems(published), [
    "released language de-DE requires translation_status.de-DE to be reviewed; " +
      "review the translation before publishing, or remove the language file and its declaration",
  ]);
  assert.deepEqual(
    manifestLifecycleProblems({
      ...published,
      translation_status: { "zh-CN": "reviewed", "de-DE": "reviewed" },
    }),
    [],
  );
  assert.deepEqual(
    manifestLifecycleProblems({
      ...published,
      translation_status: { "zh-CN": "aligned", "de-DE": "reviewed" },
    }),
    ["status \"published\" requires translation_status.zh-CN to be reviewed"],
  );
});

test("a dependent translation must sync with pcr.en-US.md, not an arbitrary locale", (t) => {
  const { root, pcrDir } = createOptionalAuthoringWorkspace(t);
  const germanPath = path.join(pcrDir, "pcr.de-DE.md");
  writeFileSync(
    germanPath,
    readFileSync(germanPath, "utf8").replace(/^sync_with: .+$/mu, 'sync_with: "pcr.zh-CN.md"'),
  );

  assert.deepEqual(
    inspectPcrDirectory({ root, pcrDir }).problems.filter((problem) => /frontmatter sync_with/u.test(problem)),
    [
      'library/pcrs/agriculture/crops/wheat-seed/pcr.de-DE.md: frontmatter sync_with must be "pcr.en-US.md" ' +
        'because the canonical source is the English revision; found "pcr.zh-CN.md"',
    ],
  );

  writeFileSync(
    germanPath,
    readFileSync(germanPath, "utf8").replace(/^sync_with: .+$/mu, 'sync_with: "pcr.fr-FR.md"'),
  );
  assert.ok(
    inspectPcrDirectory({ root, pcrDir }).problems.some((problem) =>
      /frontmatter sync_with must be "pcr\.en-US\.md"/u.test(problem),
    ),
  );
});

test("optional language files are read, validated, and fingerprinted by exact bytes", (t) => {
  const { root, pcrDir } = createOptionalAuthoringWorkspace(t);

  const inspection = inspectPcrDirectory({ root, pcrDir });
  assert.deepEqual(inspection.problems, []);

  const resolved = resolvePcrLanguageFiles({ manifest: readManifest(pcrDir), directory: pcrDir });
  assert.deepEqual(resolved.present, DE_LANGUAGES);
  assert.deepEqual(resolved.absent, []);
  assert.equal(resolved.optional.length, 1);
  assert.ok(resolved.languageFiles.get("de-DE").bytes.length > 0);
});

test("an undeclared language file, a malformed language, and a tampered optional file fail closed", (t) => {
  const undeclared = createOptionalAuthoringWorkspace(t);
  writeFileSync(
    path.join(undeclared.pcrDir, "pcr.fr-FR.md"),
    readFileSync(path.join(undeclared.pcrDir, "pcr.de-DE.md")),
  );
  assert.deepEqual(
    inspectPcrDirectory({ root: undeclared.root, pcrDir: undeclared.pcrDir }).problems.filter((problem) =>
      /is not declared in manifest\.languages\.available/u.test(problem),
    ),
    [`library/pcrs/agriculture/crops/wheat-seed/pcr.fr-FR.md: language Markdown file is not declared in manifest.languages.available`],
  );

  const mismatched = createOptionalAuthoringWorkspace(t);
  writeFileSync(
    path.join(mismatched.pcrDir, "pcr.de-DE.md"),
    readFileSync(path.join(mismatched.pcrDir, "pcr.de-DE.md"), "utf8").replace("language: de-DE", "language: fr-FR"),
  );
  assert.deepEqual(
    inspectPcrDirectory({ root: mismatched.root, pcrDir: mismatched.pcrDir }).problems.filter((problem) =>
      /frontmatter language must be/u.test(problem),
    ),
    [`library/pcrs/agriculture/crops/wheat-seed/pcr.de-DE.md: frontmatter language must be "de-DE"; found "fr-FR"`],
  );

  // A declared language whose file is missing is not silently dropped.
  const declaredMissing = createOptionalAuthoringWorkspace(t, { writeOptionalFiles: false });
  assert.deepEqual(
    inspectPcrDirectory({ root: declaredMissing.root, pcrDir: declaredMissing.pcrDir }).problems.filter(
      (problem) => /declared language Markdown file is missing/u.test(problem),
    ),
    [
      "library/pcrs/agriculture/crops/wheat-seed/pcr.de-DE.md: declared language Markdown file is missing; " +
        "manifest.languages.available declares de-DE, so its file is required, or remove the declaration",
    ],
  );

  // Malformed locale shapes and traversal-shaped names are never read as
  // language artifacts: only a canonical-BCP-47 file name is recognized.
  const malformed = createOptionalAuthoringWorkspace(t);
  for (const name of ["pcr.zh.md", "pcr.en-US.md.bak", "pcr..md"]) {
    writeFileSync(path.join(malformed.pcrDir, name), "not a language artifact\n");
  }
  const malformedProblems = inspectPcrDirectory({ root: malformed.root, pcrDir: malformed.pcrDir }).problems;
  assert.deepEqual(
    malformedProblems.filter((problem) => /is not declared in manifest\.languages\.available/u.test(problem)),
    [
      "library/pcrs/agriculture/crops/wheat-seed/pcr.zh.md: language Markdown file is not declared in manifest.languages.available",
    ],
  );
  assert.deepEqual(
    resolvePcrLanguageFiles({ manifest: readManifest(malformed.pcrDir), directory: malformed.pcrDir }).present,
    DE_LANGUAGES,
  );
  for (const name of ["pcr.de_DE.md", "pcr.en-US.md.bak", "pcr..md", "de-DE.md", "pcr.de-DE.yaml"]) {
    assert.equal(pcrLanguageFromMarkdownFile(name), null, name);
  }
  assert.deepEqual(
    resolvePcrLanguageFiles({
      manifest: readManifest(declaredMissing.pcrDir),
      directory: declaredMissing.pcrDir,
    }).absent,
    ["de-DE"],
  );
});

test("publishing with a declared optional language carries it into the v2 release snapshot", (t) => {
  const { root, libraryPath, pcrDir } = createOptionalAuthoringWorkspace(t);
  activate({ root, libraryPath, optionalLanguages: ["de-DE"] });
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const manifest = readManifest(pcrDir);
  assert.equal(manifest.schema_version, 2);
  assert.deepEqual(manifest.languages.available, DE_LANGUAGES);
  assert.deepEqual(Object.keys(manifest.release_artifacts.markdown_sha256), DE_LANGUAGES);

  const releaseDir = path.join(pcrDir, "releases", "1.0.0");
  assert.deepEqual(
    readdirSync(releaseDir).sort(),
    ["manifest.snapshot.yaml", "pcr.de-DE.md", "pcr.en-US.md", "pcr.zh-CN.md", "release.yaml", "structured.yaml"],
  );
  const release = parseYaml(readFileSync(path.join(releaseDir, "release.yaml"), "utf8"));
  assert.equal(release.schema_version, 2);
  assert.deepEqual(Object.keys(release.artifacts.markdown_sha256), DE_LANGUAGES);
  assert.match(release.artifacts.manifest_snapshot_sha256, /^sha256:[0-9a-f]{64}$/u);
  assert.equal(
    parseYaml(readFileSync(path.join(releaseDir, "manifest.snapshot.yaml"), "utf8")).release_artifacts.markdown_sha256["de-DE"],
    release.artifacts.markdown_sha256["de-DE"],
  );

  const state = inspectPublishedRevisionState({ root, pcrDir });
  assert.deepEqual(state.problems, []);
  assert.deepEqual(state.releases[0].languages, DE_LANGUAGES);
});

test("publishing two languages keeps the v1 legacy artifact field names", (t) => {
  const root = createRoot(t);
  const { libraryPath, pcrDir } = createAuthoringPcr(root, {});
  activate({ root, libraryPath });
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const manifest = readManifest(pcrDir);
  assert.equal(manifest.schema_version, 1);
  assert.deepEqual(Object.keys(manifest.release_artifacts).sort(), [
    "pcr_en_us_sha256",
    "pcr_zh_cn_sha256",
    "structured_sha256",
  ]);
  const release = parseYaml(readFileSync(path.join(pcrDir, "releases", "1.0.0", "release.yaml"), "utf8"));
  assert.equal(release.schema_version, 1);
  assert.deepEqual(Object.keys(release.artifacts).sort(), [
    "manifest_snapshot_sha256",
    "pcr_en_us_sha256",
    "pcr_zh_cn_sha256",
    "structured_sha256",
  ]);
  assert.deepEqual(inspectPublishedRevisionState({ root, pcrDir }).problems, []);
});

test("a v1 publication reproduces the legacy publisher's snapshot bytes exactly", (t) => {
  // The legacy publisher preserved the author's translation status map and never
  // added an `en-US: canonical` entry: the canonical rendering is recorded in the
  // English Markdown frontmatter only. Rebuild the exact expected published
  // document and compare the snapshot bytes, so a regression that adds map
  // entries or reorders keys fails here rather than silently changing v1 bytes.
  const root = createRoot(t);
  const { libraryPath, pcrDir } = createAuthoringPcr(root, {});
  activate({ root, libraryPath });

  const authoring = parseYaml(readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8"));
  assert.deepEqual(authoring.translation_status, { "zh-CN": "reviewed" });
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const published = readManifest(pcrDir);
  assert.deepEqual(published.translation_status, { "zh-CN": "reviewed" });
  assert.equal(Object.hasOwn(published.translation_status, "en-US"), false);

  const expectedManifestText = renderYaml({
    ...published,
    status: "published",
    content_maturity: "published_methodology",
    version: "1.0.0",
    published_at_utc: published.published_at_utc,
    updated_at_utc: published.updated_at_utc,
    translation_status: { "zh-CN": "reviewed" },
    release_artifacts: published.release_artifacts,
  });
  assert.equal(
    readFileSync(path.join(pcrDir, "releases", "1.0.0", "manifest.snapshot.yaml"), "utf8"),
    expectedManifestText,
  );
  assert.equal(
    readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8"),
    expectedManifestText,
  );
  // The canonical marker stays in the frontmatter, where the legacy publisher kept it.
  assert.deepEqual(frontmatter(path.join(pcrDir, "pcr.en-US.md")), {
    pcr_id: "pcr.agriculture.crops.wheat-seed",
    language: "en-US",
    status: "published",
    content_maturity: "published_methodology",
    sync_with: "pcr.zh-CN.md",
    translation_status: "canonical",
  });
});

test("omitting an optional language means undeclaring it, and a declared-missing file fails", (t) => {
  // Omitted means absent from languages.available and with no file. A declared
  // language whose file is missing is a failure, never a silent drop.
  const declaredMissing = createRoot(t);
  const declaredFixture = createAuthoringPcr(declaredMissing, {
    languages: DE_LANGUAGES,
    schemaVersion: 2,
    titles: DE_TITLES,
    optionalTranslations: { "de-DE": "not_available" },
    writeOptionalFiles: false,
  });
  assert.throws(
    () => publish({ root: declaredMissing, pcr: declaredFixture.libraryPath, version: "1.0.0" }),
    /declared language Markdown file is missing[\s\S]*manifest\.languages\.available declares de-DE/u,
  );
  assert.equal(existsSync(path.join(declaredFixture.pcrDir, "releases")), false);

  // Remove the declaration and its file: the two-language record publishes with
  // the unchanged v1 fingerprint contract.
  const root = createRoot(t);
  const { libraryPath, pcrDir } = createAuthoringPcr(root, {
    languages: DE_LANGUAGES,
    schemaVersion: 2,
    titles: DE_TITLES,
    optionalTranslations: { "de-DE": "not_available" },
    writeOptionalFiles: false,
  });
  const manifest = readManifest(pcrDir);
  manifest.schema_version = 1;
  manifest.languages.available = ["en-US", "zh-CN"];
  delete manifest.title["de-DE"];
  delete manifest.translation_status["de-DE"];
  writeFileSync(path.join(pcrDir, "manifest.yaml"), renderYaml(manifest));

  assert.deepEqual(inspectPcrDirectory({ root, pcrDir }).problems, []);
  activate({ root, libraryPath });
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const published = readManifest(pcrDir);
  assert.deepEqual(published.languages.available, ["en-US", "zh-CN"]);
  assert.equal(published.schema_version, 1);
  assert.deepEqual(Object.keys(published.release_artifacts).sort(), [
    "pcr_en_us_sha256",
    "pcr_zh_cn_sha256",
    "structured_sha256",
  ]);
  assert.deepEqual(readdirSync(path.join(pcrDir, "releases", "1.0.0")).sort(), [
    "manifest.snapshot.yaml",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "release.yaml",
    "structured.yaml",
  ]);
  assert.deepEqual(inspectPublishedRevisionState({ root, pcrDir }).problems, []);
});

test("a materialized optional translation must be reviewed before publication", (t) => {
  const { root, libraryPath, pcrDir } = createOptionalAuthoringWorkspace(t);
  activate({ root, libraryPath });

  assert.throws(
    () => publish({ root, pcr: libraryPath, version: "1.0.0" }),
    /released language de-DE requires translation_status\.de-DE to be reviewed/u,
  );
  assert.equal(existsSync(path.join(pcrDir, "releases")), false);
  assert.equal(readManifest(pcrDir).status, "active");
});

test("declaring an optional language without schema v2 fails the manifest contract", (t) => {
  const root = createRoot(t);
  const { libraryPath, pcrDir } = createAuthoringPcr(root, {
    schemaVersion: 1,
    languages: DE_LANGUAGES,
    titles: DE_TITLES,
    optionalTranslations: { "de-DE": "reviewed" },
  });

  assert.ok(
    inspectPcrDirectory({ root, pcrDir }).problems.some((problem) =>
      /PCR manifest schema .*languages\/available must NOT have more than 2 items/u.test(problem),
    ),
  );
  assert.throws(
    () =>
      lifecycle({
        root,
        pcr: libraryPath,
        status: "active",
        "content-maturity": "reviewed_methodology",
        translation: "zh-CN=reviewed",
      }),
    /PCR lifecycle staged-state validation failed[\s\S]*languages\/available/u,
  );
  assert.equal(existsSync(path.join(pcrDir, "releases")), false);
});

test("a revision marks every dependent translation out of sync and keeps the released snapshot unchanged", (t) => {
  const { root, libraryPath, pcrDir } = createOptionalAuthoringWorkspace(t);
  activate({ root, libraryPath, optionalLanguages: ["de-DE"] });
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const releaseBefore = Object.fromEntries(
    readdirSync(path.join(pcrDir, "releases", "1.0.0")).map((name) => [
      name,
      readFileSync(path.join(pcrDir, "releases", "1.0.0", name)),
    ]),
  );

  revise({ root, pcr: libraryPath, version: "1.1.0" });

  const revisionDir = path.join(pcrDir, "revision");
  assert.deepEqual(readdirSync(revisionDir).sort(), [
    "manifest.next.yaml",
    "pcr.de-DE.md",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "revision.yaml",
    "structured.yaml",
  ]);
  const nextManifest = readManifest(revisionDir, "manifest.next.yaml");
  assert.deepEqual(nextManifest.languages.available, DE_LANGUAGES);
  // Only dependent translations are marked; the canonical source is recorded in
  // the English frontmatter and is not added to the manifest status map.
  assert.deepEqual(nextManifest.translation_status, {
    "zh-CN": "out_of_sync",
    "de-DE": "out_of_sync",
  });
  assert.equal(nextManifest.schema_version, 2);
  assert.deepEqual(frontmatter(path.join(revisionDir, "pcr.de-DE.md")), {
    pcr_id: "pcr.agriculture.crops.wheat-seed",
    language: "de-DE",
    status: "candidate",
    content_maturity: "authored_methodology",
    sync_with: "pcr.en-US.md",
    translation_status: "out_of_sync",
  });
  assert.equal(frontmatter(path.join(revisionDir, "pcr.en-US.md")).sync_with, "pcr.zh-CN.md");
  assert.deepEqual(
    Object.fromEntries(
      readdirSync(path.join(pcrDir, "releases", "1.0.0")).map((name) => [
        name,
        readFileSync(path.join(pcrDir, "releases", "1.0.0", name)),
      ]),
    ),
    releaseBefore,
  );
  assert.deepEqual(inspectPublishedRevisionState({ root, pcrDir }).problems, []);
});

test("an optional language added during the revision is published in the successor snapshot", (t) => {
  const { root, libraryPath, pcrDir } = createOptionalAuthoringWorkspace(t);
  activate({ root, libraryPath, optionalLanguages: ["de-DE"] });
  publish({ root, pcr: libraryPath, version: "1.0.0" });
  revise({ root, pcr: libraryPath, version: "1.1.0" });

  const revisionDir = path.join(pcrDir, "revision");
  const frenchText = readFileSync(path.join(revisionDir, "pcr.en-US.md"), "utf8")
    .replace(/^language: .+$/mu, "language: \"fr-FR\"")
    .replace(/^sync_with: .+$/mu, "sync_with: \"pcr.en-US.md\"");
  writeFileSync(path.join(revisionDir, "pcr.fr-FR.md"), frenchText);
  const nextManifest = readManifest(revisionDir, "manifest.next.yaml");
  nextManifest.languages.available = ["en-US", "zh-CN", "de-DE", "fr-FR"];
  nextManifest.title["fr-FR"] = "Production de semences de blé";
  nextManifest.translation_status["fr-FR"] = "aligned";
  writeFileSync(path.join(revisionDir, "manifest.next.yaml"), renderYaml(nextManifest));

  // Opening the revision marked the carried German translation out of sync;
  // align and review it again together with the new French translation.
  for (const language of ["de-DE", "fr-FR"]) {
    lifecycle({
      root,
      pcr: libraryPath,
      workspace: "revision",
      translation: `${language}=aligned`,
    });
  }
  lifecycle({
    root,
    pcr: libraryPath,
    workspace: "revision",
    status: "active",
    "content-maturity": "reviewed_methodology",
    translation: "zh-CN=reviewed",
  });
  for (const language of ["de-DE", "fr-FR"]) {
    lifecycle({
      root,
      pcr: libraryPath,
      workspace: "revision",
      translation: `${language}=reviewed`,
    });
  }
  publish({ root, pcr: libraryPath, workspace: "revision" });

  const releaseDir = path.join(pcrDir, "releases", "1.1.0");
  assert.deepEqual(readdirSync(releaseDir).sort(), [
    "manifest.snapshot.yaml",
    "pcr.de-DE.md",
    "pcr.en-US.md",
    "pcr.fr-FR.md",
    "pcr.zh-CN.md",
    "release.yaml",
    "structured.yaml",
  ]);
  const manifest = readManifest(pcrDir);
  assert.equal(manifest.version, "1.1.0");
  assert.deepEqual(manifest.languages.available, ["en-US", "zh-CN", "de-DE", "fr-FR"]);
  assert.deepEqual(Object.keys(manifest.release_artifacts.markdown_sha256), ["en-US", "zh-CN", "de-DE", "fr-FR"]);
  const history = parseYaml(readFileSync(path.join(pcrDir, "release-history.yaml"), "utf8"));
  assert.deepEqual(
    history.releases.map((entry) => entry.version),
    ["1.0.0", "1.1.0"],
  );
  assert.deepEqual(inspectPublishedRevisionState({ root, pcrDir }).problems, []);
  assert.deepEqual(
    readdirSync(path.join(pcrDir, "releases", "1.0.0")).sort(),
    ["manifest.snapshot.yaml", "pcr.de-DE.md", "pcr.en-US.md", "pcr.zh-CN.md", "release.yaml", "structured.yaml"],
  );
});

test("publication rejects a declared optional language whose snapshot file is missing or tampered", (t) => {
  const { root, libraryPath, pcrDir } = createOptionalAuthoringWorkspace(t);
  activate({ root, libraryPath, optionalLanguages: ["de-DE"] });
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const germanPath = path.join(pcrDir, "releases", "1.0.0", "pcr.de-DE.md");
  writeFileSync(germanPath, `${readFileSync(germanPath, "utf8")}x`);
  const tampered = inspectPublishedRevisionState({ root, pcrDir });
  assert.ok(
    tampered.problems.some((problem) => problem.includes("artifacts.markdown_sha256 does not match snapshot bytes")),
    tampered.problems.join("\n"),
  );

  rmSync(germanPath);
  const missing = inspectPublishedRevisionState({ root, pcrDir });
  assert.ok(
    missing.problems.some((problem) => problem.includes("release directory must contain pcr.de-DE.md")),
    missing.problems.join("\n"),
  );
});

test("release fingerprints key exactly the declared languages and never a subset", (t) => {
  const { root, pcrDir } = createOptionalAuthoringWorkspace(t);
  const manifest = readManifest(pcrDir);
  const structuredText = readFileSync(path.join(pcrDir, "structured.yaml"), "utf8");
  const resolved = resolvePcrLanguageFiles({ manifest, directory: pcrDir });

  const artifacts = currentReleaseArtifacts({
    languages: resolved.present,
    languageFiles: resolved.languageFiles,
    structuredText,
  });
  assert.deepEqual(Object.keys(artifacts.markdown_sha256), DE_LANGUAGES);

  const twoLanguage = currentReleaseArtifacts({
    languages: ["en-US", "zh-CN"],
    languageFiles: resolved.languageFiles,
    structuredText,
  });
  assert.deepEqual(Object.keys(twoLanguage).sort(), [
    "pcr_en_us_sha256",
    "pcr_zh_cn_sha256",
    "structured_sha256",
  ]);
});
