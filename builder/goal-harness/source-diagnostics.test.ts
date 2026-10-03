import type {TestContext} from "node:test";
import type {BinaryLike} from "node:crypto";
import {item,goalError,object} from "./fixtures/test-guards.ts";
import {number} from "./domain.ts";
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { verifySourceLocators } from './evidence-audit.ts';
import { selectRecovery } from './errors.ts';
import { listGoalCacheReceipts } from './goal-cache.ts';
import { originalHtml } from './fixtures/original-source.ts';

const source = { source_id: 'standard-a', name: 'Standard A', locator: 'https://example.test/a', original_text_verified: true };
const hash = (bytes:BinaryLike) => `sha256:${createHash('sha256').update(bytes).digest('hex')}`;
const captureFailure = async (options:Omit<Parameters<typeof verifySourceLocators>[0],"report"> & {report?:unknown}) => {
  let failure;
  await assert.rejects(verifySourceLocators({ report: { sources: [source] }, ...options }), error => {
    failure = error;
    return true;
  });
  return goalError(failure);
};

async function controlledTimerFailure(t:TestContext, { timeoutMs, deadline, entryAt = 0, scheduledAt = 1, observedAt, advanceMs }: {timeoutMs:number;deadline:number;entryAt?:number;scheduledAt?:number;observedAt:number;advanceMs:number}) {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  let firstSample = true, observed = scheduledAt;
  const pending = captureFailure({ timeoutMs, deadline,
    now: () => { if (firstSample) { firstSample = false; return entryAt; } return observed; },
    fetchImpl: () => new Promise(() => {}),
  });
  observed = observedAt;
  t.mock.timers.tick(advanceMs);
  return pending;
}

test('source diagnostics retain actual timing, remaining window, bounded I/O and complete response hash', async () => {
  let tick = 100;
  const body = originalHtml();
  const [audit] = await verifySourceLocators({ report: { sources: [source] }, timeoutMs: 500, deadline: 1_000, now: () => tick,
    fetchImpl: async () => { tick = 120; return new Response(body, { headers: { 'content-type': 'text/html; charset=utf-8' } }); } });
  const diagnostics = object(item(audit).source_fetch_diagnostics);
  assert.deepEqual(diagnostics, {
    started_at: new Date(100).toISOString(), ended_at: new Date(120).toISOString(), elapsed_ms: 20,
    remaining_budget_ms_at_entry: 900, remaining_budget_ms_at_exit: 880, io_budget_ms: 500,
    abort_source: null, http_status: 200, media_type: 'text/html', bytes_read: Buffer.byteLength(body),
    response_complete: true, response_sha256: hash(body), response_sha256_scope: 'complete',
    identity_rejection_reason: null,
  });
});

test('only the observed Harness request timer is a retryable local timeout', async () => {
  const error = await captureFailure({ timeoutMs: 10, fetchImpl: () => new Promise(() => {}) });
  assert.equal(error.code, 'GOAL_SOURCE_REQUEST_TIMEOUT');
  assert.equal(error.details.origin, 'harness_request_timer');
  assert.equal(error.details.failure_kind, 'timeout');
  assert.equal(error.details.retryable, true);
  assert.equal(selectRecovery(error, { completeReport: true }).action, 'recheck');
  const diagnostics = object(error.details.source_fetch_diagnostics);
  assert.equal(diagnostics.abort_source, 'harness_request_timeout');
  assert.equal(diagnostics.io_budget_ms, 10);
  assert.equal(diagnostics.remaining_budget_ms_at_entry, null);
  assert.equal(diagnostics.remaining_budget_ms_at_exit, null);
  assert.ok(number(diagnostics.elapsed_ms) >= 5);
  assert.equal(diagnostics.http_status, null);
  assert.equal(diagnostics.bytes_read, 0);
  assert.equal(diagnostics.response_complete, false);
  assert.equal(diagnostics.response_sha256, null);
});

test('the observed total review-window timer defers rather than claiming network failure', async t => {
  const error = await controlledTimerFailure(t, { timeoutMs: 500, deadline: 15, observedAt: 15, advanceMs: 14 });
  assert.equal(error.code, 'GOAL_REVIEW_WINDOW_EXHAUSTED');
  assert.equal(error.details.origin, 'harness_deadline');
  assert.equal(error.details.failure_kind, 'execution_window');
  assert.equal(selectRecovery(error).action, 'defer');
  const diagnostics = object(error.details.source_fetch_diagnostics);
  assert.equal(diagnostics.abort_source, 'harness_review_window');
  assert.equal(diagnostics.io_budget_ms, 14);
  assert.equal(diagnostics.remaining_budget_ms_at_exit, 0);
});

test('a review-limited timer retains its source across a clock tick and early callback', async t => {
  const error = await controlledTimerFailure(t, { timeoutMs: 500, deadline: 15, observedAt: 14, advanceMs: 14 });
  assert.equal(error.code, 'GOAL_REVIEW_WINDOW_EXHAUSTED');
  assert.equal(selectRecovery(error).action, 'defer');
  const diagnostics = object(error.details.source_fetch_diagnostics);
  assert.equal(diagnostics.remaining_budget_ms_at_entry, 15);
  assert.equal(diagnostics.io_budget_ms, 14);
  assert.equal(diagnostics.remaining_budget_ms_at_exit, 1, 'observed diagnostics are not invented to match the timer source');
  assert.equal(diagnostics.abort_source, 'harness_review_window');
});

test('a request-limited timer remains infrastructure with sufficient review time', async t => {
  const error = await controlledTimerFailure(t, { timeoutMs: 10, deadline: 1_000, observedAt: 10, advanceMs: 10 });
  assert.equal(error.code, 'GOAL_SOURCE_REQUEST_TIMEOUT');
  assert.equal(selectRecovery(error, { completeReport: true }).action, 'recheck');
  assert.equal(object(error.details.source_fetch_diagnostics).abort_source, 'harness_request_timeout');
  assert.equal(object(error.details.source_fetch_diagnostics).remaining_budget_ms_at_exit, 990);
});

test('the 30-second review I/O clamp is not exhaustion of a longer review window', async t => {
  const error = await controlledTimerFailure(t, { timeoutMs: 60_000, deadline: 60_000, observedAt: 30_001, advanceMs: 30_000 });
  assert.equal(error.code, 'GOAL_SOURCE_REQUEST_TIMEOUT');
  assert.equal(object(error.details.source_fetch_diagnostics).io_budget_ms, 30_000);
  assert.equal(object(error.details.source_fetch_diagnostics).abort_source, 'harness_request_timeout');
  assert.equal(object(error.details.source_fetch_diagnostics).remaining_budget_ms_at_exit, 29_999);
});

test('actual deadline exhaustion overrides a request timer delivered late', async t => {
  const error = await controlledTimerFailure(t, { timeoutMs: 10, deadline: 100, observedAt: 101, advanceMs: 10 });
  assert.equal(error.code, 'GOAL_REVIEW_WINDOW_EXHAUSTED');
  assert.equal(selectRecovery(error).action, 'defer');
  assert.equal(object(error.details.source_fetch_diagnostics).abort_source, 'harness_review_window');
  assert.equal(object(error.details.source_fetch_diagnostics).remaining_budget_ms_at_exit, 0);
});

test('deadline exhaustion after headers preserves the actual response metadata', async () => {
  let tick = 0;
  const error = await captureFailure({ deadline: 50, now: () => tick,
    fetchImpl: async () => { tick = 75; return new Response('not read', { headers: { 'content-type': 'text/plain' } }); } });
  assert.equal(error.code, 'GOAL_REVIEW_WINDOW_EXHAUSTED');
  assert.equal(object(error.details.source_fetch_diagnostics).abort_source, 'harness_review_window');
  assert.equal(object(error.details.source_fetch_diagnostics).http_status, 200);
  assert.equal(object(error.details.source_fetch_diagnostics).media_type, 'text/plain');
  assert.equal(object(error.details.source_fetch_diagnostics).bytes_read, 0);
  assert.equal(object(error.details.source_fetch_diagnostics).response_complete, false);
});

test('an exhausted source entry records no I/O and no unavailable response hash', async () => {
  const error = await captureFailure({ deadline: 0, now: () => 1, fetchImpl: () => assert.fail('no fetch after the review window') });
  const diagnostics = object(error.details.source_fetch_diagnostics);
  assert.equal(error.code, 'GOAL_REVIEW_WINDOW_EXHAUSTED');
  assert.equal(diagnostics.io_budget_ms, 0);
  assert.equal(diagnostics.bytes_read, 0);
  assert.equal(diagnostics.response_sha256, null);
  assert.equal(diagnostics.response_sha256_scope, null);
});

test('unmeasured synthetic bodies remain incomplete while an explicitly empty body has a complete empty hash', async () => {
  const report = { sources: [{ ...source, original_text_verified: false }] };
  const [unmeasured] = await verifySourceLocators({ report, fetchImpl: async () => ({ ok: true, status: 200, headers: new Map() }) });
  assert.equal(object(item(unmeasured).source_fetch_diagnostics).response_complete, false);
  assert.equal(object(item(unmeasured).source_fetch_diagnostics).response_sha256, null);
  const [empty] = await verifySourceLocators({ report, fetchImpl: async () => new Response(null) });
  assert.equal(object(item(empty).source_fetch_diagnostics).response_complete, true);
  assert.equal(object(item(empty).source_fetch_diagnostics).response_sha256, hash(''));
});

test('an observed request timeout can revalidate the same original cache without relabeling its response', async t => {
  const stateDir = mkdtempSync(path.join(tmpdir(), 'source-diagnostics-timeout-cache-'));
  t.after(() => rmSync(stateDir, { recursive: true, force: true }));
  const [original] = await verifySourceLocators({ report: { sources: [source] }, stateDir, fetchImpl: async () => new Response(originalHtml()) });
  const [fallback] = await verifySourceLocators({ report: { sources: [source] }, stateDir, timeoutMs: 10, fetchImpl: () => new Promise(() => {}) });
  assert.equal(item(fallback).cache_hit, true);
  assert.deepEqual(item(fallback).source_fetch_diagnostics, item(original).source_fetch_diagnostics);
  assert.equal(object(item(fallback).cache_fallback_fetch_diagnostics).abort_source, 'harness_request_timeout');
  assert.equal(object(item(fallback).cache_fallback_fetch_diagnostics).response_sha256, null);
});

test('recognized machine transport codes are retained without raw error text or secret URL components', async () => {
  const privateSource = { ...source, locator: 'https://user:password@example.test/path-secret?token=query-secret#fragment-secret' };
  const error = await captureFailure({ report: { sources: [privateSource] }, fetchImpl: async () => {
    throw Object.assign(new Error('fetch failed Cookie=header-secret https://error-secret.test/?token=raw-secret'), { cause: { code: 'ECONNRESET' } });
  } });
  assert.equal(error.details.machine_code, 'ECONNRESET');
  assert.equal(error.details.failure_kind, 'network');
  assert.equal(selectRecovery(error).category, 'infrastructure');
  assert.equal(error.details.locator, 'https://example.test');
  assert.doesNotMatch(JSON.stringify({ message: error.message, details: error.details }), /password|user:|secret|Cookie|token/iu);
});

test('unproven AbortError, TimeoutError and network prose remain unknown and cannot use a cached original', async t => {
  const stateDir = mkdtempSync(path.join(tmpdir(), 'source-diagnostics-unproven-'));
  t.after(() => rmSync(stateDir, { recursive: true, force: true }));
  await verifySourceLocators({ report: { sources: [source] }, stateDir, fetchImpl: async () => new Response(originalHtml()) });
  for (const failure of [new DOMException('upstream secret', 'AbortError'), new DOMException('upstream secret', 'TimeoutError'), new Error('ETIMEDOUT network fetch failed secret')]) {
    const error = await captureFailure({ stateDir, fetchImpl: async () => { throw failure; } });
    assert.equal(error.details.failure_kind, 'unknown');
    assert.equal(error.details.retryable, false);
    assert.equal(selectRecovery(error).action, 'hold');
    assert.equal(object(error.details.source_fetch_diagnostics).abort_source, failure.name === 'AbortError' ? 'unproven_abort' : null);
    assert.doesNotMatch(JSON.stringify({ message: error.message, details: error.details }), /secret/u);
  }
});

test('a failed response stream retains an explicitly partial hash without persisting its body', async t => {
  const stateDir = mkdtempSync(path.join(tmpdir(), 'source-diagnostics-partial-'));
  t.after(() => rmSync(stateDir, { recursive: true, force: true }));
  const partial = Buffer.from('partial body secret');
  let pulls = 0;
  const error = await captureFailure({ stateDir, fetchImpl: async () => new Response(new ReadableStream({
    pull(controller) {
      if (pulls++ === 0) controller.enqueue(partial);
      else controller.error(Object.assign(new Error('response secret'), { code: 'ECONNRESET' }));
    },
  }), { headers: { 'content-type': 'application/pdf' } }) });
  const diagnostics = object(error.details.source_fetch_diagnostics);
  assert.equal(diagnostics.bytes_read, partial.length);
  assert.equal(diagnostics.response_sha256, hash(partial));
  assert.equal(diagnostics.response_sha256_scope, 'partial');
  assert.equal(diagnostics.response_complete, false);
  assert.equal(diagnostics.http_status, 200);
  assert.equal(diagnostics.media_type, 'application/pdf');
  assert.equal(listGoalCacheReceipts({ stateDir, namespace: 'source_original_text_receipts' }).length, 0);
  assert.equal(listGoalCacheReceipts({ stateDir, namespace: 'source_locator_checks' }).length, 0);
  assert.doesNotMatch(JSON.stringify({ message: error.message, details: error.details }), /secret/u);
});

test('a stream request timeout preserves a partial hash and an observed local abort source', async () => {
  const partial = Buffer.from('first response bytes');
  let reads = 0;
  const error = await captureFailure({ timeoutMs: 10, fetchImpl: async () => new Response(new ReadableStream({
    pull(controller) { if (reads++ === 0) controller.enqueue(partial); else return new Promise(() => {}); },
  }), { headers: { 'content-type': 'text/plain' } }) });
  const diagnostics = object(error.details.source_fetch_diagnostics);
  assert.equal(error.code, 'GOAL_SOURCE_REQUEST_TIMEOUT');
  assert.equal(diagnostics.abort_source, 'harness_request_timeout');
  assert.equal(diagnostics.bytes_read, partial.length);
  assert.equal(diagnostics.response_sha256, hash(partial));
  assert.equal(diagnostics.response_sha256_scope, 'partial');
});

test('HTTP rejection records status and a sanitized media type without reading the failed body', async () => {
  const error = await captureFailure({ fetchImpl: async () => new Response('Cookie=body-secret', {
    status: 503, headers: { 'content-type': 'text/html; token=header-secret', 'set-cookie': 'cookie-secret', 'retry-after': '120' },
  }) });
  const diagnostics = object(error.details.source_fetch_diagnostics);
  assert.equal(error.details.status, 503);
  assert.equal(error.details.retry_after_seconds, 120);
  assert.equal(diagnostics.http_status, 503);
  assert.equal(diagnostics.media_type, 'text/html');
  assert.equal(diagnostics.bytes_read, 0);
  assert.equal(diagnostics.response_complete, false);
  assert.equal(diagnostics.response_sha256, null);
  assert.doesNotMatch(JSON.stringify(error.details), /secret|Cookie|token/iu);
});

test('identity rejection retains the complete response hash and a bounded rejection reason', async t => {
  const stateDir = mkdtempSync(path.join(tmpdir(), 'source-diagnostics-identity-'));
  t.after(() => rmSync(stateDir, { recursive: true, force: true }));
  const body = '<html><title>Sign in</title><input type="password" value="body-secret"></html>';
  const error = await captureFailure({ stateDir, fetchImpl: async () => new Response(body, { headers: { 'content-type': 'text/html' } }) });
  assert.equal(error.code, 'GOAL_SOURCE_ORIGINAL_IDENTITY_UNVERIFIED');
  const diagnostics = object(error.details.source_fetch_diagnostics);
  assert.equal(diagnostics.response_sha256, hash(body));
  assert.equal(diagnostics.response_sha256_scope, 'complete');
  assert.equal(diagnostics.response_complete, true);
  assert.equal(diagnostics.bytes_read, Buffer.byteLength(body));
  assert.equal(diagnostics.identity_rejection_reason, 'access_challenge');
  assert.equal(listGoalCacheReceipts({ stateDir, namespace: 'source_original_text_receipts' }).length, 0);
  assert.doesNotMatch(JSON.stringify({ message: error.message, details: error.details }), /body-secret/u);
});

test('cache fallback reports the current failed fetch separately from historical response diagnostics', async t => {
  const { appendGoalCacheReceipt } = await import('./goal-cache.ts');
  const { readFileSync } = await import('node:fs');
  const stateDir = mkdtempSync(path.join(tmpdir(), 'source-diagnostics-historical-'));
  t.after(() => rmSync(stateDir, { recursive: true, force: true }));
  const blob = Buffer.from(originalHtml());
  const receipt = appendGoalCacheReceipt({ stateDir, namespace: 'source_original_text_receipts',
    keyInput: { source_id: source.source_id, locator: source.locator }, tool: { name: 'http-original-text-fetch', version: '1' },
    sourceFingerprint: hash(blob), blob,
    value: { source_id: source.source_id, locator: source.locator, content_sha256: hash(blob), content_byte_length: blob.length } });
  const originalReceipt = readFileSync(receipt.receipt_path);
  const [audit] = await verifySourceLocators({ report: { sources: [source] }, stateDir,
    fetchImpl: async () => new Response('later failure body', { status: 403, headers: { 'content-type': 'text/html' } }) });
  assert.equal(item(audit).cache_hit, true);
  assert.equal(item(audit).source_fetch_diagnostics, undefined);
  assert.equal(object(item(audit).cache_fallback_fetch_diagnostics).http_status, 403);
  assert.equal(object(item(audit).cache_fallback_fetch_diagnostics).bytes_read, 0);
  assert.equal(object(item(audit).cache_fallback_fetch_diagnostics).response_sha256, null);
  assert.deepEqual(readFileSync(receipt.receipt_path), originalReceipt);
});

test('cache qualification exhaustion retains current HTTP failure diagnostics', async t => {
  const stateDir = mkdtempSync(path.join(tmpdir(), 'source-diagnostics-fallback-window-'));
  t.after(() => rmSync(stateDir, { recursive: true, force: true }));
  await verifySourceLocators({ report: { sources: [source] }, stateDir, fetchImpl: async () => new Response(originalHtml()) });
  let clockReads = 0;
  const error = await captureFailure({ stateDir, deadline: 50, now: () => ++clockReads <= 4 ? 0 : 100,
    fetchImpl: async () => new Response('failed body', { status: 503, headers: { 'content-type': 'text/html' } }) });
  assert.equal(error.code, 'GOAL_REVIEW_WINDOW_EXHAUSTED');
  assert.equal(selectRecovery(error).action, 'defer');
  assert.equal(object(error.details.source_fetch_diagnostics).http_status, 503);
  assert.equal(object(error.details.source_fetch_diagnostics).abort_source, 'harness_review_window');
  assert.equal(object(error.details.source_fetch_diagnostics).response_sha256, null);
});

test('the final review-window check retains completed response diagnostics', async () => {
  const body = originalHtml();
  let clockReads = 0;
  const error = await captureFailure({ deadline: 50, now: () => ++clockReads <= 9 ? 0 : 100,
    fetchImpl: async () => new Response(body, { headers: { 'content-type': 'text/html' } }) });
  assert.equal(error.code, 'GOAL_REVIEW_WINDOW_EXHAUSTED');
  assert.equal(object(error.details.source_fetch_diagnostics).response_sha256, hash(body));
  assert.equal(object(error.details.source_fetch_diagnostics).response_complete, true);
  assert.equal(object(error.details.source_fetch_diagnostics).abort_source, 'harness_review_window');
});

test('a reported Harness deadline or network claim cannot substitute for an observed timer or machine transport exception', async () => {
  const { GoalHarnessError } = await import('./errors.ts');
  for (const claimed of [
    new GoalHarnessError('GOAL_REVIEW_WINDOW_EXHAUSTED', 'secret claim', { origin: 'author_reported', failure_kind: 'execution_window' }),
    new GoalHarnessError('ECONNRESET', 'secret claim', { origin: 'author_reported', failure_kind: 'network' }),
  ]) {
    const error = await captureFailure({ fetchImpl: async () => { throw claimed; } });
    assert.equal(error.details.failure_kind, 'unknown');
    assert.equal(selectRecovery(error).action, 'hold');
    assert.doesNotMatch(JSON.stringify({ message: error.message, details: error.details }), /secret/u);
  }
});

test('identity rejection explains the actual title, body and substantive-section observations', async () => {
  const prose = 'Measured inventory and allocation data explain the process boundary and observations. '.repeat(12);
  for (const [body, reason, titleMatches, minimumLength, sections] of ([
    [originalHtml('Unrelated title'), 'title_mismatch', false, true, 2],
    ['<h1>Standard A</h1><p>A short document.</p>', 'insufficient_body_length', true, false, 0],
    [`<h1>Standard A</h1><p>${prose}</p>`, 'insufficient_substantive_sections', true, true, 0],
    ['%PDF-1.7 invalid compressed document', 'pdf_extraction_failed', null, false, null],
  ] satisfies [string,string,boolean|null,boolean,number|null][])) {
    const error = await captureFailure({ fetchImpl: async () => new Response(body) });
    const diagnostics = object(error.details.source_fetch_diagnostics);
    assert.equal(diagnostics.identity_rejection_reason, reason);
    if (titleMatches !== null) assert.equal(object(diagnostics.identity_observations).title_matches, titleMatches);
    if (sections !== null) assert.equal(object(diagnostics.identity_observations).substantive_section_count, sections);
    if (titleMatches !== null) assert.equal(number(object(diagnostics.identity_observations).normalized_body_length) >= 500, minimumLength);
    assert.doesNotMatch(JSON.stringify(diagnostics), /Unrelated title|Measured inventory|short document/u);
  }
});
