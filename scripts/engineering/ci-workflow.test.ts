import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { parse } from 'yaml';
import { CI_JOBS } from './ci-gate.ts';
import { SHARD_NAMES } from './qualification-plan.ts';
function object(value:unknown):Record<string,unknown>{assert.ok(value&&typeof value==='object'&&!Array.isArray(value));return value as Record<string,unknown>;}
const workflow=object(parse(readFileSync(path.join(process.cwd(),'.github/workflows/validate.yml'),'utf8')) as unknown);
const jobs=object(workflow.jobs);
function job(name:string){return object(jobs[name]);}
function steps(name:string){const value=job(name).steps;assert.ok(Array.isArray(value));return value.map(object);}
function text(value:unknown){assert.equal(typeof value,'string');return value as string;}
function step(name:string,title:string){const value=steps(name).find(value=>value.name===title);assert.ok(value,title);return value;}

test('only the generated root lock uses focused existence obligations while semantic routes remain', () => {
 const config = object(parse(readFileSync(path.join(process.cwd(), '.docpact/config.yaml'), 'utf8')) as unknown);
 assert.ok(Array.isArray(config.rules)); const rules = config.rules.map(object);
 const matching = (filename: string) => rules.filter(rule => {
  assert.ok(Array.isArray(rule.triggers));
  return rule.triggers.map(object).some(trigger => path.posix.matchesGlob(filename, text(trigger.path)));
 });
 const obligations = (filename: string) => matching(filename).flatMap(rule => {
  assert.ok(Array.isArray(rule.requiredDocs)); return rule.requiredDocs.map(object);
 });
 const lock = matching('package-lock.json');
 assert.deepEqual(lock.map(rule => rule.id), ['pcr-root-generated-lock']);
 assert.deepEqual(obligations('package-lock.json'), [
  { path: 'docs/dependency-maintenance.md', mode: 'must_exist' },
  { path: 'docs/typescript-engineering.md', mode: 'must_exist' },
 ]);
 const covered = object(config.coverage).include; assert.ok(Array.isArray(covered));
 assert.ok(covered.includes('package-lock.json'));
 const domains = object(config.ownership).domains; assert.ok(Array.isArray(domains));
 const owners = domains.map(object).filter(domain => {
  const include = object(domain.paths).include; assert.ok(Array.isArray(include));
  return include.some(pattern => path.posix.matchesGlob('package-lock.json', text(pattern)));
 });
 assert.deepEqual(owners.map(domain => domain.ownerRepo), ['pcr']);
 for (const [filename, expected] of [
  ['package.json', ['pcr-builder-contract', 'typescript-engineering']],
  ['packages/pcr-core/package.json', ['pcr-consumption-contract']],
  ['packages/pcr-docs/package-lock.json', ['pcr-consumption-contract', 'pcr-documentation-site']],
  ['builder/lib/markdown-projection.ts', ['normative-source-context', 'pcr-builder-contract']],
  ['scripts/engineering/ci-plan.ts', ['typescript-engineering']],
  ['.github/workflows/validate.yml', ['pcr-bootstrap-contract', 'typescript-engineering']],
 ] as const) {
  assert.deepEqual(matching(filename).map(rule => text(rule.id)).sort(), [...expected].sort(), filename);
  assert.ok(obligations(filename).some(doc => doc.mode === 'review_or_update'), filename);
 }
 // A lock beside semantic edits cannot absorb those edits' separate obligations.
 assert.ok([...obligations('package-lock.json'), ...obligations('package.json')]
  .some(doc => doc.mode === 'review_or_update'));
 for (const filename of ['package-lock.backup.json', 'nested/package-lock.json', 'config/unregistered.json'])
  assert.deepEqual(matching(filename), [], filename);
});

test('always-present aggregate requires the entire declared graph and trusted workflow inputs',()=>{
 const gate=job('validate');assert.equal(gate.if,'always()');assert.deepEqual(gate.needs,CI_JOBS);
 assert.equal(object(workflow.env).CI_WORKFLOW_INPUTS,'${{ toJSON(inputs) }}');
 assert.equal(object(object(object(workflow.on).workflow_call).inputs).product_tag!==undefined,true);
 const call=object(object(parse(readFileSync(path.join(process.cwd(),'.github/workflows/publish.yml'),'utf8')) as unknown).jobs);
 assert.equal(object(call['quality-gate']).uses,'./.github/workflows/validate.yml');
 assert.ok(Object.hasOwn(object(object(call['quality-gate']).with),'product_tag'));
 assert.deepEqual(object(call['product-publish']).needs,['release-context','quality-gate']);
});
test('full-lane tests are complete, isolated, receipt-bound and include uninstrumented corpus',()=>{
 assert.deepEqual(object(object(job('test-shards').strategy).matrix).shard,SHARD_NAMES);
 assert.equal(job('test-shards').if,"needs.plan.outputs.mode == 'full'");
 const command=text(step('test-shards','Execute exactly the frozen shard').run);
 assert.match(command,/if \[ "\$SHARD" = corpus \]/u);assert.match(command,/--qualification-plan .* --selection "\$SHARD" -- node/u);
 const docs=text(step('documentation','Build and verify the full static library').run);
 assert.match(docs,/if \[ "\$\{\{ needs.plan.outputs.mode \}\}" = full \]/u);assert.match(docs,/--selection documentation -- npm --prefix packages\/pcr-docs run build/u);
 const browser=step('test-shards','Install browser runtimes for the consumer shard');assert.equal(browser.if,"matrix.shard == 'consumer'");
});
test('data path retains global checks, exact generated content and sealed cross-platform browser gates',()=>{
 const commands=text(step('contracts','Verify source and strict types').run);
 for(const required of ['ci-plan.ts verify','npm run typecheck:all'])assert.ok(commands.includes(required));
 assert.match(text(step('contracts','Validate complete library contracts').run),/npm run lint/u);
 assert.match(text(step('contracts','Verify changed canonical records').run),/ci-content.ts/u);
 assert.equal(object(step('contracts','Preserve content qualification evidence').with).path,'${{ runner.temp }}/pcr-content-contracts/');
 assert.match(text(step('test-shards','Bind the actual pinned npm entry for direct shard children').run),/npm_execpath=/u);
 for(const name of ['sealed-distribution','sealed-web']){assert.equal(job(name).needs,'product');assert.equal(job(name).if,undefined);}
 assert.equal(object(object(job('sealed-distribution').strategy).matrix).include instanceof Array,true);
 assert.match(text(step('sealed-distribution','Qualify real offline installation of the sealed packages').run),/--expected-source "\$\{\{ github.sha \}\}"/u);
 assert.ok(!steps('documentation').some(value=>text(value.run??'').includes('npm run product:test')));
 assert.ok(!steps('documentation').some(value=>text(value.run??'').includes('npm --prefix packages/pcr-docs test')));
 assert.equal(step('offline-distribution','Verify compact real offline distribution and reproducibility').run,'npm run test:offline:portable');
});
test('the required product job authenticates the exact export and owns the one final sealed artifact',()=>{
 assert.deepEqual(job('product').needs,['plan','documentation']);assert.equal(job('product').if,undefined);
 assert.equal(job('documentation')['timeout-minutes'],60);assert.equal(job('product')['timeout-minutes'],60);
 assert.equal(object(job('documentation').outputs).product_artifact_id,undefined);
 const capture=text(step('documentation','Capture the exact verified web export').run);
 for(const required of ['web-export-handoff.ts capture','pcr-plan','packages/pcr-docs/out','build-metrics.json','pcr-documentation-coverage'])assert.ok(capture.includes(required));
 const upload=object(step('documentation','Preserve the exact web export for product sealing').with);
 assert.equal(upload.name,'pcr-web-export-${{ github.run_id }}-${{ github.run_attempt }}');
 assert.equal(upload['include-hidden-files'],true);assert.equal(upload['compression-level'],1);assert.equal(upload['if-no-files-found'],'error');
 const transfer=object(step('product','Download the exact verified web export').with);
 assert.equal(transfer['artifact-ids'],'${{ needs.documentation.outputs.web_export_artifact_id }}');
 assert.equal(transfer.name,undefined);assert.equal(transfer.pattern,undefined);
 const productSteps=steps('product');
 const authenticate=productSteps.findIndex(value=>value.name==='Authenticate the complete export before product sealing');
 const seo=productSteps.findIndex(value=>value.name==='Verify shared SEO invariants without rebuilding');
 const seal=productSteps.findIndex(value=>value.name==='Build and verify the two packages and sealed web artifact');
 assert.ok(authenticate>=0&&authenticate<seo&&seo<seal);
 assert.match(text(productSteps[authenticate]!.run),/web-export-handoff\.ts verify/u);
 assert.match(text(productSteps[seo]!.run),/pcr-web-export\/out/u);
 assert.match(text(productSteps[seal]!.run),/pcr-web-export\/out/u);
 assert.ok(!steps('documentation').some(value=>text(value.run??'').includes('product:build')));
 assert.ok(!productSteps.some(value=>text(value.run??'').includes('packages/pcr-docs run build')));
 for(const name of ['sealed-distribution','sealed-web']){
  const download=steps(name).find(value=>object(value.with??{})['artifact-ids']==='${{ needs.product.outputs.product_artifact_id }}');
  assert.ok(download,name+' must consume the sole product artifact ID');
 }
 const outputs=object(object(object(workflow.on).workflow_call).outputs);
 assert.equal(object(outputs.product_artifact_id).value,'${{ jobs.product.outputs.product_artifact_id }}');
});
test('coverage receives same-attempt isolated raw artifacts and verifies membership before aggregation',()=>{
 assert.deepEqual(job('source-coverage').needs,['plan','test-shards','documentation']);
 for(const title of ['Download every receipt without flattening shard directories','Download isolated current-invocation raw measurements']){
  const config=object(step('source-coverage',title).with);assert.equal(config['merge-multiple'],undefined);assert.ok(text(config.pattern).endsWith('${{ github.run_id }}-${{ github.run_attempt }}'));
 }
 const raw=object(step('source-coverage','Download isolated current-invocation raw measurements').with);
 const doc=object(step('source-coverage','Download exact full-build measurement').with);
 assert.notEqual(raw.path,doc.path);assert.equal(doc['artifact-ids'],'${{ needs.documentation.outputs.coverage_artifact_id }}');
 assert.match(text(step('source-coverage','Enforce complete shard membership and source-accounted coverage').run),/^node scripts\/engineering\/coverage-ci.ts /u);
 for(const name of ['offline-distribution','provider-importer','source-coverage'])assert.equal(job(name).if,"needs.plan.outputs.mode == 'full'");
});
