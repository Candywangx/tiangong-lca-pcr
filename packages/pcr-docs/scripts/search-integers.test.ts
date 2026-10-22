import assert from 'node:assert/strict';
import test from 'node:test';
import {Index} from 'flexsearch';
import {searchTerms} from '../lib/search-terms.ts';
import {packSearchIntegers,unpackSearchIntegers,createSearchTermDictionary,encodeSearchEntries,decodeSearchEntries} from '../lib/search-wire.ts';

test('VLQ preserves order, repeats, zero and the full signed safe-integer range', () => {
  const values=[0,1,-1,15,-15,16,-16,31,-31,32,-32,2**31,-(2**31),2**32,-(2**32),2**52,-(2**52),Number.MAX_SAFE_INTEGER,-Number.MAX_SAFE_INTEGER,0,0];
  assert.equal(packSearchIntegers([0,1,-1,15,-15,16,-16]),'ACDefgBhB');
  assert.deepEqual(unpackSearchIntegers(packSearchIntegers(values)),values);
  assert.deepEqual(unpackSearchIntegers(''),[]);
  assert.equal(packSearchIntegers([]),'');
  let seed=0x91bad123;
  const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/2**32;};
  const generated=Array.from({length:10_000},()=>Math.floor(random()*Number.MAX_SAFE_INTEGER)*(random()<0.5?-1:1));
  assert.deepEqual(unpackSearchIntegers(packSearchIntegers(generated)),generated);
});

test('VLQ rejects malformed, truncated, overlong, negative-zero and overflowing encodings', () => {
  for(const value of [null,undefined,[],{},7,'B','g','gA','hA','!','文','A A','AA=','g!','+'.concat('/'.repeat(9),'Q'),'/'.repeat(20)])
    assert.throws(()=>unpackSearchIntegers(value),/Invalid serialized search data/);
  for(const value of [NaN,Infinity,-Infinity,0.5,Number.MAX_SAFE_INTEGER+1])
    assert.throws(()=>packSearchIntegers([value]),/Invalid serialized search data/);
  assert.throws(()=>packSearchIntegers(new Array<number>(1)),/Invalid serialized search data/);
});

test('compact dictionary columns retain every native slot, posting, string ID and fallback', () => {
  const names=['','__proto__','constructor','空 格','😀',...Array.from({length:500},(_,i)=>`word-${i}`)];
  const slots=[null,[],null,null,null,null,null,null,[Number.MAX_SAFE_INTEGER,0,0,17]];
  const original={'1.reg':[0,'__proto__'],'1.map':names.map(term=>[term,slots]),'2.map':[['mixed',[['id',7],null,[],null,null,null,null,null,[9,1]]]],'foreign.map':[null]};
  const before=JSON.stringify(original),dictionary=createSearchTermDictionary([original]);
  const legacy=encodeSearchEntries(original,5,dictionary);
  const wire=JSON.parse(JSON.stringify(encodeSearchEntries(original,5,dictionary,{compactIntegers:true})));
  assert.ok(wire.integerColumns.includes('1.map'));
  assert.equal(typeof wire.entries['1.map'][0],'string');assert.equal(typeof wire.entries['1.map'][1],'string');
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries,wire.sparseMaps,5,true,true,wire.columnarMaps,true,dictionary,true,wire.integerColumns)),before);
  assert.equal(JSON.stringify(decodeSearchEntries(legacy.entries,legacy.sparseMaps,5,true,true,legacy.columnarMaps,true,dictionary,true)),before,'previous v5 stays readable');
  assert.equal(JSON.stringify(original),before,'source arrays are not mutated');
  assert.ok(JSON.stringify(wire).length<JSON.stringify(legacy).length);
  assert.throws(()=>encodeSearchEntries(original,4,undefined,{compactIntegers:true}),/Invalid serialized/);
  assert.throws(()=>encodeSearchEntries(original,5,undefined,{compactIntegers:true}),/Invalid serialized/);
});

test('compact metadata, columns, integer bounds and dictionary membership fail closed', () => {
  const original={'1.map':Array.from({length:100},(_,i)=>[`term-${i}`,[null,null,null,null,null,null,null,null,[i]]])};
  const dictionary=createSearchTermDictionary([original]);
  const wire=encodeSearchEntries(original,5,dictionary,{compactIntegers:true});
  const read=(entries:unknown=wire.entries,metadata:unknown=wire.integerColumns,version:3|4|5=5)=>decodeSearchEntries(entries,wire.sparseMaps,version,true,true,wire.columnarMaps,true,dictionary,true,metadata);
  for(const metadata of [null,false,{},1,['missing.map'],['1.map','1.map']])assert.throws(()=>read(wire.entries,metadata),/Invalid serialized/);
  assert.throws(()=>decodeSearchEntries(wire.entries,wire.sparseMaps,5,true,true,wire.columnarMaps,true,dictionary,true),/Invalid serialized/,'a missing marker never silently imports encoded strings');
  assert.throws(()=>read(wire.entries,wire.integerColumns,4),/Invalid serialized/);
  const columns=wire.entries['1.map']!;
  for(const invalid of [
    [null,columns[1],columns[2]],
    [columns[0],[],columns[2]],
    ['g',columns[1],columns[2]],
    [packSearchIntegers([-1]),packSearchIntegers([4864]),[[1]]],
    [packSearchIntegers([dictionary.length]),packSearchIntegers([4864]),[[1]]],
    [packSearchIntegers([0]),packSearchIntegers([5120]),[[1]]],
    [packSearchIntegers([0]),packSearchIntegers([4864]),[]],
    [packSearchIntegers([0]),'',[[1]]],
    [...columns,'extra'],
  ])assert.throws(()=>read({'1.map':invalid}),/Invalid serialized/);
});

test('compact real multilingual indexes preserve exact engine imports and every ordered query result', async () => {
  for(const language of ['en-US','zh-CN']){
    const options={tokenize:'strict' as const,resolution:9,encode:(value:unknown)=>searchTerms(value,language)};
    const native=new Index(options),loaded=new Index(options);
    const documents=Array.from({length:150},(_,i)=>`${'Wheat 小麦 珊瑚 '.repeat(i%4+1)}pcr_rule_boundary café ${i}`);
    documents.forEach((text,i)=>native.add(i*17,text));
    const entries:Record<string,unknown[]>={};await native.export((key,value)=>{entries[key]=JSON.parse(value);});
    const dictionary=createSearchTermDictionary([entries]);
    const wire=encodeSearchEntries(entries,5,dictionary,{compactIntegers:true});
    const restored=decodeSearchEntries(wire.entries,wire.sparseMaps,5,wire.scoreMasks,wire.postingDeltas,wire.columnarMaps,wire.joinedTerms,dictionary,wire.dictionaryTerms,wire.integerColumns);
    assert.equal(JSON.stringify(restored),JSON.stringify(entries));
    for(const [key,value]of Object.entries(restored))loaded.import(key,JSON.stringify(value));
    for(const query of [...new Set(documents.flatMap(text=>searchTerms(text,language))),'wheat seed','不存在'])assert.deepEqual(loaded.search(query,{limit:30}),native.search(query,{limit:30}),language+': '+query);
  }
});
