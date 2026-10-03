import assert from 'node:assert/strict';
import { GoalHarnessError } from '../errors.ts';
import { field, record, text } from '../domain.ts';
import type { UnknownRecord } from '../domain.ts';
export function item<T>(value:T|undefined|null):T {assert.ok(value !== undefined && value !== null);return value;}
export function goalError(value:unknown):GoalHarnessError {assert.ok(value instanceof GoalHarnessError);return value;}
export function object(value:unknown):UnknownRecord {return record(value);}
export function string(value:unknown):string {return text(value);}
export function errorField(value:unknown,key:string):unknown {return field(value,key);}
