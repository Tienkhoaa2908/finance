import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import katex from 'katex';
import type {ReviewedLesson} from '../content/math-v2/deep-review/types';
import baseline from '../data/math-v2/curriculum.json';
import {dailySources} from '../content/math-v2/daily-sources';
const sourceIds=new Set([...baseline.sources,...dailySources].map(s=>s.id));
const known=new Set(baseline.sessions.map(s=>s.lesson.primaryExerciseId));
async function main(){
 const failures:string[]=[],warnings:string[]=[];
 const prompts=new Map<string,string>();
 let count=0,questions=0,expressions=0;
 function checkPair(v:{en:string;vi:string},where:string){
  if(!v||!v.en?.trim()||!v.vi?.trim()){failures.push(where+': missing language');return;}
  const math=(s:string)=>[...s.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$\n]+)\$/g)].map(m=>m[1]??m[2]);
  const pair=[math(v.en),math(v.vi)];
  for(const lang of ['en','vi'] as const)for(const tex of math(v[lang])){
   expressions++;try{katex.renderToString(tex,{throwOnError:true,strict:'ignore'});}
   catch(error){failures.push(where+'/'+lang+': '+String(error));}
  }
  // Vietnamese may reorder prose clauses. Compare the multiset of complete math atoms.
  const norm=(xs:string[])=>xs.map(x=>x.replace(/\\text\{[^{}]*\}/g,'TEXT').replace(/\\[,;! ]|\s/g,'')).sort();
  if(JSON.stringify(norm(pair[0]))!==JSON.stringify(norm(pair[1])))warnings.push(where+': compare bilingual math');
 }
 const only=process.argv.find(a=>a.startsWith('--file='))?.slice(7);
 const files=fs.readdirSync('content/math-v2/deep-review').filter(f=>/^w\d{3}(?:-w\d{3})?(?:-part\d+)?\.ts$/.test(f)&&(!only||f===only)).sort();
 if(only&&!files.length)throw Error('Unknown batch '+only);
 for(const file of files){
  let data:Record<string,ReviewedLesson>;
  try{data=(await import(pathToFileURL(path.resolve('content/math-v2/deep-review',file)).href)).default;}
  catch(error){failures.push(file+': '+String(error));continue;}
  const source=fs.readFileSync('content/math-v2/deep-review/'+file,'utf8');
  if(/tokens truncated|output truncated|\[CONTENT OMITTED\]/i.test(source))failures.push(file+': truncated output marker in source');
  for(const [id,l] of Object.entries(data)){
   count++;if(!known.has(id))failures.push(id+': unknown scheduled concept');
   checkPair(l.application,id+'/application');checkPair(l.formula,id+'/formula');
   if(l.prompt)checkPair(l.prompt,id+'/primary-prompt');
   if(l.steps?.length<3||l.primarySolution?.length<3)failures.push(id+': fewer than three explanatory steps');
   l.steps?.forEach((p,i)=>checkPair(p,id+'/method/'+i));
   l.primarySolution?.forEach((p,i)=>checkPair(p,id+'/primary-solution/'+i));
   if(l.companions?.length!==3)failures.push(id+': not three authored companions');
   l.companions?.forEach((q,i)=>{
    questions++;checkPair(q.prompt,id+'/companion/'+i);
    const key=q.prompt.en.replace(/\s+/g,' ').trim();
    if(prompts.has(key))failures.push(id+': duplicates prompt from '+prompts.get(key));
    prompts.set(key,id+'/'+i);
    if(q.solution.length<3)failures.push(id+': companion '+i+' lacks worked steps');
    if(/Interpret this relationship for|Justify this first step in|A solution to the problem below|above exercise|given problem/i.test(q.prompt.en))failures.push(id+': scaffold text in companion '+i);
    q.solution.forEach((p,j)=>checkPair(p,id+'/companion/'+i+'/step/'+j));
   });
   if(!l.reviewNote||l.reviewNote.length<30)failures.push(id+': missing specific review note');
   if(!l.sourceIds.length||l.sourceIds.some(s=>!sourceIds.has(s)))failures.push(id+': unknown free source ID');
  }
 }
 const result={lessons:count,questions,expressions,failures,warnings};
 fs.mkdirSync('artifacts',{recursive:true});
 fs.writeFileSync('artifacts/deep-review-content-check'+(only?'-'+only.replace(/\.ts$/,''):'')+'.json',JSON.stringify(result,null,2)+'\n');
 console.log(JSON.stringify({...result,failures:failures.slice(0,12),warnings:warnings.slice(0,12)},null,2));
 if(failures.length||warnings.length)process.exitCode=1;
}
main().catch(error=>{console.error(error);process.exitCode=1;});
