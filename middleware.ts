/// <reference path="./packages/pcr-docs/lib/navigation-binding.d.ts" />
import { rewriteChapterRequest } from './packages/pcr-docs/lib/chapter-compatibility.ts';
import {createNavigationHandler,treeRequestPath} from './packages/pcr-docs/lib/navigation-trees.ts';
interface EdgeOneContext {
  request: Request;
  rewrite(url: string): Response | Promise<Response>;
  next(): Response | Promise<Response>;
}
function chapters(context:EdgeOneContext):Response|Promise<Response>{
  const target = rewriteChapterRequest(context.request);
  return target === undefined ? context.next() : context.rewrite(target);
}
/** The sealed server and provider use this same handler, including its returned Response. */
export function createProviderMiddleware(binding:unknown|undefined,fetcher:typeof fetch=fetch):(context:EdgeOneContext)=>Promise<Response>{
 const navigation=binding===undefined?undefined:createNavigationHandler(binding,fetcher);
 return async context=>(navigation?await navigation(context.request):undefined)??chapters(context);
}
let bound:Promise<ReturnType<typeof createProviderMiddleware>>|undefined;
/** Literal data import is compiled from the verified export, never fetched as a latest pin. */
export function middleware(context: EdgeOneContext): Response | Promise<Response> {
 if(!treeRequestPath(new URL(context.request.url).pathname)||!['GET','HEAD'].includes(context.request.method))return chapters(context);
 bound??=import('./packages/pcr-docs/out/generated/navigation-binding.json',{with:{type:'json'}}).then(module=>createProviderMiddleware(module.default)).catch(error=>{bound=undefined;throw error;});
 return bound.then(handler=>handler(context)).catch(()=>new Response('Navigation data unavailable',{status:503,headers:{'cache-control':'no-store','content-type':'text/plain; charset=utf-8','x-content-type-options':'nosniff'}}));
}
