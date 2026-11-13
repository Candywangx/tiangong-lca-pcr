import test from 'node:test';
import assert from 'node:assert/strict';
import {encodeSearchChannel,decodeSearchChannel} from '../lib/search-arithmetic.ts';
const decode=(value:unknown,remaining=20_000_000)=>decodeSearchChannel(value,{remaining});
test('arithmetic channel roundtrips exact VLQ spelling, empty maps, resets and adaptive rescaling',()=>{
 const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
 let seed=37;const random=Array.from({length:40000},()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return alphabet[seed>>>26];}).join('');
 for(const strings of [[],[''],['','','A',''],[alphabet,random,'A'.repeat(20000),random,alphabet.split('').reverse().join('')]]){
  const original=[...strings],packed=encodeSearchChannel(strings);
  assert.deepEqual(decode(packed),original);assert.deepEqual(strings,original);assert.deepEqual(encodeSearchChannel(strings),packed);
 }
});
test('arithmetic channels reject invalid alphabets, padding, truncation and expansion before allocation',()=>{
 const valid=encodeSearchChannel(['AAABBBCCCCDDDDD','/+/+']);
 assert.throws(()=>encodeSearchChannel(['invalid space']),/Invalid/);
 for(const invalid of [null,{}, {...valid,extra:1},{...valid,lengths:[-1]}, {...valid,lengths:[0.5]}, {...valid,lengths:[20_000_001]}, {...valid,bits:1}, {...valid,bits:valid.bits+8}, {...valid,data:valid.data+'AAAA'}, {...valid,data:valid.data.slice(0,-4)}, {...valid,data:'!bad'}, {...valid,bits:valid.bits-1}])assert.throws(()=>decode(invalid),/Invalid/);
 assert.throws(()=>decode(valid,1),/Invalid/);
 const budget={remaining:100};decodeSearchChannel(valid,budget);assert.equal(budget.remaining,100-19-2);
 assert.throws(()=>decode({...valid,data:valid.data.replace(/^./,c=>c==='A'?'B':'A')}),/Invalid/);
});
