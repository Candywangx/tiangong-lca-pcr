import { field, record, text } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";

// Historical Viewer modules are intentional external runtime boundaries for the
// Harness tests. Every value is checked before exposing the narrow API in use.
const publisher:unknown=await import(new URL("../../packages/pcr-viewer/scripts/build-viewer-data.mjs",import.meta.url).href);
const snapshotStore:unknown=await import(new URL("../../packages/pcr-viewer/scripts/snapshot-store.mjs",import.meta.url).href);
export const VIEWER_INCREMENTAL_GENERATOR_VERSION=text(field(publisher,"VIEWER_INCREMENTAL_GENERATOR_VERSION"));
export interface FixtureViewerManifest extends UnknownRecord {refs:UnknownRecord;capture:UnknownRecord;source:UnknownRecord}
export class ViewerSnapshotStore {
  private readonly instance:unknown;
  constructor(options:UnknownRecord) {
    const constructor=field(snapshotStore,"ViewerSnapshotStore");
    if(typeof constructor!=="function")throw new TypeError("Missing historical Viewer store constructor");
    const instance:unknown=Reflect.construct(constructor,[options]);this.instance=instance;
  }
  private call(name:string,args:unknown[]):unknown {
    const method=field(this.instance,name);if(typeof method!=="function")throw new TypeError(`Missing historical Viewer store method ${name}`);
    const result:unknown=Reflect.apply(method,this.instance,args);return result;
  }
  recover(options:UnknownRecord):UnknownRecord {return record(this.call("recover",[options]));}
  publish(options:UnknownRecord):UnknownRecord {return record(this.call("publish",[options]));}
  readActive():UnknownRecord {return record(this.call("readActive",[]));}
  readManifest(reference:unknown):FixtureViewerManifest {
    const value=record(this.call("readManifest",[reference]));
    return {...value,refs:record(value.refs),capture:record(value.capture),source:record(value.source)};
  }
  readObject(reference:unknown):UnknownRecord & {entry:UnknownRecord} {
    const value=record(this.call("readObject",[reference]));return {...value,entry:record(value.entry)};
  }
  readRoute(reference:unknown):UnknownRecord {return record(this.call("readRoute",[reference]));}
}
