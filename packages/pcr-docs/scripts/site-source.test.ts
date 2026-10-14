import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { compileSiteSourceFixture } from './fixtures/site-source.ts';
import { createHash } from 'node:crypto';

let temporary: string;
before(() => {
  temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'pcr-site-source-contract-'));
  compileSiteSourceFixture(temporary);
});
after(() => { if (temporary) fs.rmSync(temporary, { recursive: true, force: true }); });

test('native static prefetch bundles shared layouts without losing page content', { timeout: 180_000 }, async (t) => {
  const app = path.join(temporary, 'native-prefetch');
  fs.mkdirSync(path.join(app, 'app', 'second'), { recursive: true });
  fs.symlinkSync(fileURLToPath(new URL('../node_modules', import.meta.url)), path.join(app, 'node_modules'), 'junction');
  fs.writeFileSync(path.join(app, 'package.json'), '{"private":true,"type":"module"}\n');
  // Keep Next's ambient ProcessEnv augmentation outside the Node-only tools
  // project while exercising the actual config, which the web project checks.
  const loaded: unknown = await import(new URL('../next.config.ts', import.meta.url).href);
  assert.ok(loaded !== null && typeof loaded === 'object' && 'default' in loaded);
  const nextConfig: unknown = loaded.default;
  assert.ok(nextConfig !== null && typeof nextConfig === 'object' && 'experimental' in nextConfig);
  const experimental = nextConfig.experimental;
  assert.ok(experimental !== null && typeof experimental === 'object');
  fs.writeFileSync(path.join(app, 'next.config.mjs'), `export default ${JSON.stringify({ ...nextConfig, experimental: { ...experimental, cpus: 1 } })};\n`);
  const shared = Array.from({ length: 160 }, (_, i) => createHash('sha256').update(String(i)).digest('hex')).join(' ');
  fs.writeFileSync(path.join(app, 'app', 'layout.jsx'), `export default function Layout({children}) { return <html lang="en"><body><nav>${shared}</nav>{children}</body></html> }`);
  fs.writeFileSync(path.join(app, 'app', 'page.jsx'), 'import Link from "next/link"; export default function Page() { return <main>Complete first page<Link href="/second/">Second page</Link></main> }');
  fs.writeFileSync(path.join(app, 'app', 'second', 'page.jsx'), 'import Link from "next/link"; export default function Page() { return <main>Complete second page<Link href="/">First page</Link></main> }');
  const built = spawnSync(process.execPath, [path.join(app, 'node_modules/next/dist/bin/next'), 'build', '--webpack'], {
    cwd: app, encoding: 'utf8', timeout: 150_000, maxBuffer: 4 * 1024 * 1024,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
  });
  assert.equal(built.status, 0, built.stderr + built.stdout);
  const exported = path.join(app, 'out');
  const files = fs.readdirSync(exported, { recursive: true }).map(String);
  const segmentPayloads = files.filter(name => name.startsWith('__next.') && name.endsWith('.txt'));
  assert.ok(segmentPayloads.length <= 3, `shared root layout should be bundled into the page; emitted ${segmentPayloads.join(', ')}`);
  for (const [file, text, href] of [['index.html', 'Complete first page', '/second/'], ['second/index.html', 'Complete second page', '/']] as const) {
    const html = fs.readFileSync(path.join(exported, file), 'utf8');
    assert.ok(html.includes(text));
    assert.ok(html.includes(shared));
    assert.ok(html.includes(`href="${href}"`));
  }
  for (const route of ['', 'second/']) {
    for (const file of ['__next._full.txt', '__next._tree.txt']) {
      assert.ok(fs.statSync(path.join(exported, route + file)).size > 0);
    }
    const pagePayload = fs.readdirSync(path.join(exported, route)).find(file => file.endsWith('.__PAGE__.txt'));
    assert.ok(pagePayload, `Missing native page payload for ${route}`);
    assert.ok(fs.readFileSync(path.join(exported, route + pagePayload), 'utf8').includes(shared));
  }
  t.diagnostic(JSON.stringify({ operation: 'native-static-prefetch', rootPayloads: segmentPayloads.length, files: files.length }));
});

for (const [scenario, contract] of [
  ['locales', 'locale aliases preserve document identity and language names remain endonyms'],
  ['schema', 'generated metadata rejects malformed nested records and pages at its boundary'],
  ['generated', 'generated readers separate current/history records and reject traversal or malformed data'],
  ['metadata', 'metadata indexes only readable homes and respects verified alternates and split-page noindex'],
  ['source', 'source navigation exposes leaf records and chapters while isolating historical versions'],
  ['statuses', 'status presentation preserves independent methodology, translation and readiness states'],
  ['components', 'real server components preserve full escaped rules, downloads and catalog links'],
  ['record', 'record pages retain historical notices, chapter navigation and source evidence'],
] as const) {
  test(contract, () => {
    const result = spawnSync(process.execPath, [
      fileURLToPath(new URL('./fixtures/site-source.ts', import.meta.url)), temporary, scenario,
    ], { encoding: 'utf8', timeout: 90_000, maxBuffer: 4 * 1024 * 1024 });
    assert.equal(result.error, undefined);
    assert.equal(result.status, 0, result.stderr + result.stdout);
    assert.match(result.stdout, new RegExp(`PASS ${scenario}\\b`));
  });
}
