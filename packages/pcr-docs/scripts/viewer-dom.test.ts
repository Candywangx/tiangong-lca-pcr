import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Process isolation gives every app boot and worker session its own module state and globals.
for (const [scenario, description] of [
  ['catalog', 'Viewer loads metadata lazily and applies literal/status/maturity filters'],
  ['content', 'Viewer renders bilingual Markdown, complete guidance, sources and accessible tabs'],
  ['history', 'Viewer loads history once and routes to the selected immutable snapshot'],
  ['scaffold', 'Viewer labels missing methodology and unavailable reading languages explicitly'],
  ['detail-error', 'Viewer preserves a selected catalog record when its detail fetch fails'],
  ['race-success', 'Viewer ignores a late successful detail response after selection changes'],
  ['race-error', 'Viewer ignores a late failed detail response after selection changes'],
  ['boot-error', 'Viewer boot errors remain visible and escaped'],
  ['pinned-route', 'Viewer corrects mismatched pinned snapshot query parameters'],
  ['pinned-valid', 'Viewer reads a valid pinned snapshot without redirecting or reading the active pointer'],
  ['old-schema-pinned', 'Viewer routes pinned old-schema metadata before loading a catalog'],
  ['old-schema', 'Viewer routes old-schema metadata to its compatible UI before loading a catalog'],
  ['missing-mount', 'Viewer fails explicitly when its mount is absent'],
  ['search-worker', 'Document search owns worker language sessions and handles cancellation and errors'],
] as const) {
  test(description, () => {
    const result = spawnSync(process.execPath, [fileURLToPath(new URL('./fixtures/viewer-dom.ts', import.meta.url)), scenario], {
      encoding: 'utf8', timeout: 30_000, maxBuffer: 2 * 1024 * 1024,
    });
    assert.equal(result.error, undefined);
    assert.equal(result.status, 0, result.stdout + result.stderr);
    assert.match(result.stdout, new RegExp(`PASS ${scenario}\\b`));
  });
}
