import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mathCurriculum as c} from '../lib/math-curriculum';
import {readerWeek} from '../lib/math-reader-data';
import {mathLessonToMarkdown} from '../lib/lesson-export';
test('a daily payload preserves the complete bilingual handout without unrelated days or exercises',()=>{
 for(const s of [...c.sessions,...c.foundationSessions.filter(s=>s.dayIndex===0)]){
  const week=c.weeks.find(w=>w.week===s.week)!,payload=readerWeek(week,s);
  assert.equal(payload.exercises.length,s.exerciseIds.length+(s.alternativeExerciseIds?.length??0));
  assert.equal(payload.sessions.length,1);
  for(const language of ['en','vi'] as const)assert.equal(
   mathLessonToMarkdown(payload,s,c.sources,language),
   mathLessonToMarkdown(week,s,c.sources,language),s.id+'/'+language,
  );
  assert.ok(JSON.stringify(payload).length<JSON.stringify(week).length,s.id);
 }
});
