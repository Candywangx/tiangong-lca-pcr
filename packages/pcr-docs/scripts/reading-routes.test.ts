import test from 'node:test';
import assert from 'node:assert/strict';
import {canonicalReadingParts} from './reading-routes.ts';
const url=(slug:string)=>'/en/docs/pcr/domain/category/guitar/chapters/'+slug+'/';
test('reserved historical sources cannot become current reading pages after repartition',()=>{
  const parts=[{slug:'root',nodes:['first'],anchors:['opening']},{slug:'service',nodes:['complete service'],anchors:['service','collection']}];
  const original=JSON.stringify(parts),result=canonicalReadingParts(parts,url,new Set([url('service')]));
  assert.equal(result[1]!.slug,'service-current');
  assert.equal(JSON.stringify(parts),original,'Logical/source part metadata is not mutated');
  assert.equal(result[1]!.nodes,parts[1]!.nodes,'Complete nodes and their order remain the same objects');
  assert.equal(result[1]!.anchors,parts[1]!.anchors);
  assert.equal(result[0],parts[0]);
  assert.deepEqual(canonicalReadingParts(parts,url,new Set()),parts,'Unreserved current reading routes are unchanged');
});
test('reading route disambiguation fails closed for another reserved or duplicate destination',()=>{
  const parts=[{slug:'root'},{slug:'service'}];
  assert.throws(()=>canonicalReadingParts(parts,url,new Set([url('service'),url('service-current')])),/reserved/u);
  assert.throws(()=>canonicalReadingParts([...parts,{slug:'service-current'}],url,new Set([url('service')])),/duplicate/u);
});
