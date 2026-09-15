/** The record's own emitted URL set is authoritative for current versus immutable-version navigation. */
/**
 * @param {import("./types").SiteManifest} manifest
 * @param {import("./types").PcrRecord} record
 * @param {string} language
 * @returns {import("./types").DocPage[]}
 */
export function recordPages(manifest, record, language) {
  const pages = new Map(manifest.pages.map((page) => [page.url, page]));
  return (record.pages[language] ?? []).map((url) => {
    const page = pages.get(url);
    if (
      !page ||
      page.pcrId !== record.id ||
      page.language !== language ||
      !page.part
    )
      throw new Error("Invalid record chapter mapping: " + url);
    return page;
  });
}

/**
 * @param {import('./types').SiteManifest} manifest
 * @param {import('./types').PcrRecord} record
 * @param {string} language
 * @param {{title:string,url:string}} label
 * @returns {import('fumadocs-core/page-tree').Node}
 */
export function recordNavigationNode(manifest, record, language, label) {
  const parts = recordPages(manifest, record, language);
  if (!parts.length)
    throw new Error("Record has no page in the requested reading language.");
  const index = { type: "page", name: label.title, url: label.url };
  if (parts.length === 1) return index;
  return {
    type: "folder",
    name: label.title,
    collapsible: true,
    defaultOpen: true,
    index,
    children: parts.map((part) => ({
      type: "page",
      name: part.part?.label ?? part.title,
      url: part.url,
    })),
  };
}
