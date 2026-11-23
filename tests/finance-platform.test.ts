import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parseProgress,emptyProgress,scheduleReview} from '../lib/finance-progress';
import {tradeLedger,compoundReturn,backtestDemo} from '../lib/finance-lab';

test('ledger reconciles dividends, fees and break-even price',()=>{
 const r=tradeLedger(10,100,108,2,1,1);assert.equal(r.pnl,98);assert.equal(r.initial,1001);assert.equal(r.final,1099);assert.equal(r.breakEven,98.2);
 assert.ok(Math.abs(tradeLedger(10,100,r.breakEven,2,1,1).pnl)<1e-10);
 assert.equal(tradeLedger(10,100,100.1,0,1,1).pnl,-1);
 assert.throws(()=>tradeLedger(0,100,108,0,1,1));assert.throws(()=>tradeLedger(1,NaN,108,0,1,1));
});
test('compounding handles total loss and rejects invalid returns',()=>{assert.ok(Math.abs(compoundReturn([.1,-.1])+.01)<1e-12);assert.equal(compoundReturn([.5,-1,.5]),-1);assert.throws(()=>compoundReturn([-1.01]));assert.throws(()=>compoundReturn([Infinity]));assert.throws(()=>compoundReturn([]));});
test('backtest signals cannot change past rows when future prices change',()=>{
 const prices=[100,102,101,104,103,105,100,98];const a=backtestDemo(prices,10);const b=backtestDemo([...prices.slice(0,-1),1000],10);
 assert.deepEqual(a.rows.slice(0,-1),b.rows.slice(0,-1));assert.equal(a.rows.at(-1)?.position,b.rows.at(-1)?.position);
 assert.equal(a.rows[0].position,0);assert.equal(a.rows[1].position,0);assert.equal(a.rows[2].position,1);
 assert.ok(backtestDemo(prices,0).equity>=a.equity);assert.equal(backtestDemo([100,100,100,100],10).equity,1);
 assert.throws(()=>backtestDemo(prices,-1));
 const entry=backtestDemo([100,110,100,50],100);assert.ok(Math.abs(entry.equity-.5/1.01)<1e-12);
 assert.ok(backtestDemo([100,110,100,.000001],100).equity>0);
});
test('progress backups round-trip and reject corruption without mutating input',()=>{
 const p=emptyProgress();p.lessons.pnl={step:2,drafts:{'pnl-one':'98'},ratings:{'pnl-one':'good'},completed:true,interval:2,reviewAt:12345};p.projects.ledger=['task-0'];
 assert.deepEqual(parseProgress(JSON.parse(JSON.stringify(p))),p);
 for(const bad of [{...p,version:2},{...p,lessons:{pnl:{...p.lessons.pnl,step:-1}}},{...p,projects:{ledger:['__proto__']}},{...p,lessons:{pnl:{...p.lessons.pnl,drafts:{bad:'x'.repeat(12001)}}}}])assert.throws(()=>parseProgress(bad));
 assert.equal(p.lessons.pnl.step,2);
});
test('review scheduling resets after difficulty and caps growing intervals',()=>{
 const row={step:0,drafts:{},ratings:{},interval:16};assert.equal(scheduleReview(row,true,0).interval,30);assert.equal(scheduleReview(row,false,0).reviewAt,86400000);assert.equal(scheduleReview({...row,interval:1},true,0).reviewAt,172800000);
});
