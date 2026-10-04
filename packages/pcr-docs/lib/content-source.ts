import type {SiteManifest,DocPage} from "./types.ts";
import { loader, type StaticSource, type MetaData } from "fumadocs-core/source";
import { defineI18n } from "fumadocs-core/i18n";
/** Register every emitted reading language; UI translation availability does not limit content routing. */
export function createDocumentSource(manifest: SiteManifest) {
  const source:StaticSource<{metaData:MetaData;pageData:{title:string;description:string;doc:DocPage}}>= {
      files: manifest.pages.map((page) => ({
        type: "page" as const,
        path: `${page.locale}/${page.slugs.join("/")}.mdx`,
        slugs: page.slugs,
        data: { title: page.title, description: page.description, doc: page },
      })),
    };
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
    source,
  });
}
