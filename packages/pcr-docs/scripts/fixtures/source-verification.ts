import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {parseHTML} from 'linkedom';
import {renderMarkdown, finalizePart, sha256} from '../markdown.ts';
import type {SourceVerificationRun} from '../verify-source-pool.ts';
import type {GenerationReport} from '../generation-report.ts';

type Source = GenerationReport['documents'][number];

export interface SourceFixture {
  root: string;
  app: string;
  out: string;
  documents: Source[];
  context(): SourceVerificationRun;
  html(index: number): string;
  writeHtml(index: number, contents: string): void;
  close(): void;
}

/** Tiny original Markdown/DOM inputs, with independent files for real child processes. */
export function sourceFixture(count = 3): SourceFixture {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pcr-source-verification-'));
  const app = path.join(root, 'app');
  const out = path.join(app, 'out');
  fs.mkdirSync(path.join(app, '.generated'), {recursive: true});
  fs.mkdirSync(path.join(root, 'sources'));
  const documents: Source[] = [];
  const pages: SourceVerificationRun['manifest']['pages'][number][] = [];
  for (let index = 0; index < count; index++) {
    const sourcePath = `sources/document-${index}.md`;
    const source = `---\ntitle: Source ${index}\n---\n# Source ${index}\n\nA bounded paragraph for ${index}.\n\n- first\n- second\n`;
    fs.writeFileSync(path.join(root, sourcePath), source);
    const rendered = renderMarkdown(source, sourcePath);
    const url = `/document-${index}/`;
    const part = rendered.parts[0];
    if (!part || rendered.parts.length !== 1) throw new Error('Fixture must use exactly one source page');
    let html = finalizePart(part, {hrefForAnchor: id => `${url}#${id}`});
    if (part.sourceHeadingId) {
      html = `<h1 id="${rendered.sourceHeadingAnchor}" data-source-node="${part.sourceHeadingId}">${rendered.title}</h1>${html}`;
    }
    fs.mkdirSync(path.join(out, url), {recursive: true});
    fs.writeFileSync(path.join(out, url, 'index.html'), `<html><body><main data-source-document="${sourcePath}">${html}</main></body></html>`);
    const inventoryPath = `inventory-${index}.json`;
    fs.writeFileSync(path.join(app, '.generated', inventoryPath), JSON.stringify({anchorTargets: {}}));
    documents.push({sourcePath, sourceSha256: sha256(source), inventoryPath, pages: 1, nodes: part.sourceNodeIds.length});
    pages.push({sourcePath, url, sourceNodeIds: part.sourceNodeIds});
  }
  const file = (index: number) => path.join(out, `/document-${index}/index.html`);
  return {
    root, app, out, documents,
    context() {
      const parsed = new Map<string, Document>();
      return {
        root, app, out, origin: 'https://source-verification.invalid',
        documents, manifest: {pages}, report: {links: []}, parsed,
        readPage(url: string) {
          if (!parsed.has(url)) {
            parsed.set(url, parseHTML(fs.readFileSync(path.join(out, url, 'index.html'), 'utf8')).document);
          }
          return parsed.get(url)!;
        },
      };
    },
    html: index => fs.readFileSync(file(index), 'utf8'),
    writeHtml: (index, contents) => fs.writeFileSync(file(index), contents),
    close: () => fs.rmSync(root, {recursive: true, force: true}),
  };
}

/** Compile the actual pool and worker graph so its emitted relative URL is exercised. */
export async function compileSourceVerifierFixture(temporary: string): Promise<string> {
  const {createRequire} = await import('node:module');
  const {execFileSync} = await import('node:child_process');
  const {fileURLToPath} = await import('node:url');
  const docsRoot = fileURLToPath(new URL('../../', import.meta.url));
  const repositoryRoot = path.resolve(docsRoot, '../..');
  const requireRoot = createRequire(path.join(repositoryRoot, 'package.json'));
  const compilerPackage = requireRoot.resolve('typescript/package.json');
  const installed: unknown = JSON.parse(fs.readFileSync(compilerPackage, 'utf8'));
  const configured: unknown = JSON.parse(fs.readFileSync(path.join(repositoryRoot, 'package.json'), 'utf8'));
  const object = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === 'object' && !Array.isArray(value);
  if (!object(installed) || !object(configured) || !object(configured.devDependencies) || installed.version !== configured.devDependencies.typescript) {
    throw new Error('Source worker fixture requires the repository-pinned compiler');
  }
  const fixtureRoot = fs.realpathSync(temporary);
  const output = path.join(fixtureRoot, 'emitted');
  const configuration = path.join(fixtureRoot, 'tsconfig.json');
  fs.writeFileSync(configuration, JSON.stringify({
    extends: path.join(repositoryRoot, 'tsconfig.web-tools.json'),
    compilerOptions: {noEmit: false, noEmitOnError: true, sourceMap: true, inlineSources: true, rootDir: repositoryRoot, outDir: output,
      typeRoots: [path.join(repositoryRoot, 'node_modules/@types'), path.join(docsRoot, 'node_modules/@types')]},
    include: ['verify-source-document.ts', 'verify-source-pool.ts', 'verify-source-worker.ts', 'fixtures/source-verification.ts']
      .map(file => path.join(docsRoot, 'scripts', file)),
  }));
  execFileSync(process.execPath, [path.join(path.dirname(compilerPackage), 'bin/tsc'), '-p', configuration],
    {cwd: repositoryRoot, encoding: 'utf8', stdio: 'pipe', timeout: 90_000});
  fs.writeFileSync(path.join(output, 'package.json'), '{"type":"module"}\n');
  fs.symlinkSync(path.join(repositoryRoot, 'node_modules'), path.join(output, 'node_modules'), 'junction');
  const emittedDocs = path.join(output, 'packages/pcr-docs');
  fs.symlinkSync(path.join(docsRoot, 'node_modules'), path.join(emittedDocs, 'node_modules'), 'junction');
  return emittedDocs;
}
