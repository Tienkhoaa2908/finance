import {MathMarkdown} from './math-markdown';
// Finance prose uses explicit $...$ / $$...$$ only. Never infer math from currency pairs or IDs.
export function FinanceMarkdown({children}:{children:string}){return <MathMarkdown normalize={false}>{children}</MathMarkdown>;}
