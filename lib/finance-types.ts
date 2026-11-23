export type Copy = {vi:string;en:string};
export type FinanceExercise = {id:string;kind:'concept'|'calculation'|'derivation'|'implementation';question:Copy;hint:Copy;answer:Copy;numeric?:{expected:number;tolerance:number}};
export type FinanceLesson = {
 id:string;moduleId:string;title:Copy;summary:Copy;why:Copy;application:Copy;
 prerequisites:string[];sections:{title:Copy;body:Copy}[];
 exercises:FinanceExercise[];sources:{title:string;url:string;section:string}[];
 project:string;
};
export const c=(vi:string,en:string):Copy=>({vi,en});
