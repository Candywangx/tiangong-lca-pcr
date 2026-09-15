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
