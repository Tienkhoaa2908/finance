import {test} from 'node:test';
import assert from 'node:assert/strict';
import {numericTexValue,numericComparisons} from '../lib/numeric-math-check';
test('numeric TeX grammar handles signs, fractions, powers and Gaussian constants without evaluation',()=>{
 for(const [s,v] of [
  ['\\frac{3}{2}+\\tfrac12',2],['-2^2',-4],['2^{-3}',1/8],
  ['\\sqrt{4+5}',3],['3(2+1)',9],
  ['-\\frac12[\\log(2\\pi)+\\log(2.25)+1]',-1.824403641312837],
 ] as const)assert.ok(Math.abs(numericTexValue(s)!-v)<1e-12,s);
});
test('arithmetic auditor catches incorrect log scores and respects explicit rounding',()=>{
 const bad=numericComparisons('-\\frac12[\\log(2\\pi)+\\log(2.25)+1]\\approx-1.3649');
 assert.equal(bad.length,1);assert.equal(bad[0].ok,false);
 assert.equal(numericComparisons('-\\frac12[\\log(2\\pi)+\\log(2.25)+1]\\approx-1.8244')[0].ok,true);
 assert.equal(numericComparisons('0.4(0.6)=0.24')[0].ok,true);
 assert.equal(numericComparisons('\\frac{12+2(-4+1)}{9}=\\frac23')[0].ok,true);
 assert.equal(numericComparisons('SE\\approx\\sqrt{0.016}=0.1265')[0].ok,false);
 assert.equal(numericComparisons('SE\\approx\\sqrt{0.016}\\approx0.1265')[0].ok,true);
 assert.equal(numericComparisons('13/35\\approx.3714')[0].ok,true);
 assert.equal(numericComparisons('0.001234\\approx1.234e-3')[0].ok,true);
 assert.equal(numericComparisons('\\ln(1.1)\\approx0.1-0.005=0.095').length,1);
});
test('unknown variables, code, incomplete expressions and nonfinite values are skipped',()=>{
 for(const s of ['x+1','process.exit()','1/0','0/0','1+','Math.random()','\\operatorname{Var}(X)','\\log(-1)'])assert.equal(numericTexValue(s),undefined,s);
});
