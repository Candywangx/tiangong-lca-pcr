/** Node-only encoding and bounded verification of the v10 physical transport. */
import {brotliCompressSync, brotliDecompressSync, constants} from 'node:zlib';
import {createHash} from 'node:crypto';
import {SEARCH_RAW_LIMIT} from '../lib/search-pack.ts';
export function encodeBrotliSearchPack(payload:string, innerVersion:7|8|9):string {
  const bytes=Buffer.from(payload), inner=JSON.parse(payload) as {sourceCommit:string;language:string;firstLogicalShard:number};
  if(bytes.length>SEARCH_RAW_LIMIT)throw new Error('Search inner pack exceeds capacity.');
  const compressed=brotliCompressSync(bytes,{params:{[constants.BROTLI_PARAM_QUALITY]:11,[constants.BROTLI_PARAM_LGWIN]:22}});
  return JSON.stringify({schemaVersion:6,encoding:'v4-brotli-base64',sourceCommit:inner.sourceCommit,language:inner.language,firstLogicalShard:inner.firstLogicalShard,innerVersion,innerBytes:bytes.length,innerSha256:'sha256:'+createHash('sha256').update(bytes).digest('hex'),data:compressed.toString('base64')});
}
export function decodeBrotliSearchPack(bytes:Uint8Array, expected:number):Uint8Array {
  if(!Number.isSafeInteger(expected)||expected<1||expected>SEARCH_RAW_LIMIT)throw new Error('Invalid search decompression bound.');
  const decoded=brotliDecompressSync(bytes,{maxOutputLength:expected,info:true}) as unknown as {buffer:Buffer;engine:{bytesWritten:number}};
  if(decoded.buffer.length!==expected||decoded.engine.bytesWritten!==bytes.length)throw new Error('Invalid compressed search length.');
  return decoded.buffer;
}
