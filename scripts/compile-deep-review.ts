import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import type {ReviewedLesson} from '../content/math-v2/deep-review/types';
import baseline from '../data/math-v2/curriculum.json';
async function main(){
 const dir='content/math-v2/deep-review';
 const files=fs.readdirSync(dir).filter(f=>/^w\d{3}(?:-w\d{3})?(?:-part\d+)?\.ts$/.test(f)).sort();
 const entries:Record<string,ReviewedLesson>={};
 const ownership:Record<string,string>={};
 const invalid:{file:string;error:string}[]=[];
 for(const file of files){
  let mod;
  try{mod=await import(pathToFileURL(path.resolve(dir,file)).href);}
  catch(error){invalid.push({file,error:String(error)});continue;}
  const content=mod.default as Record<string,ReviewedLesson>;
  for(const [id,lesson] of Object.entries(content)){
   if(entries[id])throw Error('Duplicate reviewed concept '+id+' in '+file+' and '+ownership[id]);
   entries[id]=lesson;ownership[id]=file;
  }
 }
 const required=baseline.sessions.map(s=>s.lesson.primaryExerciseId);
 const missing=required.filter(id=>!entries[id]);
 const extra=Object.keys(entries).filter(id=>!required.includes(id));
 const progress={required:required.length,authored:Object.keys(entries).length,remaining:missing.length,files,extra,invalid,missing};
 fs.mkdirSync('artifacts',{recursive:true});
 fs.writeFileSync('artifacts/deep-review-progress.json',JSON.stringify(progress,null,2)+'\n');
 console.log(JSON.stringify({...progress,files:files.length,missing:missing.slice(0,8)},null,2));
 if(process.argv.includes('--inventory'))return;
 if(missing.length||extra.length||invalid.length)throw Error('Review coverage incomplete; refusing to create release registry.');
 let source="// Generated imports only. The individual lesson files are the canonical authored content.\n";
 source+="import type {ReviewedLesson} from './types';\n";
 files.forEach((f,i)=>{source+="import batch"+i+" from './"+f.replace(/\.ts$/,'')+"';\n";});
 source+="export const deepReview:Record<string,ReviewedLesson>={"+files.map((_,i)=>'...batch'+i).join(',')+"};\n";
 fs.writeFileSync(dir+'/index.ts',source);
 fs.writeFileSync('docs/deep-review-ownership.json',JSON.stringify(ownership,null,2)+'\n');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
