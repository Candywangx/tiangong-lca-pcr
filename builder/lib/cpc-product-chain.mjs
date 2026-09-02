import { isDeepStrictEqual } from "node:util";

const PCR_EVIDENCE_KIND = "pcr_projection";
const OFFICIAL_EVIDENCE_KIND = "official_source";
const READY_RELATIONSHIP = "primary_feedstock";
const PCR_EVIDENCE_STATUS = "supported_by_pcr";
const ALIGNED_BOUNDARY = "aligned";

function fail(message) {
  throw new Error(`Invalid CPC product-chain document: ${message}`);
}

function assertUnique(id, seen, kind) {
  if (seen.has(id)) fail(`duplicate ${kind} id ${id}`);
  seen.add(id);
}

function materialResolution(resolution) {
  return Boolean(
    resolution?.coverage_status === "mapped" &&
      resolution.pcr?.readiness?.usable_for_guidance === true,
  );
}

function isNonEmptyString(value) {
  return typeof value === "string" && /\S/.test(value);
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function invalidNodeResolution(chainId, nodeId, field) {
  fail(`chain ${chainId} node ${nodeId} resolved with invalid ${field}`);
}

function validateResolvedNode(chainId, authoredNode, resolved) {
  if (!resolved || typeof resolved !== "object") {
    fail(`chain ${chainId} node ${authoredNode.id} did not resolve`);
  }
  if (resolved.code !== authoredNode.code) {
    fail(
      `chain ${chainId} node ${authoredNode.id} resolved code ${resolved.code} does not match authored code ${authoredNode.code}`,
    );
  }
  if (resolved.label !== authoredNode.label) {
    fail(
      `chain ${chainId} node ${authoredNode.id} resolved label ${JSON.stringify(resolved.label)} does not match authored label ${JSON.stringify(authoredNode.label)}`,
    );
  }
  if (!isNonEmptyString(resolved.coverage_status)) {
    invalidNodeResolution(chainId, authoredNode.id, "coverage_status");
  }
  if (!Object.hasOwn(resolved, "pcr") || (resolved.pcr !== null && !isObject(resolved.pcr))) {
    invalidNodeResolution(chainId, authoredNode.id, "pcr");
  }
  if (resolved.pcr === null) return;

  if (!isNonEmptyString(resolved.pcr.id)) {
    invalidNodeResolution(chainId, authoredNode.id, "pcr.id");
  }
  if (!isNonEmptyString(resolved.pcr.path)) {
    invalidNodeResolution(chainId, authoredNode.id, "pcr.path");
  }
  const readiness = resolved.pcr.readiness;
  if (!isObject(readiness)) {
    invalidNodeResolution(chainId, authoredNode.id, "pcr.readiness");
  }
  if (!isNonEmptyString(readiness.status)) {
    invalidNodeResolution(chainId, authoredNode.id, "pcr.readiness.status");
  }
  if (typeof readiness.usable_for_guidance !== "boolean") {
    invalidNodeResolution(chainId, authoredNode.id, "pcr.readiness.usable_for_guidance");
  }
  if (!isObject(readiness.projection_fingerprint)) {
    invalidNodeResolution(chainId, authoredNode.id, "pcr.readiness.projection_fingerprint");
  }
}

function validateResolvedEvidence(chainId, edge, evidence, evidenceIndex, resolved) {
  if (!resolved || typeof resolved !== "object") {
    fail(`chain ${chainId} edge ${edge.id} PCR evidence ${evidenceIndex} did not resolve`);
  }
  if (!isNonEmptyString(resolved.pcr_id)) {
    fail(`chain ${chainId} edge ${edge.id} PCR evidence ${evidenceIndex} resolved with invalid pcr_id`);
  }
  if (!isNonEmptyString(resolved.source_path)) {
    fail(
      `chain ${chainId} edge ${edge.id} PCR evidence ${evidenceIndex} resolved with invalid source_path`,
    );
  }
  if (!isDeepStrictEqual(resolved.locator, evidence.locator)) {
    fail(`chain ${chainId} edge ${edge.id} PCR evidence ${evidenceIndex} resolved with invalid locator`);
  }
  if (!isNonEmptyString(resolved.value)) {
    fail(`chain ${chainId} edge ${edge.id} PCR evidence ${evidenceIndex} resolved with invalid value`);
  }
  if (resolved.pcr_id !== evidence.pcr_id) {
    fail(
      `chain ${chainId} edge ${edge.id} PCR evidence ${evidenceIndex} resolved PCR ${resolved.pcr_id} does not match authored PCR ${evidence.pcr_id}`,
    );
  }
}

function analyzeEvidence({
  chainId,
  edge,
  officialSourceIds,
  downstream,
  resolvePcrEvidence,
}) {
  if (!Array.isArray(edge.evidence) || edge.evidence.length === 0) {
    fail(`chain ${chainId} edge ${edge.id} has no evidence`);
  }

  const resolvedEvidence = [];
  let hasDownstreamPcrLocator = false;

  for (const [evidenceIndex, evidence] of edge.evidence.entries()) {
    if (!evidence || typeof evidence !== "object") {
      fail(`chain ${chainId} edge ${edge.id} evidence ${evidenceIndex} is malformed`);
    }
    if (evidence.kind === OFFICIAL_EVIDENCE_KIND) {
      if (!officialSourceIds.has(evidence.source_id)) {
        fail(
          `chain ${chainId} edge ${edge.id} evidence ${evidenceIndex} references unknown official source ${evidence.source_id}`,
        );
      }
      continue;
    }
    if (evidence.kind !== PCR_EVIDENCE_KIND) {
      fail(
        `chain ${chainId} edge ${edge.id} evidence ${evidenceIndex} has unsupported evidence kind ${evidence.kind}`,
      );
    }

    const resolved = resolvePcrEvidence({ chainId, edge, evidence, downstream });
    validateResolvedEvidence(chainId, edge, evidence, evidenceIndex, resolved);
    resolvedEvidence.push(resolved);

    if (downstream.pcr) {
      if (evidence.pcr_id !== downstream.pcr.id) {
        fail(
          `chain ${chainId} edge ${edge.id} PCR evidence ${evidenceIndex} names PCR ${evidence.pcr_id} but downstream node ${edge.to} resolves to ${downstream.pcr.id}`,
        );
      }
      hasDownstreamPcrLocator = true;
    }
  }

  if (
    edge.evidence_status === PCR_EVIDENCE_STATUS &&
    downstream.pcr &&
    !hasDownstreamPcrLocator
  ) {
    fail(
      `chain ${chainId} edge ${edge.id} is supported_by_pcr but has no resolved locator for downstream PCR ${downstream.pcr.id}`,
    );
  }

  return resolvedEvidence;
}

function topologicalWaves(chainId, nodes, edges) {
  const readyEdges = edges.filter((edge) => edge.scheduling_status === "ready");
  const executableIds = new Set();
  for (const edge of readyEdges) {
    executableIds.add(edge.from);
    executableIds.add(edge.to);
  }
  if (executableIds.size === 0) return [];

  const authoredOrder = new Map(nodes.map((node, index) => [node.id, index]));
  const indegree = new Map([...executableIds].map((id) => [id, 0]));
  const downstreamIds = new Map([...executableIds].map((id) => [id, []]));
  for (const edge of readyEdges) {
    indegree.set(edge.to, indegree.get(edge.to) + 1);
    downstreamIds.get(edge.from).push(edge.to);
  }

  const waves = [];
  const remaining = new Set(executableIds);
  while (remaining.size > 0) {
    const wave = [...remaining]
      .filter((id) => indegree.get(id) === 0)
      .sort((left, right) => authoredOrder.get(left) - authoredOrder.get(right));
    if (wave.length === 0) fail(`chain ${chainId} ready edges contain a cycle`);
    waves.push(wave);
    for (const id of wave) {
      remaining.delete(id);
      for (const downstreamId of downstreamIds.get(id)) {
        indegree.set(downstreamId, indegree.get(downstreamId) - 1);
      }
    }
  }
  return waves;
}

export function analyzeCpcProductChain(
  document,
  { resolveNode, resolvePcrEvidence },
) {
  if (typeof resolveNode !== "function" || typeof resolvePcrEvidence !== "function") {
    throw new TypeError("analyzeCpcProductChain requires resolveNode and resolvePcrEvidence functions");
  }

  const officialSources = document.official_sources ?? [];
  const officialSourceIds = new Set();
  for (const source of officialSources) {
    assertUnique(source.id, officialSourceIds, "official source");
  }

  const seenChainIds = new Set();
  const seenNodeIds = new Set();
  const seenEdgeIds = new Set();
  const nodeOwners = new Map();
  for (const authoredChain of document.chains ?? []) {
    assertUnique(authoredChain.id, seenChainIds, "chain");
    for (const authoredNode of authoredChain.nodes ?? []) {
      assertUnique(authoredNode.id, seenNodeIds, "node");
      nodeOwners.set(authoredNode.id, authoredChain.id);
    }
    for (const authoredEdge of authoredChain.edges ?? []) {
      assertUnique(authoredEdge.id, seenEdgeIds, "edge");
    }
  }

  const chains = (document.chains ?? []).map((authoredChain) => {
    const nodeById = new Map();
    const nodes = (authoredChain.nodes ?? []).map((authoredNode) => {
      const resolved = resolveNode({ chainId: authoredChain.id, node: authoredNode });
      validateResolvedNode(authoredChain.id, authoredNode, resolved);
      const analyzedNode = { ...authoredNode, resolved };
      nodeById.set(authoredNode.id, analyzedNode);
      return analyzedNode;
    });

    const edges = (authoredChain.edges ?? []).map((authoredEdge) => {
      for (const endpoint of [authoredEdge.from, authoredEdge.to]) {
        if (!nodeById.has(endpoint)) {
          if (nodeOwners.has(endpoint)) {
            fail(
              `chain ${authoredChain.id} edge ${authoredEdge.id} endpoint ${endpoint} belongs to another chain`,
            );
          }
          fail(
            `chain ${authoredChain.id} edge ${authoredEdge.id} has unknown endpoint ${endpoint}`,
          );
        }
      }
      if (authoredEdge.relationship_type !== READY_RELATIONSHIP) {
        fail(
          `chain ${authoredChain.id} edge ${authoredEdge.id} has unsupported relationship type ${authoredEdge.relationship_type}`,
        );
      }
      if (
        !["supported_by_pcr", "supported_by_official_source", "semantic_candidate"].includes(
          authoredEdge.evidence_status,
        )
      ) {
        fail(
          `chain ${authoredChain.id} edge ${authoredEdge.id} has unsupported evidence status ${authoredEdge.evidence_status}`,
        );
      }
      if (!["aligned", "gap", "overlap", "needs_review"].includes(authoredEdge.boundary_assessment)) {
        fail(
          `chain ${authoredChain.id} edge ${authoredEdge.id} has unsupported boundary assessment ${authoredEdge.boundary_assessment}`,
        );
      }

      const upstream = nodeById.get(authoredEdge.from).resolved;
      const downstream = nodeById.get(authoredEdge.to).resolved;
      const resolvedEvidence = analyzeEvidence({
        chainId: authoredChain.id,
        edge: authoredEdge,
        officialSourceIds,
        downstream,
        resolvePcrEvidence,
      });
      const blockers = [];
      if (!materialResolution(upstream)) blockers.push("upstream_not_material");
      if (!materialResolution(downstream)) blockers.push("downstream_not_material");
      if (authoredEdge.evidence_status !== PCR_EVIDENCE_STATUS) {
        blockers.push("evidence_not_pcr");
      }
      if (authoredEdge.boundary_assessment !== ALIGNED_BOUNDARY) {
        blockers.push("boundary_not_aligned");
      }

      return {
        ...authoredEdge,
        scheduling_status: blockers.length === 0 ? "ready" : "blocked",
        blockers,
        resolved_evidence: resolvedEvidence,
      };
    });

    const executableWaves = topologicalWaves(authoredChain.id, nodes, edges);
    const executableNodeIds = new Set(executableWaves.flat());
    return {
      id: authoredChain.id,
      title: authoredChain.title,
      description: authoredChain.description,
      nodes,
      edges,
      executable_waves: executableWaves,
      review_only_node_ids: nodes
        .map((authoredNode) => authoredNode.id)
        .filter((id) => !executableNodeIds.has(id)),
    };
  });

  const edges = chains.flatMap((chain) => chain.edges);
  return {
    artifact: {
      schema_version: document.schema_version,
      artifact_kind: document.artifact_kind,
      status: document.status,
      classification_system: document.classification_system,
      classification_version: document.classification_version,
    },
    official_sources: officialSources,
    chains,
    summary: {
      chain_count: chains.length,
      node_count: chains.reduce((count, chain) => count + chain.nodes.length, 0),
      edge_count: edges.length,
      ready_edge_count: edges.filter((edge) => edge.scheduling_status === "ready").length,
      blocked_edge_count: edges.filter((edge) => edge.scheduling_status === "blocked").length,
    },
  };
}

function singleLine(value) {
  return String(value).replace(/\r\n?|\n/g, " ").replace(/\s+/g, " ");
}

const MARKDOWN_ENTITIES = new Map([
  ["&", "&amp;"],
  ["\\", "&#92;"],
  ["`", "&#96;"],
  ["*", "&#42;"],
  ["_", "&#95;"],
  ["{", "&#123;"],
  ["}", "&#125;"],
  ["[", "&#91;"],
  ["]", "&#93;"],
  ["<", "&#60;"],
  [">", "&#62;"],
  ["(", "&#40;"],
  [")", "&#41;"],
  ["#", "&#35;"],
  ["!", "&#33;"],
  ["|", "&#124;"],
]);

function escapeMarkdownText(value) {
  return singleLine(value).replace(/[&\\`*_{}[\]<>()#!|]/g, (character) =>
    MARKDOWN_ENTITIES.get(character),
  );
}

function markdownInlineText(value) {
  return escapeMarkdownText(value);
}

function markdownHeadingText(value) {
  return escapeMarkdownText(value);
}

function markdownTableText(value) {
  return escapeMarkdownText(value);
}

function joinedReviewNotes(reviewNotes, renderText) {
  return reviewNotes.map((note, index) => {
    const normalized = index === reviewNotes.length - 1
      ? note
      : singleLine(note).replace(/[.!?;:。！？；：]+$/u, "");
    return renderText(normalized);
  }).join("; ");
}

function mermaidText(value) {
  return singleLine(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("\\", "&#92;")
    .replaceAll("[", "&#91;")
    .replaceAll("]", "&#93;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function linkDestination(value) {
  const escaped = String(value)
    .toWellFormed()
    .replace(/[\u0000-\u0020\u007f<>\\]/g, (character) =>
      `%${character.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")}`,
    );
  return `<${escaped}>`;
}

function mermaidNodeId(index) {
  return `n${index}`;
}

function renderOfficialSource(source) {
  const details = [`[source](${linkDestination(source.url)})`];
  if (source.publication_id) {
    details.push(`publication ${markdownInlineText(source.publication_id)}`);
  }
  if (source.publication_date) {
    details.push(`published ${markdownInlineText(source.publication_date)}`);
  }
  details.push(`accessed ${markdownInlineText(source.accessed_at)}`);
  return `- [${markdownInlineText(source.id)}] ${markdownInlineText(source.title)} — ${markdownInlineText(source.publisher)} — ${markdownInlineText(source.locator)} — ${markdownInlineText(source.supports)} (${details.join("; ")})`;
}

export function renderCpcProductChainReport(analysis) {
  const lines = [
    "<!-- GENERATED FILE. DO NOT EDIT DIRECTLY. -->",
    "<!-- Source: builder/planning/cpc-product-chain-pilot.yaml -->",
    "<!-- Build: npm run cpc-chains:build -->",
    "",
    "# CPC Product-Chain Pilot Report",
    "",
    "## Executive summary",
    "",
    `- Chains: ${analysis.summary.chain_count}`,
    `- Nodes: ${analysis.summary.node_count}`,
    `- Edges: ${analysis.summary.edge_count} (${analysis.summary.ready_edge_count} ready, ${analysis.summary.blocked_edge_count} blocked)`,
    "",
    "This report shows reviewed product dependencies for planning PCR work. CPC is a product classification, not a process graph; arrows express scoped pilot relationships, not universal production routes.",
    "",
    "### Caveat",
    "",
    "`semantic_candidate` and official-only (`supported_by_official_source`) edges do not change accepted mappings and do not trigger PCR generation.",
  ];

  for (const chain of analysis.chains) {
    lines.push(
      "",
      `## Chain: ${markdownHeadingText(chain.title)}`,
      "",
      markdownInlineText(chain.description),
      "",
      "```mermaid",
      "flowchart LR",
    );
    const mermaidIds = new Map();
    chain.nodes.forEach((node, index) => {
      const mermaidId = mermaidNodeId(index);
      mermaidIds.set(node.id, mermaidId);
      lines.push(`  ${mermaidId}["${mermaidText(`${node.code} ${node.label}`)}"]`);
    });
    for (const edge of chain.edges) {
      const arrow = edge.scheduling_status === "ready" ? "-->" : "-.->";
      lines.push(`  ${mermaidIds.get(edge.from)} ${arrow} ${mermaidIds.get(edge.to)}`);
    }
    lines.push(
      "```",
      "",
      "### Edges",
      "",
      "| Edge | From | To | Evidence | Boundary | Scheduling | Blockers | Review notes |",
      "| --- | --- | --- | --- | --- | --- | --- | --- |",
    );
    for (const edge of chain.edges) {
      lines.push(
        `| ${markdownTableText(edge.id)} | ${markdownTableText(edge.from)} | ${markdownTableText(edge.to)} | ${edge.evidence_status} | ${edge.boundary_assessment} | ${edge.scheduling_status} | ${edge.blockers.length > 0 ? edge.blockers.join(", ") : "—"} | ${edge.review_notes?.length ? joinedReviewNotes(edge.review_notes, markdownTableText) : "—"} |`,
      );
    }

    lines.push("", "### Executable generation waves", "");
    if (chain.executable_waves.length === 0) {
      lines.push("- None.");
    } else {
      chain.executable_waves.forEach((wave, index) => {
        lines.push(`${index + 1}. ${wave.map(markdownInlineText).join(", ")}`);
      });
    }

    lines.push("", "### Manual-review queue", "");
    const blockedEdges = chain.edges.filter((edge) => edge.scheduling_status === "blocked");
    if (blockedEdges.length === 0 && chain.review_only_node_ids.length === 0) {
      lines.push("- None.");
    } else {
      for (const edge of blockedEdges) {
        const notes = edge.review_notes?.length
          ? ` — ${joinedReviewNotes(edge.review_notes, markdownInlineText)}`
          : "";
        lines.push(
          `- ${markdownInlineText(edge.id)} (${markdownInlineText(edge.from)} → ${markdownInlineText(edge.to)}): ${edge.blockers.join(", ")}${notes}`,
        );
      }
      if (chain.review_only_node_ids.length > 0) {
        lines.push(
          `- Review-only nodes: ${chain.review_only_node_ids.map(markdownInlineText).join(", ")}`,
        );
      }
    }
  }

  lines.push("", "## Official sources", "");
  if (analysis.official_sources.length === 0) {
    lines.push("- None.");
  } else {
    lines.push(...analysis.official_sources.map(renderOfficialSource));
  }
  return `${lines.join("\n")}\n`;
}
