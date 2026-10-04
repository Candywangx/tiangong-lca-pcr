import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { getEventListeners } from 'node:events';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';
import type { SearchResult } from '../../lib/types.ts';

const ref = (value: string) => 'sha256:' + createHash('sha256').update(value).digest('hex');
const manifestRef = ref('DOM snapshot');
const oldManifestRef = ref('DOM old snapshot');
const uiRef = ref('DOM compatible UI');
const appUrl = new URL('../../../pcr-viewer/static/app.ts', import.meta.url);
const staticRoot = new URL('./', appUrl);
const { document, window } = parseHTML(fs.readFileSync(new URL('index.html', staticRoot), 'utf8'));

async function waitFor(check: () => boolean): Promise<void> {
  for (let attempt = 0; attempt < 200; attempt += 1) {
    if (check()) return;
    await new Promise<void>(resolve => setTimeout(resolve, 5));
  }
  assert.fail('Expected observable DOM state did not arrive: ' + document.body.textContent);
}
function element(selector: string): HTMLElement {
  const found = document.querySelector(selector);
  assert.ok(found instanceof window.HTMLElement, 'Missing DOM element: ' + selector);
  return found;
}
function click(selector: string): void { element(selector).dispatchEvent(new window.Event('click', { bubbles: true })); }
function change(selector: string, value: string): void {
  const selected = element(selector);
  if (selected instanceof window.HTMLSelectElement) {
    for (const option of selected.querySelectorAll('option')) option.toggleAttribute('selected', option.value === value);
  } else assert.ok(Reflect.set(selected, 'value', value));
  selected.dispatchEvent(new window.Event(selector === '#query' ? 'input' : 'change', { bubbles: true }));
}
function key(selector: string, value: string): boolean {
  const event = new window.Event('keydown', { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'key', { value });
  element(selector).dispatchEvent(event);
  return event.defaultPrevented;
}

const catalog = [
  { id: 'pcr.wheat', title: { 'en-US': 'Wheat <seed>', 'zh-CN': '小麦种子' }, path: 'library/pcrs/wheat', status: 'candidate', content_maturity: 'authored_methodology', version: '0.1.0', search_text: 'wheat 小麦 01111', readiness: { status: 'review_required' }, classification_refs: [{ system: 'cpc', version: '3.0', code: '01111' }] },
  { id: 'pcr.fish', title: { 'en-US': 'Farmed fish' }, path: 'library/pcrs/fish', status: 'published', content_maturity: 'published_methodology', search_text: 'farmed fish 04412', readiness: { status: 'ready' } },
  { id: 'pcr.empty', title: { 'en-US': 'Empty scaffold' }, status: 'scaffold', content_maturity: 'empty_scaffold', search_text: 'empty scaffold', readiness: { status: 'unavailable' } },
];

async function viewerScenario(scenario: string): Promise<void> {
  for (const name of ['document', 'window', 'HTMLElement', 'HTMLInputElement', 'HTMLSelectElement']) Reflect.set(globalThis, name, name === 'document' ? document : name === 'window' ? window : Reflect.get(window, name));
  const navigation: { kind: string; url: string }[] = [];
  const location = { href: 'https://viewer.example.test/', assign(url: string) { navigation.push({ kind: 'assign', url }); }, replace(url: string) { navigation.push({ kind: 'replace', url }); } };
  Reflect.set(window, 'location', location);
  Reflect.set(globalThis, 'location', location);
  if (scenario === 'pinned-route') location.href += '?manifest=' + encodeURIComponent(manifestRef) + '&snapshot=wrong&ui=wrong';
  if (scenario === 'pinned-valid' || scenario === 'old-schema-pinned') location.href += '?manifest=' + encodeURIComponent(manifestRef) + '&snapshot=dom-snapshot&ui=' + encodeURIComponent(uiRef);
  if (scenario === 'missing-mount') document.querySelector('#app')?.remove();
  const data = new Map<string, unknown>();
  const requests: string[] = [];
  const object = (label: string, kind: string, entry: unknown) => data.set(`objects/${ref(label).slice(7)}.json`, { schema_version: 1, object_kind: kind, entry });
  const route = (manifest_ref: string, snapshot_id: string) => ({ routing_schema_version: 1, kind: 'viewer-snapshot-route', snapshot_id, manifest_ref, manifest_schema_version: scenario.startsWith('old-schema') ? 0 : 1, ui_bundle_ref: uiRef, ui_bundle_id: uiRef, ui_bundle_url: `ui/${uiRef.slice(7)}/` });
  const manifest = { schema_version: scenario.startsWith('old-schema') ? 0 : 1, kind: 'viewer-snapshot-manifest', snapshot_id: 'dom-snapshot', sequence: 2, catalog_scope: 'all', counts: { pcr: catalog.length }, capture: { validation_state: 'validated', ui_bundle_ref: uiRef }, refs: { catalog_root: ref('catalog'), pcr_entries: Object.fromEntries(catalog.map(item => [item.id, ref(item.id + ' detail')])) } };
  data.set('active.json', { schema_version: 1, kind: 'viewer-active', snapshot_id: manifest.snapshot_id, sequence: 2, manifest_ref: manifestRef, ui_bundle_ref: uiRef, snapshot_url: `routes/${manifestRef.slice(7)}.json` });
  data.set(`manifests/${manifestRef.slice(7)}.json`, manifest);
  data.set(`routes/${manifestRef.slice(7)}.json`, route(manifestRef, manifest.snapshot_id));
  data.set(`routes/${oldManifestRef.slice(7)}.json`, route(oldManifestRef, 'old-dom-snapshot'));
  data.set('history-head.json', { kind: 'viewer-history-head', latest_sequence: 2, page_ref: ref('history') });
  object('history', 'history_page', { entries: [{ sequence: 1, manifest_ref: oldManifestRef }, { sequence: 2, manifest_ref: manifestRef }], previous_page_ref: null });
  data.set('provenance/dom-snapshot.json', { landing_state: 'landed', landed_at: '2026-10-04T00:00:00Z' });
  object('catalog', 'catalog_root', { shards: { aa: ref('shard') } });
  object('shard', 'catalog_shard', { prefix: 'aa', entries: catalog.map(item => ({ id: item.id, object_ref: ref(item.id + ' catalog') })) });
  const guidance = { reference_flow: { reference_unit: 'kg', required_qualifiers: ['kind'] }, process_map: [{ id: 'production' }], data_sources: [{ id: 'source<1>', type: 'official', used_for: 'Scope & allocation', reference: '<script>unsafe</script>' }], complete_rule: 'When multiple products are sold, allocation applies. ' + 'complete '.repeat(1500) };
  for (const item of catalog) {
    object(item.id + ' catalog', 'catalog_entry', item);
    object(item.id + ' detail', 'pcr_detail', { ...item, markdown: item.id === 'pcr.empty' ? {} : { 'en-US': '# ' + item.title['en-US'] + '\n\n<script>unsafe</script>\n\n| Field | Value |\n| --- | --- |\n| Unit | kg |', ...(item.id === 'pcr.wheat' ? { 'zh-CN': '# 小麦种子\n\n中文规范完整正文。' } : {}) }, ...(item.id === 'pcr.empty' ? {} : { guidance: item.id === 'pcr.fish' ? { ...guidance, data_sources: [] } : guidance }) });
  }
  let releaseDetail: () => void = () => {};
  let releaseHistory: () => void = () => {};
  const detailGate = new Promise<void>(resolve => { releaseDetail = resolve; });
  const historyGate = new Promise<void>(resolve => { releaseHistory = resolve; });
  const wheatDetail = `objects/${ref('pcr.wheat detail').slice(7)}.json`;
  Reflect.set(globalThis, 'fetch', async (input: string | URL | Request) => {
    const url = new URL(typeof input === 'string' ? input : input instanceof URL ? input.href : input.url);
    const resource = url.pathname.slice(staticRoot.pathname.length);
    requests.push(resource);
    if (scenario === 'boot-error' && resource === 'active.json') throw new Error('<img src=x onerror=evil> unavailable');
    if ((scenario === 'race-success' || scenario === 'race-error') && resource === wheatDetail) await detailGate;
    if (scenario === 'history' && resource === 'history-head.json') await historyGate;
    if ((scenario === 'detail-error' || scenario === 'race-error') && resource === wheatDetail) return new Response('unavailable', { status: 503 });
    return data.has(resource) ? new Response(JSON.stringify(data.get(resource)), { headers: { 'content-type': 'application/json' } }) : new Response('missing', { status: 404 });
  });
  if (scenario === 'missing-mount') {
    await assert.rejects(import(appUrl.href), /Viewer mount is missing/);
    assert.equal(requests.length, 0);
    return;
  }
  await import(appUrl.href);
  if (scenario === 'boot-error') {
    assert.match(document.body.textContent ?? '', /PCR viewer data is unavailable/);
    assert.match(document.body.textContent ?? '', /<img src=x onerror=evil> unavailable/);
    assert.equal(document.querySelector('img'), null);
    return;
  }
  if (scenario === 'pinned-route' || scenario.startsWith('old-schema')) {
    assert.equal(navigation.length, 1);
    assert.equal(navigation[0]?.kind, 'replace');
    const url = new URL(navigation[0]!.url);
    assert.equal(url.searchParams.get('manifest'), manifestRef);
    assert.equal(url.searchParams.get('snapshot'), manifest.snapshot_id);
    assert.equal(url.searchParams.get('ui'), uiRef);
    assert.equal(requests.includes('provenance/dom-snapshot.json'), false);
    if (scenario.startsWith('old-schema')) assert.equal(requests.some(item => item.startsWith('objects/')), false);
    return;
  }
  assert.equal(document.querySelectorAll('[data-pcr-id]').length, 3);
  assert.equal(requests.includes(wheatDetail), false, 'Initial catalog must not load methodology details');
  if(scenario==='pinned-valid'){assert.equal(navigation.length,0);assert.equal(requests.includes('active.json'),false);}
  assert.match(document.body.textContent ?? '', /Captured after validation.*landed/s);
  assert.equal(new URL(element('.stable-link').getAttribute('href')!).searchParams.get('manifest'), manifestRef);
  if (scenario === 'catalog') {
    change('#query', '01111');
    assert.equal(document.querySelectorAll('[data-pcr-id]').length, 1);
    assert.equal(element('[data-pcr-id]').getAttribute('data-pcr-id'), 'pcr.wheat');
    change('#query', '<img src=x>');
    assert.match(document.body.textContent ?? '', /No PCR records match/);
    assert.equal(document.querySelector('img'), null);
    assert.equal(Reflect.get(element('#query'), 'value'), '<img src=x>');
    change('#query', ''); change('#status', 'published');
    assert.equal(element('[data-pcr-id]').getAttribute('data-pcr-id'), 'pcr.fish');
    change('#status', ''); change('#maturity', 'empty_scaffold');
    assert.equal(element('[data-pcr-id]').getAttribute('data-pcr-id'), 'pcr.empty');
    assert.equal(requests.some(item => item.endsWith(ref('pcr.fish detail').slice(7) + '.json')), false);
  } else if (scenario === 'history') {
    click('#load-history');
    assert.equal(element('#load-history').hasAttribute('disabled'), true);
    click('#load-history');
    assert.equal(requests.filter(item => item === 'history-head.json').length, 1);
    releaseHistory();
    await waitFor(() => document.querySelectorAll('#snapshot-history option').length === 2);
    change('#snapshot-history', manifestRef);
    assert.equal(navigation.length, 0);
    change('#snapshot-history', 'missing');
    assert.equal(navigation.length, 0);
    change('#snapshot-history', oldManifestRef);
    await waitFor(() => navigation.length === 1);
    assert.equal(navigation[0]?.kind, 'assign');
    assert.equal(new URL(navigation[0]!.url).searchParams.get('snapshot'), 'old-dom-snapshot');
  } else if (scenario.startsWith('race-')) {
    click('[data-pcr-id="pcr.wheat"]');
    assert.match(document.body.textContent ?? '', /Loading selected PCR methodology/);
    click('[data-pcr-id="pcr.fish"]');
    await waitFor(() => document.querySelector('.viewer-header h2')?.textContent === 'Farmed fish');
    releaseDetail();
    await new Promise<void>(resolve => setImmediate(resolve));
    assert.equal(element('.viewer-header h2').textContent, 'Farmed fish');
    assert.equal(document.querySelector('.loading-state'), null);
    click('[data-tab="guidance"]');
    assert.equal(document.body.textContent?.includes('Guidance unavailable'), false);
  } else if (scenario === 'scaffold') {
    click('[data-pcr-id="pcr.empty"]');
    await waitFor(() => document.querySelector('.viewer-header h2')?.textContent === 'Empty scaffold');
    assert.match(element('#pcr-content-panel').textContent ?? '', /No en-US Markdown/);
    click('[data-tab="guidance"]'); assert.match(element('#pcr-content-panel').textContent ?? '', /Methodology not inlined/);
    click('[data-tab="sources"]'); assert.match(element('#pcr-content-panel').textContent ?? '', /empty scaffolds/);
    change('#language', 'zh-CN');
    assert.equal(element('.viewer-header h2').textContent, 'Empty scaffold');
    click('[data-tab="markdown"]'); assert.match(element('#pcr-content-panel').textContent ?? '', /No zh-CN Markdown/);
  } else {
    click('[data-pcr-id="pcr.wheat"]');
    await waitFor(() => document.querySelector('.viewer-header h2')?.textContent === 'Wheat <seed>');
    assert.equal(document.querySelector('seed'), null);
    if (scenario === 'detail-error') {
      assert.match(element('#pcr-content-panel').textContent ?? '', /No en-US Markdown/);
      click('[data-tab="guidance"]');
      assert.match(element('#pcr-content-panel').textContent ?? '', /Guidance unavailable.*HTTP 503/s);
      click('[data-tab="sources"]'); assert.match(element('#pcr-content-panel').textContent ?? '', /No sources listed/);
    } else {
      assert.match(element('.markdown-body').textContent ?? '', /<script>unsafe<\/script>/);
      assert.equal(document.querySelector('.markdown-body script'), null);
      assert.equal(element('.markdown-body table td').textContent, 'Unit');
      change('#language', 'zh-CN');
      assert.equal(element('.viewer-header h2').textContent, '小麦种子');
      assert.match(element('.markdown-body').textContent ?? '', /中文规范完整正文/);
      assert.equal(key('[data-tab="markdown"]', 'ArrowRight'), true);
      assert.equal(element('[data-tab="guidance"]').getAttribute('aria-selected'), 'true');
      assert.match(element('#pcr-content-panel code').textContent ?? '', /When multiple products are sold, allocation applies/);
      assert.equal(element('#pcr-content-panel code').textContent?.includes(guidance.complete_rule), true);
      assert.equal(element('#pcr-content-panel').getAttribute('aria-labelledby'), 'tab-guidance');
      assert.equal(key('[data-tab="guidance"]', 'End'), true);
      assert.equal(element('[data-tab="sources"]').getAttribute('tabindex'), '0');
      assert.equal(element('.source-item h3').textContent, 'source<1>');
      assert.equal(document.querySelector('.source-item script'), null);
      assert.equal(key('[data-tab="sources"]', 'Home'), true);
      assert.equal(key('[data-tab="markdown"]', 'ArrowLeft'), true);
      assert.equal(element('[data-tab="sources"]').getAttribute('aria-selected'), 'true');
      assert.equal(key('[data-tab="sources"]', 'ArrowUp'), true);
      assert.equal(key('[data-tab="guidance"]', 'ArrowDown'), true);
      assert.equal(key('[data-tab="sources"]', 'Escape'), false);
      click('[data-pcr-id="pcr.fish"]');
      await waitFor(() => document.querySelector('.viewer-header h2')?.textContent === 'Farmed fish');
      assert.match(element('#pcr-content-panel').textContent ?? '', /No sources listed/);
      click('[data-tab="markdown"]'); assert.match(element('#pcr-content-panel').textContent ?? '', /No zh-CN Markdown/);
      assert.equal(element('.viewer-header .eyebrow').textContent?.includes('unversioned'), true);
    }
  }
}

async function searchWorkerScenario(): Promise<void> {
  type Message = { id: number; query: string; language: string };
  class ControlledWorker {
    static instances: ControlledWorker[] = [];
    messages: Message[] = [];
    terminated = false;
    onmessage: ((event: { data: { id: number; results?: SearchResult[]; error?: string } }) => void) | null = null;
    onerror: (() => void) | null = null;
    constructor(url: string, options: { type: string }) {
      assert.equal(url, '/generated/search-worker.mjs'); assert.equal(options.type, 'module');
      ControlledWorker.instances.push(this);
    }
    postMessage(message: Message) { this.messages.push(message); }
    terminate() { this.terminated = true; }
    reply(id: number, results?: SearchResult[], error?: string) {
      this.onmessage?.({ data: { id, ...(results ? { results } : {}), ...(error ? { error } : {}) } });
    }
  }
  Reflect.set(globalThis, 'Worker', ControlledWorker);
  const { searchDocuments } = await import('../../lib/search-client.ts');
  assert.deepEqual(await searchDocuments('  ', 'zh-CN'), []);
  assert.equal(ControlledWorker.instances.length, 0);
  const alreadyAborted = new AbortController(); alreadyAborted.abort();
  await assert.rejects(searchDocuments('wheat', 'en-US', alreadyAborted.signal), { name: 'AbortError' });
  assert.equal(ControlledWorker.instances.length, 0);
  const completedSignal = new AbortController();
  const first = searchDocuments('wheat', 'en-US', completedSignal.signal);
  assert.equal(getEventListeners(completedSignal.signal, 'abort').length, 1);
  const second = searchDocuments('fish', 'en-US');
  const worker = ControlledWorker.instances[0]!;
  assert.equal(ControlledWorker.instances.length, 1);
  assert.deepEqual(worker.messages.map(item => item.query), ['wheat', 'fish']);
  const result: SearchResult = { id: 'fixture', type: 'page', url: '/en/wheat/', content: 'Wheat seed', description: 'Scope' };
  worker.reply(worker.messages[1]!.id, [result]);
  assert.deepEqual(await second, [result]);
  worker.reply(9999, [result]);
  worker.reply(worker.messages[0]!.id);
  assert.deepEqual(await first, []);
  assert.equal(getEventListeners(completedSignal.signal, 'abort').length, 0);
  completedSignal.abort();
  const abort = new AbortController();
  const canceled = searchDocuments('canceled', 'en-US', abort.signal);
  const canceledCheck = assert.rejects(canceled, { name: 'AbortError' });
  abort.abort(); await canceledCheck;
  assert.equal(getEventListeners(abort.signal, 'abort').length, 0);
  worker.reply(worker.messages.at(-1)!.id, [result]);
  const failure = searchDocuments('error', 'en-US');
  const failureCheck = assert.rejects(failure, /Index unavailable/);
  worker.reply(worker.messages.at(-1)!.id, undefined, 'Index unavailable'); await failureCheck;
  const obsolete = searchDocuments('old language', 'en-US');
  const obsoleteCheck = assert.rejects(obsolete, { name: 'AbortError' });
  const chinese = searchDocuments('小麦', 'zh-CN'); await obsoleteCheck;
  assert.equal(worker.terminated, true);
  const chineseWorker = ControlledWorker.instances[1]!;
  assert.equal(chineseWorker.messages[0]?.language, 'zh-CN');
  chineseWorker.reply(chineseWorker.messages[0]!.id, [result]); assert.deepEqual(await chinese, [result]);
  const pending = searchDocuments('pending', 'zh-CN');
  const pendingCheck = assert.rejects(pending, /Search worker is unavailable/);
  chineseWorker.onerror?.(); await pendingCheck;
  assert.equal(chineseWorker.terminated, true);
  const retry = searchDocuments('retry', 'zh-CN');
  const retryWorker = ControlledWorker.instances[2]!;
  retryWorker.reply(retryWorker.messages[0]!.id, [result]); assert.deepEqual(await retry, [result]);
  assert.equal(ControlledWorker.instances.length, 3);
  retryWorker.onerror?.();
  assert.equal(retryWorker.terminated, true);
}

const scenario = process.argv[2];
assert.ok(scenario, 'Expected Viewer DOM scenario');
if (scenario === 'search-worker') await searchWorkerScenario();
else await viewerScenario(scenario);
process.stdout.write(`PASS ${scenario}\n`);
