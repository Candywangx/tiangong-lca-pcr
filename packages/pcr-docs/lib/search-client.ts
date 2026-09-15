"use client";
import type { SearchResult } from "./types";
let worker: Worker | undefined;
let locale: string | undefined;
let sequence = 0;
const pending = new Map<
  number,
  {
    resolve(value: SearchResult[]): void;
    reject(reason: Error): void;
    cleanup(): void;
  }
>();
function reset(reason: Error) {
  worker?.terminate();
  worker = undefined;
  for (const request of pending.values()) {
    request.cleanup();
    request.reject(reason);
  }
  pending.clear();
}
/** Lazy per-language full-text index; parsing and search stay off the UI thread. */
export function searchDocuments(
  query: string,
  language: string,
  signal?: AbortSignal,
): Promise<SearchResult[]> {
  if (!query.trim()) return Promise.resolve([]);
  if (signal?.aborted)
    return Promise.reject(new DOMException("Search superseded.", "AbortError"));
  if (worker && locale !== language)
    reset(new DOMException("Search language changed.", "AbortError"));
  if (!worker) {
    locale = language;
    worker = new Worker("/generated/search-worker.mjs", {
      type: "module",
    });
    worker.onmessage = ({
      data,
    }: MessageEvent<{
      id: number;
      results?: SearchResult[];
      error?: string;
    }>) => {
      const request = pending.get(data.id);
      if (!request) return;
      pending.delete(data.id);
      request.cleanup();
      if (data.error) request.reject(new Error(data.error));
      else request.resolve(data.results ?? []);
    };
    worker.onerror = () => reset(new Error("Search worker is unavailable."));
  }
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    const onAbort = () => {
      pending.delete(id);
      reject(new DOMException("Search superseded.", "AbortError"));
    };
    pending.set(id, {
      resolve,
      reject,
      cleanup: () => signal?.removeEventListener("abort", onAbort),
    });
    signal?.addEventListener("abort", onAbort, { once: true });
    worker!.postMessage({ id, query, language });
  });
}
