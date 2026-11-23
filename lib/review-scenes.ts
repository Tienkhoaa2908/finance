import type {Scene,Point} from './concept-scenes';
export type ReviewSceneKind='projection-error'|'condition-squared'|'curved-path'|'triangle-spike'|'density-tail'|'markov-two'|'partition-mean'|'dependent-mean'|'shrinkage-risk'|'beta-update'|'ar-covariance'|'stationary-covariance'|'lyapunov'|'gaussian-kl'|'tweedie'|'conformal-rank'|'e-mixture'|'sensor-risk'|'stopping-tails'|'selection-optimism'|'finite-population'|'endpoint-mle'|'spectral-coherence'|'directional-map';
export const reviewControls:Record<ReviewSceneKind,{symbol:string;min:number;max:number;step:number;initial:number}>={
 'projection-error':{symbol:'a',min:0,max:3,step:.05,initial:1.5},
 'condition-squared':{symbol:'s',min:.1,max:1,step:.01,initial:.2},
 'curved-path':{symbol:'c',min:-3,max:3,step:.1,initial:1},
 'triangle-spike':{symbol:'n',min:2,max:40,step:1,initial:5},
 'density-tail':{symbol:'t',min:0,max:2,step:.05,initial:1},
 'markov-two':{symbol:'q_0',min:0,max:1,step:.05,initial:1},
 'partition-mean':{symbol:'t',min:0,max:1,step:.05,initial:1},
 'dependent-mean':{symbol:'n',min:1,max:100,step:1,initial:25},
 'shrinkage-risk':{symbol:'\\lambda',min:0,max:1,step:.01,initial:.75},
 'beta-update':{symbol:'S',min:0,max:10,step:1,initial:7},
 'ar-covariance':{symbol:'\\phi',min:-.95,max:.95,step:.05,initial:.8},
 'stationary-covariance':{symbol:'\\phi',min:-.9,max:.9,step:.05,initial:.6},
 'lyapunov':{symbol:'a',min:-1.1,max:1.1,step:.05,initial:.5},
 'gaussian-kl':{symbol:'m',min:0,max:3,step:.05,initial:1},
 'tweedie':{symbol:'y',min:-6,max:6,step:.1,initial:4},
 'conformal-rank':{symbol:'\\alpha',min:.05,max:.5,step:.05,initial:.2},
 'e-mixture':{symbol:'w',min:0,max:1,step:.01,initial:.5},
 'sensor-risk':{symbol:'w',min:-.5,max:1.5,step:.05,initial:1.25},
 'stopping-tails':{symbol:'n',min:1,max:12,step:1,initial:3},
 'selection-optimism':{symbol:'\\sigma',min:0,max:3,step:.05,initial:1},
 'finite-population':{symbol:'n',min:1,max:100,step:1,initial:20},
 'endpoint-mle':{symbol:'n',min:1,max:50,step:1,initial:5},
 'spectral-coherence':{symbol:'t',min:0,max:1,step:.02,initial:0},
 'directional-map':{symbol:'a',min:-1,max:1,step:.02,initial:.5},
};
export const reviewReadoutLabels:Record<string,[string,string]>={
 directionX:['Direction first coordinate','Tọa độ đầu của hướng'],directionY:['Direction second coordinate','Tọa độ sau của hướng'],directionalRate:['Actual directional derivative','Đạo hàm theo hướng thực'],linearPrediction:['Prediction from coordinate partials','Dự đoán từ đạo hàm riêng tọa độ'],derivativeMismatch:['Derivative mismatch','Độ lệch hai dự đoán'],
 crossReal:['Cross-spectrum real part','Phần thực phổ chéo'],crossImag:['Cross-spectrum imaginary part','Phần ảo phổ chéo'],coherence:['Formal coherence ratio','Tỷ số coherence hình thức'],spectralDeterminant:['Spectral matrix determinant','Định thức ma trận phổ'],minimumEigenvalue:['Smallest eigenvalue','Trị riêng nhỏ nhất'],validSpectrum:['Valid PSD matrix','Ma trận PSD hợp lệ'],
 positiveContribution:['Positive contribution to expectation','Đóng góp dương vào kỳ vọng'],negativeContribution:['Negative contribution to expectation','Đóng góp âm vào kỳ vọng'],finiteExpectation:['Expectation at finite horizon','Kỳ vọng ở chân trời hữu hạn'],stoppedLimitExpectation:['Expectation at unbounded stop','Kỳ vọng ở thời điểm dừng không bị chặn'],
 noiseScale:['Estimation noise SD','Độ lệch chuẩn nhiễu ước lượng'],trueRisk:['Common population risk','Rủi ro quần thể chung'],selectedRisk:['Expected selected estimate','Kỳ vọng ước lượng sau chọn'],selectionBias:['Expected selection bias','Bias chọn theo kỳ vọng'],
 sampleFraction:['Sampling fraction','Tỷ lệ lấy mẫu'],withoutReplacementVariance:['Variance without replacement','Phương sai không hoàn lại'],withReplacementVariance:['Variance with replacement','Phương sai có hoàn lại'],finitePopulationFactor:['Finite-population factor','Hệ số quần thể hữu hạn'],
 normalizedMean:['Mean divided by endpoint','Trung bình chia đầu mút'],normalizedVariance:['Variance divided by squared endpoint','Phương sai chia bình phương đầu mút'],normalizedBias:['Bias divided by endpoint','Bias chia đầu mút'],normalizedMedian:['Median divided by endpoint','Trung vị chia đầu mút'],
 coefficient:['Line coefficient','Hệ số trên đường'],residualSquared:['Squared residual','Bình phương phần dư'],orthogonality:['Dot product with residual','Tích vô hướng với phần dư'],minimumError:['Minimum squared error','Sai số bình phương nhỏ nhất'],
 singularMinimum:['Smallest singular value','Singular value nhỏ nhất'],designCondition:['Design condition number','Số điều kiện thiết kế'],gramCondition:['Gram condition number','Số điều kiện Gram'],
 pathCoefficient:['Curved-path coefficient','Hệ số đường cong'],pathLimit:['Selected path limit','Giới hạn theo đường đã chọn'],valueAtOrigin:['Value at origin','Giá trị tại gốc'],pathContradiction:['Selected path disproves continuity','Đường đã chọn bác bỏ liên tục'],
 baseWidth:['Triangle base width','Độ rộng đáy tam giác'],area:['Integral','Tích phân'],centerValue:['Value at center','Giá trị tại tâm'],
 threshold:['Tail threshold','Ngưỡng phần đuôi'],tailProbability:['Tail probability','Xác suất phần đuôi'],normalizer:['Density constant','Hằng số mật độ'],
 initialProbability:['Initial state-one probability','Xác suất trạng thái một ban đầu'],afterOne:['Probability after one step','Xác suất sau một bước'],afterTen:['Probability after ten steps','Xác suất sau mười bước'],stationaryProbability:['Invariant probability','Xác suất bất biến'],
 mixFraction:['Interpolation fraction','Tỷ lệ nội suy'],firstBlockMean:['First block mean','Trung bình khối đầu'],secondBlockMean:['Second block mean','Trung bình khối sau'],overallMean:['Overall mean','Trung bình toàn bộ'],withinBlockError:['MSE relative to conditional mean','MSE so với trung bình điều kiện'],
 independentVariance:['Independent average variance','Phương sai trung bình độc lập'],copiedVariance:['Copied average variance','Phương sai trung bình sao chép'],
 risk:['Expected squared error','Kỳ vọng sai số bình phương'],rawRisk:['Raw estimator risk','Rủi ro ước lượng thô'],targetRisk:['Target-only risk','Rủi ro chỉ dùng đích'],minimumRisk:['Minimum risk','Rủi ro nhỏ nhất'],
 successes:['Successes','Số thành công'],failures:['Failures','Số thất bại'],posteriorAlpha:['Posterior alpha','Alpha hậu nghiệm'],posteriorBeta:['Posterior beta','Beta hậu nghiệm'],posteriorMean:['Posterior mean','Trung bình hậu nghiệm'],predictiveProbability:['Next success probability','Xác suất thành công lần tới'],
 phi:['Autoregressive coefficient','Hệ số tự hồi quy'],lagOne:['Lag-one covariance','Covariance trễ một'],lagThree:['Lag-three covariance','Covariance trễ ba'],
 transition:['State coefficient','Hệ số trạng thái'],firstVariance:['Variance after one step','Phương sai sau một bước'],secondVariance:['Variance after two steps','Phương sai sau hai bước'],stable:['Stable transition','Chuyển trạng thái ổn định'],stationaryVariance:['Stationary variance','Phương sai dừng'],
 meanShift:['Mean coordinate','Tọa độ trung bình'],forwardKL:['Forward KL','KL chiều thuận'],reverseKL:['Reverse KL','KL chiều ngược'],observation:['Observation','Quan sát'],marginalScore:['Marginal score','Score biên'],posteriorVariance:['Posterior variance','Phương sai hậu nghiệm'],
 alpha:['Miscoverage level','Mức không phủ'],rank:['Selected rank','Hạng đã chọn'],finiteInterval:['Finite interval','Khoảng hữu hạn'],quantile:['Residual quantile','Phân vị phần dư'],lower:['Lower endpoint','Đầu mút dưới'],upper:['Upper endpoint','Đầu mút trên'],
 weight:['First weight','Trọng số thứ nhất'],eValue:['Mixture e-value','E-value hỗn hợp'],rejectionThreshold:['Rejection threshold','Ngưỡng bác bỏ'],crossesThreshold:['Crosses threshold','Vượt ngưỡng'],unconstrainedMinimum:['Minimum over real weights','Nhỏ nhất trên trọng số thực'],constrainedMinimum:['Minimum on [0,1]','Nhỏ nhất trên [0,1]'],
};
const curve=(f:(x:number)=>number,a:number,b:number,n=200):Point[]=>Array.from({length:n+1},(_,i)=>{const x=a+(b-a)*i/n;return[x,f(x)];});
const factorial=(n:number):number=>n<=1?1:n*factorial(n-1);
export function reviewScene(kind:ReviewSceneKind,v:number):Scene{
 if(kind==='directional-map'){
  return{bounds:[-1,1,-1.1,1.1],series:[{name:'directional',points:curve(a=>a**3,-1,1)},{name:'linear',points:[[-1,-1],[1,1]],dashed:true}],markers:[{name:'directional',point:[v,v**3]},{name:'linear',point:[v,v]}],readout:{directionX:v,directionY:Math.sqrt(Math.max(0,1-v*v)),directionalRate:v**3,linearPrediction:v,derivativeMismatch:Math.abs(v-v**3)},formula:'p(x,y)=\\frac{x^3}{x^2+y^2},\\ p(0,0)=0:\\quad v=(a,\\sqrt{1-a^2}),\\quad D_vp(0)=a^3,\\quad L(v)=a'};
 }
 if(kind==='spectral-coherence'){
  const normSquared=(t:number)=>(3+4*t)**2+9*(1-t)**2,coherence=(t:number)=>normSquared(t)/36;
  return{bounds:[0,1,0,1.45],series:[{name:'coherence',points:curve(coherence,0,1)},{name:'PSD-bound',points:[[0,1],[1,1]],dashed:true}],markers:[{name:'chosen',point:[v,coherence(v)]}],readout:{mixFraction:v,crossReal:3+4*v,crossImag:3*(1-v),coherence:coherence(v),spectralDeterminant:36-normSquared(v),minimumEigenvalue:(13-Math.sqrt(25+4*normSquared(v)))/2,validSpectrum:normSquared(v)<=36+1e-12?1:0},formula:'F(t)=\\begin{pmatrix}4&c_t\\\\\\overline{c_t}&9\\end{pmatrix},\\quad c_t=3+4t+3(1-t)i,\\quad C(t)=\\frac{|c_t|^2}{36};\\quad F(t)\\succeq0\\iff C(t)\\le1'};
 }
 if(kind==='stopping-tails'){
  const n=Math.round(v),positive=(k:number)=>1-2**(-k),indices=Array.from({length:12},(_,i)=>i+1);
  return{bounds:[1,12,-1.1,1.1],series:[{name:'positive',points:indices.map(k=>[k,positive(k)]),dots:true},{name:'negative',points:indices.map(k=>[k,-positive(k)]),dots:true},{name:'mean',points:[[1,0],[12,0]],dashed:true}],markers:[{name:'positive',point:[n,positive(n)]},{name:'negative',point:[n,-positive(n)]}],readout:{n,positiveContribution:positive(n),negativeContribution:-positive(n),finiteExpectation:0,stoppedLimitExpectation:1},formula:'E[M_n^+]=1-2^{-n},\\quad E[M_n^-]=1-2^{-n},\\quad E[M_n]=0,\\quad E[M_T]=1'};
 }
 if(kind==='selection-optimism'){
  const selected=(s:number)=>5-s/Math.sqrt(Math.PI);
  return{bounds:[0,3,3,5.3],series:[{name:'true',points:[[0,5],[3,5]],dashed:true},{name:'selected',points:curve(selected,0,3)}],markers:[{name:'selected',point:[v,selected(v)]}],readout:{noiseScale:v,trueRisk:5,selectedRisk:selected(v),selectionBias:-v/Math.sqrt(Math.PI)},formula:'\\hat R_j=5+Z_j,\\quad Z_1,Z_2\\stackrel{\\rm iid}{\\sim}N(0,\\sigma^2):\\quad E[\\min_j\\hat R_j]=5-\\frac\\sigma{\\sqrt\\pi}'};
 }
 if(kind==='finite-population'){
  const n=Math.round(v),indices=Array.from({length:100},(_,i)=>i+1),without=(k:number)=>25*(1-k/100)/k,withReplacement=(k:number)=>24.75/k;
  return{bounds:[1,100,0,26],series:[{name:'without',points:indices.map(k=>[k,without(k)]),dots:true},{name:'with',points:indices.map(k=>[k,withReplacement(k)]),dots:true}],markers:[{name:'without',point:[n,without(n)]},{name:'with',point:[n,withReplacement(n)]}],readout:{n,sampleFraction:n/100,withoutReplacementVariance:without(n),withReplacementVariance:withReplacement(n),finitePopulationFactor:1-n/100},formula:'N=100,\\ S^2=25:\\quad V_{\\rm without}=\\frac{25}{n}(1-\\frac n{100}),\\quad V_{\\rm with}=\\frac{99}{100}\\frac{25}{n}'};
 }
 if(kind==='endpoint-mle'){
  const n=Math.round(v),median=2**(-1/n);
  return{bounds:[0,1,0,1.05],series:[{name:'maximum-cdf',points:curve(t=>t**n,0,1,400)}],markers:[{name:'median',point:[median,.5]}],readout:{n,normalizedMean:n/(n+1),normalizedVariance:n/((n+1)**2*(n+2)),normalizedBias:-1/(n+1),normalizedMedian:median},formula:'X_i\\stackrel{\\rm iid}{\\sim}U(0,\\theta),\\ M=\\max_iX_i:\\quad P(M/\\theta\\le t)=t^n\\ (0\\le t\\le1),\\quad\\frac{\\operatorname{Var}(M)}{\\theta^2}=\\frac n{(n+1)^2(n+2)}'};
 }
 if(kind==='projection-error'){
  const loss=(a:number)=>(2-a)**2+(1-a)**2+4;
  return{bounds:[0,3,0,9.5],series:[{name:'error',points:curve(loss,0,3)}],markers:[{name:'chosen',point:[v,loss(v)]},{name:'minimum',point:[1.5,4.5]}],readout:{coefficient:v,residualSquared:loss(v),orthogonality:3-2*v,minimumError:4.5},formula:'y=(2,1,2)^T,\\quad u=(1,1,0)^T,\\quad \\|y-au\\|^2=2(a-\\tfrac32)^2+\\tfrac92'};
 }
 if(kind==='condition-squared'){
  return{bounds:[.1,1,0,105],series:[{name:'design',points:curve(s=>1/s,.1,1)},{name:'gram',points:curve(s=>1/(s*s),.1,1)}],markers:[{name:'design',point:[v,1/v]},{name:'gram',point:[v,1/(v*v)]}],readout:{singularMinimum:v,designCondition:1/v,gramCondition:1/(v*v)},formula:'X=\\operatorname{diag}(1,s),\\ 0<s\\le1:\\quad\\kappa_2(X)=s^{-1},\\quad\\kappa_2(X^TX)=s^{-2}'};
 }
 if(kind==='curved-path'){
  const limit=v/(1+v*v);
  return{bounds:[-1,1,-.6,.6],series:[{name:'axis',points:[[-1,0],[1,0]],dashed:true},{name:'curved',points:[[-1,limit],[1,limit]]}],markers:[{name:'hole',point:[0,limit],open:true},{name:'origin',point:[0,0]}],readout:{pathCoefficient:v,pathLimit:limit,valueAtOrigin:0,pathContradiction:v!==0?1:0},formula:'f(x,y)=\\frac{x^2y}{x^4+y^2},\\quad f(0,0)=0,\\quad f(t,ct^2)=\\frac{c}{1+c^2}\\ (t\\ne0)'};
 }
 if(kind==='triangle-spike'){
  const n=Math.round(v),left=.5-1/n,right=.5+1/n;
  return{bounds:[0,1,0,1.1],series:[{name:'spike',points:[[0,0],[left,0],[.5,1],[right,0],[1,0]]},{name:'limit',points:[[0,0],[1,0]],dashed:true}],markers:[{name:'hole',point:[.5,0],open:true},{name:'limit',point:[.5,1]}],readout:{n,baseWidth:2/n,area:1/n,centerValue:1},formula:'f_n(x)=\\max\\{1-n|x-\\tfrac12|,0\\},\\quad \\int_0^1 f_n(x)\\,dx=\\frac1n'};
 }
 if(kind==='density-tail'){
  const tail=curve(x=>x/2,v,2);
  return{bounds:[0,2,0,1.1],series:[{name:'density',points:curve(x=>x/2,0,2)}],polygon:[[v,0],...tail,[2,0]],readout:{threshold:v,tailProbability:1-v*v/4,normalizer:.5},formula:'f(x)=\\tfrac12x\\,\\mathbf1_{(0,2)}(x),\\quad P(X>t)=1-\\frac{t^2}{4}\\quad(0\\le t\\le2)'};
 }
 if(kind==='markov-two'){
  const points:Point[]=Array.from({length:21},(_,k)=>[k,2/3+(v-2/3)*.7**k]);
  return{bounds:[0,20,0,1],series:[{name:'probability',points,dots:true},{name:'stationary',points:[[0,2/3],[20,2/3]],dashed:true}],readout:{initialProbability:v,afterOne:.2+.7*v,afterTen:points[10][1],stationaryProbability:2/3},formula:'P=\\begin{pmatrix}.9&.1\\\\.2&.8\\end{pmatrix},\\quad q_{k+1}=.2+.7q_k,\\quad\\pi=(\\tfrac23,\\tfrac13)'};
 }
 if(kind==='partition-mean'){
  const X=[0,2,4,6],Z=[v,2-v,4+v,6-v];
  return{bounds:[.5,4.5,-.5,6.5],series:[{name:'original',points:X.map((x,i)=>[i+1,x]),dots:true},{name:'block-mean',points:Z.map((z,i)=>[i+1,z]),dots:true}],readout:{mixFraction:v,firstBlockMean:(Z[0]+Z[1])/2,secondBlockMean:(Z[2]+Z[3])/2,overallMean:3,withinBlockError:(1-v)**2},formula:'X=(0,2,4,6),\\quad Z_t=(1-t)X+tE[X\\mid\\mathcal G],\\quad E[X\\mid\\mathcal G]=(1,1,5,5)'};
 }
 if(kind==='dependent-mean'){
  const n=Math.round(v);
  return{bounds:[1,100,0,1.1],series:[{name:'independent',points:curve(n=>1/n,1,100,99)},{name:'copied',points:[[1,1],[100,1]],dashed:true}],markers:[{name:'independent',point:[n,1/n]},{name:'copied',point:[n,1]}],readout:{n,independentVariance:1/n,copiedVariance:1},formula:'\\operatorname{Var}(Z)=1:\\quad X_i\\stackrel{\\rm iid}{\\sim}Z\\Rightarrow\\operatorname{Var}(\\bar X_n)=1/n;\\quad X_i=Z\\Rightarrow\\operatorname{Var}(\\bar X_n)=1'};
 }
 if(kind==='shrinkage-risk'){
  const risk=(l:number)=>12*(1-l)**2+4*l*l;
  return{bounds:[0,1,0,12.5],series:[{name:'risk',points:curve(risk,0,1)}],markers:[{name:'chosen',point:[v,risk(v)]},{name:'optimal',point:[.75,3]}],readout:{lambda:v,risk:risk(v),rawRisk:12,targetRisk:4,minimumRisk:3},formula:'R(\\lambda)=12(1-\\lambda)^2+4\\lambda^2=3+16(\\lambda-\\tfrac34)^2'};
 }
 if(kind==='beta-update'){
  const successes=Math.round(v),a=2+successes,b=12-successes;
  const density=(p:number)=>factorial(a+b-1)/(factorial(a-1)*factorial(b-1))*p**(a-1)*(1-p)**(b-1);
  const points=curve(density,0,1);
  return{bounds:[0,1,0,Math.max(2,...points.map(p=>p[1]))*1.1],series:[{name:'prior',points:curve(p=>6*p*(1-p),0,1)},{name:'posterior',points}],readout:{successes,failures:10-successes,posteriorAlpha:a,posteriorBeta:b,posteriorMean:a/14,predictiveProbability:a/14},formula:'p\\sim\\operatorname{Beta}(2,2),\\ S\\mid p\\sim\\operatorname{Bin}(10,p):\\quad p\\mid S\\sim\\operatorname{Beta}(2+S,12-S)'};
 }
 if(kind==='ar-covariance'||kind==='stationary-covariance'){
  const gamma0=kind==='ar-covariance'?1.44/(1-v*v):.25;
  const points:Point[]=Array.from({length:25},(_,i)=>[i-12,gamma0*v**Math.abs(i-12)]);
  return{bounds:[-12,12,Math.min(0,...points.map(p=>p[1]))-.05,gamma0*1.1],series:[{name:'covariance',points,dots:true}],readout:{phi:v,variance:gamma0,lagOne:gamma0*v,lagThree:gamma0*v**3,LRV:gamma0*(1+v)/(1-v)},formula:kind==='ar-covariance'?'\\gamma(h)=\\frac{1.44}{1-\\phi^2}\\phi^{|h|},\\quad |\\phi|<1':'\\gamma(h)=\\tfrac14\\phi^{|h|},\\quad\\Omega=\\tfrac14\\frac{1+\\phi}{1-\\phi},\\quad |\\phi|<1'};
 }
 if(kind==='lyapunov'){
  let p=0;const points:Point[]=[[0,0]];for(let k=1;k<=15;k++){p=v*v*p+3;points.push([k,p]);}
  return{bounds:[0,15,0,Math.max(5,p)*1.1],series:[{name:'covariance',points,dots:true}],readout:{transition:v,firstVariance:3,secondVariance:3+3*v*v,stable:Math.abs(v)<1?1:0,...(Math.abs(v)<1?{stationaryVariance:3/(1-v*v)}:{})},formula:'P_0=0,\\quad P_{k+1}=a^2P_k+3;\\quad |a|<1\\Rightarrow P_\\infty=\\frac3{1-a^2}'};
 }
 if(kind==='gaussian-kl'){
  const forward=(m:number)=>.25*m*m-.25+.5*Math.log(2),reverse=(m:number)=>.5*m*m+.5-.5*Math.log(2);
  return{bounds:[0,3,0,5],series:[{name:'forward',points:curve(forward,0,3)},{name:'reverse',points:curve(reverse,0,3)}],markers:[{name:'forward',point:[v,forward(v)]},{name:'reverse',point:[v,reverse(v)]}],readout:{meanShift:v,forwardKL:forward(v),reverseKL:reverse(v)},formula:'P=N(0,I_2),\\ Q=N((m,0)^T,\\operatorname{diag}(2,1)):\\quad D(P\\Vert Q)=\\tfrac14m^2-\\tfrac14+\\tfrac12\\log2'};
 }
 if(kind==='tweedie'){
  return{bounds:[-6,6,-6.5,6.5],series:[{name:'identity',points:[[-6,-6],[6,6]],dashed:true},{name:'posterior-mean',points:[[-6,-4.5],[6,4.5]]}],markers:[{name:'posterior',point:[v,.75*v]}],readout:{observation:v,marginalScore:-v/4,posteriorMean:.75*v,posteriorVariance:.75},formula:'\\Theta\\sim N(0,3),\\quad Y\\mid\\Theta\\sim N(\\Theta,1):\\quad E[\\Theta\\mid Y=y]=y+\\partial_y\\log m(y)=\\tfrac34y'};
 }
 if(kind==='conformal-rank'){
  // Subtract only round-off at an integer rank, not a mathematical tie correction.
  const k=Math.ceil(10*(1-v)-1e-12),finite=k<=9;
  return{bounds:[0,10,0,10],series:[{name:'scores',points:Array.from({length:9},(_,i)=>[i+1,i+1] as Point),dots:true},...(finite?[{name:'selected',points:[[0,k],[10,k]] as Point[],dashed:true}]:[])],...(finite?{markers:[{name:'rank',point:[k,k] as Point}]}:{}),readout:{alpha:v,rank:k,finiteInterval:finite?1:0,...(finite?{quantile:k,lower:12-k,upper:12+k}:{})},formula:'n=9,\\quad k=\\lceil(n+1)(1-\\alpha)\\rceil,\\quad q=R_{(k)}\\ (k\\le n),\\quad k=n+1\\Rightarrow q=+\\infty'};
 }
 if(kind==='e-mixture'){
  const value=(w:number)=>40*w+2*(1-w);
  return{bounds:[0,1,0,42],series:[{name:'mixture',points:[[0,2],[1,40]]},{name:'threshold',points:[[0,20],[1,20]],dashed:true}],markers:[{name:'chosen',point:[v,value(v)]}],readout:{weight:v,eValue:value(v),rejectionThreshold:20,crossesThreshold:value(v)>=20?1:0},formula:'E(w)=wE_1+(1-w)E_2=2+38w,\\quad E_1=40,\\ E_2=2,\\quad 1/\\alpha=20'};
 }
 const risk=(w:number)=>w*w+4*(1-w)**2+3*w*(1-w);
 return{bounds:[-.5,1.5,0,7.5],series:[{name:'risk',points:curve(risk,-.5,1.5)}],markers:[{name:'optimal',point:[1.25,.875]},{name:'chosen',point:[v,risk(v)]},{name:'constrained',point:[1,1]}],readout:{weight:v,risk:risk(v),unconstrainedMinimum:.875,constrainedMinimum:1},formula:'\\operatorname{Var}(we_1+(1-w)e_2)=w^2+4(1-w)^2+3w(1-w)=2(w-1.25)^2+.875'};
}
