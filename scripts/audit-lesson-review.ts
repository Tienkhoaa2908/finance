import fs from 'node:fs';
import {mathCurriculum as c} from '../lib/math-curriculum';
import {reviewAmendments} from '../content/math-v2/review-amendments';
import {deepReview} from '../content/math-v2/deep-review';
import {conceptFigures} from '../content/math-v2/concept-figures';
import {solutionParagraphs} from '../lib/solution-paragraphs';
const ownership=JSON.parse(fs.readFileSync('docs/deep-review-ownership.json','utf8')) as Record<string,string>;
const issues:string[]=[];
const same=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);
const rows=c.sessions.map(s=>{
 const week=c.weeks.find(w=>w.week===s.week)!;
 const e=week.exercises.find(e=>e.id===s.lesson!.primaryExerciseId)!;
 const reviewed=deepReview[e.id];
 const exercises=s.exerciseIds.map(id=>week.exercises.find(e=>e.id===id)!);
 if(!reviewed||!ownership[e.id])issues.push(e.id+': no authored review or source ownership');
 if(s.exerciseIds.length!==4)issues.push(e.id+': not four daily problems');
 if(reviewed){
  if(!same(e.solution,reviewed.primarySolution)||!same(s.lesson!.steps,reviewed.steps))issues.push(e.id+': compiled primary diverges from authored review');
  [0,1,3].forEach((slot,i)=>{
   const actual=exercises[slot],expected=reviewed.companions[i];
   if(!same(actual.prompt,expected.prompt)||!same(actual.solution,expected.solution))issues.push(actual.id+': companion diverges from authored text');
  });
 }
 for(const exercise of exercises)for(const lang of ['en','vi'] as const){
  if(!exercise.prompt[lang].trim()||exercise.solution.length<3||exercise.solution.some(v=>!v[lang].trim()))issues.push(exercise.id+': missing worked '+lang);
  for(const step of exercise.solution)if(!solutionParagraphs(step[lang],lang).length)issues.push(exercise.id+': empty solution after layout');
 }
 return{date:s.date,week:s.week,id:e.id,title:e.title.en,
  authoredSource:ownership[e.id]??null,
  reviewNote:reviewed?.reviewNote??null,
  sourceIds:reviewed?.sourceIds??[],
  priorCorrection:reviewAmendments[e.id]?.reason??null,
  interactive:conceptFigures[e.id]?.kind??(e.id==='f-w003-e3'?'nullspace':null),
  companionSource:reviewed?'individually-authored':'missing',
  primaryWorkedSteps:e.solution.length,
  companionWorkedSteps:[0,1,3].map(i=>exercises[i].solution.length),
  solutionParagraphs:Object.fromEntries(['en','vi'].map(l=>[l,e.solution.flatMap(v=>solutionParagraphs(v[l as 'en'|'vi'],l as 'en'|'vi')).length])),
  exerciseIds:s.exerciseIds,
 };
});
if(rows.length!==523||Object.keys(deepReview).length!==523)issues.push('Expected exactly 523 scheduled and authored primary concepts');
const summary={
 sourceHash:c.sourceHash,sessions:rows.length,scheduledExercises:rows.reduce((n,r)=>n+r.exerciseIds.length,0),
 reviewedPrimaryLessons:rows.filter(r=>r.reviewNote).length,
 individuallyAuthoredCompanions:rows.filter(r=>r.companionSource==='individually-authored').length*3,
 interactiveLessons:rows.filter(r=>r.interactive).length,
 sharedScaffoldDays:0,missingAuthoredDays:rows.filter(r=>r.companionSource==='missing').length,
 structuralIssues:issues.length,independentlyReviewed:false,
};
fs.writeFileSync('docs/lesson-review-ledger.json',JSON.stringify({
 summary,
 scope:'Assistant-authored bilingual review of every scheduled primary concept and three individual companion problems per day. Per-concept notes and free source IDs record the review. Arithmetic, notation, compilation and plotted-model checks are automated evidence with stated limits; they do not constitute independent expert validation or proof that every theorem argument is correct.',
 issues,lessons:rows,
},null,2)+'\n');
console.log(summary);
if(issues.length){console.error(issues.slice(0,12));process.exitCode=1;}
