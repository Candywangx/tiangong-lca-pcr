import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire, registerHooks } from 'node:module';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { ComponentType, Context } from 'react';
import type { DocPage, Download, Language, PcrRecord, SiteManifest } from '../../lib/types.ts';


// These test-boundary contracts avoid importing the complete Next type graph into
// the Node-only tooling project. Executed modules are unchanged pinned-compiler output.
type StatusText = { label: string; hint: string };
type Tone = 'neutral' | 'info' | 'warning' | 'error' | 'success';
type I18nApi = {
  routeForLocale(languages: readonly Language[], locale: string): string | undefined;
  localeForRoute(languages: readonly Language[], route: string): Language | undefined;
  isRouteLocale(value: string, languages: readonly Language[]): boolean;
  languageLabel(locale: string): string; toHtmlLang(locale: string): string; dirFor(locale: string): 'ltr' | 'rtl';
};
type LocaleLinkApi = { swapLocale(path: string, next: string): string; alternateTarget(alternates: Record<string,string> | undefined, next: string): string | undefined };
type TranslationApi = { providerTranslations(languages: readonly Language[], route: string, defaultRoute: string): { locale: string; translations: Record<string,string>; locales: {locale:string;name:string}[] } };
type GeneratedApi = {
  getSiteManifest(): SiteManifest; getDocPage(slugs: string[]|undefined, locale:string): DocPage|undefined;
  getPcrRecord(id:string,version?:string): PcrRecord|undefined; readPageHtml(page:DocPage):string;
  readRecordData(record:PcrRecord): {manifest:Record<string,unknown>;structured:Record<string,unknown>};
};
type SourceApi = {
  languageFor(manifest:SiteManifest, source:{language?:string;locale?:string}):Language|undefined;
  languageCodeFor(manifest:SiteManifest, locale:string):string;
  recordTitle(record:PcrRecord,code:string,fallback:string):string;
  titleFor(map:Record<string,string|null>|undefined,code:string,fallback:string,slug:string):string;
  routeUrl(origin:string,url:string|undefined):string|undefined;
  recordUrls(origin:string,record:PcrRecord,code:string,fallback:string):string|undefined;
  pageLastModified(page:DocPage,fallback:string):string; sourceUrl(manifest:SiteManifest,path:string|undefined):string|undefined;
  sourcePage(slugs:string[]|undefined,locale:string):{data:{doc:DocPage}}|undefined;
  sourceParams():{lang:string;slug:string[]}[];
  recordParts(manifest:SiteManifest,locale:string,record:PcrRecord,origin:string):{index:number;label:string;url:string}[];
  buildDomainNav(locale:string):{slug:string;subdomains:{title:string}[]}[];
  titleFromSlug(slug:string):string; libraryUrl(locale:string):string; coveragePage(locale:string):DocPage|undefined;
  navigationTree(context:{locale:string;catalogRoot?:boolean;domain?:string;subdomain?:string;record?:PcrRecord}):{type:'root';name:string;children:unknown[]};
  navMessages(locale:string):{library:string}; recordDownloads(record:PcrRecord,code:string):Download[];
};
type MetadataResult = {description?:string;robots?:unknown;alternates?:{canonical?:string;languages?:Record<string,string>}};
type MetadataApi = {
  pageMetadata(page:DocPage,manifest:SiteManifest):MetadataResult;
  homeMetadata(locale:string,manifest:SiteManifest,override?:string):MetadataResult;
  pageStrings(locale:string):{catalog:string}; routeName(locale:string):string;
};
type StatusApi = {
  lifecycleStatus(value:string,locale:string):StatusText; readinessStatus(value:string,locale:string):StatusText;
  translationStatus(value:string,locale:string):StatusText; maturityLabel(value:string,locale:string):string;
  toneFor(kind:'lifecycle'|'readiness'|'translation',value:string):Tone;
  StatusBadge:ComponentType<{children?:import('react').ReactNode;tone?:Tone;title?:string}>;
};

const docsRoot = fileURLToPath(new URL('../../', import.meta.url));
const repositoryRoot = path.resolve(docsRoot, '../..');
const origin = 'https://pcr.example.test';
const requireDocs = createRequire(path.join(docsRoot, 'package.json'));
const isObject = (value: unknown): value is Record<string,unknown> => value !== null && typeof value === 'object' && !Array.isArray(value);
const nextRoot = path.dirname(requireDocs.resolve('next/package.json'));

/** Emit the actual source with the installed pinned compiler; no product module is stubbed. */
export function compileSiteSourceFixture(temporary: string): void {
  const output = path.join(temporary, 'emitted');
  const config = path.join(temporary, 'tsconfig.json');
  fs.writeFileSync(config, JSON.stringify({ compilerOptions: {
    target: 'ES2023', module: 'ESNext', moduleResolution: 'Bundler', jsx: 'react-jsx',
    strict: true, skipLibCheck: true, esModuleInterop: true, resolveJsonModule: true,
    allowJs: false, rewriteRelativeImportExtensions: true, noEmitOnError: true, verbatimModuleSyntax: true, erasableSyntaxOnly: true,
    sourceMap: true, inlineSources: true, rootDir: repositoryRoot, outDir: output,
    paths: { '@/*': [path.join(docsRoot, '*')] },
    types: ['node', 'react'], typeRoots: [path.join(docsRoot, 'node_modules/@types'), path.join(repositoryRoot, 'node_modules/@types')],
    lib: ['ES2024', 'DOM', 'DOM.Iterable'],
  }, files: [
    ...['locale-link', 'i18n', 'translations', 'metadata', 'generated', 'source', 'site-contracts'].map(name => path.join(docsRoot, 'lib', `${name}.ts`)),
    ...['status-badge', 'structured-summary', 'catalog', 'home-content', 'download-list', 'pcr-record', 'module-scaffold', 'breadcrumb-jsonld'].map(name => path.join(docsRoot, 'components', `${name}.tsx`)),
  ] }));
  const compilerPackage = createRequire(path.join(repositoryRoot, 'package.json')).resolve('typescript/package.json');
  const installed: unknown = JSON.parse(fs.readFileSync(compilerPackage, 'utf8'));
  const configured: unknown = JSON.parse(fs.readFileSync(path.join(repositoryRoot, 'package.json'), 'utf8'));
  assert.ok(isObject(installed) && isObject(configured) && isObject(configured.devDependencies));
  assert.equal(installed.version, configured.devDependencies.typescript, 'Use the repository-pinned compiler');
  const compiler = path.join(path.dirname(compilerPackage), 'bin/tsc');
  execFileSync(process.execPath, [compiler, '-p', config], { cwd: repositoryRoot, encoding: 'utf8', stdio: 'pipe', timeout: 90_000 });
  fs.writeFileSync(path.join(output, 'package.json'), '{"type":"module"}\n');
  fs.symlinkSync(path.join(repositoryRoot, 'node_modules'), path.join(output, 'node_modules'), 'junction');
  const emittedDocs = path.join(output, 'packages/pcr-docs');
  fs.symlinkSync(path.join(docsRoot, 'node_modules'), path.join(emittedDocs, 'node_modules'), 'junction');
}

function makePage(locale: string, kind: DocPage['kind'], slugs: string[], options: Partial<DocPage> = {}): DocPage {
  const url = `/${locale}/docs/${slugs.join('/')}/`;
  return { key: `${locale}:${slugs.join('/')}`, kind, language: locale === 'zh' ? 'zh-CN' : locale === 'de' ? 'de-DE' : 'en-US',
    locale, slugs, url, title: 'Fixture title', description: 'Fixture scope', toc: [], indexable: true,
    canonical: origin + url, alternates: {}, sourceNodeIds: [], ...options };
}
function makeRecord(id: string, slug: string[], options: Partial<PcrRecord> = {}): PcrRecord {
  return { id, slug, title: { 'en-US': `English ${id}`, 'zh-CN': `中文 ${id}` }, status: 'candidate', maturity: 'authored_methodology',
    version: '1.1.0', updatedAt: '2026-10-01T00:00:00Z', sourcePath: `library/pcrs/${slug.join('/')}`,
    translationStatus: { 'en-US': 'reviewed', 'zh-CN': 'aligned' }, readiness: { status: 'review_required', blockers: [], warnings: [] },
    urls: { 'en-US': origin + `/en/docs/pcr/${slug.join('/')}/`, 'zh-CN': origin + `/zh/docs/pcr/${slug.join('/')}/` },
    pages: { 'en-US': [], 'zh-CN': [] }, downloads: [], dataPath: 'data/record.json', dataUrl: '/generated/data/record.json', classificationRefs: [], modules: {}, ...options };
}
export function sourceManifest(): SiteManifest {
  const primary = makeRecord('pcr-primary', ['agriculture', 'seeds', 'wheat']);
  const direct = makeRecord('pcr-direct', ['agriculture'], { updatedAt: null });
  const englishOnly = makeRecord('pcr-english', ['industry', 'chemicals', 'acid'], { urls: { 'en-US': origin + '/en/docs/pcr/industry/chemicals/acid/' } });
  const legacy = makeRecord(primary.id, primary.slug, { version: '1.0.0', status: 'published', sourcePath: primary.sourcePath + '/releases/1.0.0',
    urls: { 'en-US': origin + '/en/docs/pcr/agriculture/seeds/wheat/versions/1.0.0/' } });
  const pages: DocPage[] = [];
  for (const locale of ['en', 'zh']) {
    for (const slugs of [['pcr'], ['pcr', 'agriculture'], ['pcr', 'agriculture', 'seeds']]) pages.push(makePage(locale, 'catalog', slugs));
    pages.push(makePage(locale, 'coverage', ['coverage', 'cpc', '3.0']));
    for (let index = 0; index < 2; index += 1) {
      const slugs = ['pcr', ...primary.slug, ...(index ? ['part-2'] : [])];
      const page = makePage(locale, 'pcr', slugs, { pcrId: primary.id, part: { index, total: 2, label: `${index + 1}. Chapter ${index + 1}` },
        htmlPath: 'html/document.html', sourcePath: `${primary.sourcePath}/pcr.${locale === 'zh' ? 'zh-CN' : 'en-US'}.md`,
        sourceHeadingAnchor: 'normative-title', sourceHeadingId: 'source-node-title',
        toc: [{ title: 'Process: milling (mill)', url: '#milling', depth: 3 }], sourceSha256: 'sha256:' + 'b'.repeat(64) });
      pages.push(page);
      primary.pages[page.language]?.push(page.url);
    }
  }
  legacy.pages = { 'en-US': ['/en/docs/pcr/agriculture/seeds/wheat/versions/1.0.0/'] };
  pages.push(makePage('en', 'pcr', ['pcr', ...primary.slug, 'versions', '1.0.0'], { pcrId: primary.id, recordVersion: '1.0.0', part: { index: 0, total: 1, label: 'Frozen release' },
    currentUrl: '/en/docs/pcr/agriculture/seeds/wheat/', currentLanguage: 'en-US', indexable: false }));
  pages.push(makePage('de', 'module', ['modules', 'placeholder'], { indexable: false }));
  return { schemaVersion: 1, sourceCommit: 'a'.repeat(40), sourceDate: '2026-10-02T12:00:00Z', generatorVersion: 'fixture-1', origin, defaultLocale: 'zh',
    languages: [
      { code: 'zh-CN', route: 'zh', label: '中文', htmlLang: 'zh-CN', required: true },
      { code: 'en-US', route: 'en', label: 'English', htmlLang: 'en-US', required: true },
      { code: 'de-DE', route: 'de', label: 'Deutsch', htmlLang: 'de-DE', required: false },
    ], records: [primary, direct, englishOnly], historicalRecords: [legacy], pages,
    categoryTitles: { seeds: { 'zh-CN': '种子', 'en-US': 'Seeds' } }, domains: [{ slug: 'agriculture', title: { 'zh-CN': '农业', 'en-US': 'Agriculture' }, count: 2 }],
    coverage: [{ system: 'cpc', version: '3.0', summary: { total: 2000, mapped: 1, manual_review: 3, future_state: 2 }, url: { 'en-US': origin + '/en/docs/coverage/cpc/3.0/', 'zh-CN': origin + '/zh/docs/coverage/cpc/3.0/' }, downloadUrl: '/generated/coverage.json' }],
    counts: { pcrs: 3, pages: pages.length, sourceBytes: 1234, languages: 3 } };
}

async function run(temporary: string, scenario: string): Promise<void> {
  const fixture = path.join(temporary, `fixture-${scenario}`);
  const generated = path.join(fixture, '.generated');
  fs.mkdirSync(path.join(generated, 'html'), { recursive: true });
  fs.mkdirSync(path.join(generated, 'data'), { recursive: true });
  const manifest = sourceManifest();
  fs.writeFileSync(path.join(generated, 'site.json'), JSON.stringify(manifest));
  fs.writeFileSync(path.join(generated, 'html/document.html'), '<h2 id="retained">Uncut normative condition &amp; action</h2>');
  const completeRule = 'When more than one saleable product is produced, allocate explicitly <script>unsafe</script> & retain conditions. ' + 'complete '.repeat(1200);
  fs.writeFileSync(path.join(generated, 'data/record.json'), JSON.stringify({ manifest: { id: 'pcr-primary' }, structured: {
    system_boundary: { rules: [{ rule_id: 'boundary<1>', applies_to: 'wheat & grain', rule: completeRule, source_ids: ['source-1', 'source-2'] }] },
    allocation_rules: [], validation_rules: [], process_inventory: [
      { id: 'mill', label: 'Milling <safe>', inputs: { materials: [1, 2], energy: [3] }, outputs: { products: [4] } },
      { id: 'missing', label: 'Unlinked process', inputs: {}, outputs: {} },
    ],
  } }));
  process.chdir(fixture);
  // The real Next Link runtime consumes the same trailing-slash setting as next.config.ts.
  process.env.__NEXT_TRAILING_SLASH = 'true';
  const emitted = fs.realpathSync(path.join(temporary, 'emitted/packages/pcr-docs'));
  registerHooks({ resolve(specifier, context, nextResolve) {
    if (specifier.startsWith('next/') && !context.conditions.includes('require')) { const file = path.join(nextRoot, specifier.slice(5)); return nextResolve(pathToFileURL(path.extname(file) ? file : file + '.js').href, context); }
    if (specifier.startsWith('@/')) return nextResolve(pathToFileURL(path.join(emitted, specifier.slice(2) + '.js')).href, context);
    if (specifier.startsWith('.') && !path.extname(specifier) && context.parentURL?.startsWith(pathToFileURL(emitted).href)) return nextResolve(specifier + '.js', context);
    return nextResolve(specifier, context);
  } });
  const load = (relative: string) => import(pathToFileURL(path.join(emitted, relative + '.js')).href);
  const locale = await load('lib/i18n') as I18nApi;
  const links = await load('lib/locale-link') as LocaleLinkApi;
  const translations = await load('lib/translations') as TranslationApi;
  const boundary = await load('lib/site-contracts') as {parseSiteManifest(text:string|Uint8Array):SiteManifest;assertSiteManifest(value:unknown):void};
  if (scenario === 'locales') {
    assert.equal(links.swapLocale('/zh/docs/pcr/a/b/', 'en'), '/en/docs/pcr/a/b/');
    assert.equal(links.swapLocale('/docs/pcr/a', 'zh'), '/zh/docs/pcr/a/');
    assert.equal(links.swapLocale('/generated/file.json', 'en'), '/en/generated/file.json');
    assert.equal(links.swapLocale('/', 'en'), '/en/');
    assert.equal(links.alternateTarget({ 'en-US': '/en/docs/precise/' }, 'en-US'), '/en/docs/precise/');
    for (const invalid of ['https://elsewhere.test/', 'javascript:alert(1)', 'relative']) assert.equal(links.alternateTarget({ en: invalid }, 'en'), undefined);
    assert.equal(links.alternateTarget(undefined, 'en'), undefined);
    assert.equal(locale.routeForLocale(manifest.languages, 'en-US'), 'en');
    assert.equal(locale.localeForRoute(manifest.languages, 'zh')?.code, 'zh-CN');
    assert.equal(locale.localeForRoute(manifest.languages, 'unknown'), undefined);
    assert.equal(locale.isRouteLocale('en-US', manifest.languages), false);
    assert.equal(locale.isRouteLocale('en', manifest.languages), true);
    assert.equal(locale.languageLabel('en-US').toLowerCase(), 'english');
    assert.match(locale.languageLabel('zh-CN'), /中文/);
    assert.equal(locale.languageLabel('invalid_!'), 'invalid_!');
    assert.equal(locale.toHtmlLang('zh-CN'), 'zh-CN');
    assert.equal(locale.toHtmlLang('<script>'), 'en');
    assert.equal(locale.dirFor('ar-SA'), 'rtl');
    assert.equal(locale.dirFor('zh-CN'), 'ltr');
    assert.equal(translations.providerTranslations(manifest.languages, 'zh', 'zh').translations['Open Sidebar(sidebar)(aria-label)'], '打开侧栏');
    const optional = translations.providerTranslations(manifest.languages, 'de', 'zh');
    assert.equal(optional.locale, 'de');
    assert.equal(optional.translations['Search(search trigger)'], 'Search');
    assert.deepEqual(optional.locales.map(item => item.locale), ['zh', 'en', 'de']);
  } else if (scenario === 'schema') {
    assert.deepEqual(boundary.parseSiteManifest(new TextEncoder().encode(JSON.stringify(manifest))), manifest);
    for (const change of [
      (value: SiteManifest) => { value.schemaVersion = 2 as 1; },
      (value: SiteManifest) => { value.records[0]!.readiness.blockers = [null] as unknown as PcrRecord['readiness']['blockers']; },
      (value: SiteManifest) => { value.records[0]!.downloads = [{ name: 'bad', url: '/', sha256: 'x', bytes: Number.NaN }]; },
      (value: SiteManifest) => { value.pages[0]!.kind = 'unknown' as DocPage['kind']; },
      (value: SiteManifest) => { value.pages[0]!.toc = [{ title: 'x', url: '#x', depth: Infinity }]; },
      (value: SiteManifest) => { value.languages[0]!.required = 'yes' as unknown as boolean; },
      (value: SiteManifest) => { value.historicalRecords = [null] as unknown as PcrRecord[]; },
      (value: SiteManifest) => { value.categoryTitles = { invalid: { en: 1 } } as unknown as SiteManifest['categoryTitles']; },
    ]) { const invalid = structuredClone(manifest); change(invalid); assert.throws(() => boundary.assertSiteManifest(invalid), /Invalid generated PCR site manifest/); }
    for (const invalid of [null, [], {}, 5, { ...manifest, counts: null }]) assert.throws(() => boundary.assertSiteManifest(invalid), TypeError);
    assert.throws(() => boundary.parseSiteManifest('{'), SyntaxError);
  } else {
    const generatedApi = await load('lib/generated') as GeneratedApi;
    const source = await load('lib/source') as SourceApi;
    const metadata = await load('lib/metadata') as MetadataApi;
    const record = manifest.records[0]!;
    const page = manifest.pages.find(item => item.pcrId === record.id && item.locale === 'en' && item.part?.index === 0)!;
    if (scenario === 'generated') {
      assert.equal(generatedApi.getSiteManifest(), generatedApi.getSiteManifest());
      assert.equal(generatedApi.getDocPage(page.slugs, 'en')?.key, page.key);
      assert.equal(generatedApi.getDocPage(page.slugs, 'zh')?.language, 'zh-CN');
      assert.equal(generatedApi.getDocPage(undefined, 'en'), undefined);
      assert.equal(generatedApi.getPcrRecord(record.id)?.version, '1.1.0');
      assert.equal(generatedApi.getPcrRecord(record.id, '1.0.0')?.status, 'published');
      assert.equal(generatedApi.getPcrRecord('missing'), undefined);
      assert.equal(generatedApi.getPcrRecord(record.id, '9.0.0'), undefined);
      assert.equal(generatedApi.readPageHtml({ ...page, htmlPath: undefined }), '');
      assert.match(generatedApi.readPageHtml(page), /Uncut normative condition/);
      assert.throws(() => generatedApi.readPageHtml({ ...page, htmlPath: '../secret.html' }), /Invalid generated artifact path/);
      assert.throws(() => generatedApi.readRecordData({ ...record, dataPath: '..' }), /Invalid generated artifact path/);
      assert.equal(generatedApi.readRecordData(record).manifest.id, record.id);
      for (const invalid of [null, [], { manifest: null, structured: {} }, { manifest: {}, structured: [] }]) {
        fs.writeFileSync(path.join(generated, 'data/bad.json'), JSON.stringify(invalid));
        assert.throws(() => generatedApi.readRecordData({ ...record, dataPath: 'data/bad.json' }), /Invalid generated PCR record data/);
      }
    } else if (scenario === 'metadata') {
      const entry = metadata.pageMetadata({ ...page, description: '', indexable: false, alternates: { 'en-US': origin + '/en/exact/', 'zh-CN': origin + '/zh/exact/', 'de-DE': 'javascript:bad' } }, manifest);
      assert.equal(entry.description, undefined);
      assert.deepEqual(entry.robots, { index: false, follow: true });
      assert.equal(entry.alternates?.canonical, page.canonical);
      assert.deepEqual(entry.alternates?.languages, { 'en-US': origin + '/en/exact/', 'zh-CN': origin + '/zh/exact/', 'x-default': origin + '/zh/exact/' });
      assert.equal(metadata.pageMetadata({ ...page, part: { index: 1, total: 2, label: 'second' }, alternates: { 'zh-CN': origin + '/zh/second/' } }, manifest).alternates?.languages?.['x-default'], undefined);
      assert.equal(metadata.pageMetadata(page, manifest).robots, undefined);
      assert.equal(metadata.pageMetadata(page, manifest).alternates?.languages, undefined);
      assert.equal(metadata.homeMetadata('zh', manifest, '/').alternates?.canonical, origin + '/');
      assert.equal(metadata.homeMetadata('en', manifest).alternates?.canonical, origin + '/en/');
      assert.equal(metadata.homeMetadata('de', manifest).robots && typeof metadata.homeMetadata('de', manifest).robots, 'object');
      assert.deepEqual(metadata.homeMetadata('de', manifest).alternates?.languages, {});
      assert.deepEqual(Object.keys(metadata.homeMetadata('zh', manifest).alternates?.languages ?? {}), ['zh-CN', 'en-US', 'x-default']);
      assert.equal(metadata.pageStrings('zh').catalog, 'PCR 目录');
      assert.equal(metadata.routeName('en'), 'Product category rules');
    } else if (scenario === 'source') {
      assert.equal(source.languageFor(manifest, { language: 'en-US', locale: 'zh' })?.route, 'en');
      assert.equal(source.languageFor(manifest, { locale: 'missing' })?.code, 'zh-CN');
      assert.equal(source.languageCodeFor({ ...manifest, languages: [] }, 'en'), 'zh');
      assert.equal(source.recordTitle({ ...record, title: {} }, 'en-US', 'zh-CN'), record.id);
      assert.equal(source.titleFor(undefined, 'en-US', 'zh', 'untranslated'), 'untranslated');
      assert.equal(source.routeUrl(origin, origin + '/en/a/'), '/en/a/');
      assert.equal(source.routeUrl(origin, 'https://outside.test/a/'), undefined);
      assert.equal(source.routeUrl(origin, '//outside.test/a/'), undefined);
      assert.equal(source.recordUrls(origin, { ...record, urls: { 'en-US': 'https://outside.test/', 'zh-CN': '/zh/fallback/' } }, 'en-US', 'zh-CN'), '/zh/fallback/');
      assert.equal(source.pageLastModified({ ...page, lastModified: '' }, 'fallback'), 'fallback');
      assert.equal(source.pageLastModified({ ...page, lastModified: 'specific' }, 'fallback'), 'specific');
      assert.equal(source.sourceUrl(manifest, undefined), undefined);
      assert.match(source.sourceUrl(manifest, record.sourcePath)!, new RegExp('/blob/' + 'a'.repeat(40) + '/'));
      assert.equal(source.sourcePage(page.slugs, 'en')?.data.doc.key, page.key);
      assert.equal(source.sourcePage(['missing'], 'en'), undefined);
      assert.equal(source.sourceParams().length, manifest.pages.length);
      assert.equal(source.recordParts(manifest, 'en', record, origin).length, 2);
      assert.deepEqual(source.recordParts(manifest, 'en', record, origin).map(part => part.index), [0, 1]);
      assert.equal(source.recordParts(manifest, 'en', manifest.historicalRecords![0]!, origin).length, 1);
      assert.deepEqual(source.buildDomainNav('zh').map(domain => domain.slug), ['agriculture']);
      assert.deepEqual(source.buildDomainNav('en').map(domain => domain.slug), ['agriculture', 'industry']);
      assert.equal(source.buildDomainNav('zh')[0]?.subdomains[0]?.title, '种子');
      assert.equal(source.titleFromSlug('--untranslated-domain-'), 'Untranslated Domain');
      assert.equal(source.libraryUrl('de'), '/de/docs/pcr/');
      assert.equal(source.coveragePage('zh')?.kind, 'coverage');
      const full = source.navigationTree({ locale: 'en', catalogRoot: true });
      const active = source.navigationTree({ locale: 'en', domain: 'agriculture', subdomain: 'seeds', record });
      const historical = source.navigationTree({ locale: 'en', domain: 'agriculture', subdomain: 'seeds', record: manifest.historicalRecords![0]! });
      assert.match(JSON.stringify(full), /English pcr-primary/);
      assert.match(JSON.stringify(active), /Chapter 2/);
      assert.match(JSON.stringify(historical), /versions\/1\.0\.0/);
      assert.equal(source.navigationTree({ locale: 'en', catalogRoot: true }), full);
      assert.equal(source.navigationTree({ locale: 'de' }).children.length, 0);
      assert.throws(() => source.navigationTree({ locale: 'de', record: manifest.historicalRecords![0]! }), /no page in the requested reading language/);
      assert.equal(source.navMessages('zh').library, 'PCR 库');
      const downloads = [{ name: 'pcr.en-US.md', url: '/en', bytes: 1, sha256: 'x' }, { name: 'pcr.zh-CN.md', url: '/zh', bytes: 1, sha256: 'y' }];
      assert.deepEqual(source.recordDownloads({ ...record, downloads }, 'zh-CN').map(item => item.url), ['/zh', '/en']);
      assert.equal(downloads[0]?.url, '/en');
    } else {
      const { createElement } = await import(requireDocs.resolve('react')) as typeof import('react');
      const { renderToStaticMarkup } = await import(requireDocs.resolve('react-dom/server')) as typeof import('react-dom/server');
      const { parseHTML } = await import(requireDocs.resolve('linkedom')) as typeof import('linkedom');
      const badges = await load('components/status-badge') as StatusApi;
      const render = (element: ReturnType<typeof createElement>) => parseHTML('<html><body>' + renderToStaticMarkup(element) + '</body></html>').document;
      if (scenario === 'statuses') {
        assert.equal(badges.lifecycleStatus('candidate', 'zh-CN').label, '候选');
        assert.match(badges.lifecycleStatus('candidate', 'en').hint, /awaiting methodology review/);
        assert.equal(badges.lifecycleStatus('published', 'en').label, 'Published');
        assert.equal(badges.lifecycleStatus('new-state', 'en').label, 'new-state');
        assert.match(badges.lifecycleStatus('new-state', 'zh').hint, /非科学评审结论/);
        assert.equal(badges.readinessStatus('unavailable', 'zh').label, '暂不可用');
        assert.equal(badges.translationStatus('out_of_sync', 'en').label, 'Translation out of sync');
        assert.equal(badges.translationStatus('unknown', 'en').label, 'unknown');
        assert.equal(badges.maturityLabel('reviewed_methodology', 'zh'), '已评审方法学');
        assert.equal(badges.maturityLabel('unknown', 'en'), 'unknown');
        for (const [kind, value, tone] of [['lifecycle', 'candidate', 'warning'], ['readiness', 'ready', 'success'], ['translation', 'out_of_sync', 'error'], ['translation', 'unknown', 'neutral']] as const) assert.equal(badges.toneFor(kind, value), tone);
        const dom = render(createElement(badges.StatusBadge, { tone: 'warning', title: 'Review <required>' }, 'Candidate <unapproved>'));
        assert.equal(dom.querySelector('.pcr-status-dot')?.getAttribute('aria-hidden'), 'true');
        assert.equal(dom.querySelector('.pcr-status')?.textContent, 'Candidate <unapproved>');
        assert.equal(dom.querySelector('unapproved'), null);
        assert.equal(render(createElement(badges.StatusBadge, {}, 'Unknown')).querySelector('.pcr-status')?.hasAttribute('title'), false);
      } else if (scenario === 'components') {
        const { StructuredSummary } = await load('components/structured-summary') as {StructuredSummary:ComponentType<{record:PcrRecord;page:DocPage}>};
        const summary = render(createElement(StructuredSummary, { record, page }));
        assert.equal(summary.querySelector('[data-rule-id="boundary<1>"] td:nth-child(3)')?.textContent, completeRule);
        assert.equal(summary.querySelector('script'), null);
        assert.equal(summary.querySelector('a[href="' + page.url + '#milling"]')?.textContent, 'Milling <safe>');
        assert.equal(summary.querySelectorAll('tbody')[3]?.querySelector('tr td:nth-child(3)')?.textContent, '3');
        assert.equal(summary.querySelectorAll('tbody')[3]?.querySelector('tr:nth-child(2) td:nth-child(3)')?.textContent, '0');
        assert.equal(renderToStaticMarkup(createElement(StructuredSummary, { record, page: { ...page, part: { index: 1, total: 2, label: 'next' } } })), '');
        const { Catalog, Coverage } = await load('components/catalog') as {Catalog:ComponentType<{locale:string}>;Coverage:ComponentType<{locale:string}>};
        const catalog = render(createElement(Catalog, { locale: 'zh' }));
        assert.equal(catalog.querySelectorAll('a').length, 2);
        assert.match(catalog.body.textContent ?? '', /种子/);
        assert.deepEqual([...catalog.querySelectorAll('a')].map(a => ({href:a.getAttribute('href'),text:a.textContent})), [{href:'/zh/docs/pcr/agriculture/',text:'中文 pcr-direct'},{href:'/zh/docs/pcr/agriculture/seeds/wheat/',text:'中文 pcr-primary'}]);
        const coverage = render(createElement(Coverage, { locale: 'en' }));
        assert.match(coverage.body.textContent ?? '', /2,000/);
        assert.match(coverage.body.textContent ?? '', /future state/);
        assert.equal(coverage.querySelector('a[download]')?.getAttribute('href'), '/generated/coverage.json');
        const { HomeContent } = await load('components/home-content') as {HomeContent:ComponentType<{locale:string;manifest:SiteManifest}>};
        const home = render(createElement(HomeContent, { locale: 'zh', manifest }));
        assert.match(home.body.textContent ?? '', /尚未完成方法学评审/);
        assert.equal(home.querySelector('.pcr-anatomy-record a')?.getAttribute('href'), '/zh/docs/pcr/agriculture/seeds/wheat/');
        const emptyHome = render(createElement(HomeContent, { locale: 'en', manifest: { ...manifest, records: [], languages: [], sourceDate: 'invalid-date' } }));
        assert.equal(emptyHome.querySelector('.pcr-anatomy-record'), null);
        assert.match(emptyHome.body.textContent ?? '', /invalid-date/);
        const { DownloadList } = await load('components/download-list') as {DownloadList:ComponentType<{downloads:Download[];labels:{heading:string;note:string;hash:string}}>};
        const labels = { heading: 'Sources', note: 'Byte verified', hash: 'Hash' };
        assert.equal(renderToStaticMarkup(createElement(DownloadList, { downloads: [], labels })), '');
        const downloads = render(createElement(DownloadList, { labels, downloads: [0, 512, 1024, 10240, 1048576, 1073741824, -1].map((bytes, index) => ({ name: 'pcr<' + index + '>', url: '/' + index, bytes, sha256: index ? 'sha256:' + 'c'.repeat(64) : '' })) }));
        assert.match(downloads.body.textContent ?? '', /512 B/);
        assert.match(downloads.body.textContent ?? '', /1\.0 KB/);
        assert.match(downloads.body.textContent ?? '', /10 KB/);
        assert.match(downloads.body.textContent ?? '', /1\.0 MB/);
        assert.match(downloads.body.textContent ?? '', /1\.0 GB/);
        const { ModuleScaffold } = await load('components/module-scaffold') as {ModuleScaffold:ComponentType<{locale:string}>};
        assert.match(render(createElement(ModuleScaffold, { locale: 'zh' })).body.textContent ?? '', /不构成可用方法学/);
        const { BreadcrumbJsonLd, SiteJsonLd, pageTrail } = await load('components/breadcrumb-jsonld') as {BreadcrumbJsonLd:ComponentType<{trail:{name:string;url:string}[]}>;SiteJsonLd:ComponentType<{locale:string}>;pageTrail(locale:string,url:string,name:string):{name:string;url:string}[]};
        const breadcrumbs = render(createElement(BreadcrumbJsonLd, { trail: [{ name: '</script><img src=x>', url: '/en/' }] }));
        assert.equal(breadcrumbs.querySelectorAll('script').length, 1);
        assert.equal(breadcrumbs.querySelector('img'), null);
        const breadcrumbValue: unknown = JSON.parse(breadcrumbs.querySelector('script')!.textContent);
        assert.ok(isObject(breadcrumbValue) && Array.isArray(breadcrumbValue.itemListElement) && isObject(breadcrumbValue.itemListElement[0]));
        assert.equal(breadcrumbValue.itemListElement[0].name, '</script><img src=x>');
        assert.equal(pageTrail('zh', page.url, 'Method')[0]?.name, '首页');
        const siteValue: unknown = JSON.parse(render(createElement(SiteJsonLd, { locale: 'en' })).querySelector('script')!.textContent);
        assert.ok(isObject(siteValue));
        assert.equal(siteValue.url, origin + '/');
      } else if (scenario === 'record') {
        const { PcrRecordPage } = await load('components/pcr-record') as {PcrRecordPage:ComponentType<{record:PcrRecord;page:DocPage;html:string}>};
        const { RootProvider } = await import(requireDocs.resolve('fumadocs-ui/provider/next')) as {RootProvider:ComponentType<{children?:import('react').ReactNode;search:{enabled:boolean}}>};
        const { DocsLayout } = await import(requireDocs.resolve('fumadocs-ui/layouts/docs')) as {DocsLayout:ComponentType<{children?:import('react').ReactNode;tree:ReturnType<SourceApi['navigationTree']>;nav:{enabled:boolean};sidebar:{enabled:boolean};tabs:false}>};
        const { PathnameContext } = await import(pathToFileURL(path.join(nextRoot, 'dist/shared/lib/hooks-client-context.shared-runtime.js')).href) as { PathnameContext: Context<string|null> };
        const wrap = (element: ReturnType<typeof createElement>) => createElement(PathnameContext, { value: page.url }, createElement(RootProvider, { search: { enabled: false } }, createElement(DocsLayout, { tree: source.navigationTree({locale:'en',domain:'agriculture',subdomain:'seeds',record}), nav:{enabled:false}, sidebar:{enabled:false}, tabs:false }, element)));
        const detailedRecord = { ...record, readiness: { status: 'review_required', blockers: [{code:'BOUNDARY_REVIEW',message:'Boundary <needs review>'}], warnings:[{code:'TRANSLATION_WARNING',message:'Translation & evidence pending'}] }, classificationRefs:[{system:'cpc',version:'3.0',code:'01111',mapping_type:'exact'},{system:'hs',version:'2022',code:'1201'}], downloads:[{name:'pcr.en-US.md',url:'/original.md',bytes:4000,sha256:'sha256:'+'c'.repeat(64)}], versions:[{version:'1.0.0',urls:{'en-US':'/en/docs/pcr/agriculture/seeds/wheat/versions/1.0.0/'}},{version:'0.9.0',urls:{'de-DE':'/de/old/'}}] };
        const current = render(wrap(createElement(PcrRecordPage, { record:detailedRecord, page, html: '<p id="normative">Full normative text</p>' }))); 
        assert.match(current.body.textContent ?? '', /Review required/);
        assert.equal(current.querySelector('#normative')?.textContent, 'Full normative text');
        assert.equal(current.querySelector('a[rel="next"]')?.getAttribute('href'), '/en/docs/pcr/agriculture/seeds/wheat/part-2/');
        assert.equal(current.querySelector('[aria-current="page"]')?.getAttribute('href'), page.url);
        assert.equal(current.querySelector('h1')?.getAttribute('data-source-node'), 'source-node-title');
        assert.equal(current.querySelector('.pcr-status-note--history'), null);
        assert.match(current.body.textContent ?? '', /BOUNDARY_REVIEW/);
        assert.match(current.body.textContent ?? '', /Translation & evidence pending/);
        assert.equal(current.querySelectorAll('[aria-labelledby="pcr-history-heading"] a').length, 1);
        assert.equal(current.querySelector('a[download]')?.getAttribute('href'), '/original.md');
        const continuationPage = manifest.pages.find(item => item.locale==='zh' && item.pcrId===record.id && item.part?.index===1)!;
        const continuation = render(wrap(createElement(PcrRecordPage, {record, page:continuationPage,html:'<p>Second chapter</p>'})));
        assert.equal(continuation.querySelector('a[rel="prev"]')?.getAttribute('href'), '/zh/docs/pcr/agriculture/seeds/wheat/');
        assert.equal(continuation.querySelector('[data-structured-summary]'), null);
        const missingVersion = render(wrap(createElement(PcrRecordPage, {record:{...record,version:null,updatedAt:null,sourcePath:'',translationStatus:{}},page:{...page,title:'L'.repeat(181),sourceSha256:undefined},html:'<p>Draft</p>'})));
        assert.match(missingVersion.body.textContent ?? '', /No published version/);
        assert.equal(missingVersion.querySelector('h1')?.classList.contains('pcr-title--long'), true);
        assert.equal(missingVersion.querySelector('[aria-labelledby="pcr-languages-heading"]'), null);
        const historicalPage = manifest.pages.find(item => item.recordVersion)!;
        const old = render(wrap(createElement(PcrRecordPage, { record: manifest.historicalRecords![0]!, page: historicalPage, html: '<p>Frozen release</p>' }))); 
        assert.equal(old.querySelector('.pcr-status-note--history a')?.getAttribute('href'), historicalPage.currentUrl);
        assert.match(old.body.textContent ?? '', /Frozen release/);
      } else throw new Error('Unknown site scenario: ' + scenario);
    }
  }
  process.stdout.write(`PASS ${scenario}\n`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [temporary, scenario] = process.argv.slice(2);
  assert.ok(temporary && scenario, 'Expected owned fixture directory and scenario');
  await run(temporary, scenario);
}
