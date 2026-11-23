import {test} from 'node:test';
import assert from 'node:assert/strict';
import {conceptScene,sceneControls,plotPoint} from '../lib/concept-scenes';
import {reviewControls,type ReviewSceneKind} from '../lib/review-scenes';
import katex from 'katex';
const near=(a:number,b:number,tol=1e-9)=>assert.ok(Math.abs(a-b)<tol,a+' differs from '+b);
test('directional-derivative figure evaluates the original quotient rather than inferring a gradient',()=>{
 for(const a of [-1,-.5,0,.3,1]){
  const b=Math.sqrt(1-a*a),r=conceptScene('directional-map',a).readout;
  near(r.directionX*r.directionX+r.directionY*r.directionY,1);
  for(const t of [-.1,.02]){
   const x=t*a,y=t*b,quotient=x**3/(x*x+y*y)/t;
   near(r.directionalRate,quotient);
  }
  near(r.linearPrediction,a);
 }
 assert.ok(conceptScene('directional-map',.5).readout.derivativeMismatch>0);
});
test('complex spectral coherence reproduces both exact exercise matrices and the PSD boundary',()=>{
 for(const t of [0,.3,1]){
  const r=conceptScene('spectral-coherence',t).readout,re=3+4*t,im=3-3*t;
  const squaredModulus=re*re+im*im,determinant=4*9-squaredModulus;
  near(r.coherence,squaredModulus/36);near(r.spectralDeterminant,determinant);
  near(r.minimumEigenvalue**2-13*r.minimumEigenvalue+determinant,0);
  // Choosing the complex vector (-c/4,1) gives this direct quadratic form.
  const quadratic=4*squaredModulus/16-2*squaredModulus/4+9;
  near(quadratic,determinant/4);
  if(t===1)assert.ok(quadratic<0);
 }
 near(conceptScene('spectral-coherence',0).readout.coherence,.5);
 const bad=conceptScene('spectral-coherence',1).readout;
 near(bad.coherence,49/36);near(bad.spectralDeterminant,-13);assert.equal(bad.validSpectrum,0);
 const boundary=(-6+Math.sqrt(1836))/50;
 near(conceptScene('spectral-coherence',boundary).readout.coherence,1);
 near(conceptScene('spectral-coherence',boundary).readout.minimumEigenvalue,0);
});
test('stopping, selection and finite-population displays agree with direct finite probability calculations',()=>{
 for(const n of [1,2,5,12]){
  const s=conceptScene('stopping-tails',n).readout;
  const p=2**(-n),negativeValue=-(2**n-1);
  near(s.positiveContribution,1-p);near(s.negativeContribution,p*negativeValue);
  near(s.finiteExpectation,(1-p)+p*negativeValue);near(s.stoppedLimitExpectation,1);
 }
 near(conceptScene('selection-optimism',2).readout.selectedRisk,5-2/Math.sqrt(Math.PI));
 near(conceptScene('selection-optimism',0).readout.selectionBias,0);
 // Enumerate all samples of two from a fixed population (0,0,2,2):
 const population=[0,0,2,2],means:number[]=[];
 for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)means.push((population[i]+population[j])/2);
 const exact=means.reduce((sum,m)=>sum+(m-1)**2,0)/means.length;
 near(exact,(4/3)*(1-2/4)/2);
 const s=conceptScene('finite-population',20).readout;
 near(s.withoutReplacementVariance,1);near(s.withReplacementVariance,1.2375);
 near(conceptScene('finite-population',100).readout.withoutReplacementVariance,0);
});
test('endpoint CDF moments follow integration of the maximum density',()=>{
 for(const n of [1,2,5,50]){
  const s=conceptScene('endpoint-mle',n),r=s.readout;
  near(r.normalizedMedian**n,.5);
  // Integral of t^k times density n*t^(n-1), on [0,1].
  const mean=n/(n+1),second=n/(n+2);
  near(r.normalizedMean,mean);near(r.normalizedVariance,second-mean*mean);
  near(r.normalizedBias,mean-1);
  near(s.series[0].points[0][1],0);near(s.series[0].points.at(-1)![1],1);
 }
});
test('every new scene is finite and inside its plotting window across all allowed slider ticks',()=>{
 for(const kind of Object.keys(reviewControls) as ReviewSceneKind[]){
  const c=sceneControls[kind],steps=Math.round((c.max-c.min)/c.step);
  for(let i=0;i<=steps;i++){
   const value=Number((c.min+i*c.step).toFixed(10)),s=conceptScene(kind,value);
   for(const v of Object.values(s.readout))assert.ok(Number.isFinite(v),kind);
   for(const p of [...s.series.flatMap(s=>s.points),...s.markers?.map(m=>m.point)??[],...s.polygon??[]]){
    const [x,y]=plotPoint(p,s.bounds);assert.ok(x>=51.99&&x<=532.01&&y>=39.99&&y<=270.01,kind+' clipped point '+p);
   }
   assert.doesNotThrow(()=>katex.renderToString(s.formula,{throwOnError:true,strict:'error'}),kind);
  }
 }
});
test('projection error is recomputed from the original 3D vectors; conditioning squares singular-value ratios',()=>{
 const y=[2,1,2],u=[1,1,0];
 for(const a of [0,1,1.5,2,3]){
  near(conceptScene('projection-error',a).readout.residualSquared,y.reduce((sum,x,i)=>sum+(x-a*u[i])**2,0));
 }
 near(conceptScene('projection-error',1.5).readout.orthogonality,0);
 near(conceptScene('condition-squared',.2).readout.designCondition,5);
 near(conceptScene('condition-squared',.2).readout.gramCondition,25);
});
test('path and spike plots keep removable path holes separate from the defined origin',()=>{
 for(const c of [-2,0,1,3])for(const t of [-.7,.2]){
  const x=t,y=c*t*t,f=x*x*y/(x**4+y*y);
  near(conceptScene('curved-path',c).readout.pathLimit,f);
 }
 near(conceptScene('curved-path',1).readout.pathLimit,.5);
 for(const n of [2,5,40]){
  const scene=conceptScene('triangle-spike',n),points=scene.series[0].points;
  let area=0;for(let i=1;i<points.length;i++)area+=(points[i][0]-points[i-1][0])*(points[i][1]+points[i-1][1])/2;
  near(area,1/n);near(scene.readout.centerValue,1);
 }
});
test('density areas, finite-state transitions and partition integrals match direct calculations',()=>{
 for(const t of [0,.5,1,2])near(conceptScene('density-tail',t).readout.tailProbability,(4-t*t)/4);
 for(const q of [0,.3,1]){
  let p=[q,1-q];for(let k=0;k<10;k++)p=[.9*p[0]+.2*p[1],.1*p[0]+.8*p[1]];
  near(conceptScene('markov-two',q).readout.afterTen,p[0]);
 }
 const atOne=conceptScene('partition-mean',1).series[1].points.map(p=>p[1]);
 assert.deepEqual(atOne,[1,1,5,5]);
 near((atOne[0]+atOne[1])/4,(0+2)/4);near((atOne[2]+atOne[3])/4,(4+6)/4);
 const variance=conceptScene('dependent-mean',25).readout;
 near(variance.independentVariance,1/25);near(variance.copiedVariance,1);
});
test('shrinkage risk and beta density use exercise constants, and posterior density normalizes',()=>{
 near(conceptScene('shrinkage-risk',.75).readout.risk,3);
 const beta=conceptScene('beta-update',7);
 near(beta.readout.posteriorAlpha,9);near(beta.readout.posteriorBeta,5);near(beta.readout.posteriorMean,9/14);
 const p=beta.series[1].points;let area=0;for(let i=1;i<p.length;i++)area+=(p[i][0]-p[i-1][0])*(p[i][1]+p[i-1][1])/2;
 near(area,1,1e-6);
});
test('AR lag covariance and Lyapunov recurrence agree with independent moment calculations',()=>{
 const ar=conceptScene('ar-covariance',.8).readout;near(ar.variance,4);near(ar.lagOne,3.2);near(ar.lagThree,2.048);
 const cov=conceptScene('stationary-covariance',.6).readout;near(cov.variance,.25);near(cov.LRV,1);
 const stable=conceptScene('lyapunov',.5).readout;near(stable.secondVariance,15/4);near(stable.stationaryVariance,4);
 const unit=conceptScene('lyapunov',1);assert.ok(!('stationaryVariance' in unit.readout));
 near(unit.series[0].points[15][1],45);
});
test('Gaussian KL directions, marginal-score shrinkage and correlated sensor risks retain their distinct meanings',()=>{
 const kl=conceptScene('gaussian-kl',1).readout;near(kl.forwardKL,.5*Math.log(2));near(kl.reverseKL,1-.5*Math.log(2));
 const tweedie=conceptScene('tweedie',4).readout;near(tweedie.marginalScore,-1);near(tweedie.posteriorMean,3);
 const sensor=conceptScene('sensor-risk',1.25).readout;near(sensor.risk,.875);
 // Independent covariance quadratic, with both cross terms.
 for(const w of [0,.5,1,1.25])near(conceptScene('sensor-risk',w).readout.risk,w*w+4*(1-w)**2+2*1.5*w*(1-w));
});
test('conformal finite-sample boundary is infinite when rank exceeds calibration size; e-values use fixed weighted averages',()=>{
 const finite=conceptScene('conformal-rank',.2).readout;near(finite.rank,8);near(finite.lower,4);near(finite.upper,20);
 const infinite=conceptScene('conformal-rank',.05);near(infinite.readout.rank,10);near(infinite.readout.finiteInterval,0);
 assert.ok(!('quantile' in infinite.readout));assert.equal(infinite.series.length,1);
 near(conceptScene('e-mixture',.5).readout.eValue,21);near(conceptScene('e-mixture',.5).readout.rejectionThreshold,20);
});
