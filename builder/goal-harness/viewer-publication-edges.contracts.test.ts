import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, renameSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test, { type TestContext } from 'node:test';
import { GoalEventStore } from './event-store.ts';
import { commitRepositoryValidation, reserveRepositoryCandidate } from './repository-coordinator.ts';
import { field, record, text } from './domain.ts';
import { ViewerSnapshotStore } from '../../packages/pcr-viewer/scripts/snapshot-store.ts';
import { VIEWER_INCREMENTAL_GENERATOR_VERSION } from '../../packages/pcr-viewer/scripts/build-viewer-data.ts';
import { createPublisherFixture } from './viewer-test-fixture.ts';
import { listViewerPublications, listViewerPreActivationRecords, probeViewerArtifactStore, publishPendingViewerSnapshots, publishAllPendingViewerSnapshots, recoverViewerPublications, reconstructViewerArtifactStore, projectViewerPublication, writeViewerLandingProvenance, verifyPublishedViewerArtifact, viewerPublicationStateDir } from './viewer-publication.ts';
import type { ViewerGoalConfig, ViewerPublication, ViewerPublishOptions } from './viewer-publication.ts';

const linux = { skip: process.platform === 'linux' ? false : 'Real coordinator receipts require Linux descriptor-backed storage' };
const original = path.resolve('.');
function git(root: string, args: string[], input?: string) { return execFileSync('git', args, { cwd: root, encoding: 'utf8', input, stdio: [input === undefined ? 'ignore' : 'pipe', 'pipe', 'pipe'] }).trim(); }
function put(root: string, file: string, value: string) { const target = path.join(root, file); mkdirSync(path.dirname(target), { recursive: true }); writeFileSync(target, value); }
function json(root: string, file: string) { return record(JSON.parse(readFileSync(path.join(root, file), 'utf8')) as unknown); }
function writeJson(root: string, file: string, value: unknown) { put(root, file, JSON.stringify(value, null, 2) + '\n'); }
function fixture(t: TestContext, actual = false) {
  const base = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-viewer-publication-edge-'))); t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = path.join(base, 'repo');
  if (actual) createPublisherFixture({ root, source: original });
  else {
    mkdirSync(root); git(root, ['init', '-q']); git(root, ['config', 'user.name', 'Publication Edge']); git(root, ['config', 'user.email', 'edge@example.invalid']);
    put(root, '.gitignore', '.worktrees/\nlibrary/.pcr-builder-state/\n'); put(root, 'tracked.txt', 'baseline\n'); git(root, ['add', '.']); git(root, ['commit', '-qm', 'owned publication fixture']);
  }
  const artifactStore = path.join(base, 'artifacts'), stateDir = viewerPublicationStateDir(root), goalDir = path.join(root, 'library/.pcr-builder-state/goals/goal-edge');
  const config: ViewerGoalConfig = { project_root: root, goal_id: 'goal-edge', artifact_store: artifactStore };
  return { base, root, artifactStore, stateDir, goalDir, config };
}
function validate(f: ReturnType<typeof fixture>, snapshot = 'snapshot-edge') {
  const parent = git(f.root, ['rev-parse', 'HEAD']);
  const candidate = reserveRepositoryCandidate({ projectRoot: f.root, goalId: 'goal-edge', snapshotId: snapshot, fallbackHead: parent });
  put(f.root, 'tracked.txt', `accepted ${snapshot}\n`); git(f.root, ['add', '--', 'tracked.txt']); const tree = git(f.root, ['write-tree']); git(f.root, ['reset', '-q', '--', 'tracked.txt']);
  const commit = git(f.root, ['commit-tree', tree, '-p', text(candidate.observed_integration_head)], `owned validation ${snapshot}\n`);
  const store = new GoalEventStore({ stateDir: f.goalDir });
  if (!existsSync(path.join(f.goalDir, 'initial-state.json'))) store.initialize({ goal_id: 'goal-edge', baseline: { commit: parent }, tasks: [], snapshots: [] });
  store.append({ event_id: `created-${snapshot}`, type: 'snapshot_created', payload: { id: snapshot, goal_id: 'goal-edge', task_ids: [], state: 'integrating', worktree_path: f.root } });
  return commitRepositoryValidation({ projectRoot: f.root, candidateToken: candidate.candidate_token, integrationCommit: commit, goalStateDir: f.goalDir,
    snapshotProjection: { id: snapshot, goal_id: 'goal-edge', task_ids: [], state: 'validated', integration_commit: commit, base_commit: text(candidate.observed_integration_head), worktree_path: f.root, changed_files: ['tracked.txt'], command_results: [{ name: 'validate', exit_code: 0 }] } });
}
function durablePublisher(options: ViewerPublishOptions) {
  const store = new ViewerSnapshotStore({ root: options.artifactStore, generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION, sourceVerifier: options.sourceVerifier });
  return store.publish({ snapshotId: options.snapshotId, goalId: options.goalId, harnessSnapshotId: options.harnessSnapshotId, capturedAt: options.capturedAt, validatedAt: options.validatedAt, validationSummary: options.validationSummary, catalogScope: 'material', sequence: options.sequence,
    generatorContractSha256: `sha256:${'1'.repeat(64)}`, source: { catalog: `sha256:${'2'.repeat(64)}`, aliases: `sha256:${'3'.repeat(64)}`, coverage: [], releaseRevisionMarkers: {}, source_ref: options.sourceRef, integration_commit: options.integrationCommit, base_commit: options.baseCommit, tree_hash: options.treeHash, ui_bundle_ref: `sha256:${'4'.repeat(64)}` }, pcrEntries: [], aliasEntries: [], coverageEntries: [] });
}
function published(t: TestContext, actual = false) {
  const f = fixture(t, actual), validation = validate(f);
  const result = publishPendingViewerSnapshots({ config: f.config, ...(actual ? {} : { publishSnapshot: durablePublisher }) });
  assert.equal(result.status, 'published'); const publication = listViewerPublications({ projectRoot: f.root })[0]; assert.ok(publication);
  return { ...f, validation, publication };
}
function recordFile(f: ReturnType<typeof published>) { return path.join(f.stateDir, 'records', String(f.publication.repository_sequence).padStart(12, '0') + '.json'); }
function journalBytes(f: ReturnType<typeof fixture>) { return readFileSync(path.join(f.stateDir, 'journal.json')); }
function crash(phase: string) { return (actual: string) => { if (actual === phase) throw Object.assign(new Error('Owned publication interruption'), { code: 'EDGE_INTERRUPTED' }); }; }

test('missing project/store configuration fails explicitly and empty record discovery stays read-only', t => {
  const f = fixture(t); assert.deepEqual(listViewerPublications({ projectRoot: f.root }), []); assert.deepEqual(listViewerPreActivationRecords({ projectRoot: f.root }), []); assert.equal(existsSync(f.stateDir), false);
  assert.throws(() => publishPendingViewerSnapshots(), { code: 'GOAL_PROJECT_ROOT_INVALID' });
  assert.throws(() => probeViewerArtifactStore({ config: { project_root: f.root } }), { code: 'GOAL_VIEWER_ARTIFACT_STORE_REQUIRED' });
  assert.equal(existsSync(f.artifactStore), false);
});
for (const leaf of ['active.json', 'history-head.json', 'journal.json']) test(`artifact ${leaf} directory substitution fails without clearing operator data`, t => {
  const f = fixture(t); mkdirSync(path.join(f.artifactStore, leaf), { recursive: true }); put(f.artifactStore, `${leaf}/keep`, 'operator bytes');
  assert.throws(() => probeViewerArtifactStore({ config: f.config }), { code: 'VIEWER_STORE_CAPABILITY_UNAVAILABLE' }); assert.equal(readFileSync(path.join(f.artifactStore, leaf, 'keep'), 'utf8'), 'operator bytes');
});
test('artifact-store symlink substitution is refused without writing through it', t => {
  const f = fixture(t), outside = path.join(f.base, 'outside'); mkdirSync(outside); put(outside, 'keep', 'operator bytes'); symlinkSync(outside, f.artifactStore, 'dir');
  assert.throws(() => probeViewerArtifactStore({ config: f.config }), { code: 'VIEWER_STORE_CAPABILITY_UNAVAILABLE' }); assert.deepEqual(readdirSync(outside), ['keep']);
});

for (const mutation of ['unexpected-name', 'malformed-json', 'wrong-viewer-sequence', 'invalid-source-ref', 'record-symlink'] as const) test(`publication discovery rejects ${mutation} without replacing retained evidence`, linux, t => {
  const f = published(t), file = recordFile(f), before = readFileSync(file);
  if (mutation === 'unexpected-name') put(path.dirname(file), 'operator.json', 'keep');
  if (mutation === 'malformed-json') writeFileSync(file, '{broken');
  if (mutation === 'wrong-viewer-sequence') writeFileSync(file, JSON.stringify({ ...f.publication, viewer_sequence: 2 }));
  if (mutation === 'invalid-source-ref') writeFileSync(file, JSON.stringify({ ...f.publication, source_ref: 'refs/heads/unverified' }));
  if (mutation === 'record-symlink') { const external = path.join(f.base, 'retained.json'); writeFileSync(external, before); rmSync(file); symlinkSync(external, file); }
  const code = mutation === 'wrong-viewer-sequence' ? 'GOAL_VIEWER_PUBLICATION_SEQUENCE_INVALID' : 'GOAL_VIEWER_PUBLICATION_STATE_INVALID';
  const retainedFile = mutation === 'record-symlink' ? path.join(f.base, 'retained.json') : file, rejectedBytes = readFileSync(retainedFile);
  assert.throws(() => listViewerPublications({ projectRoot: f.root }), { code }); assert.deepEqual(readFileSync(retainedFile), rejectedBytes);
});
test('a valid-shaped second publication cannot skip its retained repository predecessor', linux, t => {
  const f = published(t), second = { ...f.publication, viewer_sequence: 2, repository_sequence: 3 }; writeJson(f.stateDir, 'records/000000000003.json', second);
  const before = readFileSync(recordFile(f)); assert.throws(() => listViewerPublications({ projectRoot: f.root }), { code: 'GOAL_VIEWER_PUBLICATION_SEQUENCE_INVALID' }); assert.deepEqual(readFileSync(recordFile(f)), before);
});
test('record-directory aliases never become a second publication authority', linux, t => {
  const f = published(t), records = path.join(f.stateDir, 'records'), saved = path.join(f.base, 'saved-records'); const originalBytes = readFileSync(recordFile(f));
  renameSync(records, saved); symlinkSync(saved, records, 'dir');
  assert.throws(() => listViewerPublications({ projectRoot: f.root }), { code: 'GOAL_VIEWER_PUBLICATION_STATE_INVALID' }); assert.deepEqual(readFileSync(path.join(saved, '000000000001.json')), originalBytes);
});

for (const result of [null, { manifestRef: 'invalid', sequence: 1 }, { manifestRef: `sha256:${'a'.repeat(64)}`, sequence: 9 }]) test(`an invalid publisher outcome ${JSON.stringify(result)} cannot certify a Goal publication`, linux, t => {
  const f = fixture(t); validate(f); assert.throws(() => publishPendingViewerSnapshots({ config: f.config, publishSnapshot: () => result }), { code: 'GOAL_VIEWER_PUBLICATION_RESULT_INVALID' });
  assert.deepEqual(listViewerPublications({ projectRoot: f.root }), []); assert.equal(field(new GoalEventStore({ stateDir: f.goalDir }).rebuild().snapshots[0], 'viewer_publication'), 'pending');
  assert.equal(json(f.stateDir, 'journal.json').phase, 'reserved');
});
test('a detached producer that changes source after reading cannot advance publication receipts', linux, t => {
  const f = fixture(t); validate(f); const originalFile = readFileSync(path.join(f.root, 'tracked.txt'));
  assert.throws(() => publishPendingViewerSnapshots({ config: f.config, publishSnapshot(options) { const result = durablePublisher(options); put(options.root, 'tracked.txt', 'unvalidated replacement'); return result; } }), { code: 'GOAL_VIEWER_SOURCE_CHANGED' });
  assert.deepEqual(listViewerPublications({ projectRoot: f.root }), []); assert.deepEqual(readFileSync(path.join(f.root, 'tracked.txt')), originalFile); assert.equal(json(f.stateDir, 'journal.json').phase, 'reserved');
  assert.deepEqual(readdirSync(path.join(f.root, '.worktrees/viewer-publication')), [], 'Owned detached source is removed after failure.');
});
test('the producer source verifier refuses mismatched capture identity while retaining the correct source', linux, t => {
  const f = fixture(t); validate(f);
  const result = publishPendingViewerSnapshots({ config: f.config, publishSnapshot(options) {
    const capture = { source_ref: options.sourceRef, integration_commit: options.integrationCommit, base_commit: options.baseCommit, tree_hash: options.treeHash };
    assert.equal(options.sourceVerifier({ capture }), true);
    for (const name of ['source_ref', 'integration_commit', 'base_commit', 'tree_hash']) assert.equal(options.sourceVerifier({ capture: { ...capture, [name]: name === 'source_ref' ? 'refs/heads/not-retained' : 'f'.repeat(40) } }), false);
    return durablePublisher(options);
  } }); assert.equal(result.status, 'published');
});

test('recovery cannot fabricate an activation checkpoint for existing durable publications', linux, t => {
  const f = published(t); rmSync(path.join(f.stateDir, 'activation.json')); const recordBefore = readFileSync(recordFile(f));
  assert.throws(() => recoverViewerPublications({ config: f.config, recoverSnapshot: () => ({ recovered: false }), artifactStoreVerifier: () => true }), { code: 'GOAL_VIEWER_ACTIVATION_MISSING' });
  assert.deepEqual(readFileSync(recordFile(f)), recordBefore); assert.equal(existsSync(path.join(f.stateDir, 'activation.json')), false);
});
test('a substituted activation identity cannot authorize the next publication', linux, t => {
  const f = published(t), file = path.join(f.stateDir, 'activation.json'); writeFileSync(file, JSON.stringify({ ...json(f.stateDir, 'activation.json'), integration_commit: 'f'.repeat(40) })); const before = readFileSync(file);
  assert.throws(() => publishPendingViewerSnapshots({ config: f.config, publishSnapshot: durablePublisher }), { code: 'GOAL_VIEWER_ACTIVATION_INVALID' }); assert.deepEqual(readFileSync(file), before);
});
for (const residual of ['operator-file', 'foreign-directory', 'retained-object']) test(`reconstruction refuses ${residual} instead of deleting unowned artifact data`, linux, t => {
  const f = published(t); rmSync(f.artifactStore, { recursive: true }); mkdirSync(f.artifactStore);
  const file = residual === 'operator-file' ? 'operator' : residual === 'foreign-directory' ? 'foreign/keep' : 'objects/keep'; put(f.artifactStore, file, 'retained bytes');
  assert.throws(() => reconstructViewerArtifactStore({ config: f.config, publications: [f.publication], publishSnapshot: durablePublisher }), { code: 'GOAL_VIEWER_RECONSTRUCTION_STORE_NOT_EMPTY' });
  assert.equal(readFileSync(path.join(f.artifactStore, file), 'utf8'), 'retained bytes');
});
test('reconstruction refuses a substituted coordinator identity before invoking a producer', linux, t => {
  const f = published(t); rmSync(f.artifactStore, { recursive: true }); mkdirSync(f.artifactStore); let invoked = false;
  assert.throws(() => reconstructViewerArtifactStore({ config: f.config, publications: [{ ...f.publication, integration_commit: 'f'.repeat(40) }], publishSnapshot() { invoked = true; return null; } }), { code: 'GOAL_VIEWER_RECONSTRUCTION_PROVENANCE_INVALID' });
  assert.equal(invoked, false); assert.deepEqual(readdirSync(f.artifactStore), []);
});
test('a reconstruction with different manifest bytes cleans only its owned attempt and preserves the empty destination', linux, t => {
  const f = published(t); rmSync(f.artifactStore, { recursive: true }); mkdirSync(f.artifactStore); const before = readdirSync(f.base).sort();
  assert.throws(() => reconstructViewerArtifactStore({ config: f.config, publications: [f.publication], publishSnapshot(options) { const result = durablePublisher(options); return { ...result, manifestRef: `sha256:${'f'.repeat(64)}` }; } }), { code: 'GOAL_VIEWER_RECONSTRUCTION_DIVERGED' });
  assert.deepEqual(readdirSync(f.artifactStore), []); assert.deepEqual(readdirSync(f.base).sort(), before); assert.equal(listViewerPublications({ projectRoot: f.root }).length, 1);
});

test('landing provenance cannot be downgraded or rebound after an exact landing timestamp is retained', linux, t => {
  const f = published(t), time = '2026-10-04T01:00:00Z', file = path.join(f.artifactStore, 'provenance', f.publication.viewer_snapshot_id + '.json');
  writeViewerLandingProvenance({ publication: f.publication, landingState: 'landed', landedAt: time }); const before = readFileSync(file);
  writeViewerLandingProvenance({ publication: f.publication, landingState: 'validated_not_landed' }); assert.deepEqual(readFileSync(file), before);
  assert.throws(() => writeViewerLandingProvenance({ publication: f.publication, landingState: 'landed', landedAt: '2026-10-04T02:00:00Z' }), { code: 'GOAL_VIEWER_PROVENANCE_CONFLICT' }); assert.deepEqual(readFileSync(file), before);
});
for (const changed of ['goal_id', 'manifest_ref', 'viewer_sequence'] as const) test(`a retained provenance ${changed} substitution cannot be overwritten by reprojecting success`, linux, t => {
  const f = published(t), file = path.join(f.artifactStore, 'provenance', f.publication.viewer_snapshot_id + '.json'), value = json(f.artifactStore, `provenance/${f.publication.viewer_snapshot_id}.json`);
  value[changed] = changed === 'viewer_sequence' ? 2 : changed === 'goal_id' ? 'goal-substitute' : `sha256:${'f'.repeat(64)}`; writeFileSync(file, JSON.stringify(value)); const before = readFileSync(file);
  assert.throws(() => projectViewerPublication({ projectRoot: f.root, publication: f.publication }), { code: 'GOAL_VIEWER_PROVENANCE_CONFLICT' }); assert.deepEqual(readFileSync(file), before);
});
test('invalid landing states and missing timestamps cannot change existing provenance', linux, t => {
  const f = published(t), file = path.join(f.artifactStore, 'provenance', f.publication.viewer_snapshot_id + '.json'), before = readFileSync(file);
  assert.throws(() => writeViewerLandingProvenance({ publication: f.publication, landingState: 'accepted' }), { code: 'GOAL_VIEWER_PROVENANCE_INVALID' });
  assert.throws(() => writeViewerLandingProvenance({ publication: f.publication, landingState: 'landed' }), { code: 'GOAL_VIEWER_PROVENANCE_INVALID' }); assert.deepEqual(readFileSync(file), before);
});
test('a publication can retain provenance when its local Goal state is unavailable without inventing a Goal projection', linux, t => {
  const f = published(t); rmSync(f.goalDir, { recursive: true });
  assert.equal(projectViewerPublication({ projectRoot: f.root, publication: f.publication }).status, 'goal_state_unavailable'); assert.equal(existsSync(f.goalDir), false); assert.equal(listViewerPublications({ projectRoot: f.root }).length, 1);
});
for (const change of ['integration_commit', 'viewer_manifest_ref'] as const) test(`projection refuses a Goal snapshot with conflicting ${change} while preserving its event evidence`, linux, t => {
  const f = published(t), store = new GoalEventStore({ stateDir: f.goalDir }), snapshot = store.rebuild().snapshots[0]; assert.ok(snapshot);
  store.append({ event_id: `substitute-${change}`, type: 'snapshot_replaced', payload: { snapshot: { ...snapshot, [change]: change === 'integration_commit' ? 'f'.repeat(40) : `sha256:${'f'.repeat(64)}` } } });
  const before = readFileSync(path.join(f.goalDir, 'events.jsonl')); assert.throws(() => projectViewerPublication({ projectRoot: f.root, publication: f.publication }), { code: 'GOAL_VIEWER_PUBLICATION_PROJECTION_CONFLICT' }); assert.deepEqual(readFileSync(path.join(f.goalDir, 'events.jsonl')), before);
});

for (const change of ['repository_sequence', 'captured_at', 'viewer_snapshot_id'] as const) test(`real pinned artifact verification rejects valid-shaped publication ${change} substitution`, linux, t => {
  const f = published(t, true), before = readFileSync(recordFile(f)); const value: ViewerPublication = { ...f.publication, [change]: change === 'repository_sequence' ? 9 : change === 'captured_at' ? '2020-01-01T00:00:00Z' : `viewer-000000000001-${'f'.repeat(16)}` };
  assert.throws(() => verifyPublishedViewerArtifact({ config: f.config, publication: value }), { code: 'GOAL_VIEWER_PUBLICATION_PROVENANCE_INVALID' }); assert.deepEqual(readFileSync(recordFile(f)), before);
});
test('a real prepared outer reservation cannot recover after its exact inner source binding is substituted', linux, t => {
  const f = fixture(t, true); validate(f); assert.throws(() => publishPendingViewerSnapshots({ config: f.config, faultInjector: crash('after_artifact_prepared') }), { code: 'EDGE_INTERRUPTED' });
  const outer = json(f.stateDir, 'journal.json'); outer.expected_inner_source_fingerprint = `sha256:${'f'.repeat(64)}`; writeJson(f.stateDir, 'journal.json', outer); const before = journalBytes(f), inner = readFileSync(path.join(f.artifactStore, 'journal.json'));
  assert.throws(() => recoverViewerPublications({ config: f.config }), { code: 'GOAL_VIEWER_PUBLICATION_MANIFEST_SUBSTITUTED' }); assert.deepEqual(journalBytes(f), before); assert.deepEqual(readFileSync(path.join(f.artifactStore, 'journal.json')), inner); assert.deepEqual(listViewerPublications({ projectRoot: f.root }), []);
});
test('publish-all consumes an exact retained prefix and remains idempotent without changing the caller checkout', linux, t => {
  const f = fixture(t); validate(f, 'snapshot-first'); const first = publishAllPendingViewerSnapshots({ config: f.config, publishSnapshot: durablePublisher }); assert.equal(first.status, 'published');
  const head = git(f.root, ['rev-parse', 'HEAD']); validate(f, 'snapshot-second'); const second = publishAllPendingViewerSnapshots({ config: f.config, publishSnapshot: durablePublisher }); assert.equal(second.status, 'published');
  assert.equal(listViewerPublications({ projectRoot: f.root }).length, 2); assert.equal(publishAllPendingViewerSnapshots({ config: f.config, publishSnapshot: durablePublisher }).status, 'up_to_date'); assert.equal(git(f.root, ['rev-parse', 'HEAD']), head);
});
test('first activation records a genuinely unavailable prior source without fabricating its Viewer snapshot; later source recovery stays a derived status', linux, t => {
  const f = fixture(t), prior = validate(f, 'snapshot-prior'); validate(f, 'snapshot-current'); git(f.root, ['update-ref', '-d', prior.source_ref]);
  publishPendingViewerSnapshots({ config: f.config, publishSnapshot: durablePublisher }); const records = listViewerPreActivationRecords({ projectRoot: f.root });
  assert.equal(records.length, 1); assert.equal(records[0]?.repository_sequence, 1); assert.equal(records[0]?.source_status, 'missing');
  assert.equal(listViewerPublications({ projectRoot: f.root })[0]?.repository_sequence, 2);
  const file = path.join(f.stateDir, 'pre-activation/000000000001.json'), originalBytes = readFileSync(file);
  git(f.root, ['update-ref', prior.source_ref, prior.integration_commit]);
  assert.equal(listViewerPreActivationRecords({ projectRoot: f.root })[0]?.source_status, 'available'); assert.deepEqual(readFileSync(file), originalBytes);
});
test('a substituted retained pre-activation identity cannot be reconciled or silently replaced', linux, t => {
  const f = fixture(t); validate(f, 'snapshot-prior'); validate(f, 'snapshot-current'); publishPendingViewerSnapshots({ config: f.config, publishSnapshot: durablePublisher });
  const file = path.join(f.stateDir, 'pre-activation/000000000001.json'), value = json(f.stateDir, 'pre-activation/000000000001.json'); value.integration_commit = 'f'.repeat(40); writeFileSync(file, JSON.stringify(value));
  const before = readFileSync(file), publications = listViewerPublications({ projectRoot: f.root });
  assert.throws(() => publishPendingViewerSnapshots({ config: f.config, publishSnapshot: durablePublisher }), { code: 'GOAL_VIEWER_ACTIVATION_INVALID' }); assert.deepEqual(readFileSync(file), before); assert.deepEqual(listViewerPublications({ projectRoot: f.root }), publications);
});
test('unexpected retained pre-activation entries are rejected while operator evidence remains untouched', linux, t => {
  const f = fixture(t); validate(f, 'snapshot-prior'); validate(f, 'snapshot-current'); publishPendingViewerSnapshots({ config: f.config, publishSnapshot: durablePublisher });
  put(f.stateDir, 'pre-activation/operator-note.json', 'operator evidence'); assert.throws(() => listViewerPreActivationRecords({ projectRoot: f.root }), { code: 'GOAL_VIEWER_ACTIVATION_INVALID' });
  assert.equal(readFileSync(path.join(f.stateDir, 'pre-activation/operator-note.json'), 'utf8'), 'operator evidence');
});
