import fs from 'node:fs';
const c=JSON.parse(fs.readFileSync('data/math-v2/curriculum.json','utf8'));
const base=process.env.TEST_BASE_URL||'http://localhost:3000';
if(!['localhost','127.0.0.1','[::1]'].includes(new URL(base).hostname))throw Error('Run this exhaustive check on the local verification server.');
const results=[];let cursor=0;
async function worker(){
 while(cursor<c.sessions.length){
  const session=c.sessions[cursor++],url=base+'/daily/'+session.date+'?curriculum=v2';
  const errors=[];
  try{
   const response=await fetch(url,{signal:AbortSignal.timeout(60000)}),html=await response.text();
   if(response.status!==200)errors.push('HTTP '+response.status);
   if(!html.includes('data-concept="'+session.lesson.conceptKey+'"'))errors.push('Wrong primary concept');
   const rendered=[...html.matchAll(/data-exercise-id="([^"]+)"/g)].map(m=>m[1]);
   if(JSON.stringify(rendered)!==JSON.stringify(session.exerciseIds))errors.push('Wrong rendered exercise order: '+rendered.join(','));
   if(/class="[^"]*katex-error/.test(html))errors.push('KaTeX render error');
   if(/class="[^"]*math-solution(?:\s|")/.test(html))errors.push('Answer initially visible');
   results.push({date:session.date,concept:session.lesson.conceptKey,status:response.status,bytes:Buffer.byteLength(html),errors});
  }catch(error){results.push({date:session.date,errors:[String(error)]});}
  if(results.length%100===0)console.log('Rendered '+results.length+'/'+c.sessions.length+' lessons');
 }
}
await Promise.all(Array.from({length:4},worker));
results.sort((a,b)=>a.date.localeCompare(b.date));
const failures=results.filter(r=>r.errors.length);
const report={sourceHash:c.sourceHash,scope:'Local HTTP/SSR coverage for every main-route day, exact four-problem order, primary identity, initial answer visibility and rendered math errors. Does not validate mathematical truth or replace browser interaction tests.',checked:results.length,failures,lessons:results};
fs.mkdirSync('artifacts',{recursive:true});
fs.writeFileSync('artifacts/rendered-lesson-audit.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({checked:report.checked,failures,maximumBytes:Math.max(...results.map(r=>r.bytes??0))},null,2));
if(failures.length||results.length!==523)process.exitCode=1;
