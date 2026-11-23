/** Editorial assistance only: structure/rendering checks do not validate truth,
 * translation quality, instructional depth, proof correctness, or mastery. */
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import katex from 'katex';
import {normalizeMathNotation} from '../lib/math-notation';

type RecordValue = Record<string, unknown>;
type MarkdownNode = {type:string; value?:string; children?:MarkdownNode[]};
export type FinanceAudit = {errors:string[]; warnings:string[]};
const parser = unified().use(remarkParse).use(remarkGfm).use(remarkMath);
const record = (value:unknown):value is RecordValue =>
  value !== null && typeof value === 'object' && !Array.isArray(value);
const nonempty = (value:unknown):value is string => typeof value === 'string' && !!value.trim();

export function auditFinanceLesson(lesson:unknown,{normalizeNotation=true}:{normalizeNotation?:boolean}={}):FinanceAudit {
  const errors:string[] = [], warnings:string[] = [];
  if (!record(lesson)) return {errors:['lesson: expected an object'],warnings};

  function text(value:unknown, location:string):value is string {
    if (nonempty(value)) return true;
    errors.push(`${location}: expected nonempty text`);
    return false;
  }
  function formulas(value:string, location:string):string[] {
    const result:string[] = [], prose:string[] = [];
    function visit(node:MarkdownNode) {
      if (node.type === 'math' || node.type === 'inlineMath') {
        const formula = node.value ?? '';
        result.push(formula.replace(/\s+/gu,'').normalize('NFC'));
        try { katex.renderToString(formula,{throwOnError:true,strict:'ignore',trust:false}); }
        catch (error) { errors.push(`${location}: invalid KaTeX: ${String(error)}`); }
        return;
      }
      if (node.type === 'code' || node.type === 'inlineCode') return;
      if (node.type === 'text' && node.value) prose.push(node.value);
      node.children?.forEach(visit);
    }
    try { visit(parser.parse(normalizeNotation?normalizeMathNotation(value):value) as MarkdownNode); }
    catch (error) { errors.push(`${location}: Markdown parse failed: ${String(error)}`); }
    const plain = prose.join(' ');
    if (/\\[nr](?=\s|[A-ZÀ-Ỹ]|$)/u.test(plain)) {
      warnings.push(`${location}: possible literal escaped newline in prose; review manually`);
    }
    // No language classifier: English financial terms are often intentional.
    const sentences = plain.split(/(?<=[.!?])\s+/u).map(s=>s.trim().normalize('NFC'));
    for (let i=1;i<sentences.length;i++) {
      if (sentences[i] && sentences[i] === sentences[i-1]) {
        warnings.push(`${location}: adjacent identical sentence; review manually`);
        break;
      }
    }
    return result.sort(); // A multiset: duplicate formulas must also match.
  }
  function bilingual(value:unknown, location:string) {
    if (!record(value)) { errors.push(`${location}: expected {vi,en}`); return; }
    const viValid = text(value.vi,`${location}.vi`), enValid = text(value.en,`${location}.en`);
    const vi = viValid ? formulas(value.vi as string,`${location}.vi`) : [];
    const en = enValid ? formulas(value.en as string,`${location}.en`) : [];
    if (viValid && enValid && JSON.stringify(vi) !== JSON.stringify(en)) {
      errors.push(`${location}: bilingual formula multisets differ (whitespace normalized; not semantic equivalence)`);
    }
  }
  text(lesson.id,'lesson.id');
  text(lesson.revision,'lesson.revision');
  bilingual(lesson.title,'lesson.title');
  bilingual(lesson.intro,'lesson.intro');

  const sourceIds = new Set<string>();
  if (!Array.isArray(lesson.sources) || !lesson.sources.length) errors.push('lesson.sources: expected nonempty array');
  else lesson.sources.forEach((source:unknown,i:number)=>{
    const at = `lesson.sources[${i}]`;
    if (!record(source)) { errors.push(`${at}: expected an object`); return; }
    if (text(source.id,`${at}.id`)) {
      if (sourceIds.has(source.id)) errors.push(`${at}.id: duplicate source ID ${source.id}`);
      sourceIds.add(source.id);
    }
    for (const key of ['title','section']) text(source[key],`${at}.${key}`);
    if (text(source.url,`${at}.url`)) {
      try {
        const url = new URL(source.url);
        if (url.protocol !== 'https:' || !url.hostname || url.username || url.password) throw new Error('invalid source URL');
      } catch { errors.push(`${at}.url: expected HTTPS URL without credentials`); }
    }
  });
  const stepIds = new Set<string>();
  if (!Array.isArray(lesson.steps) || !lesson.steps.length) errors.push('lesson.steps: expected nonempty array');
  else lesson.steps.forEach((step:unknown,i:number)=>{
    const at = `lesson.steps[${i}]`;
    if (!record(step)) { errors.push(`${at}: expected an object`); return; }
    if (text(step.id,`${at}.id`)) {
      if (stepIds.has(step.id)) errors.push(`${at}.id: duplicate step ID ${step.id}`);
      stepIds.add(step.id);
    }
    for (const key of ['title','body','question','answer']) bilingual(step[key],`${at}.${key}`);
    if (!Array.isArray(step.sourceIds) || !step.sourceIds.length) errors.push(`${at}.sourceIds: expected nonempty array`);
    else {
      const used = new Set<string>();
      step.sourceIds.forEach((id:unknown,j:number)=>{
        if (!nonempty(id) || !sourceIds.has(id)) errors.push(`${at}.sourceIds[${j}]: unknown source ID`);
        else if (used.has(id)) errors.push(`${at}.sourceIds[${j}]: duplicate source reference ${id}`);
        else used.add(id);
      });
    }
  });
  return {errors,warnings};
}
