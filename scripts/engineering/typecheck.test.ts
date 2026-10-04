import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdtempSync,mkdirSync,readFileSync,realpathSync,rmSync,symlinkSync,writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {checkProjects,assertSourceInventory,runTypechecks} from './typecheck.ts';

function fixture(t:{after:(cleanup:()=>void)=>void}){
 const root=mkdtempSync(path.join(realpathSync(tmpdir()),'pcr-strict-inventory-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const manifest:unknown=JSON.parse(readFileSync(path.resolve('package.json'),'utf8'));assert.ok(manifest&&typeof manifest==='object'&&'devDependencies'in manifest);
 writeFileSync(path.join(root,'package.json'),JSON.stringify({type:'module',devDependencies:manifest.devDependencies}));
 writeFileSync(path.join(root,'.gitignore'),'node_modules/\n');symlinkSync(path.resolve('node_modules'),path.join(root,'node_modules'),'junction');
 mkdirSync(path.join(root,'src'));writeFileSync(path.join(root,'src/good.ts'),'export const value: number = 1;\n');
 writeFileSync(path.join(root,'tsconfig.json'),JSON.stringify({compilerOptions:{strict:true,noEmit:true,skipLibCheck:true},include:['src/*.ts']}));
 execFileSync('git',['init','-q'],{cwd:root});return root;
}
test('strict inventory rejects an untracked subprocess helper omitted by a shallow include',t=>{
 const root=fixture(t);assert.equal(assertSourceInventory(root,checkProjects(root,['tsconfig.json'])),1);
 mkdirSync(path.join(root,'src/fixtures'));writeFileSync(path.join(root,'src/fixtures/child.ts'),'export const child: string = "actual";\n');
 assert.throws(()=>assertSourceInventory(root,checkProjects(root,['tsconfig.json'])),/src\/fixtures\/child.ts/u);
 writeFileSync(path.join(root,'tsconfig.json'),JSON.stringify({compilerOptions:{strict:true,noEmit:true,skipLibCheck:true},include:['src/**/*.ts']}));
 assert.equal(assertSourceInventory(root,checkProjects(root,['tsconfig.json'])),2);
});
test('the real compiler rejects hidden noCheck or non-strict settings before source receives checked status',t=>{
 const root=fixture(t);writeFileSync(path.join(root,'src/good.ts'),'export const value: number = "invalid";\n');
 writeFileSync(path.join(root,'tsconfig.json'),JSON.stringify({compilerOptions:{noCheck:true,strict:false,skipLibCheck:true},include:['src/*.ts']}));
 assert.throws(()=>checkProjects(root,['tsconfig.json']),/not assignable/u);
});
test('project failures, unknown modes and compiler pin mismatch cannot produce approval',t=>{
 const root=fixture(t);assert.throws(()=>runTypechecks('--unknown',root),/Usage/u);
 assert.throws(()=>checkProjects(root,['absent.json']),/Type checking failed/u);
 writeFileSync(path.join(root,'package.json'),JSON.stringify({type:'module',devDependencies:{typescript:'0.0.0'}}));
 assert.throws(()=>checkProjects(root,['tsconfig.json']),/pinned TypeScript/u);
});


test('individual strict subflags cannot silently weaken the real compiler check',t=>{
 const root=fixture(t);
 writeFileSync(path.join(root,'tsconfig.json'),JSON.stringify({compilerOptions:{strict:true,noImplicitAny:false,strictNullChecks:false,skipLibCheck:true},include:['src/*.ts']}));
 writeFileSync(path.join(root,'src/good.ts'),'export function unchecked(value) { return value; } export const wrong:number=null;\n');
 assert.throws(()=>checkProjects(root,['tsconfig.json']),error=>error instanceof Error&&error.message.includes('implicitly has an')&&error.message.includes('not assignable'));
});
