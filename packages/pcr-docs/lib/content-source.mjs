import { loader } from "fumadocs-core/source";
import { defineI18n } from "fumadocs-core/i18n";
/** Register every emitted reading language; UI translation availability does not limit content routing. */
export function createDocumentSource(manifest) {
  return loader({
    baseUrl: "/docs",
    i18n: defineI18n({
      defaultLanguage: manifest.defaultLocale,
      languages: manifest.languages.map((language) => language.route),
      hideLocale: "never",
      parser: "dir",
      fallbackLanguage: null,
    }),
    url: (slugs, locale) =>
      "/" + [locale, "docs", ...slugs].filter(Boolean).join("/") + "/",
    source: {
      files: manifest.pages.map((page) => ({
        type: "page",
        path: `${page.locale}/${page.slugs.join("/")}.mdx`,
        slugs: page.slugs,
        data: { title: page.title, description: page.description, doc: page },
      })),
    },
  });
}
