import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { compileSiteSourceFixture } from './fixtures/site-source.ts';

let temporary: string;
before(() => {
  temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'pcr-site-source-contract-'));
  compileSiteSourceFixture(temporary);
});
after(() => { if (temporary) fs.rmSync(temporary, { recursive: true, force: true }); });

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
