import assert from "node:assert/strict";
import test from "node:test";

import {
  analyzeCpcProductChain,
  renderCpcProductChainReport,
} from "./cpc-product-chain.mjs";

function node(id, code, label) {
  return { id, code, label, stage: `${id} stage`, role: `${id} role` };
}

function pcrEvidence(pcrId, fieldPath = "boundary_abstraction.upstream_dataset_requirement") {
  return {
    kind: "pcr_projection",
    pcr_id: pcrId,
    supports: `Evidence for ${pcrId}`,
    locator: { kind: "field", field_path: fieldPath },
  };
}

function officialEvidence(sourceId) {
  return {
    kind: "official_source",
    source_id: sourceId,
    supports: `Official evidence from ${sourceId}`,
  };
}

function edge(id, from, to, overrides = {}) {
  return {
    id,
    from,
    to,
    relationship_type: "primary_feedstock",
    evidence_status: "supported_by_pcr",
    boundary_assessment: "aligned",
    interface: {
      upstream_output_condition: `${from} output`,
      downstream_starting_condition: `${to} input`,
      fit_summary: `${from} output matches ${to} input`,
    },
    route_conditions: [`Route from ${from} to ${to}`],
    evidence: [pcrEvidence(`pcr.${to}`)],
    review_notes: [`Review ${id}`],
    ...overrides,
  };
}

function chain(id, nodes, edges) {
  return {
    id,
    title: `${id} title`,
    description: `${id} description`,
    nodes,
    edges,
  };
}

function document(chains, officialSources = []) {
  return {
    schema_version: 1,
    artifact_kind: "cpc_product_chain_pilot",
    status: "draft",
    classification_system: "CPC",
    classification_version: "3.0",
    official_sources: officialSources,
    chains,
  };
}

function resolver(overrides = {}) {
  return ({ node: authoredNode }) => {
    const override = overrides[authoredNode.id] ?? {};
    const pcr = Object.hasOwn(override, "pcr")
      ? override.pcr
      : {
          id: `pcr.${authoredNode.id}`,
          path: `library/pcrs/${authoredNode.id}`,
          readiness: {
            status: "ready",
            usable_for_guidance: true,
            projection_fingerprint: {
              status: "current",
              content_sha256: `sha256:${authoredNode.id}`,
            },
          },
        };
    return {
      code: authoredNode.code,
      label: authoredNode.label,
      coverage_status: pcr ? "mapped" : "unmapped",
      pcr,
      ...override,
    };
  };
}

function evidenceResolver({ evidence }) {
  return {
    pcr_id: evidence.pcr_id,
    source_path: `library/pcrs/${evidence.pcr_id}/structured.yaml`,
    locator: structuredClone(evidence.locator),
    value: evidence.supports,
  };
}

function analyze(authoredDocument, options = {}) {
  return analyzeCpcProductChain(authoredDocument, {
    resolveNode: options.resolveNode ?? resolver(),
    resolvePcrEvidence: options.resolvePcrEvidence ?? evidenceResolver,
  });
}

test("derives a ready edge from verified downstream PCR evidence", () => {
  const authored = document([
    chain(
      "grain",
      [node("wheat", "01112", "Wheat, other"), node("flour", "23110", "Wheat flour")],
      [edge("wheat-to-flour", "wheat", "flour")],
    ),
  ]);
  const calls = [];
  const analysis = analyze(authored, {
    resolveNode: resolver({
      wheat: {
        pcr: {
          id: "pcr.wheat",
          path: "library/pcrs/wheat",
          readiness: {
            status: "review_required",
            usable_for_guidance: true,
            projection_fingerprint: {
              status: "current",
              content_sha256: "sha256:wheat",
            },
          },
        },
      },
    }),
    resolvePcrEvidence(args) {
      calls.push(args);
      return evidenceResolver(args);
    },
  });

  assert.deepEqual(analysis.artifact, {
    schema_version: 1,
    artifact_kind: "cpc_product_chain_pilot",
    status: "draft",
    classification_system: "CPC",
    classification_version: "3.0",
  });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].chainId, "grain");
  assert.equal(calls[0].edge.id, "wheat-to-flour");
  assert.equal(calls[0].downstream.pcr.id, "pcr.flour");
  assert.equal(analysis.chains[0].edges[0].scheduling_status, "ready");
  assert.deepEqual(analysis.chains[0].edges[0].blockers, []);
  assert.deepEqual(analysis.chains[0].executable_waves, [["wheat"], ["flour"]]);
  assert.deepEqual(analysis.chains[0].review_only_node_ids, []);
  assert.deepEqual(analysis.summary, {
    chain_count: 1,
    node_count: 2,
    edge_count: 1,
    ready_edge_count: 1,
    blocked_edge_count: 0,
  });
});

test("validates resolver CPC codes and labels against authored assertions", () => {
  const authored = document([
    chain("grain", [node("wheat", "01112", "Wheat, other")], []),
  ]);

  assert.throws(
    () => analyze(authored, { resolveNode: resolver({ wheat: { code: "01113" } }) }),
    /chain grain node wheat resolved code 01113 does not match authored code 01112/,
  );
  assert.throws(
    () => analyze(authored, { resolveNode: resolver({ wheat: { label: "Stale label" } }) }),
    /chain grain node wheat resolved label "Stale label" does not match authored label "Wheat, other"/,
  );
});

test("rejects malformed node resolver results before they can make an edge ready", () => {
  const authored = document([
    chain(
      "grain",
      [node("wheat", "01112", "Wheat, other"), node("flour", "23110", "Wheat flour")],
      [edge("wheat-to-flour", "wheat", "flour")],
    ),
  ]);
  const valid = resolver()({ node: authored.chains[0].nodes[1] });
  const malformedResults = [
    { name: "missing coverage_status", mutate(result) { delete result.coverage_status; } },
    { name: "empty coverage_status", mutate(result) { result.coverage_status = ""; } },
    { name: "missing pcr", mutate(result) { delete result.pcr; } },
    { name: "non-object pcr", mutate(result) { result.pcr = "pcr.flour"; } },
    { name: "empty PCR id", mutate(result) { result.pcr.id = ""; } },
    { name: "empty PCR path", mutate(result) { result.pcr.path = ""; } },
    { name: "missing readiness", mutate(result) { delete result.pcr.readiness; } },
    { name: "empty readiness status", mutate(result) { result.pcr.readiness.status = ""; } },
    { name: "non-boolean usability", mutate(result) { result.pcr.readiness.usable_for_guidance = "true"; } },
    { name: "missing fingerprint", mutate(result) { delete result.pcr.readiness.projection_fingerprint; } },
    { name: "null fingerprint", mutate(result) { result.pcr.readiness.projection_fingerprint = null; } },
    { name: "array fingerprint", mutate(result) { result.pcr.readiness.projection_fingerprint = []; } },
  ];

  for (const scenario of malformedResults) {
    const malformed = structuredClone(valid);
    scenario.mutate(malformed);
    assert.throws(
      () => analyze(authored, {
        resolveNode(args) {
          return args.node.id === "flour" ? malformed : resolver()(args);
        },
      }),
      /node flour resolved with invalid/,
      scenario.name,
    );
  }
});

test("rejects duplicate ids and endpoints outside their chain", () => {
  const duplicateChain = document([
    chain("same", [node("a", "1", "A")], []),
    chain("same", [node("b", "2", "B")], []),
  ]);
  const duplicateNode = document([
    chain("one", [node("same", "1", "A")], []),
    chain("two", [node("same", "2", "B")], []),
  ]);
  const duplicateEdge = document([
    chain("one", [node("a", "1", "A"), node("b", "2", "B")], [edge("same", "a", "b")]),
    chain("two", [node("c", "3", "C"), node("d", "4", "D")], [edge("same", "c", "d")]),
  ]);
  const crossChainEndpoint = document([
    chain("one", [node("a", "1", "A")], [edge("cross", "a", "b")]),
    chain("two", [node("b", "2", "B")], []),
  ]);
  const missingEndpoint = document([
    chain("one", [node("a", "1", "A")], [edge("missing", "absent", "a")]),
  ]);

  assert.throws(() => analyze(duplicateChain), /duplicate chain id same/);
  assert.throws(() => analyze(duplicateNode), /duplicate node id same/);
  assert.throws(() => analyze(duplicateEdge), /duplicate edge id same/);
  assert.throws(
    () => analyze(crossChainEndpoint),
    /chain one edge cross endpoint b belongs to another chain/,
  );
  assert.throws(
    () => analyze(missingEndpoint),
    /chain one edge missing has unknown endpoint absent/,
  );
});

test("derives stable blockers for legitimate non-ready planning states", () => {
  const cases = [
    {
      name: "upstream not usable",
      nodeOverrides: { a: { pcr: { id: "pcr.a", path: "a", readiness: { status: "draft", usable_for_guidance: false, projection_fingerprint: { status: "current" } } } } },
      expected: ["upstream_not_material"],
    },
    {
      name: "downstream not usable",
      nodeOverrides: { b: { pcr: { id: "pcr.b", path: "b", readiness: { status: "draft", usable_for_guidance: false, projection_fingerprint: { status: "current" } } } } },
      expected: ["downstream_not_material"],
    },
    ...["gap", "overlap", "needs_review"].map((boundary) => ({
      name: `boundary ${boundary}`,
      edgeOverrides: { boundary_assessment: boundary },
      expected: ["boundary_not_aligned"],
    })),
    {
      name: "official-only evidence",
      edgeOverrides: {
        evidence_status: "supported_by_official_source",
        evidence: [officialEvidence("official")],
      },
      sources: [{ id: "official", title: "Official", publisher: "Publisher", url: "https://example.test", locator: "p. 1", supports: "Route", accessed_at: "2026-09-02" }],
      expected: ["evidence_not_pcr"],
    },
    {
      name: "semantic evidence",
      edgeOverrides: {
        evidence_status: "semantic_candidate",
        evidence: [officialEvidence("official")],
      },
      sources: [{ id: "official", title: "Official", publisher: "Publisher", url: "https://example.test", locator: "p. 1", supports: "Route", accessed_at: "2026-09-02" }],
      expected: ["evidence_not_pcr"],
    },
    {
      name: "unmapped upstream",
      nodeOverrides: { a: { pcr: null, coverage_status: "unmapped" } },
      expected: ["upstream_not_material"],
    },
  ];

  for (const scenario of cases) {
    const authored = document([
      chain(
        "chain",
        [node("a", "1", "A"), node("b", "2", "B")],
        [edge("a-to-b", "a", "b", scenario.edgeOverrides)],
      ),
    ], scenario.sources);
    const analysis = analyze(authored, {
      resolveNode: resolver(scenario.nodeOverrides),
    });
    assert.equal(analysis.chains[0].edges[0].scheduling_status, "blocked", scenario.name);
    assert.deepEqual(analysis.chains[0].edges[0].blockers, scenario.expected, scenario.name);
    assert.deepEqual(analysis.chains[0].executable_waves, [], scenario.name);
    assert.deepEqual(analysis.chains[0].review_only_node_ids, ["a", "b"], scenario.name);
  }
});

test("supported_by_pcr requires an accepted downstream PCR and binds every locator to it", () => {
  const baseNodes = [node("a", "1", "A"), node("b", "2", "B")];
  const unmappedDownstream = document([
    chain("one", baseNodes, [edge("a-to-b", "a", "b")]),
  ]);
  let unresolvedEvidenceCalls = 0;

  assert.throws(
    () => analyze(unmappedDownstream, {
      resolveNode: resolver({ b: { pcr: null, coverage_status: "unmapped" } }),
      resolvePcrEvidence(args) {
        unresolvedEvidenceCalls += 1;
        return evidenceResolver(args);
      },
    }),
    /edge a-to-b is supported_by_pcr but downstream node b has no accepted PCR identity/u,
  );
  assert.equal(unresolvedEvidenceCalls, 0);

  const unrelatedValidPcr = document([
    chain("one", baseNodes, [edge("a-to-b", "a", "b", {
      evidence: [pcrEvidence("pcr.b"), pcrEvidence("pcr.unrelated-valid")],
    })]),
  ]);
  let resolvedEvidenceCalls = 0;
  assert.throws(
    () => analyze(unrelatedValidPcr, {
      resolvePcrEvidence(args) {
        resolvedEvidenceCalls += 1;
        return evidenceResolver(args);
      },
    }),
    /PCR evidence 1 names PCR pcr.unrelated-valid but downstream node b resolves to pcr.b/u,
  );
  assert.equal(resolvedEvidenceCalls, 2);
});

test("resolves every PCR locator and rejects malformed evidence", () => {
  const baseNodes = [node("a", "1", "A"), node("b", "2", "B")];
  const source = { id: "official", title: "Official", publisher: "Publisher", url: "https://example.test", locator: "p. 1", supports: "Route", accessed_at: "2026-09-02" };
  const twoLocators = document([
    chain("one", baseNodes, [edge("a-to-b", "a", "b", { evidence: [pcrEvidence("pcr.b"), pcrEvidence("pcr.b", "product_category_identity.production_route")] })]),
  ]);
  let calls = 0;
  analyze(twoLocators, { resolvePcrEvidence(args) { calls += 1; return evidenceResolver(args); } });
  assert.equal(calls, 2);

  const missingSource = document([
    chain("one", baseNodes, [edge("a-to-b", "a", "b", { evidence_status: "semantic_candidate", evidence: [officialEvidence("missing")] })]),
  ]);
  assert.throws(() => analyze(missingSource), /references unknown official source missing/);

  assert.throws(
    () => analyze(twoLocators, { resolvePcrEvidence() { return null; } }),
    /PCR evidence 0 did not resolve/,
  );

  const wrongPcr = document([
    chain("one", baseNodes, [edge("a-to-b", "a", "b", { evidence: [pcrEvidence("pcr.somewhere-else")] })]),
  ]);
  assert.throws(
    () => analyze(wrongPcr),
    /names PCR pcr.somewhere-else but downstream node b resolves to pcr.b/,
  );

  const noPcrLocator = document([
    chain("one", baseNodes, [edge("a-to-b", "a", "b", { evidence: [officialEvidence("official")] })]),
  ], [source]);
  assert.throws(
    () => analyze(noPcrLocator),
    /supported_by_pcr but has no resolved locator for downstream PCR pcr.b/,
  );

  const malformedKind = document([
    chain("one", baseNodes, [edge("a-to-b", "a", "b", { evidence: [{ kind: "web_search", supports: "No typed locator" }] })]),
  ]);
  assert.throws(() => analyze(malformedKind), /unsupported evidence kind web_search/);
});

test("rejects incomplete or inconsistent PCR evidence resolver results", () => {
  const authored = document([
    chain("one", [node("a", "1", "A"), node("b", "2", "B")], [edge("a-to-b", "a", "b")]),
  ]);
  const authoredEvidence = authored.chains[0].edges[0].evidence[0];
  const valid = evidenceResolver({ evidence: authoredEvidence });
  const malformedResults = [
    { name: "empty PCR id", mutate(result) { result.pcr_id = ""; } },
    { name: "missing source path", mutate(result) { delete result.source_path; } },
    { name: "empty source path", mutate(result) { result.source_path = ""; } },
    { name: "missing locator", mutate(result) { delete result.locator; } },
    { name: "wrong locator", mutate(result) { result.locator.field_path = "product_category_identity.production_route"; } },
    { name: "missing value", mutate(result) { delete result.value; } },
    { name: "null value", mutate(result) { result.value = null; } },
    { name: "empty value", mutate(result) { result.value = ""; } },
  ];

  for (const scenario of malformedResults) {
    const malformed = structuredClone(valid);
    scenario.mutate(malformed);
    assert.throws(
      () => analyze(authored, { resolvePcrEvidence() { return malformed; } }),
      /PCR evidence 0 resolved with invalid/,
      scenario.name,
    );
  }
});

test("topological waves ignore blocked edges and retain authored order within a wave", () => {
  const nodes = [
    node("b", "2", "B"),
    node("a", "1", "A"),
    node("c", "3", "C"),
    node("d", "4", "D"),
    node("review", "5", "Review"),
  ];
  const readyEdges = [edge("a-to-c", "a", "c"), edge("b-to-c", "b", "c"), edge("c-to-d", "c", "d")];
  const blockedBefore = edge("review-to-a", "review", "a", { evidence_status: "semantic_candidate", evidence: [officialEvidence("official")] });
  const blockedBetween = edge("a-to-d-blocked", "a", "d", { boundary_assessment: "needs_review" });
  const blockedAfter = edge("d-to-review", "d", "review", { evidence_status: "supported_by_official_source", evidence: [officialEvidence("official")] });
  const source = { id: "official", title: "Official", publisher: "Publisher", url: "https://example.test", locator: "p. 1", supports: "Route", accessed_at: "2026-09-02" };

  const baseline = analyze(document([chain("one", nodes, readyEdges)], [source]));
  const withBlocked = analyze(document([chain("one", nodes, [blockedBefore, ...readyEdges, blockedBetween, blockedAfter])], [source]));

  assert.deepEqual(baseline.chains[0].executable_waves, [["b", "a"], ["c"], ["d"]]);
  assert.deepEqual(withBlocked.chains[0].executable_waves, baseline.chains[0].executable_waves);
  assert.deepEqual(withBlocked.chains[0].review_only_node_ids, ["review"]);
});

test("rejects a cycle among ready edges", () => {
  const authored = document([
    chain(
      "cycle",
      [node("a", "1", "A"), node("b", "2", "B")],
      [edge("a-to-b", "a", "b"), edge("b-to-a", "b", "a")],
    ),
  ]);

  assert.throws(() => analyze(authored), /chain cycle ready edges contain a cycle/);
});

test("renders the complete report deterministically in authored order", () => {
  const source = {
    id: "official-route",
    title: "Official route note",
    publisher: "Standards Office",
    url: "https://example.test/route",
    locator: "Section 2",
    supports: "The semantic route from cotton to yarn.",
    accessed_at: "2026-09-02",
    publication_id: "DOC-7",
    publication_date: "2025",
  };
  const authored = document([
    chain(
      "textile",
      [
        node("cotton", "01921", "Cotton, whether or not ginned"),
        node("carded", "26160", "Cotton, carded or combed"),
        node("yarn", "26360", "Cotton yarn | at least 85% cotton"),
        node("fabric", "26620", "Woven cotton fabrics"),
      ],
      [
        edge("carded-to-yarn", "carded", "yarn"),
        edge("cotton-to-carded", "cotton", "carded", {
          evidence_status: "semantic_candidate",
          boundary_assessment: "needs_review",
          evidence: [officialEvidence("official-route")],
          review_notes: ["Map the upstream cotton category."],
        }),
      ],
    ),
  ], [source]);
  const analysis = analyze(authored, {
    resolveNode: resolver({ cotton: { pcr: null, coverage_status: "unmapped" } }),
  });
  const expected = `<!-- GENERATED FILE. DO NOT EDIT DIRECTLY. -->
<!-- Source: builder/planning/cpc-product-chain-pilot.yaml -->
<!-- Build: npm run cpc-chains:build -->

# CPC Product-Chain Pilot Report

## Executive summary

- Chains: 1
- Nodes: 4
- Edges: 2 (1 ready, 1 blocked)

This report shows reviewed product dependencies for planning PCR work. CPC is a product classification, not a process graph; arrows express scoped pilot relationships, not universal production routes.

### Caveat

\`semantic_candidate\` and official-only (\`supported_by_official_source\`) edges do not change accepted mappings and do not trigger PCR generation.

## Chain: textile title

textile description

\`\`\`mermaid
flowchart LR
  n0["01921 Cotton, whether or not ginned"]
  n1["26160 Cotton, carded or combed"]
  n2["26360 Cotton yarn | at least 85% cotton"]
  n3["26620 Woven cotton fabrics"]
  n1 --> n2
  n0 -.-> n1
\`\`\`

### Edges

| Edge | From | To | Evidence | Boundary | Scheduling | Blockers | Review notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| carded-to-yarn | carded | yarn | supported_by_pcr | aligned | ready | — | Review carded-to-yarn |
| cotton-to-carded | cotton | carded | semantic_candidate | needs_review | blocked | upstream_not_material, evidence_not_pcr, boundary_not_aligned | Map the upstream cotton category. |

### Executable generation waves

1. carded
2. yarn

### Manual-review queue

- cotton-to-carded (cotton → carded): upstream_not_material, evidence_not_pcr, boundary_not_aligned — Map the upstream cotton category.
- Review-only nodes: cotton, fabric

## Official sources

- [official-route] Official route note — Standards Office — Section 2 — The semantic route from cotton to yarn. ([source](<https://example.test/route>); publication DOC-7; published 2025; accessed 2026-09-02)
`;

  assert.equal(renderCpcProductChainReport(analysis), expected);
  assert.equal(renderCpcProductChainReport(analysis), renderCpcProductChainReport(analysis));
});

test("normalizes review-note terminators before joining and preserves escaping", () => {
  const authored = document([
    chain(
      "review-notes",
      [node("upstream", "1", "Upstream"), node("downstream", "2", "Downstream")],
      [edge("upstream-to-downstream", "upstream", "downstream", {
        boundary_assessment: "overlap",
        review_notes: ["First note.", "Keep | content!"],
      })],
    ),
  ]);
  const report = renderCpcProductChainReport(analyze(authored));
  const normalizedNotes = "First note; Keep &#124; content&#33;";

  assert.equal(report.split(normalizedNotes).length - 1, 2);
  assert.doesNotMatch(report, /First note\.;/u);
});

test("escapes hostile authored strings in each rendering context", () => {
  const hostileSource = {
    id: "source|[id]",
    title: "Title\r\n## injected heading",
    publisher: "Publisher ` ``` [link](bad)",
    url: "https://example.test/a_(b)%20?q=%5D#fragment",
    locator: "Section 1\n```mermaid",
    supports: "Support | [link](https://evil.test)\r---",
    accessed_at: "2026-09-02",
  };
  const secondSource = {
    id: "second",
    title: "Second source",
    publisher: "Publisher",
    url: "urn:isbn:9780141036144",
    locator: "Page 2",
    supports: "Second in authored order",
    accessed_at: "2026-09-02",
  };
  const hostileNode = node(
    "a|cell",
    "1",
    'Label " ]\n  injected --> n9 ["boom"]\\path',
  );
  const downstream = node("b", "2", "B");
  const hostileEdge = edge("edge|[link](bad)", "a|cell", "b", {
    review_notes: ["Ready note\n# heading | [link](https://evil.test) ```"],
  });
  const authored = document([
    {
      ...chain("hostile", [hostileNode, downstream], [hostileEdge]),
      title: "Chain\r\n## injected heading",
      description: "Description\n```mermaid\nX --> Y\n```\n---",
    },
  ], [hostileSource, secondSource]);
  const report = renderCpcProductChainReport(analyze(authored));

  assert.equal(report.includes("\r"), false);
  assert.equal((report.match(/```/g) ?? []).length, 2, "only the generated Mermaid fence remains");
  assert.doesNotMatch(report, /\n## injected heading/);
  assert.doesNotMatch(report, /\n# heading/);
  assert.match(report, /## Chain: Chain &#35;&#35; injected heading/);
  assert.match(report, /n0\["1 Label &quot; &#93; injected --&gt; n9 &#91;&quot;boom&quot;&#93;&#92;path"\]/);
  assert.match(report, /edge&#124;&#91;link&#93;&#40;bad&#41;/);
  assert.match(report, /Ready note &#35; heading &#124; &#91;link&#93;&#40;https:\/\/evil\.test&#41; &#96;&#96;&#96;/);
  assert.match(report, /\[source\]\(<https:\/\/example\.test\/a_\(b\)%20\?q=%5D#fragment>\)/);
  assert.equal(report.includes("%2520"), false);
  assert.equal(report.includes("%255D"), false);
  assert.ok(report.indexOf("source&#124;&#91;id&#93;") < report.indexOf("[second] Second source"));
  assert.equal(report, renderCpcProductChainReport(analyze(authored)));
});
