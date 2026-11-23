'use client';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import type {FinanceLesson,FinanceExercise} from '@/lib/finance-types';
import {scheduleReview,type LessonProgress} from '@/lib/finance-progress';
import {lessonById,lessons} from '@/content/finance';
import {useLanguage} from './providers';
import {useFinance} from './finance-state';
import {FinanceMarkdown as MathMarkdown} from './finance-markdown';

function Exercise({exercise,lessonId}:{exercise:FinanceExercise;lessonId:string}){
 const {language:l}=useLanguage();const vi=l==='vi';const {progress,update,ready}=useFinance();
 const [hint,setHint]=useState(false);const [answer,setAnswer]=useState(false);const [check,setCheck]=useState('');
 const row=progress.lessons[lessonId];const draft=row?.drafts[exercise.id]||'';
 function edit(value:string){update(p=>({...p,lessons:{...p.lessons,[lessonId]:{...p.lessons[lessonId],step:p.lessons[lessonId]?.step||0,ratings:p.lessons[lessonId]?.ratings||{},attempted:[...new Set([...(p.lessons[lessonId]?.attempted||[]),exercise.id])],drafts:{...p.lessons[lessonId]?.drafts,[exercise.id]:value}}}}));setCheck('');}
 function rate(value:'again'|'good'){update(p=>{const r=p.lessons[lessonId];return {...p,lessons:{...p.lessons,[lessonId]:{...r,ratings:{...r.ratings,[exercise.id]:value}}}};});}
 return <section className="fq-exercise">
  <h3>{vi?'Tự kiểm tra':'Check your understanding'}</h3><MathMarkdown>{exercise.question[l]}</MathMarkdown>
  <label htmlFor={`answer-${exercise.id}`}>{vi?'Câu trả lời của bạn':'Your answer'}</label>
  <textarea id={`answer-${exercise.id}`} value={draft} disabled={!ready} onChange={e=>edit(e.target.value)} maxLength={12000} rows={3}/>
  {!row?.attempted?.includes(exercise.id)&&draft&&<p className="fq-muted">{vi?'Bản nháp trước vẫn còn. Hãy cập nhật câu trả lời cho lượt ôn này trước khi mở lời giải.':'Your previous draft is preserved. Update your answer for this review before opening the solution.'}</p>}<div className="fq-actions"><button onClick={()=>setHint(!hint)} aria-expanded={hint}>{vi?'Gợi ý':'Hint'}</button>
   <button onClick={()=>setAnswer(!answer)} aria-expanded={answer} disabled={!draft.trim()||!row?.attempted?.includes(exercise.id)}>{vi?'Xem lời giải':'Show solution'}</button>
   {exercise.numeric&&<button disabled={!draft.trim()} onClick={()=>{const value=Number(draft.trim().replace(',','.'));setCheck(Number.isFinite(value)&&Math.abs(value-exercise.numeric!.expected)<=exercise.numeric!.tolerance?(vi?'Kết quả số đúng. Đối chiếu thêm cách lập luận.':'Correct number. Check your reasoning too.'):(vi?'Chưa khớp. Chỉ nhập một số, kiểm tra đơn vị và cách làm trong gợi ý.':'Not a match. Enter a single number; check units and the hint.'));}}>{vi?'Kiểm tra kết quả số':'Check numeric answer'}</button>}
  </div>
  {check&&<p role="status">{check}</p>}{hint&&<div className="fq-callout"><MathMarkdown>{exercise.hint[l]}</MathMarkdown></div>}
  {answer&&<div className="fq-solution"><h4>{vi?'Lời giải':'Solution'}</h4><MathMarkdown>{exercise.answer[l]}</MathMarkdown><p>{vi?'Sau khi đối chiếu, bạn có tự làm lại được không?':'After comparing, can you solve this independently?'}</p><div className="fq-actions"><button aria-pressed={row?.ratings[exercise.id]==='again'} onClick={()=>rate('again')}>{vi?'Cần ôn lại':'Review again'}</button><button aria-pressed={row?.ratings[exercise.id]==='good'} onClick={()=>rate('good')}>{vi?'Tự làm được':'Can solve it'}</button></div></div>}
 </section>;
}

export function FinanceReader({lesson}:{lesson:FinanceLesson}){
 const {language:l}=useLanguage();const vi=l==='vi';const {progress,update,ready,failed}=useFinance();
 const row:LessonProgress=progress.lessons[lesson.id]||{step:0,drafts:{},ratings:{}};
 const index=Math.min(row.step,lesson.sections.length);const section=lesson.sections[index];const title=useRef<HTMLHeadingElement>(null);
 const [moved,setMoved]=useState(false);const [notice,setNotice]=useState('');
 useEffect(()=>{if(moved)title.current?.focus();},[index,moved]);
 const next=lessons[lessons.findIndex(item=>item.id===lesson.id)+1];
 const questions=lesson.exercises.filter((_,i)=>section?i%lesson.sections.length===index:i>=lesson.sections.length);
 function go(step:number){setMoved(true);update(p=>({...p,lessons:{...p.lessons,[lesson.id]:{...(p.lessons[lesson.id]||{drafts:{},ratings:{}}),step}}}));}
 function restart(){update(p=>({...p,lessons:{...p.lessons,[lesson.id]:{...p.lessons[lesson.id],step:0,ratings:{},attempted:[],completed:false}}}));setNotice('');}
 function complete(){if(row.completed)return;if(!lesson.exercises.every(e=>row.ratings[e.id])){setNotice(vi?'Hãy làm và tự đánh giá các bài tập trước khi kết thúc bài.':'Answer and self-assess every exercise before finishing.');return;}update(p=>({...p,lessons:{...p.lessons,[lesson.id]:scheduleReview({...row,completed:true},lesson.exercises.every(e=>row.ratings[e.id]==='good'))}}));setNotice(vi?'Đã lưu vào lịch ôn. Đây là tự đánh giá, không phải chứng nhận thành thạo.':'Saved to your review schedule. This is self-assessment, not certified mastery.');}
 return <main className="fq-shell"><Link href="/path" className="fq-back">← {vi?'Lộ trình':'Learning path'}</Link>
  <header className="fq-lesson-intro"><p className="fq-eyebrow">{vi?'BÀI HỌC':'LESSON'}</p><h1>{lesson.title[l]}</h1>{row.completed&&<button onClick={restart}>{vi?'Bắt đầu lượt ôn mới':'Start a new review'}</button>}<div className="fq-overview"><section><h2>{vi?'Bạn sẽ học':'What you will learn'}</h2><MathMarkdown>{lesson.summary[l]}</MathMarkdown></section><section><h2>{vi?'Để làm gì?':'Why it matters'}</h2><MathMarkdown>{lesson.why[l]}</MathMarkdown></section><section><h2>{vi?'Trong hệ thống giao dịch':'In a trading system'}</h2><MathMarkdown>{lesson.application[l]}</MathMarkdown></section></div>
  {lesson.prerequisites.length>0&&<p className="fq-prereqs">{vi?'Nên học trước: ':'Prerequisites: '}{lesson.prerequisites.map(id=><Link key={id} href={`/finance/${id}`}>{lessonById(id)?.title[l]||id}</Link>)}</p>}</header>
  {failed&&<p role="alert" className="fq-warning">{vi?'Trình duyệt không lưu được tiến độ. Xuất bản sao ở trang Ôn tập trước khi rời trang.':'Browser storage is unavailable. Export a backup from Review before leaving.'}</p>}
  <div className="fq-reader"><aside><nav aria-label={vi?'Mục lục bài học':'Lesson contents'}>{lesson.sections.map((s,i)=><button disabled={!ready} aria-current={index===i?'step':undefined} key={i} onClick={()=>go(i)}><span>{String(i+1).padStart(2,'0')}</span>{s.title[l]}</button>)}<button disabled={!ready} aria-current={!section?'step':undefined} onClick={()=>go(lesson.sections.length)}>{vi?'Tổng kết & tài liệu':'Summary & sources'}</button></nav><p className="fq-muted">{vi?'Bản nháp và tiến độ lưu trên trình duyệt này.':'Drafts and progress stay in this browser.'}</p></aside>
   <article className="fq-reading"><p className="fq-eyebrow">{vi?'BƯỚC':'STEP'} {index+1}/{lesson.sections.length+1}</p><h2 ref={title} tabIndex={-1}>{section?section.title[l]:(vi?'Tổng kết & tài liệu':'Summary & sources')}</h2>
    {section?<MathMarkdown>{section.body[l]}</MathMarkdown>:<><MathMarkdown>{lesson.summary[l]}</MathMarkdown><h3>{vi?'Bài tập và tự đánh giá':'Practice and self-assessment'}</h3><ul>{lesson.exercises.map((e,i)=><li key={e.id}><button className="fq-text-button" onClick={()=>go(i%lesson.sections.length)}>{vi?`Bài tập ${i+1}`:`Exercise ${i+1}`}</button> · {row.ratings[e.id]==='good'?(vi?'Tự làm được':'Can solve'):row.ratings[e.id]==='again'?(vi?'Cần ôn':'Review again'):(vi?'Chưa đánh giá':'Not assessed')}</li>)}</ul><h3>{vi?'Đọc thêm và kiểm tra nguồn':'Further reading and sources'}</h3><ul className="fq-sources">{lesson.sources.map((s,i)=><li key={i}><a href={s.url} target="_blank" rel="noreferrer">{s.title} ↗</a><p>{s.section}</p></li>)}</ul><Link className="fq-button" href={`/projects#${lesson.project}`}>{vi?'Áp dụng trong dự án':'Apply in a project'} →</Link></>}
    {questions.map(e=><Exercise key={e.id+String(row.completed)} exercise={e} lessonId={lesson.id}/>)}
    <nav className="fq-pagination" aria-label={vi?'Chuyển bước':'Change step'}><button disabled={!ready||index===0} onClick={()=>go(index-1)}>{vi?'Trước':'Previous'}</button>{section?<button disabled={!ready} className="fq-primary" onClick={()=>go(index+1)}>{vi?'Tiếp theo':'Next'} →</button>:<button disabled={!ready||row.completed} className="fq-primary" onClick={complete}>{vi?'Hoàn thành & lên lịch ôn':'Finish & schedule review'}</button>}</nav>
    {notice&&<p role="status">{notice}</p>}{!section&&next&&<Link className="fq-next-lesson" href={`/finance/${next.id}`}>{vi?'Bài tiếp theo: ':'Next lesson: '}{next.title[l]} →</Link>}
   </article></div>
 </main>;
}
