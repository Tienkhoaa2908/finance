import {lessons,modules} from '../content/finance';
import {projects} from '../content/finance/projects';
import {auditFinanceLesson} from './audit-finance-content';
import {c} from '../lib/finance-types';
const errors:string[]=[];const warnings:string[]=[];const ids=new Set(lessons.map(x=>x.id));
if(ids.size!==lessons.length)errors.push('Duplicate lesson IDs');
const moduleIds=new Set(modules.map(x=>x.id));const projectIds=new Set([...projects.map(x=>x.id),'portfolio-system']);
const active=new Set<string>();const visited=new Set<string>();
function visit(id:string){if(active.has(id)){errors.push(`Prerequisite cycle at ${id}`);return;}if(visited.has(id))return;active.add(id);lessons.find(x=>x.id===id)?.prerequisites.forEach(visit);active.delete(id);visited.add(id);}
for(const lesson of lessons){
 if(!/^[a-z0-9-]+$/.test(lesson.id))errors.push(`${lesson.id}: invalid ID`);
 if(!moduleIds.has(lesson.moduleId))errors.push(`${lesson.id}: unknown module`);
 if(!projectIds.has(lesson.project))errors.push(`${lesson.id}: unknown project`);
 if(!lesson.sections.length||!lesson.exercises.length)errors.push(`${lesson.id}: missing content`);
 for(const id of lesson.prerequisites)if(!ids.has(id))errors.push(`${lesson.id}: unknown prerequisite ${id}`);
 visit(lesson.id);
 const exerciseIds=new Set<string>();
 for(const ex of lesson.exercises){
  if(exerciseIds.has(ex.id)||!/^[a-z0-9-]+$/.test(ex.id))errors.push(`${lesson.id}: invalid/duplicate exercise ${ex.id}`);
  exerciseIds.add(ex.id);
  if(ex.numeric&&(!Number.isFinite(ex.numeric.expected)||!Number.isFinite(ex.numeric.tolerance)||ex.numeric.tolerance<0))errors.push(`${lesson.id}/${ex.id}: invalid numeric check`);
 }
 const sources=lesson.sources.map((s,i)=>({...s,id:`source-${i}`}));const sourceIds=sources.map(x=>x.id);
 const blocks=[...lesson.sections.map((s,i)=>({id:`section-${i}`,title:s.title,body:s.body,question:c('Kiểm tra','Check'),answer:c('Kiểm tra','Check'),sourceIds})),...lesson.exercises.map(ex=>({id:`exercise-${ex.id}`,title:c('Bài tập','Exercise'),body:ex.hint,question:ex.question,answer:ex.answer,sourceIds}))];
 const audit=auditFinanceLesson({id:lesson.id,revision:'finance-v1',title:lesson.title,intro:c([lesson.summary.vi,lesson.why.vi,lesson.application.vi].join('\n\n'),[lesson.summary.en,lesson.why.en,lesson.application.en].join('\n\n')),sources,steps:blocks},{normalizeNotation:false});
 errors.push(...audit.errors.map(e=>`${lesson.id}: ${e}`));warnings.push(...audit.warnings.map(e=>`${lesson.id}: ${e}`));
 for(const section of lesson.sections){if(section.body.vi.includes('\\n'))warnings.push(`${lesson.id}: inspect literal newline`);}
}
console.log(JSON.stringify({lessons:lessons.length,modules:modules.length,exercises:lessons.reduce((n,x)=>n+x.exercises.length,0),errors,warnings,scope:'Structure, prerequisites, bilingual formula parity and KaTeX rendering. Human editorial/scientific review remains necessary.'},null,2));
if(errors.length)process.exitCode=1;
