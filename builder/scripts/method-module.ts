import { mkdirSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { checkModule, exportModule, findModules, json, moduleDirectory, projectModule, projectionYaml, readModule, sha256, verifyOriginals, verifyFactorSources } from '../../packages/pcr-core/src/method-module.ts';

const HELP = `Method module maintenance (candidate methodology; no PCR publication).\nUsage: npm run module:<sync|check|export> -- [--module library/modules/<group>/<slug>] [options]\nsync: regenerate structured.yaml from complete EN/ZH sources and metadata.\ncheck: verify every localized module, or one --module. No source mutation.\nexport: --module and --output <new-file> required; complete reviews required unless --allow-unreviewed.\ncheck --source-packet <manifest.json>: additionally verify actual local original bytes.\ncheck --ef-directory <extracted-directory>: additionally verify 25 source XMLs and 16 N/W records.\nAll output is JSON; package checks do not qualify a product study or approve methodology.\nConsumers independently pin artifact SHA-256, module ID/version, review basis and source-bindings SHA-256.\n`;
export function main(args: string[]): void {
  if (args.includes('--help')) { process.stdout.write(HELP); return; }
  const [command, ...rest] = args;
  if (!['sync', 'check', 'export'].includes(command ?? '')) throw new Error('Expected sync, check or export; use --help');
  const options: Record<string, string> = {}; let unreviewed = false;
  for (let i = 0; i < rest.length; i++) {
    const key = rest[i]!;
    if (key === '--allow-unreviewed') { if (unreviewed || command !== 'export') throw new Error('Invalid --allow-unreviewed'); unreviewed = true; continue; }
    if (!['--module', '--output', '--source-packet', '--ef-directory'].includes(key) || options[key] !== undefined || !rest[i + 1] || rest[i + 1]!.startsWith('--')) throw new Error(`Invalid option ${key}`);
    options[key] = rest[++i]!;
  }
  if ((options['--source-packet'] || options['--ef-directory']) && command !== 'check') throw new Error('--source-packet requires check');
  if (options['--output'] && command !== 'export') throw new Error('--output requires export');
  if (command === 'export' && (!options['--module'] || !options['--output'])) throw new Error('export requires --module and --output');
  const root = process.cwd(), targets = options['--module'] ? [options['--module']] : findModules(root);
  const results = [];
  for (const target of targets) {
    const directory = moduleDirectory(root, target);
    if (command === 'sync') {
      const projection = projectModule(readModule(directory));
      // A single generated derivative replaces atomically. Source content is never rewritten.
      const temp = path.join(directory, `.structured-${process.pid}.tmp`);
      try { writeFileSync(temp, projectionYaml(projection), { flag: 'wx' }); renameSync(temp, path.join(directory, 'structured.yaml')); } finally { rmSync(temp, { force: true }); }
      results.push({ module: target, review_basis_sha256: projection.review_basis_sha256 });
    } else {
      const projection = checkModule(directory);
      if (command === 'export') {
        if (!unreviewed && (projection.review['records'] as unknown[]).length !== 3) throw new Error('Independent source/translation/semantic review incomplete; --allow-unreviewed creates a candidate diagnostic artifact only');
        const bytes = exportModule(directory), output = path.resolve(options['--output']!);
        if (output.startsWith(`${directory}${path.sep}`)) throw new Error('Export must be outside canonical module directory');
        mkdirSync(path.dirname(output), { recursive: true }); writeFileSync(output, bytes, { flag: 'wx' });
        results.push({ module: target, output, artifact_sha256: sha256(bytes), source_bindings_sha256: projection.source_sha256['source-bindings.json'], review_basis_sha256: projection.review_basis_sha256, candidate_diagnostic: unreviewed });
      } else {
        results.push({ module: target, conformance: 'pass', independent_reviews: (projection.review['records'] as unknown[]).length, review_basis_sha256: projection.review_basis_sha256, verified_originals: options['--source-packet'] ? verifyOriginals(projection, path.resolve(options['--source-packet'])) : 'not-checked', verified_factor_sources: options['--ef-directory'] ? verifyFactorSources(projection, path.resolve(options['--ef-directory'])) : 'not-checked', study_qualification: 'not-assessed' });
      }
    }
  }
  process.stdout.write(json({ command, results }));
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try { main(process.argv.slice(2)); } catch (error) { process.stderr.write(json({ code: 'METHOD_MODULE_ERROR', message: error instanceof Error ? error.message : String(error) })); process.exitCode = 1; }
}
