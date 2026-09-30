import { AsyncLocalStorage } from "node:async_hooks";
import path from "node:path";

// Scope a storage adapter to one synchronous consumption request. No process-global
// root cache or change to the repository reader's default authority boundary.
const sources = new AsyncLocalStorage();
export function withPcrSource(root, source, callback) {
  return sources.run({ root: path.resolve(root), source }, callback);
}
export function pcrSource(root) {
  const current = sources.getStore();
  return current && path.resolve(root) === current.root ? current.source : null;
}
