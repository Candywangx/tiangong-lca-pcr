import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {withNavigationCompilationBinding} from './navigation-compilation.ts';
function fixture(){const root=fs.mkdtempSync(path.join(os.tmpdir(),'nav-compile-')),app=path.join(root,'packages/pcr-docs');fs.mkdirSync(path.join(app,'lib'),{recursive:true});fs.writeFileSync(path.join(root,'middleware.ts'),'');fs.writeFileSync(path.join(app,'lib/navigation-trees.ts'),'');return{root,app,file:path.join(app,'out/generated/navigation-binding.json')};}
test('clean and failed Next compilation use only an owned temporary null slot',async()=>{const f=fixture();try{
 await withNavigationCompilationBinding(f.app,async()=>{assert.equal(fs.readFileSync(f.file,'utf8'),'null\n');});assert(!fs.existsSync(f.file));
 await assert.rejects(withNavigationCompilationBinding(f.app,async()=>{throw Error('Next failed');}),/Next failed/);assert(!fs.existsSync(f.file));
}finally{fs.rmSync(f.root,{recursive:true,force:true});}});
test('prior binding and a replacement produced during export are never removed',async()=>{const f=fixture();try{
 fs.mkdirSync(path.dirname(f.file),{recursive:true});fs.writeFileSync(f.file,'{"prior":true}');await withNavigationCompilationBinding(f.app,async()=>{});assert.equal(fs.readFileSync(f.file,'utf8'),'{"prior":true}');fs.unlinkSync(f.file);
 await withNavigationCompilationBinding(f.app,async()=>{fs.unlinkSync(f.file);fs.writeFileSync(f.file,'{"final":true}');});assert.equal(fs.readFileSync(f.file,'utf8'),'{"final":true}');
}finally{fs.rmSync(f.root,{recursive:true,force:true});}});
test('an external binding symlink is refused before Next is invoked',async()=>{const f=fixture();try{fs.mkdirSync(path.dirname(f.file),{recursive:true});fs.symlinkSync(path.join(f.root,'middleware.ts'),f.file);await assert.rejects(withNavigationCompilationBinding(f.app,async()=>assert.fail('must not compile')),/Unsafe/);}finally{fs.rmSync(f.root,{recursive:true,force:true});}});
