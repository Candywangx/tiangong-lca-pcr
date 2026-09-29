/** Locale-specific product lockup. Visible text carries the identity; the mark is decorative. */
export function SiteBrand({ locale }: { locale: string }) {
  return (
    <span className="pcr-brand">
      <span className="pcr-brand-mark" aria-hidden="true">
        {/* Static export serves the public SVGs directly. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-light.svg" alt="" width={28} height={28} className="pcr-brand-light" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-dark.svg" alt="" width={28} height={28} className="pcr-brand-dark" />
      </span>
      <span className="pcr-brand-name">
        {locale === 'zh' ? '天工产品类别规则' : 'TianGong PCR'}
      </span>
    </span>
  );
}
