import {notFound} from 'next/navigation';
import {lessons,lessonById} from '@/content/finance';
import {FinanceReader} from '@/components/finance-reader';
export function generateStaticParams(){return lessons.map(({id})=>({id}));}
export async function generateMetadata({params}:{params:Promise<{id:string}>}){const {id}=await params;return {title:lessonById(id)?.title.vi||'Bài học'};}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;const lesson=lessonById(id);if(!lesson)notFound();return <FinanceReader key={id} lesson={lesson}/>;}
