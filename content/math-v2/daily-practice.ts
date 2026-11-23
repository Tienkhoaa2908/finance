import type {MathExercise} from '../../lib/math-curriculum-types';
import type {Bilingual} from '../../lib/lesson-types';
import {deepReview} from './deep-review';
export {introductoryPractice} from './introductory-practice';
const b=(en:string,vi:string):Bilingual=>({en,vi});
/** Missing individual writing is a build error. There is no shared-scaffold fallback. */
export function conceptPractice(primary:MathExercise):[MathExercise,MathExercise,MathExercise,MathExercise]{
 const review=deepReview[primary.id];
 if(!review)throw Error('Missing individually authored daily practice: '+primary.id);
 const roles=['concept','derivation','error analysis'] as const;
 const names=[b('Problem 1','Bài 1'),b('Problem 2','Bài 2'),b('Problem 4','Bài 4')];
 const copies=review.companions.map((question,i):MathExercise=>({
  id:primary.id+'-practice-'+(i===2?4:i+1),revision:primary.revision,
  title:names[i],practiceRole:roles[i],relatedExerciseId:primary.id,
  skills:i===2?['transfer']:['derivation'],teaching:primary.teaching,
  prompt:question.prompt,solution:question.solution,hints:[],rubric:[],commonErrors:[],remediation:primary.remediation,
 }));
 return[copies[0],copies[1],{...primary,practiceRole:'application'},copies[2]];
}
