import {encodeBrotliSearchPack} from './search-brotli.ts';
import {SearchChannelCapacityError} from '../lib/search-arithmetic.ts';
/** Node-only physical layout selection; logical search wires and browser readers are unchanged. */
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {isUnknownRecord} from '../../pcr-core/src/types.ts';
import {packSearchShards,SEARCH_PACK_MEMBERS,SEARCH_COMPACT_PACK_MEMBERS,SEARCH_RAW_LIMIT,SEARCH_GZIP_LIMIT,type SearchManifestV7,type SearchManifestV8,type SearchManifestV9,type SearchManifestV10,type SearchManifestV11,type SearchManifestV12,type SearchPhysicalFile} from '../lib/search-pack.ts';
interface Transport {payload:string;bytes:number;gzipBytes:number;sha256:string}
export interface SearchLayout {manifest:SearchManifestV7|SearchManifestV8|SearchManifestV9|SearchManifestV10|SearchManifestV11|SearchManifestV12;manifestText:string;files:{descriptor:SearchPhysicalFile;payload:string}[];rawBytes:number;gzipBytes:number}
const hash=(text:string)=>'sha256:'+createHash('sha256').update(text).digest('hex');
const gzip=(text:string)=>gzipSync(text,{level:9}).length;
const transport=(payload:string):Transport=>({payload,bytes:Buffer.byteLength(payload),gzipBytes:gzip(payload),sha256:hash(payload)});
/** Only physical JSON string spelling changes; dictionary values/order remain exact. */
export function escapeSearchDictionary(payload:string):string{
  const parsed:unknown=JSON.parse(payload);
  if(!isUnknownRecord(parsed)||!Array.isArray(parsed.dictionary)||!parsed.dictionary.every(v=>typeof v==='string'))throw Error('Invalid search dictionary');
  const dictionary=JSON.stringify(parsed.dictionary),key='"dictionary":'+dictionary,at=payload.indexOf(key);
  if(at<0)throw Error('Missing physical search dictionary');
  const escaped=dictionary.replace(/[\u007f-\uffff]/g,c=>'\\u'+c.charCodeAt(0).toString(16).padStart(4,'0'));
  return payload.slice(0,at)+'"dictionary":'+escaped+payload.slice(at+key.length);
}
/** Keep a bounded beam near balanced cuts plus the complete original greedy layout. */
function planVersion(wires:readonly string[],sourceCommit:string,language:string,version:7|8|9):SearchLayout|undefined{
  if(!/^[a-f0-9]{40}$/.test(sourceCommit))throw Error('Invalid search source commit');
  const identities=wires.map(wire=>{
    const value:unknown=JSON.parse(wire);
    if(!isUnknownRecord(value)||!Array.isArray(value.records))throw Error('Invalid logical search records');
    return {wireBytes:Buffer.byteLength(wire),wireSha256:hash(wire),records:value.records.length};
  });
  const segments=new Map<string,{native:Transport;best:Transport}>();
  function segment(start:number,end:number){
    const key=start+':'+end,known=segments.get(key);if(known)return known;
    const native=transport(packSearchShards(wires.slice(start,end),sourceCommit,language,start,version));
    const escaped=escapeSearchDictionary(native.payload),alternative=escaped===native.payload?native:transport(escaped);
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
    const manifest:SearchManifestV7|SearchManifestV8|SearchManifestV9={schemaVersion:version,sourceCommit,language,logicalShardCount:wires.length,files:files.map(f=>f.descriptor)},manifestText=JSON.stringify(manifest);
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
  bounded.sort((a,b)=>Number(a.rawBytes>SEARCH_RAW_LIMIT)-Number(b.rawBytes>SEARCH_RAW_LIMIT)||a.gzipBytes-b.gzipBytes||a.rawBytes-b.rawBytes||(a.manifestText<b.manifestText?-1:a.manifestText>b.manifestText?1:0));
  return bounded[0];
}
function envelopeLayout(version: 10 | 11 | 12, baseline: SearchLayout, files: SearchLayout['files']): SearchLayout {
  const manifest = {...baseline.manifest, schemaVersion: version, files: files.map(file => file.descriptor)};
  const manifestText = JSON.stringify(manifest);
  return {manifest, manifestText, files,
    rawBytes: Buffer.byteLength(manifestText) + files.reduce((n, f) => n + f.descriptor.bytes, 0),
    gzipBytes: gzip(manifestText) + files.reduce((n, f) => n + f.descriptor.gzipBytes, 0)};
}
/** Try the context profile only when the older transports exceed the language budget. */
function contextLayout(wires: readonly string[], baseline: SearchLayout, ends: readonly number[], compact = false): SearchLayout | undefined {
  const {sourceCommit, language} = baseline.manifest;
  const identities = baseline.manifest.files.flatMap(file => file.logicalShards);
  const files: SearchLayout['files'] = [];
  let start = 0;
  for (const end of ends) {
    const group = wires.slice(start, end);
    const logicalShards = identities.slice(start, start + group.length);
    if (logicalShards.reduce((sum, shard) => sum + shard.wireBytes, 0) > SEARCH_RAW_LIMIT) return;
    const inner = packSearchShards(group, sourceCommit, language, start, 8, compact);
    if (Buffer.byteLength(inner) > SEARCH_RAW_LIMIT) return;
    let payload: string;
    try { payload = encodeBrotliSearchPack(inner, 8, true, compact); }
    catch (error) { if (error instanceof SearchChannelCapacityError) return; throw error; }
    const packed = transport(payload);
    if (packed.bytes > SEARCH_RAW_LIMIT) return;
    files.push({payload, descriptor: {
      url: `/generated/search/${encodeURIComponent(language)}/pack-${String(files.length).padStart(3, '0')}.json`,
      bytes: packed.bytes, gzipBytes: packed.gzipBytes, sha256: packed.sha256,
      firstLogicalShard: start, logicalShardCount: group.length, logicalShards,
      records: logicalShards.reduce((sum, shard) => sum + shard.records, 0),
    }});
    start = end;
  }
  return envelopeLayout(compact ? 12 : 11, baseline, files);
}
/** Compare complete v7/v8/v9 manifests; an eligible original v7 layout remains available. */
export function planSearchPacks(wires:readonly string[],sourceCommit:string,language:string):SearchLayout{
  const candidates=([7,8,9] as const).map(version=>{try{return planVersion(wires,sourceCommit,language,version);}catch(error){if(version===9&&error instanceof SearchChannelCapacityError)return undefined;throw error;}}).filter((candidate):candidate is SearchLayout=>candidate!==undefined);
  if(!candidates.length)throw Error('No search layout satisfies the physical and restored-wire limits');
  candidates.sort((a,b)=>Number(a.rawBytes>SEARCH_RAW_LIMIT)-Number(b.rawBytes>SEARCH_RAW_LIMIT)||a.gzipBytes-b.gzipBytes||a.rawBytes-b.rawBytes||(a.manifestText<b.manifestText?-1:a.manifestText>b.manifestText?1:0));
  const original=candidates[0]!;
  // Compress only the chosen original layout: no change to buckets, ownership or logical bytes.
  const files=original.files.map(file=>{
    const packed=transport(encodeBrotliSearchPack(file.payload,original.manifest.schemaVersion as 7|8|9));
    return {payload:packed.payload,descriptor:{...file.descriptor,bytes:packed.bytes,gzipBytes:packed.gzipBytes,sha256:packed.sha256}};
  });
  const candidate = envelopeLayout(10, original, files);
  const baseline = candidate.rawBytes <= SEARCH_RAW_LIMIT && candidate.gzipBytes < original.gzipBytes ? candidate : original;
  if (baseline.rawBytes <= SEARCH_RAW_LIMIT && baseline.gzipBytes <= SEARCH_GZIP_LIMIT) return baseline;
  const endsFor = (width: number) => Array.from({length: Math.ceil(wires.length / width)}, (_, i) =>
    Math.min((i + 1) * width, wires.length));
  let selected = baseline;
  const consider = (candidate: SearchLayout | undefined) => {
    if (candidate && candidate.rawBytes <= SEARCH_RAW_LIMIT &&
        (selected.rawBytes > SEARCH_RAW_LIMIT || candidate.gzipBytes < selected.gzipBytes)) selected = candidate;
  };
  consider(contextLayout(wires, baseline, endsFor(SEARCH_PACK_MEMBERS)));
  if (selected.rawBytes <= SEARCH_RAW_LIMIT && selected.gzipBytes <= SEARCH_GZIP_LIMIT) return selected;
  // Larger physical groups still charge each exact restored wire against the same byte limit.
  // Try a bounded set of cuts to account for variation in logical shard sizes and vocabulary.
  const compactCount = Math.ceil(wires.length / SEARCH_COMPACT_PACK_MEMBERS);
  const cuts = [endsFor(48), endsFor(SEARCH_COMPACT_PACK_MEMBERS),
    Array.from({length:compactCount}, (_, i) => Math.floor((i + 1) * wires.length / compactCount))];
  const seen = new Set<string>();
  for (const ends of cuts) {
    const key = ends.join(",");
    if (seen.has(key)) continue;
    seen.add(key);
    consider(contextLayout(wires, baseline, ends, true));
  }
  return selected;
}
