import { rewriteChapterRequest } from './packages/pcr-docs/lib/chapter-compatibility.ts';
interface EdgeOneContext {
  request: Request;
  rewrite(url: string): Response | Promise<Response>;
  next(): Response | Promise<Response>;
}
/** Provider entry point: only the reviewed published document aliases are rewritten. */
export function middleware(context: EdgeOneContext): Response | Promise<Response> {
  const target = rewriteChapterRequest(context.request);
  return target === undefined ? context.next() : context.rewrite(target);
}
