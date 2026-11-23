'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import {normalizeMathNotation} from '@/lib/math-notation';
export function MathMarkdown({ children,inline=false,normalize=true }: { children: string;inline?:boolean;normalize?:boolean }) {
  const content=<ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[[rehypeKatex,{strict:'ignore'}]]} components={inline?{p:({children})=><span>{children}</span>}:undefined}>{normalize?normalizeMathNotation(children):children}</ReactMarkdown>;
  return inline?<span className="math-inline">{content}</span>:<div className="math-prose">{content}</div>;
}
