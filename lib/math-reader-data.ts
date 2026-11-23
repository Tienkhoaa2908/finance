import type {MathSession,MathWeek} from './math-curriculum-types';
/** Send the current handout to the browser rather than every exercise in its week. */
export function readerWeek(week:MathWeek,session:MathSession):MathWeek{
 const ids=new Set([...session.exerciseIds,...session.alternativeExerciseIds??[]]);
 const exercises=week.exercises.filter(e=>ids.has(e.id)).map(e=>
  e.practiceRole==='application'?e:{...e,teaching:undefined});
 return{...week,exercises,sessions:[session]};
}
