import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, realpathSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { createPublisherFixture } from "./viewer-test-fixture.ts";
import { jsonRecord, record } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";

function git(root: string, args: string[]): string {
  return execFileSync("git",args,{cwd:root,encoding:"utf8",stdio:["ignore","pipe","pipe"]}).trim();
}
function worker(root: string, operation: string, options: UnknownRecord): UnknownRecord {
  return jsonRecord(execFileSync(process.execPath,[path.join(root,"builder/goal-harness/pinned-viewer-publisher-worker.ts")],{
    cwd:root,encoding:"utf8",input:JSON.stringify({operation,module_path:path.join(root,"packages/pcr-viewer/scripts/build-viewer-data.mjs"),store_module_path:path.join(root,"packages/pcr-viewer/scripts/snapshot-store.mjs"),import_nonce:"typed-worker-contract",options}),maxBuffer:8*1024*1024,
  }));
}

test("typed pinned worker captures real prepared bytes and recovers only the same publisher contract", t => {
  const temporary=mkdtempSync(path.join(realpathSync(tmpdir()),"goal-typed-pinned-worker-"));
  t.after(()=>rmSync(temporary,{recursive:true,force:true}));
  const root=path.join(temporary,"repo"), artifactStore=path.join(temporary,"artifacts");
  createPublisherFixture({root,source:path.resolve(import.meta.dirname,"../..")});
  const commit=git(root,["rev-parse","HEAD"]), sourceRef=git(root,["symbolic-ref","HEAD"]);
  const options={root,artifactStore,snapshotId:"typed-pinned",goalId:"typed-goal",harnessSnapshotId:"typed-harness",sequence:1,sourceRef,integrationCommit:commit,baseCommit:commit,treeHash:git(root,["rev-parse","HEAD^{tree}"]),capturedAt:"2026-10-04T00:00:00.000Z",validatedAt:"2026-10-04T00:00:00.000Z",validationSummary:{status:"passed",checks:1},bootstrap:true};
  const prepared=worker(root,"publish_prepare",options);
  assert.equal(prepared.ok,true,JSON.stringify(prepared));
  assert.equal(prepared.status,"prepared");
  const journal=record(prepared.journal), manifest=record(prepared.manifest), contract=record(prepared.publisher_contract);
  assert.equal(journal.manifest_ref!==null,true); assert.equal(contract.api_version,1);
  assert.equal(contract.manifest_schema_version,manifest.schema_version);
  assert.equal(contract.schema_contract_sha256,manifest.schema_contract_sha256);
  const mismatched=worker(root,"recover",{...options,expectedPublisherContract:{...contract,generator_version:"substituted-generator"}});
  assert.equal(mismatched.ok,false);
  assert.equal(record(mismatched.error).code,"PINNED_VIEWER_RECOVERY_CONTRACT_MISMATCH");
  const recovered=worker(root,"recover",{...options,expectedPublisherContract:contract});
  assert.equal(recovered.ok,true,JSON.stringify(recovered)); assert.equal(recovered.status,"recovered");
  assert.deepEqual(recovered.publisher_contract,contract); assert.deepEqual(recovered.manifest,manifest);
  assert.equal(record(recovered.active).manifest_ref,journal.manifest_ref);
  assert.equal(git(root,["status","--porcelain=v1","--untracked-files=all"]),"");
});
