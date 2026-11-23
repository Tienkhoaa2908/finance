import fs from 'node:fs';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import katex from 'katex';
import {normalizeMathNotation} from '../lib/math-notation';
import {conceptFigures} from '../content/math-v2/concept-figures';
type Node={type:string;value?:string;children?:Node[]};
const parser=unified().use(remarkParse).use(remarkGfm).use(remarkMath);
const seen=new Set<string>(),errors:unknown[]=[],unwrappedTex:unknown[]=[];
let expressions=0;
function audit(input:string,location:string){
 if(seen.has(input))return;seen.add(input);
 const normalized=normalizeMathNotation(input);
 const visit=(node:Node)=>{
  if(node.type==='math'||node.type==='inlineMath'){
   expressions++;
   try{katex.renderToString(node.value!,{throwOnError:true,strict:'ignore'});}
   catch(error){errors.push({location,input,normalized,formula:node.value,error:String(error)});}
  }
  if(node.type==='text'&&/\\(?:frac|tfrac|dfrac|int|sum|sqrt|text|quad|qquad|infty|sigma|alpha|beta|lambda|Omega|mathbb|mathcal|operatorname)\b/.test(node.value??'')){
   unwrappedTex.push({location,input,normalized,text:node.value});
  }
  node.children?.forEach(visit);
 };
 visit(parser.parse(normalized) as Node);
}
function walk(value:unknown,location:string){
 if(typeof value==='string')audit(value,location);
 else if(Array.isArray(value))value.forEach((v,i)=>walk(v,location+'/'+i));
 else if(value&&typeof value==='object')Object.entries(value).forEach(([k,v])=>walk(v,location+'/'+k));
}
const c=JSON.parse(fs.readFileSync('data/math-v2/curriculum.json','utf8'));
walk(c,'curriculum');
for(const [id,figure] of Object.entries(conceptFigures)){
 walk({caption:figure.caption,legend:figure.legend},'figures/'+id);
 figure.axes.forEach((axis,i)=>audit('$'+axis+'$','figures/'+id+'/axis/'+i));
}
const result={sourceHash:c.sourceHash,scope:'The reader Markdown pipeline: normalize notation, parse with GFM and remark-math, then validate the resulting math nodes in KaTeX. Covers both languages, all compiled solutions including hidden answers, and figure captions/legends/axes. This checks rendering, not mathematical truth.',uniqueStrings:seen.size,expressions,errors,unwrappedTex};
fs.mkdirSync('artifacts',{recursive:true});
fs.writeFileSync('artifacts/rendered-math-audit.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({...result,errors:errors.slice(0,8),unwrappedTex:unwrappedTex.slice(0,8)},null,2));
if(errors.length||unwrappedTex.length)process.exitCode=1;
