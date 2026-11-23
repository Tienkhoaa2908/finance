export type LessonProgress = {step:number;drafts:Record<string,string>;ratings:Record<string,'again'|'good'>;attempted?:string[];reviewAt?:number;interval?:number;completed?:boolean};
export type FinanceProgress = {version:1;lessons:Record<string,LessonProgress>;projects:Record<string,string[]>};
export const PROGRESS_KEY='finance-learning:v1';
export const emptyProgress=():FinanceProgress=>({version:1,lessons:{},projects:{}});
const safeKey=(key:string)=>/^[a-z0-9-]{1,80}$/.test(key);
export function parseProgress(input:unknown):FinanceProgress {
 if(!input||typeof input!=='object')throw new Error('Invalid backup');
 const root=input as Record<string,unknown>;
 if(root.version!==1||!root.lessons||typeof root.lessons!=='object'||Array.isArray(root.lessons)||!root.projects||typeof root.projects!=='object'||Array.isArray(root.projects))throw new Error('Invalid backup');
 const result=emptyProgress();
 if(Object.keys(root.lessons).length>2000||Object.keys(root.projects).length>200)throw new Error('Backup too large');
 for(const [id,value] of Object.entries(root.lessons)){
  if(!safeKey(id)||!value||typeof value!=='object')throw new Error('Invalid lesson');
  const row=value as LessonProgress;
  if(!Number.isInteger(row.step)||row.step<0||row.step>100||!row.drafts||typeof row.drafts!=='object'||Array.isArray(row.drafts)||!row.ratings||typeof row.ratings!=='object'||Array.isArray(row.ratings))throw new Error('Invalid lesson state');
  const drafts:Record<string,string>={};const ratings:LessonProgress['ratings']={};
  if(Object.keys(row.drafts).length>100||Object.keys(row.ratings).length>100)throw new Error('Too many answers');
  for(const [key,text] of Object.entries(row.drafts)){if(!safeKey(key)||typeof text!=='string'||text.length>12000)throw new Error('Invalid answer');drafts[key]=text;}
  for(const [key,rating] of Object.entries(row.ratings)){if(!safeKey(key)||!['again','good'].includes(rating))throw new Error('Invalid rating');ratings[key]=rating;}
  if(row.reviewAt!==undefined&&(!Number.isFinite(row.reviewAt)||row.reviewAt<0||row.reviewAt>8640000000000000))throw new Error('Invalid review date');
  if(row.interval!==undefined&&(!Number.isInteger(row.interval)||row.interval<1||row.interval>30))throw new Error('Invalid interval');
  if(row.completed!==undefined&&typeof row.completed!=='boolean')throw new Error('Invalid completion');
  if(row.attempted!==undefined&&(!Array.isArray(row.attempted)||row.attempted.length>100||!row.attempted.every(x=>typeof x==='string'&&safeKey(x))))throw new Error('Invalid attempts');
  result.lessons[id]={step:row.step,drafts,ratings,...(row.attempted?{attempted:row.attempted}:{}),...(row.reviewAt!==undefined?{reviewAt:row.reviewAt}:{}),...(row.interval!==undefined?{interval:row.interval}:{}),...(row.completed!==undefined?{completed:row.completed}:{})};
 }
 for(const [id,checks] of Object.entries(root.projects)){if(!safeKey(id)||!Array.isArray(checks)||checks.length>100||!checks.every(check=>typeof check==='string'&&safeKey(check)))throw new Error('Invalid project');result.projects[id]=[...new Set(checks)];}
 return result;
}
export function scheduleReview(row:LessonProgress,good:boolean,now=Date.now()):LessonProgress {
 const interval=good?Math.min(30,(row.interval||1)*2):1;
 return {...row,interval,reviewAt:now+interval*86400000};
}
