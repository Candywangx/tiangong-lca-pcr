import { readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { isReusableContext, verifyCiPlan, type CiPlan } from './ci-plan.ts';
export const CI_JOBS = ['plan','contracts','test-shards','documentation','offline-distribution','provider-importer','sealed-distribution','sealed-web','source-coverage'] as const;
const alwaysRequired = new Set(['plan','contracts','documentation','sealed-distribution','sealed-web']);
export function verifyCiGate(plan: CiPlan, results: unknown) {
  if (plan.mode !== 'full' && plan.mode !== 'data') throw new Error('Unknown qualification lane.');
  if (!results || typeof results !== 'object' || Array.isArray(results)) throw new Error('Missing CI job results.');
  const object = results as Record<string, unknown>;
  if (Object.keys(object).length !== CI_JOBS.length || Object.keys(object).some(name => !CI_JOBS.includes(name as typeof CI_JOBS[number]))) throw new Error('CI job result membership differs from the required graph.');
  const checks = CI_JOBS.map(name => {
    const item = object[name];
    if (!item || typeof item !== 'object' || Array.isArray(item)) throw new Error(`Missing CI job result: ${name}`);
    const result = (item as Record<string, unknown>).result;
    const expected = plan.mode === 'full' || alwaysRequired.has(name) ? 'success' : 'skipped';
    if (result !== expected) throw new Error(`CI job ${name}: expected ${expected}, received ${String(result)}.`);
    return { name, result: expected };
  });
  return { schema: 1, status: 'passed', head: plan.head, mode: plan.mode, reason: plan.reason, checks,
    coverage: plan.mode === 'full' ? 'fresh-source-bound-measurement-required-and-passed' : 'not-measured-data-only-lane',
    methodologyApproval: false };
}
function main() {
  if (process.argv.length !== 3 || !process.argv[2]) throw new Error('Usage: ci-gate.ts <plan.json>');
  const plan = verifyCiPlan(process.cwd(), JSON.parse(readFileSync(process.argv[2],'utf8')) as unknown,
    { event: process.env.CI_EVENT_NAME ?? '', reusable: isReusableContext(process.env.CI_WORKFLOW_INPUTS),
      ...(process.env.CI_BASE_SHA ? { base: process.env.CI_BASE_SHA } : {}), head: process.env.CI_HEAD_SHA ?? '' });
  console.log(JSON.stringify(verifyCiGate(plan, JSON.parse(process.env.CI_JOB_RESULTS ?? 'null') as unknown)));
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try { main(); } catch (error) { console.error(error instanceof Error ? error.message : String(error)); process.exitCode=1; }
}
