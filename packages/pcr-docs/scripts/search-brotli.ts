/** Node-only encoding and bounded verification of the v10 physical transport. */
import {brotliCompressSync, brotliDecompressSync, constants} from 'node:zlib';
import {createHash} from 'node:crypto';
import {encodeSearchChannel, SearchChannelCapacityError} from '../lib/search-arithmetic.ts';
import {SEARCH_RAW_LIMIT} from '../lib/search-pack.ts';
export function encodeBrotliSearchPack(payload:string, innerVersion:7|8|9, context = false):string {
  const bytes=Buffer.from(payload), inner=JSON.parse(payload) as {sourceCommit:string;language:string;firstLogicalShard:number};
  if(bytes.length>SEARCH_RAW_LIMIT)throw new Error('Search inner pack exceeds capacity.');
  let coded = bytes;
  if (context) {
    const pack = JSON.parse(payload) as {numericColumns: string[][]};
    if (innerVersion !== 8 || pack.numericColumns.length !== 5) throw Error('Expected a canonical v8 search pack.');
    const count = pack.numericColumns.reduce((n, column) => column.reduce((m, text) => m + text.length + 1, n), 0);
    if (count > SEARCH_RAW_LIMIT) throw new SearchChannelCapacityError();
    const numericColumns = pack.numericColumns.map((column, i) => i === 4 ? column : encodeSearchChannel(column, i < 2 ? 2 : 1));
    coded = Buffer.from(JSON.stringify({...pack, numericColumns}));
    if (coded.length > SEARCH_RAW_LIMIT) throw new SearchChannelCapacityError();
  }
  const compressed=brotliCompressSync(coded,{params:{[constants.BROTLI_PARAM_QUALITY]:11,[constants.BROTLI_PARAM_LGWIN]:22}});
  return JSON.stringify({schemaVersion:context?7:6,encoding:context?'v8-context-brotli-base64':'v4-brotli-base64',sourceCommit:inner.sourceCommit,language:inner.language,firstLogicalShard:inner.firstLogicalShard,innerVersion,...(context?{codedBytes:coded.length}:{}),innerBytes:bytes.length,innerSha256:'sha256:'+createHash('sha256').update(bytes).digest('hex'),data:compressed.toString('base64')});
}
export function decodeBrotliSearchPack(bytes:Uint8Array, expected:number):Uint8Array {
  if(!Number.isSafeInteger(expected)||expected<1||expected>SEARCH_RAW_LIMIT)throw new Error('Invalid search decompression bound.');
  const decoded=brotliDecompressSync(bytes,{maxOutputLength:expected,info:true}) as unknown as {buffer:Buffer;engine:{bytesWritten:number}};
  if(decoded.buffer.length!==expected||decoded.engine.bytesWritten!==bytes.length)throw new Error('Invalid compressed search length.');
  return decoded.buffer;
}
