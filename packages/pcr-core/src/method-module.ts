import { createHash } from 'node:crypto';
import { closeSync, constants, fstatSync, lstatSync, openSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import path from 'node:path';
import { parseDocument, stringify } from 'yaml';

export const MODULE_FILES = ['manifest.yaml', 'module.en-US.md', 'module.zh-CN.md', 'source-bindings.json', 'review.json'] as const;
const HASH = /^[a-f0-9]{64}$/;
const UUID = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
export function sha256(bytes: string | Uint8Array): string { return createHash('sha256').update(bytes).digest('hex'); }
export function json(value: unknown): string { return `${JSON.stringify(value, null, 2)}\n`; }
function fail(message: string): never { throw new Error(`METHOD_MODULE_INVALID: ${message}`); }
function object(value: unknown, label: string): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail(`${label} must be an object`);
  return value as Record<string, unknown>;
}
function text(value: unknown, label: string): string {
  if (typeof value !== 'string' || !value.trim()) fail(`${label} must be nonempty text`);
  return value;
}
function array(value: unknown, label: string): unknown[] { if (!Array.isArray(value)) fail(`${label} must be an array`); return value; }
function hash(value: unknown, label: string): string { const result = text(value, label); if (!HASH.test(result)) fail(`${label} must be SHA-256`); return result; }
function unique(values: string[], label: string): void { if (new Set(values).size !== values.length) fail(`duplicate ${label}`); }
function parseYaml(source: string): unknown {
  const doc = parseDocument(source, { uniqueKeys: true, version: '1.2', strict: true, stringKeys: true });
  if (doc.errors.length) fail(doc.errors.map(e => e.message).join('; '));
  return doc.toJS({ maxAliasCount: 0 }) as unknown;
}
/** Reject symlink components as well as symlink leaves; read from one no-follow descriptor. */
export function readRegularBytes(filename: string): Buffer {
  const absolute = path.resolve(filename); let current = path.parse(absolute).root;
  for (const part of absolute.slice(current.length).split(path.sep)) { current = path.join(current, part); if (lstatSync(current).isSymbolicLink()) fail(`symbolic path: ${current}`); }
  const before = lstatSync(absolute);
  if (!before.isFile()) fail(`not a regular file: ${filename}`);
  // POSIX nonblocking open prevents a regular-file-to-FIFO race from blocking before fstat.
  // Windows exposes neither flag and has no filesystem FIFO; retain pre/open descriptor checks.
  const guardedFlags = process.platform === 'win32' ? 0 : constants.O_NOFOLLOW | constants.O_NONBLOCK;
  const fd = openSync(absolute, constants.O_RDONLY | guardedFlags);
  try {
    const opened = fstatSync(fd);
    if (!opened.isFile()) fail(`not a regular file: ${filename}`);
    if (before.dev !== opened.dev || before.ino !== opened.ino) fail(`file changed during open: ${filename}`);
    return readFileSync(fd);
  } finally { closeSync(fd); }
}
export function readRegular(filename: string): string { return new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(readRegularBytes(filename)); }
export interface Requirement { id: string; applicability: string; check_kind: string; sources: string[]; canonical_markdown: string; translation_markdown: string }
export interface Projection {
  schema_version: 1; kind: 'method_module_projection'; module_id: string; module_version: string;
  source_sha256: Record<string, string>; review_basis_sha256: string;
  canonical_context: string; translation_context: string; requirements: Requirement[];
  manifest: Record<string, unknown>; source_bindings: Record<string, unknown>; review: Record<string, unknown>;
}
export interface ModulePackage { schema_version: 1; kind: 'method_module_package'; payload_sha256: string; payload: Projection & { authored_files: Record<string, string> } }
export interface Expectations { id: string; version: string; artifact_sha256: string; review_basis_sha256: string; source_bindings_sha256: string; applicability: 'product-environmental-footprint' }
function sections(markdown: string): { context: string; units: { id: string; applicability: string; check_kind: string; sources: string[]; markdown: string }[] } {
  const matches = [...markdown.matchAll(/^## (PEF-\d{2}) — .+$/gm)];
  const first = matches[0]; if (!first || first.index === undefined) fail('missing complete requirement sections');
  const context = markdown.slice(0, first.index).trim(); if (context.length < 120) fail('missing applicability context');
  const units = matches.map((m, i) => {
    const content = markdown.slice(m.index, matches[i + 1]?.index).trim();
    const applicability = /^Applicability: (all-pef|without-commission-pefcr|with-commission-pefcr)$/m.exec(content)?.[1];
    const check = /^Check-kind: (machine|mixed|professional)$/m.exec(content)?.[1];
    const sources = /^Sources: (.+)$/m.exec(content)?.[1];
    const body = content.split(/^Sources: .+$/m)[1]?.trim();
    if (!m[1] || !applicability || !check || !sources || !body || body.length < 100) fail('incomplete requirement/context unit');
    return { id: m[1], applicability, check_kind: check, sources: sources.split('; '), markdown: content };
  });
  unique(units.map(r => r.id), 'requirement ID');
  if (JSON.stringify(units.map(r => r.id)) !== JSON.stringify(Array.from({ length: 20 }, (_, i) => `PEF-${String(i + 1).padStart(2, '0')}`))) fail('incomplete or reordered supported PEF requirement set');
  return { context, units };
}
function validateManifest(value: unknown): Record<string, unknown> {
  const m = object(value, 'manifest');
  if (m['schema_version'] !== 1 || m['kind'] !== 'method_module' || m['status'] !== 'candidate' || m['canonical_language'] !== 'en-US' || JSON.stringify(m['languages']) !== '["en-US","zh-CN"]' || m['applicability'] !== 'product-environmental-footprint' || m['consumer_policy_included'] !== false || m['scientific_approval'] !== false) fail('unsupported module contract or lifecycle claim');
  if (!/^method\.[a-z0-9-]+$/.test(text(m['id'], 'module id')) || !/^\d+\.\d+\.\d+$/.test(text(m['version'], 'module version'))) fail('invalid module identity/version');
  const title = object(m['title'], 'title'); text(title['en-US'], 'English title'); text(title['zh-CN'], 'Chinese title'); return m;
}
function validateBindings(value: unknown): Record<string, unknown> {
  const b = object(value, 'source bindings');
  if (b['schema_version'] !== 1 || b['factor_package_version'] !== 'EF 3.1') fail('unsupported factor/source contract');
  text(b['normative_version'], 'normative version'); object(b['rights'], 'rights'); object(b['interim_guidance'], 'interim guidance');
  const sources = array(b['sources'], 'sources').map(s => object(s, 'source'));
  unique(sources.map(s => text(s['id'], 'source id')), 'source id');
  if (sources.length < 6) fail('incomplete authoritative source packet');
  for (const s of sources) {
    hash(s['sha256'], 'source sha256');
    const url = new URL(text(s['url'], 'source URL'));
    if (url.protocol !== 'https:' || !url.hostname.endsWith('.europa.eu')) fail('non-official source URL');
    if (typeof s['bytes'] !== 'number' || !Number.isSafeInteger(s['bytes']) || s['bytes'] <= 0) fail('invalid source size');
  }
  const methods = array(b['methods'], 'methods').map(v => object(v, 'method'));
  const ids = methods.map(m => text(m['id'], 'method id')); unique(ids, 'method id');
  if (methods.length !== 25 || methods.filter(m => m['role'] === 'primary').length !== 16 || methods.filter(m => m['role'] === 'subcategory').length !== 9) fail('expected 16 primary and nine subcategory methods');
  for (const m of methods) {
    if (!UUID.test(text(m['id'], 'method id')) || !UUID.test(text(m['reference_quantity_id'], 'reference quantity')) || !/^\d{2}\.\d{2}\.\d{3}$/.test(text(m['version'], 'method version'))) fail('invalid method coordinate');
    hash(m['source_sha256'], 'method source hash'); text(m['source_member'], 'method member'); text(m['unit_label'], 'method unit');
    array(m['intervention_locations'], 'intervention locations'); array(m['impact_locations'], 'impact locations');
    if (m['role'] === 'subcategory' && !methods.some(p => p['id'] === m['parent_id'] && p['role'] === 'primary')) fail('invalid subcategory parent');
    if (m['role'] === 'primary' && m['parent_id'] !== null) fail('primary category has parent');
  }
  const records = array(b['normalisation_weighting'], 'normalisation/weighting').map(v => object(v, 'N/W record'));
  unique(records.map(r => text(r['method_id'], 'N/W method id')), 'N/W method id');
  if (records.length !== 16) fail('missing primary N/W records');
  for (const r of records) {
    const m = methods.find(m => m['id'] === r['method_id'] && m['role'] === 'primary');
    if (!m || m['version'] !== r['method_version'] || m['reference_quantity_id'] !== r['reference_quantity_id'] || m['unit_label'] !== r['unit_label']) fail('N/W identity/unit mismatch');
    for (const key of ['normalisation_factor', 'weight_fraction']) {
      const v = text(r[key], key); if (!/^\d+(?:\.\d+)?$/.test(v) || !Number.isFinite(Number(v)) || Number(v) <= 0) fail(`invalid ${key}`);
    }
  }
  if (Math.abs(records.reduce((sum, r) => sum + Number(r['weight_fraction']), 0) - 1) > 1e-12) fail('weight fractions do not sum to one');
  hash(object(b['normalisation_weighting_source'], 'N/W source')['sha256'], 'N/W source hash');
  if (object(b['geographical_selection'], 'geographical selection')['cache_equivalence_is_suitability'] !== false) fail('geographical suitability claim');
  return b;
}
function validateReviews(value: unknown, basis: string): Record<string, unknown> {
  const r = object(value, 'review'); if (r['schema_version'] !== 1) fail('unsupported review schema');
  const kinds: string[] = [];
  for (const item of array(r['records'], 'review records')) {
    const record = object(item, 'review record');
    const dimension = text(record['dimension'], 'review dimension'); if (!['source', 'translation', 'semantic'].includes(dimension)) fail('invalid review dimension'); kinds.push(dimension);
    if (!['ai-independent', 'human-independent'].includes(text(record['reviewer_kind'], 'reviewer kind'))) fail('unsupported reviewer kind');
    text(record['reviewer_identity'], 'reviewer identity'); text(record['evidence_ref'], 'review evidence');
    if (record['basis_sha256'] !== basis || record['outcome'] !== 'no-material-findings' || !Number.isFinite(Date.parse(text(record['reviewed_at'], 'review date')))) fail('stale or unsuccessful review');
  }
  unique(kinds, 'review dimension'); array(r['limitations'], 'review limitations'); return r;
}
/** Generate all output from authored files; complete English/Chinese sections survive together. */
export function projectModule(files: Record<string, string>): Projection {
  for (const name of MODULE_FILES) if (typeof files[name] !== 'string') fail(`missing ${name}`);
  const manifest = validateManifest(parseYaml(files['manifest.yaml']!));
  const bindings = validateBindings(JSON.parse(files['source-bindings.json']!) as unknown);
  const fingerprints = Object.fromEntries(MODULE_FILES.map(name => [name, sha256(files[name]!)]));
  const basis = sha256(json(Object.fromEntries(MODULE_FILES.filter(n => n !== 'review.json').map(n => [n, fingerprints[n]]))));
  const review = validateReviews(JSON.parse(files['review.json']!) as unknown, basis);
  const en = sections(files['module.en-US.md']!), zh = sections(files['module.zh-CN.md']!);
  const sourceIds = new Set(array(bindings['sources'], 'sources').map(s => text(object(s, 'source')['id'], 'source id')));
  const requirements = en.units.map((u, i) => {
    const t = zh.units[i];
    if (!t || u.id !== t.id || u.applicability !== t.applicability || u.check_kind !== t.check_kind || JSON.stringify(u.sources) !== JSON.stringify(t.sources)) fail('translation identity/order/context mismatch');
    for (const citation of u.sources) { const [source, locator] = citation.split(':', 2); if (!source || !sourceIds.has(source) || !locator?.trim()) fail('missing source or citation locator'); }
    return { id: u.id, applicability: u.applicability, check_kind: u.check_kind, sources: u.sources, canonical_markdown: u.markdown, translation_markdown: t.markdown };
  });
  if (en.units.length !== zh.units.length) fail('translation section count mismatch');
  return { schema_version: 1, kind: 'method_module_projection', module_id: text(manifest['id'], 'id'), module_version: text(manifest['version'], 'version'), source_sha256: fingerprints, review_basis_sha256: basis, canonical_context: en.context, translation_context: zh.context, requirements, manifest, source_bindings: bindings, review };
}
export function moduleDirectory(root: string, relative: string): string {
  if (!/^library\/modules\/[a-z0-9-]+\/[a-z0-9-]+$/.test(relative)) fail('module must be a localized library/modules/<group>/<slug> leaf');
  const resolvedRoot = realpathSync(root), directory = path.join(resolvedRoot, relative);
  readRegular(path.join(directory, 'manifest.yaml')); return directory;
}
export function readModule(directory: string): Record<string, string> { return Object.fromEntries(MODULE_FILES.map(name => [name, readRegular(path.join(directory, name))])); }
export function projectionYaml(projection: Projection): string { return stringify(projection, { lineWidth: 0 }); }
export function checkModule(directory: string): Projection {
  const projection = projectModule(readModule(directory));
  if (readRegular(path.join(directory, 'structured.yaml')) !== projectionYaml(projection)) fail('stale or substituted structured projection');
  return projection;
}
/** Pin artifact and reviewed source independently; embedded reviewer fields alone confer no authority. */
export function verifyModulePackage(bytes: string, expected: Expectations): Projection {
  if (sha256(bytes) !== expected.artifact_sha256) fail('artifact hash mismatch');
  const pkg = object(JSON.parse(bytes) as unknown, 'package');
  const p = object(pkg['payload'], 'payload');
  if (pkg['schema_version'] !== 1 || pkg['kind'] !== 'method_module_package' || pkg['payload_sha256'] !== sha256(json(p))) fail('invalid package integrity');
  // Reconstruct and regenerate from full retained authored bytes, never trust flat rules.
  const files: Record<string, string> = {};
  const embedded = object(p['authored_files'], 'authored files');
  for (const name of MODULE_FILES) files[name] = text(embedded[name], name);
  const projected = projectModule(files);
  if (json(p) !== json({ ...projected, authored_files: files })) fail('substituted or incomplete projection');
  if (projected.module_id !== expected.id || projected.module_version !== expected.version || projected.review_basis_sha256 !== expected.review_basis_sha256 || projected.source_sha256['source-bindings.json'] !== expected.source_bindings_sha256 || projected.manifest['applicability'] !== expected.applicability) fail('wrong module/source/applicability binding');
  if (array(projected.review['records'], 'reviews').length !== 3) fail('independent source/translation/semantic review incomplete');
  return projected;
}
export function exportModule(directory: string): string {
  const files = readModule(directory), projection = projectModule(files);
  if (readRegular(path.join(directory, 'structured.yaml')) !== projectionYaml(projection)) fail('stale or substituted structured projection');
  const payload = { ...projection, authored_files: files };
  return json({ schema_version: 1, kind: 'method_module_package', payload_sha256: sha256(json(payload)), payload });
}
export function findModules(root: string): string[] {
  const base = path.join(realpathSync(root), 'library/modules'); const found: string[] = [];
  if (lstatSync(base).isSymbolicLink()) fail('symbolic modules root');
  for (const group of readdirSync(base, { withFileTypes: true })) {
    if (group.isSymbolicLink()) fail('symbolic module group');
    if (!group.isDirectory()) continue;
    for (const entry of readdirSync(path.join(base, group.name), { withFileTypes: true })) {
      if (entry.isSymbolicLink()) fail('symbolic module leaf');
      if (entry.isDirectory()) found.push(`library/modules/${group.name}/${entry.name}`);
    }
  }
  return found.sort();
}
/** Actual original-byte verification is optional local evidence, never inferred from package conformance. */
export function verifyOriginals(projection: Projection, packetPath: string): number {
  const packetRoot = realpathSync(path.dirname(packetPath));
  const packet = object(JSON.parse(readRegular(path.join(packetRoot, path.basename(packetPath)))) as unknown, 'source packet');
  const originals = array(packet['sources'], 'packet sources').map(s => object(s, 'packet source'));
  let count = 0;
  for (const source of array(projection.source_bindings['sources'], 'bindings')) {
    const s = object(source, 'source'), original = originals.find(o => o['sha256'] === s['sha256'] && o['official_url'] === s['url']);
    if (!original || !/^[a-zA-Z0-9_.-]+$/.test(text(original['local_file'], 'original filename'))) fail('missing original binding');
    const filename = path.join(packetRoot, String(original['local_file']));
    const bytes = readRegularBytes(filename); if (sha256(bytes) !== s['sha256'] || bytes.length !== s['bytes']) fail('original bytes mismatch');
    count++;
  }
  return count;
}

/** Compare selected original XML/config bytes and their represented identities/values. */
export function verifyFactorSources(projection: Projection, extractedRoot: string): { methods: number; normalisation_weighting: number } {
  const sourceRoot = realpathSync(extractedRoot);
  function member(name: unknown, expectedHash: unknown): string {
    const relative = text(name, 'source member');
    if (!/^EF-v3\.1 \(4\)\/(?:ILCD\/lciamethods\/[a-f0-9-]+\.xml|other\/lookLciMethodInformation\.config)$/.test(relative)) fail('unsupported source member path');
    const bytes = readRegularBytes(path.join(sourceRoot, relative));
    if (sha256(bytes) !== hash(expectedHash, 'source member hash')) fail('source member bytes mismatch');
    return bytes.toString('utf8');
  }
  const methods = array(projection.source_bindings['methods'], 'methods');
  for (const item of methods) {
    const m = object(item, 'method'), xml = member(m['source_member'], m['source_sha256']);
    if (!xml.includes(`<common:UUID>${String(m['id'])}</common:UUID>`) || !xml.includes(`<common:dataSetVersion>${String(m['version'])}</common:dataSetVersion>`) || !xml.includes(`<referenceQuantity refObjectId="${String(m['reference_quantity_id'])}"`) || (xml.match(/<factor>/g) ?? []).length !== m['factor_count']) fail('source method metadata mismatch');
    const quantity = /<referenceQuantity\b[^>]*>([\s\S]*?)<\/referenceQuantity>/.exec(xml)?.[1];
    const label = quantity?.replace(/<[^>]+>/g, '').trim();
    if (label !== m['unit_label']) fail('source reference quantity label mismatch');
    for (const [tag, key] of [['interventionLocation', 'intervention_locations'], ['impactLocation', 'impact_locations']] as const) {
      const values = [...xml.matchAll(new RegExp(`<${tag}>([^<]*)</${tag}>`, 'g'))].map(m => m[1]);
      if (JSON.stringify(values) !== JSON.stringify(m[key])) fail('source geography mismatch');
    }
  }
  const source = object(projection.source_bindings['normalisation_weighting_source'], 'N/W source');
  const config = member(source['member'], source['sha256']);
  const nodes = [...config.matchAll(/<configurationLCIAMethod\s+([^>]+)\/>/g)].map(m => Object.fromEntries([...m[1]!.matchAll(/(\w+)="([^"]*)"/g)].map(a => [a[1], a[2]])));
  const records = array(projection.source_bindings['normalisation_weighting'], 'N/W records');
  if (nodes.length !== records.length) fail('source N/W record count mismatch');
  for (const item of records) {
    const record = object(item, 'N/W record'), node = nodes.find(n => n['uuid'] === record['method_id']);
    if (!node || node['globalVal'] !== record['normalisation_factor'] || node['weightedVal'] !== record['weight_fraction'] || node['unitVal'] !== record['source_unit_label'] || node['shortDesc'] !== record['source_short_description']) fail('source N/W value mismatch');
  }
  return { methods: methods.length, normalisation_weighting: records.length };
}
