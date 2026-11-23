import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {normalizeMathNotation} from '../lib/math-notation';
import {numericComparisons} from '../lib/numeric-math-check';
async function main(){
 const files=fs.readdirSync('content/math-v2/deep-review').filter(f=>/^w\d{3}(?:-w\d{3})?(?:-part\d+)?\.ts$/.test(f)).sort();
 // These exact expressions are impossible equations displayed in contradiction arguments.
 // Keep every occurrence in the report rather than silently dropping false equalities.
 const exceptions=[
  {path:/^w002-w006.ts\/f-w003-e1\/companions\/2\/solution\/2\/(en|vi)$/,tex:'2=0',reason:'Cauchy–Schwarz equality would force incompatible coordinates; the sentence explicitly rejects the equation.'},
  {path:/^w002-w006.ts\/f-w005-e5\/companions\/0\/solution\/2\/(en|vi)$/,tex:'5=6',reason:'The third row is inconsistent with the first two forced coordinates; this is the stated contradiction.'},
  {path:/^w061-w065.ts\/m2-w064-e4\/(steps|primarySolution)\/1\/(en|vi)$/,tex:'1=0',reason:'KKT stationarity is impossible at the singleton feasible point because the constraint gradient is zero.'},
  {path:/^w061-w065.ts\/m2-w064-e4\/reviewNote$/,tex:'1=0',reason:'Editorial note names the same impossible KKT equation.'},
  {path:/^w061-w065.ts\/m2-w064-e5\/steps\/2\/(en|vi)$/,tex:"f'(0)+\\lambda g'(0)=-4+0=0",reason:'The sentence states that the required stationarity equation is false.'},
  {path:/^w061-w065.ts\/m2-w064-e5\/primarySolution\/1\/(en|vi)$/,tex:'-4+0=0',reason:'The sentence explicitly rejects the required stationarity equality; no finite multiplier can repair a zero constraint gradient.'},
 ];
 const used=new Set<number>();
 let compared=0;const failures:unknown[]=[],invalid:unknown[]=[],intentionalContradictions:unknown[]=[];
 function walk(v:unknown,location:string){
  if(typeof v==='string'){
   const text=normalizeMathNotation(v);
   for(const m of text.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$\n]+)\$/g)){
    const tex=m[1]??m[2];
    for(const check of numericComparisons(tex)){
     compared++;if(check.ok)continue;
     const index=exceptions.findIndex(e=>e.path.test(location)&&e.tex===tex);
     if(index<0)failures.push({location,tex,...check});
     else{used.add(index);intentionalContradictions.push({location,tex,reason:exceptions[index].reason});}
    }
   }
  }else if(Array.isArray(v))v.forEach((x,i)=>walk(x,location+'/'+i));
  else if(v&&typeof v==='object')Object.entries(v).forEach(([k,x])=>walk(x,location+'/'+k));
 }
 for(const file of files){
  try{const m=await import(pathToFileURL(path.resolve('content/math-v2/deep-review',file)).href);walk(m.default,file);}
  catch(error){invalid.push({file,error:String(error)});}
 }
 fs.mkdirSync('artifacts',{recursive:true});
 const unusedExceptions=exceptions.filter((_,i)=>!used.has(i)).map(e=>({path:e.path.source,tex:e.tex}));
 const result={scope:'Numerical equality/rounding audit for expressions accepted by the restricted grammar. Symbolic arguments require mathematical review.',compared,failures,invalid,intentionalContradictions,unusedExceptions};
 fs.writeFileSync('artifacts/numeric-lesson-audit.json',JSON.stringify(result,null,2)+'\n');
 console.log(JSON.stringify({...result,failures:failures.slice(0,12),intentionalContradictions:intentionalContradictions.length},null,2));
 if(failures.length||invalid.length||unusedExceptions.length)process.exitCode=1;
}
main().catch(error=>{console.error(error);process.exitCode=1;});
