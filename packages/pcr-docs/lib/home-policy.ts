/** Only languages with current readable PCRs belong to the indexed home cluster. */
export function publicHomeLanguages<T extends {code:string}>(manifest: {languages:readonly T[];records:readonly {urls:Readonly<Record<string,string>>}[]}) {
  return manifest.languages.filter((language) =>
    manifest.records.some((record) => Boolean(record.urls[language.code])),
  );
}
export function canonicalHome(manifest:{origin:string;defaultLocale:string}, language:{route:string}) {
  return (
    manifest.origin +
    (language.route === manifest.defaultLocale
      ? "/"
      : "/" + language.route + "/")
  );
}
