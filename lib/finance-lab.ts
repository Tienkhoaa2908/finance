export function tradeLedger(q:number,buy:number,sell:number,dividend:number,feeBuy:number,feeSell:number){
 if(![q,buy,sell,dividend,feeBuy,feeSell].every(Number.isFinite)||q<=0||buy<=0||sell<0||dividend<0||feeBuy<0||feeSell<0)throw new Error('Invalid ledger inputs');
 const initial=q*buy+feeBuy;const final=q*(sell+dividend)-feeSell;
 return {initial,final,pnl:final-initial,return:(final-initial)/initial,breakEven:buy-dividend+(feeBuy+feeSell)/q};
}
export function compoundReturn(returns:number[]){if(!returns.length||!returns.every(x=>Number.isFinite(x)&&x>=-1))throw new Error('Invalid returns');return returns.reduce((wealth,r)=>wealth*(1+r),1)-1;}
export function backtestDemo(prices:number[],costBps:number){
 if(prices.length<4||!prices.every(x=>Number.isFinite(x)&&x>0)||!Number.isFinite(costBps)||costBps<0||costBps>100)throw new Error('Invalid backtest inputs');
 let equity=1,peak=1,drawdown=0,position=0,turnover=0;const rows=[];
 for(let t=1;t<prices.length;t++){
  // Decide at close t-1 using data through t-2, fill at close t-1, hold to close t.
  const target=t>=3&&prices[t-2]>prices[t-3]?1:0;
  const change=Math.abs(target-position);const cost=costBps/10000;
  // An entry spends wealth/(1+cost) on the asset and the remainder on fees.
  const fee=target>position?cost/(1+cost):target<position?cost:0;
  const gross=target*(1-fee)*(prices[t]/prices[t-1]-1);
  equity*=1+gross-fee;turnover+=change;peak=Math.max(peak,equity);drawdown=Math.min(drawdown,equity/peak-1);position=target;
  rows.push({t,price:prices[t],position,gross,fee,equity});
 }
 return {rows,equity,drawdown,turnover};
}
