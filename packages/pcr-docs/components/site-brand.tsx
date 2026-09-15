/** Product lockup. The visible text carries the accessible identity; the mark is decorative. */
export function SiteBrand() {
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
        TianGong PCR
        <span className="pcr-brand-divider" aria-hidden="true">
          /
        </span>
        <span className="pcr-brand-product">产品类别规则</span>
      </span>
    </span>
  );
}
