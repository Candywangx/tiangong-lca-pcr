import type { Metadata } from "next";
import Link from "next/link";
import { DocumentShell } from "@/components/document-shell";
import { getSiteManifest } from "@/lib/generated";
import { DEFAULT_ROUTE } from "@/lib/i18n";
import { libraryUrl } from "@/lib/source";
import { providerTranslations } from "@/lib/translations";

/** A 404 is never an indexing target, whatever host ends up serving it. */
export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: false },
};

/** Unmatched routes inside the export. Static hosts keep serving the nearest emitted 404 page. */
export default function NotFound() {
  const manifest = getSiteManifest();
  const text = providerTranslations(
    manifest.languages,
    DEFAULT_ROUTE,
    DEFAULT_ROUTE,
  ).translations;

  return (
    <DocumentShell locale={DEFAULT_ROUTE} languages={manifest.languages}>
      <main className="pcr-shell pcr-home">
        <p className="pcr-eyebrow">404</p>
        <h1 className="pcr-display">{text["Page Not Found(404 page)"]}</h1>
        <p className="pcr-lede" style={{ marginBlockStart: "0.75rem" }}>
          {
            text[
              "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 page)"
            ]
          }
        </p>
        <div className="pcr-hero-actions">
          <Link className="pcr-action pcr-action--primary" href="/">
            {text["Back to Home(404 page)"]}
          </Link>
          <Link className="pcr-action" href={libraryUrl(DEFAULT_ROUTE)}>
            浏览 PCR 库
          </Link>
        </div>
      </main>
    </DocumentShell>
  );
}
