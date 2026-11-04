/** Keep reserved historical entry points separate from current reading-page owners. */
export function canonicalReadingParts<T extends {slug:string}>(parts:readonly T[],url:(slug:string)=>string,reserved:{has(url:string):boolean}):T[] {
  const result=parts.map((part,index)=>{
    if(index===0||!reserved.has(url(part.slug)))return part;
    const slug=part.slug+'-current';
    if(reserved.has(url(slug)))throw new Error('Current reading destination is also a reserved historical route.');
    return {...part,slug};
  });
  const urls=result.slice(1).map(part=>url(part.slug));
  if(new Set(urls).size!==urls.length)throw new Error('Current reading destinations contain a duplicate route.');
  return result;
}
