/** Lazy Worker-only Brotli decoder; every allocation is bounded by the authenticated envelope. */
import {SEARCH_RAW_LIMIT} from "./search-pack.ts";
type Decoder = typeof import('brotli-dec-wasm/web');
let pending:Promise<Decoder>|undefined;
async function decoder():Promise<Decoder> {
  if(!pending)pending=(async()=>{
    const url='./brotli-dec.mjs';
    const module=await import(url) as Decoder;
    const response=await fetch(new URL('./brotli_dec_wasm_bg.wasm',import.meta.url));
    if(!response.ok)throw new Error('Search decoder is unavailable.');
    await module.default({module_or_path:await response.arrayBuffer()});
    return module;
  })().catch(error=>{pending=undefined;throw error;});
  return pending;
}
export async function decodeBrotliSearchPack(input:Uint8Array, expected:number):Promise<Uint8Array> {
  if(!Number.isSafeInteger(expected)||expected<1||expected>SEARCH_RAW_LIMIT||input.length>SEARCH_RAW_LIMIT)throw new Error('Invalid search decompression bound.');
  const api=await decoder(),stream=new api.DecompressStream(),output=new Uint8Array(expected);
  let read=0,written=0;
  try {
    while(true){
      const result=stream.decompress(input.subarray(read),Math.min(65536,expected-written+1));
      try {
        const bytes=result.buf,consumed=result.input_offset,code=result.code;
        if(!Number.isSafeInteger(consumed)||consumed<0||consumed>input.length-read||bytes.length>expected-written)throw new Error('Invalid compressed search length.');
        read+=consumed;output.set(bytes,written);written+=bytes.length;
        if(code===api.BrotliStreamResultCode.ResultSuccess){
          if(read!==input.length||written!==expected)throw new Error('Invalid compressed search length.');
          return output;
        }
        if(code!==api.BrotliStreamResultCode.NeedsMoreOutput||!consumed&&!bytes.length)throw new Error('Incomplete compressed search pack.');
      }finally{result.free();}
    }
  }finally{stream.free();}
}
