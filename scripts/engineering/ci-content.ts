import { lstatSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { checkPcr } from '../../builder/lib/pcr-check.ts';
import { parsePcrMarkdownToStructured, structuredProjectionYaml } from '../../builder/lib/markdown-projection.ts';
import { isReusableContext, verifyCiPlan, type CiPlan } from './ci-plan.ts';
export function validateChangedContent(root: string, plan: CiPlan) {
  const seen = new Set<string>();
  const records = plan.changedPcrs.map(directory => {
    if (!/^library\/pcrs\/[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+$/u.test(directory) || seen.has(directory)) throw new Error('Invalid selected PCR directory.');
    seen.add(directory);
    const location=path.join(root,directory),stat=lstatSync(location,{throwIfNoEntry:false});
    if (!stat) return { directory, status:'removed', measurementChecks:0 };
    if (!stat.isDirectory() || stat.isSymbolicLink()) throw new Error('Selected PCR directory must be regular.');
    const result=checkPcr({root,pcr:directory,workspace:'current'});
    const markdown=readFileSync(path.join(location,'pcr.en-US.md'),'utf8');
    const generated=structuredProjectionYaml(parsePcrMarkdownToStructured(markdown),{sourceMarkdown:markdown});
    if (generated!==readFileSync(path.join(location,'structured.yaml'),'utf8')) throw new Error(`Selected PCR projection is not a deterministic canonical-source projection: ${directory}`);
    return {directory,status:'verified',measurementChecks:result.measurement?.coverage.performed.length??0};
  });
  return {schema:1,head:plan.head,mode:plan.mode,status:'passed',records,methodologyApproval:false,
    scope:'Changed canonical records only; separate complete-library lint/catalog/alias/history and sealed product gates are required.'};
}
function main(){
  const [planFile,output]=process.argv.slice(2);
  if(!planFile||!output||process.argv.length!==4)throw new Error('Usage: ci-content.ts <plan.json> <new-report.json>');
  const plan=verifyCiPlan(process.cwd(),JSON.parse(readFileSync(planFile,'utf8')) as unknown,
    {event:process.env.CI_EVENT_NAME??'',reusable:isReusableContext(process.env.CI_WORKFLOW_INPUTS),
      ...(process.env.CI_BASE_SHA?{base:process.env.CI_BASE_SHA}:{}),head:process.env.CI_HEAD_SHA??''});
  const result=validateChangedContent(process.cwd(),plan);
  writeFileSync(output,JSON.stringify(result,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(result));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
 try{main();}catch(error){console.error(error instanceof Error?error.message:String(error));process.exitCode=1;}
}
