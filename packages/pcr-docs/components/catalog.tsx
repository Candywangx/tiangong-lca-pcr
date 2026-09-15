import Link from 'next/link';
import { buildDomainNav, languageCodeFor, recordTitle, recordUrls, routeUrl } from '@/lib/source';
import { getSiteManifest } from '@/lib/generated';
import { pageStrings } from '@/lib/metadata';

function formatCount(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

/**
 * Coverage is a derived read model over external classifications. It is presented beside the
 * methodology catalog but never mixed into it, and its URLs are the generator's coverage pages.
 */
export function Coverage({ locale }: { locale: string }) {
  const manifest = getSiteManifest();
  const text = pageStrings(locale);
  const code = languageCodeFor(manifest, locale);

  return (
    <section aria-labelledby="pcr-coverage-heading">
      <h2 id="pcr-coverage-heading" className="pcr-section-title">
        {text.classificationTitle}
      </h2>
      <p className="pcr-section-lede">{text.classificationNote}</p>
      <p className="pcr-status-note" style={{ marginBlockStart: '0.5rem' }}>
        {text.coverageSeparate}
      </p>
      <div className="pcr-domain-grid" style={{ marginBlockStart: '1rem' }}>
        {manifest.coverage.map((entry) => {
          const url =
            routeUrl(manifest.origin, entry.url?.[code]) ??
            routeUrl(manifest.origin, entry.url?.[manifest.defaultLocale]);
          return (
            <article key={`${entry.system}:${entry.version}`} className="pcr-domain">
              <div className="pcr-domain-head">
                <h3>
                  <span className="pcr-mono">
                    {entry.system}:{entry.version}
                  </span>
                </h3>
              </div>
              <dl className="pcr-coverage-summary">
                {Object.entries(entry.summary).map(([key, value]) => (
                  <div key={key}>
                    <dt>{key.replace(/_/gu, ' ')}</dt>
                    <dd>{typeof value === 'number' ? formatCount(value) : String(value)}</dd>
                  </div>
                ))}
              </dl>
              <div className="pcr-chip-row" style={{ marginBlockStart: '0.75rem' }}>
                {url ? (
                  <Link className="pcr-chip" href={url}>
                    {text.browse}
                  </Link>
                ) : null}
                <a className="pcr-chip" href={entry.downloadUrl} download>
                  {text.coverageDownload}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/**
 * The library root carries the complete link set: every domain, every subdomain and every record.
 * That is why the sidebar can stay scoped to a single domain and why the generated domain and
 * subdomain pages do not repeat this list.
 */
export function Catalog({ locale }: { locale: string }) {
  const manifest = getSiteManifest();
  const text = pageStrings(locale);
  const code = languageCodeFor(manifest, locale);
  const fallback = manifest.defaultLocale;
  const domains = buildDomainNav(locale);

  return (
    <section aria-labelledby="pcr-catalog-heading">
      <h2 id="pcr-catalog-heading" className="pcr-section-title">
        {text.allDomains}
      </h2>
      <p className="pcr-section-lede">
        {formatCount(manifest.counts.pcrs)} {text.records} · {formatCount(domains.length)}{' '}
        {text.domains}
      </p>
      <div className="pcr-tree" style={{ marginBlockStart: '1rem' }}>
        {domains.map((domain) => (
          <article key={domain.slug} className="pcr-domain">
            <div className="pcr-domain-head">
              <h3>{domain.title}</h3>
              <span className="pcr-count">
                {formatCount(
                  domain.records.length +
                    domain.subdomains.reduce((total, item) => total + item.records.length, 0),
                )}{' '}
                {text.records}
              </span>
            </div>
            {domain.records.length > 0 ? (
              <ul className="pcr-record-list">
                {domain.records.map((record) => (
                  <li key={record.id}>
                    <Link href={recordUrls(manifest.origin, record, code, fallback) ?? '/'}>
                      {recordTitle(record, code, fallback)}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            {domain.subdomains.length > 0 ? (
              <div className="pcr-subdomains">
                {domain.subdomains.map((subdomain) => (
                  <section key={subdomain.slug}>
                    <div className="pcr-domain-head">
                      <h4>{subdomain.title}</h4>
                      <span className="pcr-count">
                        {formatCount(subdomain.records.length)} {text.records}
                      </span>
                    </div>
                    <ul className="pcr-record-list">
                      {subdomain.records.map((record) => (
                        <li key={record.id}>
                          <Link href={recordUrls(manifest.origin, record, code, fallback) ?? '/'}>
                            {recordTitle(record, code, fallback)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            ) : null}
            {domain.records.length === 0 && domain.subdomains.length === 0 ? (
              <p className="pcr-empty-inline">{text.empty}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
