import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getSiteManifest } from '@/lib/generated';

const baiduSiteVerification = process.env.PCR_BAIDU_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteManifest().origin),
  verification: {
    google: process.env.PCR_GOOGLE_SITE_VERIFICATION,
    other: baiduSiteVerification
      ? { 'baidu-site-verification': baiduSiteVerification }
      : undefined,
  },
};

/**
 * A root layout never receives the params of nested dynamic segments, so it cannot know the
 * locale. The `html` element and the client provider therefore live in `app/(entry)/layout.tsx`
 * and `app/[lang]/layout.tsx`, where the alias is known and each tree sets its own `lang`.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
