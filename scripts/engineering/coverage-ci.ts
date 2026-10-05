import { lstatSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { report } from './coverage.ts';
import { assertCoverageQualificationBinding } from './coverage-qualification.ts';
import { SHARD_NAMES, verifyQualificationReceipts } from './qualification-plan.ts';
function record(value: unknown): Record<string, unknown> {
  if(!value||typeof value!=='object'||Array.isArray(value))throw new Error('Invalid coverage collection metadata.');
  return value as Record<string,unknown>;
}
function regularDirectory(directory:string) {
  const stat=lstatSync(directory);if(!stat.isDirectory()||stat.isSymbolicLink())throw new Error('Coverage inputs require regular directories.');
}
function runMetadata(directory:string) {
  regularDirectory(directory);const filename=path.join(directory,'run.json');const stat=lstatSync(filename);
  if(!stat.isFile()||stat.isSymbolicLink())throw new Error('Coverage metadata must be a regular file.');
  return record(JSON.parse(readFileSync(filename,'utf8')) as unknown);
}
/** Verify the complete execution plan before accepting an exact isolated set of
 * raw measurements. The coverage engine independently authenticates every range. */
export function qualifiedMeasurements(root:string,planFile:string,receipts:string,measurements:string,documentation:string,runId:string,attempt:string) {
  if(!/^[1-9][0-9]*$/u.test(runId)||!/^[1-9][0-9]*$/u.test(attempt))throw new Error('Invalid CI invocation.');
  const proof=verifyQualificationReceipts(root,planFile,receipts);
  const measured=SHARD_NAMES.filter(name=>name!=='corpus');
  for(const name of SHARD_NAMES)if(proof.instrumentation[name] !== (name==='corpus'?'none':'v8-requested'))throw new Error(`Unexpected ${name} measurement disposition.`);
  regularDirectory(measurements);
  const names=measured.map(name=>`pcr-coverage-${name}-${runId}-${attempt}`);
  if(JSON.stringify(readdirSync(measurements).sort())!==JSON.stringify([...names].sort()))throw new Error('Missing or extra shard coverage artifact.');
  const runs=measured.map((name,index)=>{
    const folder=names[index];if(!folder)throw new Error('Missing planned coverage name.');
    const directory=path.join(measurements,folder),metadata=runMetadata(directory);
    assertCoverageQualificationBinding(metadata.qualification,{qualificationId:proof.qualificationId,planHash:proof.planHash,selection:name});
    const command=metadata.command;
    if(metadata.commit!==proof.sourceHead||!Array.isArray(command)||command.length!==6||command[0]!=='node'
      ||command[1]!=='scripts/engineering/qualification-plan.ts'||command[2]!=='run'
      ||typeof command[3]!=='string'||path.basename(command[3])!=='qualification.json'||command[4]!==name
      ||typeof command[5]!=='string'||path.basename(command[5])!==`${name}.json`)throw new Error(`Coverage did not execute the planned shard: ${name}`);
    return directory;
  });
  const doc=runMetadata(documentation);
  assertCoverageQualificationBinding(doc.qualification,{qualificationId:proof.qualificationId,planHash:proof.planHash,selection:'documentation'});
  if(doc.commit!==proof.sourceHead||JSON.stringify(doc.command)!==JSON.stringify(['npm','--prefix','packages/pcr-docs','run','build']))throw new Error('Coverage did not execute the complete documentation build.');
  return {proof,runs:[...runs,documentation],uninstrumented:['corpus'],note:'Independent full-corpus reproducibility is mandatory functional evidence; it grants no coverage credit.'};
}
async function main(){
 const [plan,receipts,measurements,documentation,output]=process.argv.slice(2);
 if(!plan||!receipts||!measurements||!documentation||!output||process.argv.length!==7)throw new Error('Usage: coverage-ci.ts <plan> <receipts> <measurements> <documentation> <output>');
 const selected=qualifiedMeasurements(process.cwd(),plan,receipts,measurements,documentation,process.env.GITHUB_RUN_ID??'',process.env.GITHUB_RUN_ATTEMPT??'');
 const result=await report(process.cwd(),output,selected.runs);console.log(JSON.stringify({qualification:selected.proof,coverage:result}));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href)main().catch(error=>{console.error(error instanceof Error?error.message:String(error));process.exitCode=1;});
