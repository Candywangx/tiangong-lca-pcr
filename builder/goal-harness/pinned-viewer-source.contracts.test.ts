import assert from 'node:assert/strict';
import {mkdirSync,mkdtempSync,realpathSync,rmSync,symlinkSync,writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {resolvePinnedViewerModules} from './viewer-publication.ts';

for(const extension of ['ts','mjs','js'])test(`captured Viewer supports an exact ${extension} module pair`,t=>{
 const root=mkdtempSync(path.join(realpathSync(tmpdir()),'viewer-module-pair-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const dir=path.join(root,'packages/pcr-viewer/scripts');mkdirSync(dir,{recursive:true});
 for(const file of ['build-viewer-data','snapshot-store'])writeFileSync(path.join(dir,`${file}.${extension}`),'export {};\n');
 assert.deepEqual(resolvePinnedViewerModules(root),{modulePath:path.join(dir,`build-viewer-data.${extension}`),storeModulePath:path.join(dir,`snapshot-store.${extension}`)});
});
test('historical mixed captures retain the original MJS publisher without mixing source formats',t=>{
 const root=mkdtempSync(path.join(realpathSync(tmpdir()),'viewer-module-precedence-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const dir=path.join(root,'packages/pcr-viewer/scripts');mkdirSync(dir,{recursive:true});
 writeFileSync(path.join(dir,'build-viewer-data.ts'),'export {};\n');writeFileSync(path.join(dir,'snapshot-store.mjs'),'export {};\n');
 assert.throws(()=>resolvePinnedViewerModules(root),{code:'GOAL_VIEWER_PINNED_PUBLISHER_MISSING'});
 writeFileSync(path.join(dir,'build-viewer-data.mjs'),'export {};\n');assert.ok(resolvePinnedViewerModules(root).modulePath.endsWith('.mjs'));
 writeFileSync(path.join(dir,'snapshot-store.ts'),'export {};\n');assert.ok(resolvePinnedViewerModules(root).modulePath.endsWith('.mjs'));
 writeFileSync(path.join(dir,'publisher-source.json'),JSON.stringify({schemaVersion:1,moduleFormat:'ts'}));
 assert.ok(resolvePinnedViewerModules(root).modulePath.endsWith('.ts'));
});
test('captured executable module symlinks are rejected',t=>{
 const root=mkdtempSync(path.join(realpathSync(tmpdir()),'viewer-module-link-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const dir=path.join(root,'packages/pcr-viewer/scripts');mkdirSync(dir,{recursive:true});
 writeFileSync(path.join(root,'outside.ts'),'export {};\n');writeFileSync(path.join(dir,'snapshot-store.ts'),'export {};\n');
 symlinkSync(path.join(root,'outside.ts'),path.join(dir,'build-viewer-data.ts'));
 assert.throws(()=>resolvePinnedViewerModules(root),{code:'GOAL_VIEWER_PINNED_PUBLISHER_MISSING'});
});

for (const metadata of [{schemaVersion:2,moduleFormat:'ts'},{schemaVersion:1,moduleFormat:'../../external'},null]) {
 test(`captured source format fails closed: ${JSON.stringify(metadata)}`,t=>{
  const root=mkdtempSync(path.join(realpathSync(tmpdir()),'viewer-format-invalid-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
  const dir=path.join(root,'packages/pcr-viewer/scripts');mkdirSync(dir,{recursive:true});
  for(const file of ['build-viewer-data','snapshot-store'])writeFileSync(path.join(dir,`${file}.mjs`),'export {};\n');
  writeFileSync(path.join(dir,'publisher-source.json'),JSON.stringify(metadata));
  assert.throws(()=>resolvePinnedViewerModules(root),{code:'GOAL_VIEWER_PINNED_PUBLISHER_FORMAT_INVALID'});
 });
}
test('an explicit typed capture cannot fall back to an available historical implementation',t=>{
 const root=mkdtempSync(path.join(realpathSync(tmpdir()),'viewer-format-missing-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const dir=path.join(root,'packages/pcr-viewer/scripts');mkdirSync(dir,{recursive:true});
 for(const file of ['build-viewer-data','snapshot-store'])writeFileSync(path.join(dir,`${file}.mjs`),'export {};\n');
 writeFileSync(path.join(dir,'publisher-source.json'),JSON.stringify({schemaVersion:1,moduleFormat:'ts'}));
 assert.throws(()=>resolvePinnedViewerModules(root),{code:'GOAL_VIEWER_PINNED_PUBLISHER_MISSING'});
});
