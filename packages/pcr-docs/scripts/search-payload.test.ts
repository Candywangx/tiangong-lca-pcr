import assert from 'node:assert/strict';
import test from 'node:test';
import {Index} from 'flexsearch';
import {encodeSearchEntries,decodeSearchEntries} from '../lib/search-wire.ts';
import {searchTerms} from '../lib/search-terms.ts';
import {encodeLanguageSearchShards} from './search-payload.ts';

test('language dictionary preserves exact exports, shard membership and complete multilingual search',async()=>{
 for(const language of ['en-US','zh-CN']){
  const options={tokenize:'strict' as const,encode:(v:unknown)=>searchTerms(v,language)};
  const originals:Record<string,unknown[]>[]=[];const engines:Index[]=[];
  for(let n=0;n<3;n++){
   const index=new Index(options);engines.push(index);
   for(let i=0;i<7;i++)index.add(100+n*7+i,`common 珊瑚 小麦 seed 规则 scope_${n}_${i}`);
   const entries:Record<string,unknown[]>={};await index.export((k,v)=>{entries[k]=JSON.parse(v) as unknown[];});originals.push(entries);
  }
  const inputs=originals.map(e=>encodeSearchEntries(e,4));const before=JSON.stringify(inputs);
  const result=encodeLanguageSearchShards(inputs);assert.equal(result.shards.length,3);assert.equal(new Set(result.terms).size,result.terms.length);assert.equal(JSON.stringify(inputs),before);
  for(const [n,wire] of result.shards.entries()){
   const restored=decodeSearchEntries(wire.entries,wire.sparseMaps,5,wire.scoreMasks,wire.postingDeltas,wire.columnarMaps,wire.termReferences,result.terms,wire.postingBases);
   assert.equal(JSON.stringify(restored),JSON.stringify(originals[n]));
   const loaded=new Index(options);for(const [key,value] of Object.entries(restored))loaded.import(key,JSON.stringify(value));
   for(const q of ['common','珊瑚','瑚','小麦','seed','scope_1_3','missing'])assert.deepEqual(loaded.search(q,{limit:30}),engines[n]!.search(q,{limit:30}));
  }
  assert.deepEqual(encodeLanguageSearchShards(inputs),result,'same complete inputs reproduce exact dictionary and shards');
 }
 assert.deepEqual(encodeLanguageSearchShards([]),{terms:[],shards:[]});
});
