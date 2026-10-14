import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This repository maintains its own governed AGENTS.md contract; never let `next dev`
  // append generated agent rules to a tracked file.
  agentRules: false,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // TypeScript 7 has no JavaScript compiler API; use the local tsc CLI.
    useTypeScriptCli: true,
    // The deployment provider allocates 4 cores and 6 GB; keep the builder inside that budget.
    cpus: 4,
    // Bundle shared layouts through Next's native prefetch protocol, keeping
    // the static file count bounded without dropping navigation payloads.
    prefetchInlining: { maxSize: 16 * 1024, maxBundleSize: 32 * 1024 },
  },
};

export default nextConfig;
