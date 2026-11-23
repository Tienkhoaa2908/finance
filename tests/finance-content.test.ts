import {test} from 'node:test';
import assert from 'node:assert/strict';
import {auditFinanceLesson} from '../scripts/audit-finance-content';

const pair = (value:string)=>({vi:value,en:value});
function sample() {
  return {id:'cashflows',revision:'1',title:pair('Dòng tiền'),intro:pair('Một ví dụ.'),
    sources:[{id:'source',title:'Source',url:'https://example.org/finance',section:'Chapter 1, cash flows'}],
    steps:[{id:'profit',title:pair('Lợi nhuận'),body:pair('$R=(V_1-V_0)/V_0$'),
      question:pair('Giải thích mẫu số.'),answer:pair('Vốn đầu tư ban đầu.'),sourceIds:['source']}]};
}

test('finance audit accepts reordered formulas and whitespace differences, preserving multiplicity',()=>{
  const lesson=sample();
  lesson.steps[0].body={vi:'$a+b$ và $c$ và $c$.',en:'$c$, $a + b$ and $c$.'};
  assert.deepEqual(auditFinanceLesson(lesson).errors,[]);
  lesson.steps[0].body.en='$a+b$ and $c$.';
  assert.ok(auditFinanceLesson(lesson).errors.some(e=>e.includes('multisets differ')));
});

test('finance audit catches duplicate step/source identifiers and unresolved citations',()=>{
  const lesson=sample();
  lesson.steps.push(structuredClone(lesson.steps[0]));
  lesson.sources.push(structuredClone(lesson.sources[0]));
  lesson.steps[0].sourceIds=['missing'];
  const {errors}=auditFinanceLesson(lesson);
  for(const term of ['duplicate step ID','duplicate source ID','unknown source ID']) assert.ok(errors.some(e=>e.includes(term)),term);
});

test('finance audit rejects insecure citation URLs, missing locators and missing translations',()=>{
  const lesson=sample();
  lesson.sources[0].url='http://example.org';
  lesson.sources[0].section=' ';
  lesson.steps[0].answer.vi='';
  const {errors}=auditFinanceLesson(lesson);
  for(const term of ['HTTPS URL','section:','answer.vi:']) assert.ok(errors.some(e=>e.includes(term)),term);
  lesson.sources[0].url='https://user:password@example.org';
  assert.ok(auditFinanceLesson(lesson).errors.some(e=>e.includes('HTTPS URL')));
});

test('finance audit parses hidden solutions as KaTeX but ignores code examples',()=>{
  const lesson=sample();
  lesson.steps[0].answer=pair('$\\notARealMathCommand{R}$');
  assert.ok(auditFinanceLesson(lesson).errors.some(e=>e.includes('answer.vi: invalid KaTeX')));
  lesson.steps[0].answer=pair('`$\\notARealMathCommand{R}$`\n\n```text\n$\\notARealMathCommand{R}$\n```');
  assert.deepEqual(auditFinanceLesson(lesson).errors,[]);
});

test('finance editorial hints warn without declaring content invalid or shallow',()=>{
  const lesson=sample();
  lesson.intro=pair('Một câu đầy đủ. Một câu đầy đủ.');
  const result=auditFinanceLesson(lesson);
  assert.equal(result.errors.length,0);
  assert.ok(result.warnings.some(w=>w.includes('identical sentence')));
  assert.ok(auditFinanceLesson(null).errors.length);
});

test('cash-flow fixture reconciles cash ledger, terminal wealth and net return exactly',()=>{
  // Integer cents avoid floating rounding; dividends are retained as cash,
  // with no reinvestment, tax, external deposit or financing in this fixture.
  const shares=10n, buyPrice=10000n, sellPrice=10800n;
  const buyFee=100n, sellFee=100n, dividends=2000n;
  const initial=shares*buyPrice+buyFee;
  const terminal=shares*sellPrice+dividends-sellFee;
  const ledger=[-shares*buyPrice,-buyFee,dividends,shares*sellPrice,-sellFee];
  const profit=ledger.reduce((sum,flow)=>sum+flow,0n);
  assert.equal(initial,100100n);
  assert.equal(terminal,109900n);
  assert.equal(profit,9800n);
  assert.equal(terminal-initial,profit);
  // Exact reduced fraction is 98/1001, not the price-only 8/100.
  assert.equal(profit*1001n,initial*98n);
  assert.notEqual(profit*100n,initial*8n);
  const returnPercent=100*Number(profit)/Number(initial);
  assert.ok(returnPercent>9.79 && returnPercent<9.80);
});
