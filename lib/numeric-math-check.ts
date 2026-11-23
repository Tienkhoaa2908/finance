/** Restricted arithmetic grammar for authored numerical equalities. Never eval. */
const funcs:Record<string,(...args:number[])=>number>={
 log:Math.log,ln:Math.log,exp:Math.exp,sqrt:Math.sqrt,abs:Math.abs,
 sin:Math.sin,cos:Math.cos,tan:Math.tan,min:Math.min,max:Math.max,
};
function texArgument(s:string,start:number):[string,number]{
 let i=start;while(i<s.length&&/\s/.test(s[i]))i++;
 if(s[i]!=='{')return[s[i]??'',i+1];
 let depth=1,j=i+1;
 for(;j<s.length&&depth;j++){if(s[j]==='{')depth++;if(s[j]==='}')depth--;}
 if(depth)throw Error('Unclosed TeX argument');
 return[s.slice(i+1,j-1),j];
}
function plainTex(source:string):string{
 let s=source;
 for(let pass=0;pass<30;pass++){
  const m=/\\(?:dfrac|tfrac|frac|sqrt)\s*/.exec(s);if(!m)break;
  const [a,end]=texArgument(s,m.index+m[0].length);
  let replacement:string,stop=end;
  if(m[0].startsWith('\\sqrt'))replacement='sqrt('+plainTex(a)+')';
  else{const [b,bend]=texArgument(s,end);replacement='(('+plainTex(a)+')/('+plainTex(b)+'))';stop=bend;}
  s=s.slice(0,m.index)+replacement+s.slice(stop);
 }
 return s.replace(/\{,\}/g,'').replace(/\\(?:left|right)/g,'')
  .replace(/\\(?:cdot|times)/g,'*').replace(/\\pi\b/g,'pi')
  .replace(/\\(?:log|ln|exp|sin|cos|tan|abs)\b/g,m=>m.slice(1))
  .replace(/\\[,;! ]|\\quad|\\qquad/g,'').replace(/[−–]/g,'-')
  .replace(/\[/g,'(').replace(/\]/g,')').replace(/\{/g,'(').replace(/\}/g,')');
}
export function numericTexValue(source:string):number|undefined{
 try{
  const s=plainTex(source).trim(),tokens:string[]=[];
  const re=/\s*(\d+(?:\.\d*)?(?:[eE][+-]?\d+)?|\.\d+(?:[eE][+-]?\d+)?|[a-zA-Z]+|[()+*/^,-])/gy;
  let at=0;while(at<s.length){re.lastIndex=at;const m=re.exec(s);if(!m)return;tokens.push(m[1]);at=re.lastIndex;}
  if(!tokens.length)return;let i=0;
  const peek=()=>tokens[i];
  function atom():number{
   const t=tokens[i++];if(t===undefined)throw Error('Expected atom');
   if(t==='('){const v=sum();if(tokens[i++]!==')')throw Error('Expected close');return v;}
   if(/^(?:\d|\.)/.test(t))return Number(t);
   if(t==='pi')return Math.PI;
   const f=funcs[t];if(!f)throw Error('Not a pure number');
   if(peek()!=='(')return f(unary());
   i++;const args=[sum()];while(peek()===','){i++;args.push(sum());}
   if(tokens[i++]!==')')throw Error('Expected function close');
   return f(...args);
  }
  function power():number{let v=atom();if(peek()==='^'){i++;v=v**unary();}return v;}
  function unary():number{if(peek()==='+'){i++;return unary();}if(peek()==='-'){i++;return-unary();}return power();}
  function product():number{
   let v=unary();
   while(i<tokens.length){
    const t=peek();
    if(t==='*'||t==='/'){i++;const w=unary();v=t==='*'?v*w:v/w;}
    else if(t==='('||t==='pi'||funcs[t]||/^(?:\d|\.)/.test(t)){v*=unary();}
    else break;
   }
   return v;
  }
  function sum():number{let v=product();while(peek()==='+'||peek()==='-'){const t=tokens[i++],w=product();v=t==='+'?v+w:v-w;}return v;}
  const result=sum();return i===tokens.length&&Number.isFinite(result)?result:undefined;
 }catch{return;}
}
export type ArithmeticCheck={left:string;right:string;actual:number;expected:number;approximate:boolean;tolerance:number;ok:boolean};
export function numericComparisons(tex:string):ArithmeticCheck[]{
 const parts=tex.split(/(=|\\approx)/),out:ArithmeticCheck[]=[];
 for(let i=1;i+1<parts.length;i+=2){
  const left=parts[i-1],right=parts[i+1],a=numericTexValue(left),b=numericTexValue(right);
  if(a===undefined||b===undefined)continue;
  const approximate=parts[i]==='\\approx';
  // A Taylor/model approximation is not a statement of decimal rounding.
  const literal=/^[+-]?(\d*(?:\.\d+)?)(?:[eE]([+-]?\d+))?$/.exec(right.trim());
  if(approximate&&!literal)continue;
  const places=literal?.[1].split('.')[1]?.length??0,exponent=Number(literal?.[2]??0);
  const tolerance=approximate?0.51*10**(exponent-places):1e-9*Math.max(1,Math.abs(a),Math.abs(b));
  out.push({left,right,actual:a,expected:b,approximate,tolerance,ok:Math.abs(a-b)<=tolerance});
 }
 return out;
}
