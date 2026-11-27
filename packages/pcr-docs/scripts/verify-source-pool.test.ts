import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fork, type ChildProcess, type ForkOptions} from 'node:child_process';
import {parseSourceVerifyWorkers, runSourceVerificationPool, verifySourceDocuments} from './verify-source-pool.ts';
import {sourceFixture, compileSourceVerifierFixture} from './fixtures/source-verification.ts';

const fixtureWorker = new URL(import.meta.url.endsWith('.ts')
  ? './fixtures/source-verification-worker.ts' : './fixtures/source-verification-worker.js', import.meta.url);

function fakeWorkerFactory(scenario: string, children: ChildProcess[], environments: ForkOptions[]) {
  return ((file: string | URL, args: readonly string[], options: ForkOptions) => {
    environments.push(options);
    const child = fork(file, args, {...options, env: {...options.env, PCR_VERIFY_POOL_FIXTURE: scenario}});
    children.push(child);
    return child;
  }) as typeof fork;
}
function assertClosed(children: readonly ChildProcess[]) {
  for (const child of children) {
    assert.ok(child.exitCode !== null || child.signalCode !== null, `Worker ${child.pid} did not exit`);
    assert.equal(child.connected, false);
    if (child.pid !== undefined) assert.throws(() => process.kill(child.pid!, 0), {code: 'ESRCH'});
  }
}

test('only the default one or explicit two to four source workers are admitted', () => {
  for (const value of [undefined, '1']) assert.equal(parseSourceVerifyWorkers(value), 1);
  assert.equal(parseSourceVerifyWorkers('2'), 2);
  assert.equal(parseSourceVerifyWorkers('3'), 3);
  assert.equal(parseSourceVerifyWorkers('4'), 4);
  for (const value of ['', '0', '5', '-1', '2.0', '02', ' 2', '2 ', 'true']) {
    assert.throws(() => parseSourceVerifyWorkers(value));
  }
});

test('real child processes verify the same original source corpus as serial mode and release cached parent DOM', async t => {
  const fixture = sourceFixture();
  t.after(() => fixture.close());
  const originalBytes = fixture.documents.map((_, index) => fixture.html(index));
  for (const workers of [1, 2, 4] as const) {
    const context = fixture.context();
    const cached = context.readPage('/document-0/');
    await verifySourceDocuments(context, workers);
    assert.equal(context.parsed.size, 0);
    assert.ok(cached.querySelector('main'));
    assert.deepEqual(fixture.documents.map((_, index) => fixture.html(index)), originalBytes);
  }
});

test('real worker errors retain the original earliest source validation error', async t => {
  const fixture = sourceFixture(2);
  t.after(() => fixture.close());
  for (let index = 0; index < 2; index++) fixture.writeHtml(index, fixture.html(index).replace(`A bounded paragraph for ${index}.`, 'Changed public paragraph.'));
  let serialMessage = '';
  await assert.rejects(verifySourceDocuments(fixture.context(), 1), error => {
    serialMessage = error instanceof Error ? error.message : String(error);
    return true;
  });
  await assert.rejects(verifySourceDocuments(fixture.context(), 2), error => error instanceof Error && error.message === serialMessage);
});

test('out-of-order process replies acknowledge each original position and join children with inherited heap guards', async t => {
  const fixture = sourceFixture(4);
  t.after(() => fixture.close());
  const children: ChildProcess[] = [];
  const environments: ForkOptions[] = [];
  await runSourceVerificationPool(fixture.context(), {
    workers: 2, workerFile: fixtureWorker,
    createChild: fakeWorkerFactory('valid', children, environments),
  });
  assert.equal(children.length, 2);
  for (const options of environments) assert.match(options.env?.NODE_OPTIONS ?? '', /(?:^|\s)--max-old-space-size=4096(?:\s|$)/u);
  assertClosed(children);
});

test('canonical earliest source errors survive later process failure replies arriving first', async t => {
  const fixture = sourceFixture(3);
  t.after(() => fixture.close());
  const children: ChildProcess[] = [];
  await assert.rejects(runSourceVerificationPool(fixture.context(), {
    workers: 2, workerFile: fixtureWorker,
    createChild: fakeWorkerFactory('out-of-order-errors', children, []),
  }), /earliest source error/u);
  assertClosed(children);
});

for (const scenario of ['wrong-pid', 'huge-heap', 'crash-before-ready', 'crash-on-task', 'missing-ack', 'disconnect-alive', 'late-result', 'late-ready',
  'duplicate-ack', 'stale-index', 'wrong-source', 'malformed-error', 'unknown-type', 'bad-stop']) {
  test(`process verification fails closed and cleans up after ${scenario}`, async t => {
    const fixture = sourceFixture(2);
    t.after(() => fixture.close());
    const children: ChildProcess[] = [];
    await assert.rejects(runSourceVerificationPool(fixture.context(), {
      workers: 2, workerFile: fixtureWorker,
      createChild: fakeWorkerFactory(scenario, children, []),
    }));
    assertClosed(children);
  });
}

test('fork creation failure closes workers already created and refuses success', async t => {
  const fixture = sourceFixture(2);
  t.after(() => fixture.close());
  const children: ChildProcess[] = [];
  let attempts = 0;
  const factory = ((file: string | URL, args: readonly string[], options: ForkOptions) => {
    if (++attempts === 2) throw new Error('fixture fork unavailable');
    const child = fork(file, args, options);
    children.push(child);
    return child;
  }) as typeof fork;
  await assert.rejects(runSourceVerificationPool(fixture.context(), {workers: 2, createChild: factory}), /fixture fork unavailable/u);
  assertClosed(children);
});

test('an empty source inventory completes without new child processes', async t => {
  const fixture = sourceFixture(0);
  t.after(() => fixture.close());
  await runSourceVerificationPool(fixture.context(), {workers: 2,
    createChild: (() => { throw new Error('Empty sources must not fork'); }) as typeof fork});
  assert.ok(fs.existsSync(fixture.app));
});


test('emitted JavaScript resolves the real sibling process worker and preserves explicit per-process heap', async t => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'pcr-source-worker-emitted-'));
  t.after(() => fs.rmSync(temporary, {recursive: true, force: true}));
  const emittedDocs = await compileSourceVerifierFixture(temporary);
  const runner = path.join(emittedDocs, 'worker-check.mjs');
  fs.writeFileSync(runner, `import assert from 'node:assert/strict';
import {fork} from 'node:child_process';
import {runSourceVerificationPool} from './scripts/verify-source-pool.js';
import {sourceFixture} from './scripts/fixtures/source-verification.js';
const fixture=sourceFixture(2),children=[];
try {
 await runSourceVerificationPool(fixture.context(),{createChild:(file,args,options)=>{
  assert.ok(file.href.endsWith('/verify-source-worker.js'));
  assert.ok(options.execArgv.includes('--max-old-space-size=4096'));
  const child=fork(file,args,options);children.push(child);return child;
 }});
 assert.equal(children.length,2);
 assert.ok(children.every(child=>child.exitCode===0&&!child.connected));
 console.log('EMITTED_SOURCE_WORKERS_OK');
} finally {fixture.close();}
`);
  const output = execFileSync(process.execPath, ['--no-strip-types', runner], {encoding: 'utf8', timeout: 15_000});
  assert.match(output, /EMITTED_SOURCE_WORKERS_OK/u);
});

test('empty public verification emits no successful corpus marker', async t => {
  const fixture = sourceFixture(0);
  t.after(() => fixture.close());
  const output = t.mock.method(console, 'log', () => {});
  await verifySourceDocuments(fixture.context(), 2);
  assert.equal(output.mock.callCount(), 0);
});

test('child initialization and tasks include only fields consumed by the original source checks', async t => {
  const fixture = sourceFixture(2);
  t.after(() => fixture.close());
  const context = fixture.context();
  Object.assign(context.manifest.pages[0]!, {unusedAuthoringPayload: 'excluded'});
  Object.assign(fixture.documents[0]!, {unusedAuthoringPayload: 'excluded'});
  const messages: unknown[] = [];
  const children: ChildProcess[] = [];
  const factory = ((file: string | URL, args: readonly string[], options: ForkOptions) => {
    const child = fork(file, args, {...options, env: {...options.env, PCR_VERIFY_POOL_FIXTURE: 'valid'}});
    children.push(child);
    const originalSend = child.send;
    child.send = ((...sendArgs: unknown[]) => {
      messages.push(structuredClone(sendArgs[0]));
      return Reflect.apply(originalSend, child, sendArgs) as boolean;
    }) as ChildProcess['send'];
    return child;
  }) as typeof fork;
  await runSourceVerificationPool(context, {workerFile: fixtureWorker, createChild: factory});
  const object = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === 'object' && !Array.isArray(value);
  const initial = messages.filter(value => object(value) && value.type === 'initialize');
  const tasks = messages.filter(value => object(value) && value.type === 'document');
  assert.equal(initial.length, 2);
  assert.equal(tasks.length, 2);
  assert.ok(messages.every(value => !JSON.stringify(value).includes('unusedAuthoringPayload')));
  assertClosed(children);
});

for (const scenario of ['missing-initialization', 'malformed-context', 'bad-page-nodes', 'bad-link', 'duplicate-initialization', 'malformed-source']) {
  test(`actual child refuses ${scenario} at its IPC boundary`, {timeout: 5_000}, async t => {
    const fixture = sourceFixture(1);
    t.after(() => fixture.close());
    const worker = new URL(import.meta.url.endsWith('.ts') ? './verify-source-worker.ts' : './verify-source-worker.js', import.meta.url);
    const child = fork(worker, [], {stdio: ['ignore', 'ignore', 'ignore', 'ipc'], execArgv: ['--max-old-space-size=4096']});
    t.after(() => { if (child.exitCode === null && child.signalCode === null) child.kill('SIGTERM'); });
    const context = fixture.context();
    const initialize = {type: 'initialize', context: {
      app: fixture.app, root: fixture.root, out: fixture.out, origin: context.origin,
      pages: context.manifest.pages, links: context.report.links,
    }};
    const exited = new Promise<number | null>((resolve, reject) => {
      child.once('error', reject);
      child.once('close', resolve);
    });
    if (scenario === 'missing-initialization') {
      child.send({type: 'document', index: 0, source: fixture.documents[0]});
    } else if (scenario === 'malformed-context') {
      child.send({type: 'initialize', context: null});
    } else if (scenario === 'bad-page-nodes') {
      child.send({type: 'initialize', context: {...initialize.context, pages: [{url: '/bad/', sourceNodeIds: [1]}]}});
    } else if (scenario === 'bad-link') {
      child.send({type: 'initialize', context: {...initialize.context, links: [{source: 'x', original: 'y', target: 42}]}});
    } else {
      child.once('message', () => {
        child.send(scenario === 'duplicate-initialization' ? initialize : {type: 'document', index: 0, source: {sourcePath: 42}});
      });
      child.send(initialize);
    }
    assert.equal(await exited, 1);
    assertClosed([child]);
  });
}
