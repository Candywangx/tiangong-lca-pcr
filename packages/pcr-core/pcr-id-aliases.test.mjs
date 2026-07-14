import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import {
  findPcrIdAlias,
  readPcrIdAliases,
} from "./src/pcr-id-aliases.mjs";
import { renderYaml } from "./src/yaml-lite.mjs";

const decisionRef = "docs/migrations/alias-decision.md#approved-aliases";
const materialPcrId = "pcr.example.products.material";

test("alias registries resolve terminal targets before physical legacy scaffolds are removed", () => {
  const root = createAliasFixture();
  try {
    const aliases = readPcrIdAliases({ root });

    assert.deepEqual(
      aliases.map((alias) => alias.source_pcr_id),
      ["pcr.example.products.legacy-a", "pcr.example.products.legacy-b"],
    );
    assert.equal(aliases[0].target.kind, "classification_coverage");
    assert.equal(aliases[1].target.kind, "canonical_pcr");
    assert.equal(
      findPcrIdAlias({ root, pcrId: "pcr.example.products.legacy-a" }).target.code,
      "98000",
    );
    assert.equal(findPcrIdAlias({ root, pcrId: "pcr.example.products.absent" }), null);

    // The physical scaffold still exists. Exact alias lookup intentionally wins
    // once a caller adopts redirect-first behavior.
    assert.equal(
      readFileSync(path.join(root, sourcePath("legacy-a"), "manifest.yaml"), "utf8")
        .includes("scaffold"),
      true,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("standalone tooling must explicitly opt out of catalog binding", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-alias-empty-"));
  try {
    assert.throws(
      () => readPcrIdAliases({ root }),
      /PCR catalog is required to bind the alias registry/u,
    );
    assert.deepEqual(
      readPcrIdAliases({ root, verifyCatalogBinding: false }),
      [],
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a catalog exact-byte binding pins even an empty alias registry", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    installBoundRegistry(root, []);
    assert.deepEqual(readPcrIdAliases({ root }), []);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a catalog cannot omit or use the legacy scalar alias declaration", async (t) => {
  await t.test("missing binding", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      writeRepositoryFile(root, "library/catalog.yaml", "schema_version: 1\n");
      expectAliasFailure(root, /must declare an exact-byte pcr_id_aliases binding/u, {
        verifyCatalogBinding: true,
      });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("legacy scalar binding", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      writeRepositoryFile(
        root,
        "library/catalog.yaml",
        "pcr_id_aliases: classifications/aliases/pcr-id-aliases.yaml\n",
      );
      expectAliasFailure(root, /must be an exact-byte binding object/u, {
        verifyCatalogBinding: true,
      });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

test("declared alias registries fail closed when missing, stale, truncated, or supplemented", async (t) => {
  await t.test("missing registry", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      installBoundRegistry(root, [coverageAlias("legacy-a")]);
      rmSync(path.join(root, "classifications/aliases/pcr-id-aliases.yaml"));
      expectAliasFailure(root, /declared PCR id alias registry is missing/u, {
        verifyCatalogBinding: true,
      });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("stale exact bytes", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      const content = installBoundRegistry(root, [coverageAlias("legacy-a")]);
      writeRepositoryFile(
        root,
        "classifications/aliases/pcr-id-aliases.yaml",
        `${content}\n`,
      );
      expectAliasFailure(root, /exact-byte SHA-256 mismatch/u, {
        verifyCatalogBinding: true,
      });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("truncated registry", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      installBoundRegistry(root, [
        coverageAlias("legacy-a"),
        canonicalAlias("legacy-b", materialPcrId),
      ]);
      writeRegistry(root, "pcr-id-aliases.yaml", [coverageAlias("legacy-a")]);
      expectAliasFailure(root, /exact-byte SHA-256 mismatch/u, {
        verifyCatalogBinding: true,
      });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("unbound registry", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      installBoundRegistry(root, [coverageAlias("legacy-a")]);
      writeRegistry(root, "extra.yaml", []);
      expectAliasFailure(root, /unbound PCR id alias registries are not allowed/u, {
        verifyCatalogBinding: true,
      });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

test("alias generation can validate independently while repairing a stale catalog binding", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    installBoundRegistry(root, [coverageAlias("legacy-a")], {
      sha256: `sha256:${"0".repeat(64)}`,
    });
    expectAliasFailure(root, /exact-byte SHA-256 mismatch/u, {
      verifyCatalogBinding: true,
    });
    assert.equal(
      readPcrIdAliases({ root, verifyCatalogBinding: false }).length,
      1,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("alias sources are unique across registry files", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    const alias = coverageAlias("legacy-a");
    writeRegistry(root, "a.yaml", [alias]);
    writeRegistry(root, "b.yml", [alias]);

    expectAliasFailure(root, /duplicate alias source .*a\.yaml.*b\.yml/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("source PCR id and source path are one strict identity", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    writeRegistry(root, "aliases.yaml", [{
      ...coverageAlias("legacy-a"),
      source_pcr_path: sourcePath("legacy-b"),
    }]);

    expectAliasFailure(root, /does not match source_pcr_path/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("terminal target kind and migration reason cannot contradict each other", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    writeRegistry(root, "aliases.yaml", [{
      ...coverageAlias("legacy-a"),
      reason: "canonical_pcr_replacement",
    }]);

    expectAliasFailure(root, /reason.*must be equal to constant/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a surviving source manifest cannot move away from its declared legacy path", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    rmSync(path.join(root, sourcePath("legacy-a")), { recursive: true });
    writeManifest(root, "library/pcrs/other/products/legacy-a", {
      id: sourcePcrId("legacy-a"),
      status: "scaffold",
      content_maturity: "empty_scaffold",
    });
    writeRegistry(root, "aliases.yaml", [coverageAlias("legacy-a")]);

    expectAliasFailure(root, /exists at unexpected path/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("self redirects are rejected", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    const sourceId = sourcePcrId("legacy-a");
    writeRegistry(root, "aliases.yaml", [canonicalAlias("legacy-a", sourceId)]);

    expectAliasFailure(root, /cannot redirect to itself/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("alias chains are rejected even when the final target is material", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    writeRegistry(root, "aliases.yaml", [
      canonicalAlias("legacy-a", sourcePcrId("legacy-b")),
      canonicalAlias("legacy-b", materialPcrId),
    ]);

    expectAliasFailure(root, /alias chain is not allowed/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("alias cycles are rejected explicitly", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    writeRegistry(root, "aliases.yaml", [
      canonicalAlias("legacy-a", sourcePcrId("legacy-b")),
      canonicalAlias("legacy-b", sourcePcrId("legacy-a")),
    ]);

    expectAliasFailure(root, /alias cycle detected/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("classification and canonical targets must exist exactly once", async (t) => {
  await t.test("missing normalized leaf", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      writeRegistry(root, "aliases.yaml", [coverageAlias("legacy-a", "99999")]);
      expectAliasFailure(root, /classification target cpc:3\.0:99999 occurs 0 times/u);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("missing canonical PCR", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      writeRegistry(
        root,
        "aliases.yaml",
        [canonicalAlias("legacy-a", "pcr.example.products.missing")],
      );
      expectAliasFailure(root, /canonical alias target .* found 0/u);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("duplicate canonical PCR identity", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      writeManifest(root, "library/pcrs/duplicate/products/material", {
        id: materialPcrId,
        status: "candidate",
        content_maturity: "authored_methodology",
      });
      writeRegistry(root, "aliases.yaml", [canonicalAlias("legacy-a", materialPcrId)]);
      expectAliasFailure(root, /canonical alias target .* found 2/u);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

test("a material PCR identity cannot be an alias source", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    writeManifest(root, sourcePath("legacy-a"), {
      id: sourcePcrId("legacy-a"),
      status: "candidate",
      content_maturity: "authored_methodology",
    });
    writeRegistry(root, "aliases.yaml", [coverageAlias("legacy-a")]);

    expectAliasFailure(root, /collides with a material PCR/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("decision references must resolve to canonical UTF-8 repository files", async (t) => {
  await t.test("missing decision", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      const alias = { ...coverageAlias("legacy-a"), decision_ref: "docs/missing.md#decision" };
      writeRegistry(root, "aliases.yaml", [alias]);
      expectAliasFailure(root, /invalid decision_ref/u);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("invalid UTF-8 decision", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    try {
      writeFileSync(path.join(root, "docs/migrations/alias-decision.md"), Buffer.from([0xff]));
      writeRegistry(root, "aliases.yaml", [coverageAlias("legacy-a")]);
      expectAliasFailure(root, /decision_ref: .*not valid UTF-8/u);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

test("alias registry paths are read without following symbolic links", async (t) => {
  await t.test("registry file symlink", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    const outside = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-alias-outside-"));
    try {
      const outsideRegistry = path.join(outside, "aliases.yaml");
      writeFileSync(outsideRegistry, renderYaml(registry([coverageAlias("legacy-a")])));
      symlinkSync(outsideRegistry, path.join(root, "classifications/aliases/aliases.yaml"));
      expectAliasFailure(root, /contains a symbolic link/u);
    } finally {
      rmSync(root, { recursive: true, force: true });
      rmSync(outside, { recursive: true, force: true });
    }
  });

  await t.test("alias directory symlink", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    const outside = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-alias-directory-"));
    try {
      rmSync(path.join(root, "classifications/aliases"), { recursive: true });
      symlinkSync(outside, path.join(root, "classifications/aliases"));
      expectAliasFailure(root, /alias directory path contains a symbolic link/u);
    } finally {
      rmSync(root, { recursive: true, force: true });
      rmSync(outside, { recursive: true, force: true });
    }
  });

  await t.test("physical source path symlink", () => {
    const root = createAliasFixture({ writeDefaultRegistry: false });
    const outside = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-alias-source-"));
    try {
      rmSync(path.join(root, sourcePath("legacy-a")), { recursive: true });
      symlinkSync(outside, path.join(root, sourcePath("legacy-a")));
      writeRegistry(root, "aliases.yaml", [coverageAlias("legacy-a")]);
      expectAliasFailure(root, /PCR catalog path contains a symbolic link|source .* contains a symbolic link/u);
    } finally {
      rmSync(root, { recursive: true, force: true });
      rmSync(outside, { recursive: true, force: true });
    }
  });
});

test("alias registry bytes must be valid UTF-8", () => {
  const root = createAliasFixture({ writeDefaultRegistry: false });
  try {
    writeFileSync(
      path.join(root, "classifications/aliases/aliases.yaml"),
      Buffer.from([0xff, 0xfe]),
    );
    expectAliasFailure(root, /not valid UTF-8/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

function createAliasFixture({ writeDefaultRegistry = true } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-alias-"));
  writeRepositoryFile(root, decisionRef.split("#", 1)[0], "# Approved aliases\n");
  writeRepositoryFile(
    root,
    "classifications/systems/cpc/3.0/normalized/leaves.json",
    `${JSON.stringify({
      schema_version: 1,
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [{ code: "98000", title: "Domestic services" }],
    }, null, 2)}\n`,
  );
  writeManifest(root, "library/pcrs/example/products/material", {
    id: materialPcrId,
    status: "candidate",
    content_maturity: "authored_methodology",
  });
  for (const slug of ["legacy-a", "legacy-b", "legacy-c"]) {
    writeManifest(root, sourcePath(slug), {
      id: sourcePcrId(slug),
      status: "scaffold",
      content_maturity: "empty_scaffold",
    });
  }
  mkdirSync(path.join(root, "classifications/aliases"), { recursive: true });
  if (writeDefaultRegistry) {
    installBoundRegistry(root, [
      coverageAlias("legacy-a"),
      canonicalAlias("legacy-b", materialPcrId),
    ]);
  }
  return root;
}

function coverageAlias(slug, code = "98000") {
  return {
    source_pcr_id: sourcePcrId(slug),
    source_pcr_path: sourcePath(slug),
    target: {
      kind: "classification_coverage",
      classification_system: "cpc",
      classification_version: "3.0",
      code,
    },
    reason: "empty_scaffold_migration",
    decision_ref: decisionRef,
  };
}

function canonicalAlias(slug, targetPcrId) {
  return {
    source_pcr_id: sourcePcrId(slug),
    source_pcr_path: sourcePath(slug),
    target: {
      kind: "canonical_pcr",
      pcr_id: targetPcrId,
    },
    reason: "canonical_pcr_replacement",
    decision_ref: decisionRef,
  };
}

function sourcePcrId(slug) {
  return `pcr.example.products.${slug}`;
}

function sourcePath(slug) {
  return `library/pcrs/example/products/${slug}`;
}

function registry(aliases) {
  return {
    schema_version: 1,
    registry_kind: "legacy-pcr-id-aliases",
    status: "current",
    aliases,
  };
}

function writeRegistry(root, name, aliases) {
  writeRepositoryFile(
    root,
    `classifications/aliases/${name}`,
    renderYaml(registry(aliases)),
  );
}

function installBoundRegistry(root, aliases, { sha256 } = {}) {
  const content = renderYaml(registry(aliases));
  writeRepositoryFile(
    root,
    "classifications/aliases/pcr-id-aliases.yaml",
    content,
  );
  const digest = sha256
    ?? `sha256:${createHash("sha256").update(content).digest("hex")}`;
  writeRepositoryFile(
    root,
    "library/catalog.yaml",
    renderYaml({
      schema_version: 1,
      catalog_status: "current",
      pcr_id_aliases: {
        path: "classifications/aliases/pcr-id-aliases.yaml",
        hash_mode: "exact_bytes",
        sha256: digest,
        entry_count: aliases.length,
      },
    }),
  );
  return content;
}

function writeManifest(root, relativeDirectory, manifest) {
  writeRepositoryFile(
    root,
    `${relativeDirectory}/manifest.yaml`,
    renderYaml({ schema_version: 1, ...manifest }),
  );
}

function writeRepositoryFile(root, relativePath, content) {
  const filePath = path.join(root, ...relativePath.split("/"));
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, content);
}

function expectAliasFailure(
  root,
  pattern,
  { verifyCatalogBinding = false } = {},
) {
  assert.throws(
    () => readPcrIdAliases({ root, verifyCatalogBinding }),
    (error) => {
      assert.equal(error.code, "PCR_INVALID_PCR_ID_ALIASES");
      const detail = [
        error.message,
        ...(error.details?.issues ?? []),
        ...(error.issues ?? []).map((issue) => `${issue.instance_path}: ${issue.message}`),
      ].join("\n");
      assert.match(detail, pattern);
      return true;
    },
  );
}
