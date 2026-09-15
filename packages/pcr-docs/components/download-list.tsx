import type { Download } from '@/lib/types';

function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return '';
  if (bytes < 1024) return `${bytes} B`;
  const units = ['KB', 'MB', 'GB'];
  let value = bytes / 1024;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value.toFixed(value >= 10 ? 0 : 1)} ${units[unit]}`;
}

export function DownloadList({
  downloads,
  labels,
}: {
  downloads: Download[];
  labels: { heading: string; note: string; hash: string };
}) {
  if (downloads.length === 0) return null;
  return (
    <section aria-labelledby="pcr-downloads-heading">
      <h2 id="pcr-downloads-heading" className="pcr-section-title">
        {labels.heading}
      </h2>
      <p className="pcr-section-lede">{labels.note}</p>
      <ul className="pcr-downloads" style={{ marginBlockStart: '0.75rem' }}>
        {downloads.map((download) => (
          <li key={download.url} className="pcr-download">
            <a className="pcr-download-name" href={download.url} download>
              {download.name}
            </a>
            <span className="pcr-download-meta">
              {formatBytes(download.bytes)}
              {download.sha256 ? (
                <>
                  {' · '}
                  <span className="pcr-mono" title={download.sha256}>
                    {download.sha256.replace(/^sha256:/u, '').slice(0, 12)}…
                  </span>
                </>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
