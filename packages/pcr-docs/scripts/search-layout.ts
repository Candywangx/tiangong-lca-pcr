/** Node-only physical layout selection; logical search wires and browser readers are unchanged. */
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {isUnknownRecord} from '../../pcr-core/src/types.ts';
import {packSearchShards,SEARCH_PACK_MEMBERS,SEARCH_RAW_LIMIT,type SearchManifestV7,type SearchPhysicalFile} from '../lib/search-pack.ts';
interface Transport {payload:string;bytes:number;gzipBytes:number;sha256:string}
export interface SearchLayout {manifest:SearchManifestV7;manifestText:string;files:{descriptor:SearchPhysicalFile;payload:string}[];rawBytes:number;gzipBytes:number}
const hash=(text:string)=>'sha256:'+createHash('sha256').update(text).digest('hex');
const gzip=(text:string)=>gzipSync(text,{level:9}).length;
const transport=(payload:string):Transport=>({payload,bytes:Buffer.byteLength(payload),gzipBytes:gzip(payload),sha256:hash(payload)});
/** Only physical JSON string spelling changes; dictionary values/order remain exact. */
function escapedDictionary(payload:string):string{
  const parsed:unknown=JSON.parse(payload);
  if(!isUnknownRecord(parsed)||!Array.isArray(parsed.dictionary)||!parsed.dictionary.every(v=>typeof v==='string'))throw Error('Invalid search dictionary');
  const dictionary=JSON.stringify(parsed.dictionary),key='"dictionary":'+dictionary,at=payload.indexOf(key);
  if(at<0)throw Error('Missing physical search dictionary');
  const escaped=dictionary.replace(/[\u007f-\uffff]/g,c=>'\\u'+c.charCodeAt(0).toString(16).padStart(4,'0'));
  return payload.slice(0,at)+'"dictionary":'+escaped+payload.slice(at+key.length);
}
/** Keep a bounded beam near balanced cuts plus the complete original greedy layout. */
export function planSearchPacks(wires:readonly string[],sourceCommit:string,language:string):SearchLayout{
  if(!/^[a-f0-9]{40}$/.test(sourceCommit))throw Error('Invalid search source commit');
  const identities=wires.map(wire=>{
    const value:unknown=JSON.parse(wire);
    if(!isUnknownRecord(value)||!Array.isArray(value.records))throw Error('Invalid logical search records');
    return {wireBytes:Buffer.byteLength(wire),wireSha256:hash(wire),records:value.records.length};
  });
  const segments=new Map<string,{native:Transport;best:Transport}>();
  function segment(start:number,end:number){
    const key=start+':'+end,known=segments.get(key);if(known)return known;
    const native=transport(packSearchShards(wires.slice(start,end),sourceCommit,language,start,7));
    const escaped=escapedDictionary(native.payload),alternative=escaped===native.payload?native:transport(escaped);
    const best=alternative.bytes<=SEARCH_RAW_LIMIT&&alternative.gzipBytes<native.gzipBytes?alternative:native;
    const result={native,best};segments.set(key,result);return result;
  }
  function layout(ends:readonly number[],native=false):SearchLayout{
    let start=0;
    const files=ends.map((end,index)=>{
      const packed=segment(start,end)[native?'native':'best'],logicalShards=identities.slice(start,end);
      const descriptor:SearchPhysicalFile={url:`/generated/search/${encodeURIComponent(language)}/pack-${String(index).padStart(3,'0')}.json`,bytes:packed.bytes,gzipBytes:packed.gzipBytes,sha256:packed.sha256,firstLogicalShard:start,logicalShardCount:end-start,records:logicalShards.reduce((sum,v)=>sum+v.records,0),logicalShards};
      start=end;return {payload:packed.payload,descriptor};
    });
    const manifest:SearchManifestV7={schemaVersion:7,sourceCommit,language,logicalShardCount:wires.length,files:files.map(f=>f.descriptor)},manifestText=JSON.stringify(manifest);
    return {manifest,manifestText,files,rawBytes:Buffer.byteLength(manifestText)+files.reduce((n,f)=>n+f.descriptor.bytes,0),gzipBytes:gzip(manifestText)+files.reduce((n,f)=>n+f.descriptor.gzipBytes,0)};
  }
  const count=Math.ceil(wires.length/SEARCH_PACK_MEMBERS),greedy=Array.from({length:count},(_,i)=>Math.min((i+1)*SEARCH_PACK_MEMBERS,wires.length));
  const candidates=[layout(greedy,true),layout(greedy)];
  type Path={ends:number[];cost:number};
  let paths:Path[]=[{ends:[],cost:0}];
  for(let cut=1;cut<count;cut++){
    const middle=Math.floor(cut*wires.length/count),byEnd=new Map<number,Path[]>();
    for(const path of paths)for(const end of [middle-1,middle,middle+1]){
      const start=path.ends.at(-1)??0,remaining=count-cut;
      if(end<=start||end-start>SEARCH_PACK_MEMBERS||wires.length-end<remaining||wires.length-end>remaining*SEARCH_PACK_MEMBERS)continue;
      const part=segment(start,end).best;if(part.bytes>SEARCH_RAW_LIMIT)continue;
      const bucket=byEnd.get(end)??[];bucket.push({ends:[...path.ends,end],cost:path.cost+part.gzipBytes});byEnd.set(end,bucket);
    }
    paths=[...byEnd.values()].flatMap(bucket=>bucket.sort((a,b)=>a.cost-b.cost||a.ends.join(',').localeCompare(b.ends.join(','))).slice(0,16));
  }
  for(const path of paths){const start=path.ends.at(-1)??0;if(wires.length>start&&wires.length-start<=SEARCH_PACK_MEMBERS)candidates.push(layout([...path.ends,wires.length]));}
  // The unchanged raw budget wins before gzip cost; the original layout always remains available.
  const bounded=candidates.filter(candidate=>candidate.files.every(file=>file.descriptor.bytes<=SEARCH_RAW_LIMIT&&file.descriptor.logicalShards.reduce((sum,wire)=>sum+wire.wireBytes,0)<=SEARCH_RAW_LIMIT));
  if(!bounded.length)throw Error('No search layout satisfies the physical and restored-wire limits');
  bounded.sort((a,b)=>Number(a.rawBytes>SEARCH_RAW_LIMIT)-Number(b.rawBytes>SEARCH_RAW_LIMIT)||a.gzipBytes-b.gzipBytes||a.rawBytes-b.rawBytes||(a.manifestText<b.manifestText?-1:a.manifestText>b.manifestText?1:0));
  return bounded[0]!;
}
