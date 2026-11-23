import type {Bilingual} from '../../../lib/lesson-types';
import type {MathExercise} from '../../../lib/math-curriculum-types';
export type AuthoredQuestion={prompt:Bilingual;solution:Bilingual[]};
export type ReviewedLesson={
 prompt?:Bilingual;
 title?:Bilingual;
 rubric?:MathExercise['rubric'];
 commonErrors?:Bilingual[];
 application:Bilingual;
 formula:Bilingual;
 steps:Bilingual[];
 primarySolution:Bilingual[];
 companions:[AuthoredQuestion,AuthoredQuestion,AuthoredQuestion];
 reviewNote:string;
 sourceIds:string[];
};
export const b=(en:string,vi:string):Bilingual=>({en,vi});
