import { record, records, strings, text } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";

export interface UuidClaim extends UnknownRecord { uuid:string; hybrid_search_receipt_id?:string|null }
export interface RejectedUuidClaim extends UnknownRecord {uuid:string;receipt_id?:string|null}
export interface SourceClaim extends UnknownRecord {source_id:string}
export interface UnresolvedClaim extends UnknownRecord {hybrid_search_receipt_ids?:string[]}
export interface EvidenceReport extends UnknownRecord {
 uuid_audits?:UuidClaim[]; rejected_uuid_candidates?:RejectedUuidClaim[];
 sources?:SourceClaim[]; hybrid_search_receipt_ids?:string[];
 inventory?:UnknownRecord & {unresolved?:UnresolvedClaim[]};
}
function optionalId(value:unknown):string|null|undefined {
 if(value === null || value === undefined) return value;
 return text(value);
}
export function evidenceReport(value:unknown):EvidenceReport {
 const r=record(value);const uuid=r.uuid_audits, rejected=r.rejected_uuid_candidates,sources=r.sources,ids=r.hybrid_search_receipt_ids;
 const inventory=r.inventory == null ? undefined : record(r.inventory);
 return {...r,
 ...(uuid == null ? {} : {uuid_audits:records(uuid).map(c=>{const id=optionalId(c.hybrid_search_receipt_id);return {...c,uuid:text(c.uuid),...(id === undefined ? {} : {hybrid_search_receipt_id:id})};})}),
 ...(rejected == null ? {} : {rejected_uuid_candidates:records(rejected).map(c=>{const id=optionalId(c.receipt_id);return {...c,uuid:text(c.uuid),...(id === undefined ? {} : {receipt_id:id})};})}),
 ...(sources == null ? {} : {sources:records(sources).map(c=>({...c,source_id:text(c.source_id)}))}),
 ...(ids == null ? {} : {hybrid_search_receipt_ids:strings(ids)}),
 ...(inventory === undefined ? {} : {inventory:{...inventory,...(inventory.unresolved == null ? {} : {unresolved:records(inventory.unresolved).map(c=>({...c,...(c.hybrid_search_receipt_ids == null ? {} : {hybrid_search_receipt_ids:strings(c.hybrid_search_receipt_ids)})}))})}}),
 };
}
export function nested(value:unknown,...keys:string[]):unknown {let node=value;for(const key of keys) {if(!node || (typeof node !== "object" && typeof node !== "function"))return undefined;node=Reflect.get(node,key);}return node;}
