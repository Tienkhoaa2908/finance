'use client';
import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {emptyProgress,parseProgress,PROGRESS_KEY,type FinanceProgress} from '@/lib/finance-progress';
const Context=createContext<{progress:FinanceProgress;ready:boolean;failed:boolean;update:(fn:(p:FinanceProgress)=>FinanceProgress)=>void;restore:(p:unknown)=>void}>({progress:emptyProgress(),ready:false,failed:false,update:()=>{},restore:()=>{}});
export function FinanceState({children}:{children:ReactNode}){
 const [progress,setProgress]=useState(emptyProgress);const [ready,setReady]=useState(false);const [failed,setFailed]=useState(false);
 useEffect(()=>{try{const raw=localStorage.getItem(PROGRESS_KEY);if(raw)setProgress(parseProgress(JSON.parse(raw)));}catch{setFailed(true);}setReady(true);const sync=(event:StorageEvent)=>{if(event.key!==PROGRESS_KEY)return;try{setProgress(event.newValue?parseProgress(JSON.parse(event.newValue)):emptyProgress());}catch{setFailed(true);}};window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync);},[]);
 function update(fn:(p:FinanceProgress)=>FinanceProgress){setProgress(previous=>{let latest=previous;try{const raw=localStorage.getItem(PROGRESS_KEY);if(raw&&!failed)latest=parseProgress(JSON.parse(raw));}catch{/* Keep in-session data when storage is blocked. */}const next=fn(latest);try{localStorage.setItem(PROGRESS_KEY,JSON.stringify(next));setFailed(false);}catch{setFailed(true);}return next;});}
 return <Context.Provider value={{progress,ready,failed,update,restore:(p)=>{const valid=parseProgress(p);update(()=>valid);}}}>{children}</Context.Provider>;
}
export const useFinance=()=>useContext(Context);
