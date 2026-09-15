import assert from "node:assert/strict";
/** EdgeOne documents one URL-path wildcard (including nested paths), with optional suffix. */
export function matchesPath(pattern, pathname) {
  if (
    !pattern.startsWith("/") ||
    (pattern.match(/\*/gu) ?? []).length > 1 ||
    pattern.includes(":")
  )
    throw new Error("Unsupported hosting path pattern: " + pattern);
  const escaped = pattern
    .split("*")
    .map((part) => part.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&"))
    .join(".*");
  return new RegExp("^" + escaped + "$", "u").test(pathname);
}
export function headersFor(config, pathname, { firstMatch = false } = {}) {
  const result = {};
  for (const rule of config.headers ?? []) {
    if (!matchesPath(rule.source, pathname)) continue;
    for (const header of rule.headers)
      result[header.key.toLowerCase()] = header.value;
    if (firstMatch) break;
  }
  return result;
}
export function verifyHostingContract(config, downloads) {
  assert.equal(config.outputDirectory, "packages/pcr-docs/out");
  assert.equal(
    config.installCommand,
    "npm ci && npm --prefix packages/pcr-docs ci",
  );
  assert.equal(config.buildCommand, "npm --prefix packages/pcr-docs run build");
  assert.equal(config.nodeVersion, "24.18.0");
  for (const source of ["/zh", "/zh/"])
    assert.ok(
      config.redirects?.some(
        (rule) =>
          rule.source === source &&
          rule.destination === "/" &&
          [301, 308].includes(rule.statusCode),
      ),
      "Missing permanent Chinese-home consolidation: " + source,
    );
  // Specific rules carry their complete required headers, avoiding reliance on overlap precedence.
  for (const firstMatch of [false, true]) {
    for (const raw of downloads) {
      const headers = headersFor(config, raw.url, { firstMatch });
      assert.equal(
        headers["x-robots-tag"],
        "noindex",
        "Raw artifact noindex: " + raw.url,
      );
      assert.equal(
        headers["content-disposition"],
        "attachment",
        "Raw artifact attachment: " + raw.url,
      );
    }
    for (const file of [
      "search-worker.mjs",
      "search-engine.mjs",
      "search-terms.mjs",
    ]) {
      const headers = headersFor(config, "/generated/" + file, { firstMatch });
      assert.match(
        headers["content-type"] ?? "",
        /^text\/javascript/u,
        "Worker module MIME",
      );
      assert.equal(headers["x-robots-tag"], "noindex");
    }
    assert.equal(
      headersFor(config, "/generated/data/example.json", { firstMatch })[
        "x-robots-tag"
      ],
      "noindex",
    );
  }
}
