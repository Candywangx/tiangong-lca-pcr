/** Logical deployed bytes, independent of HTTP compression or local filesystem allocation. */
export function summarizeExportFiles(files) {
  const categories = Object.fromEntries(
    ["rscText", "html", "rawDownloads", "recordJson", "search", "jsCss", "other"]
      .map((category) => [category, { files: 0, bytes: 0 }]),
  );
  let bytes = 0;
  let maxFile = null;
  for (const file of files) {
    const relative = file.path.replaceAll("\\", "/");
    const name = relative.slice(relative.lastIndexOf("/") + 1);
    const category = relative.startsWith("generated/raw/") ? "rawDownloads"
      : relative.startsWith("generated/data/") ? "recordJson"
      : relative.startsWith("generated/search/") ? "search"
      : name === "index.txt" || (name.startsWith("__next.") && name.endsWith(".txt")) ? "rscText"
      : name.endsWith(".html") ? "html"
      : relative.startsWith("_next/static/") && /\.(?:m?js|css)$/u.test(name) ? "jsCss"
      : "other";
    categories[category].files += 1;
    categories[category].bytes += file.bytes;
    bytes += file.bytes;
    if (!maxFile || file.bytes > maxFile.bytes ||
      (file.bytes === maxFile.bytes && file.path < maxFile.path)) maxFile = file;
  }
  return { files: files.length, bytes, maxFile, categories };
}
