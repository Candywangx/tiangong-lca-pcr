/** Only languages with current readable PCRs belong to the indexed home cluster. */
export function publicHomeLanguages(manifest) {
  return manifest.languages.filter((language) =>
    manifest.records.some((record) => Boolean(record.urls[language.code])),
  );
}
export function canonicalHome(manifest, language) {
  return (
    manifest.origin +
    (language.route === manifest.defaultLocale
      ? "/"
      : "/" + language.route + "/")
  );
}
