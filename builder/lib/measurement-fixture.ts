import { cpSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { parsePcrMarkdownToStructured, structuredProjectionYaml } from './markdown-projection.ts';

/** Keep the historical regression artifact immutable while exercising today's
 * projection writer on the same authored measurement defect. */
export function withCurrentMeasurementFixture<T>(source: string, inspect: (root: string) => T): T {
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-measurement-current-')));
  try {
    cpSync(source, root, { recursive: true });
    const markdown = readFileSync(path.join(root, 'pcr.en-US.md'), 'utf8');
    writeFileSync(path.join(root, 'structured.yaml'), structuredProjectionYaml(parsePcrMarkdownToStructured(markdown), { sourceMarkdown: markdown }));
    return inspect(root);
  } finally { rmSync(root, { recursive: true, force: true }); }
}
