'use client';

import {useEffect, useRef, useState} from 'react';
import {financePilot} from '@/content/finance/pilot';
import {MathMarkdown} from './math-markdown';
import {useLanguage} from './providers';
import './finance-reader.css';

type Step = (typeof financePilot.steps)[number];

function Comprehension({step}: {step: Step}) {
  const {language} = useLanguage();
  const vi = language === 'vi';
  const [draft, setDraft] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [ready, setReady] = useState(false);
  const [storageFailed, setStorageFailed] = useState(false);
  const storageKey = `finance-draft:${financePilot.id}:${financePilot.revision}:${step.id}`;

  useEffect(() => {
    try { setDraft(localStorage.getItem(storageKey) || ''); }
    catch { setStorageFailed(true); }
    setReady(true);
  }, [storageKey]);

  function updateDraft(value: string) {
    setDraft(value);
    try { localStorage.setItem(storageKey, value); setStorageFailed(false); }
    catch { setStorageFailed(true); }
  }

  return <section className="finance-comprehension" aria-labelledby="finance-question-title">
    <h3 id="finance-question-title">{vi ? 'Dừng lại để tự giải thích' : 'Pause and explain it yourself'}</h3>
    <MathMarkdown>{step.question[language]}</MathMarkdown>
    <label htmlFor="finance-draft">{vi ? 'Lập luận của bạn' : 'Your reasoning'}</label>
    <textarea id="finance-draft" rows={5} value={draft} disabled={!ready}
      onChange={event => updateDraft(event.target.value)} maxLength={12000}
      aria-describedby="finance-draft-note"
      placeholder={vi ? 'Viết cách bạn hiểu, các bước suy luận hoặc điều còn chưa rõ…' : 'Write your understanding, reasoning, or what is still unclear…'}/>
    <p id="finance-draft-note" role="status" className="finance-storage-note">
      {storageFailed
        ? (vi ? 'Trình duyệt không lưu được bản nháp. Hãy sao chép câu trả lời trước khi đổi bước hoặc rời trang.' : 'The browser could not save this draft. Copy your answer before changing steps or leaving.')
        : (vi ? 'Bản nháp chỉ lưu trên trình duyệt này, không đồng bộ tài khoản. Câu trả lời không được chấm tự động.' : 'Drafts stay in this browser and do not sync to an account. Answers are not automatically graded.')}
    </p>
    <button type="button" className="finance-reveal" aria-expanded={revealed}
      aria-controls="finance-explanation" disabled={!ready || !draft.trim()}
      onClick={() => setRevealed(value => !value)}>
      {revealed ? (vi ? 'Ẩn phần giải thích' : 'Hide explanation') : (vi ? 'Đối chiếu với phần giải thích' : 'Compare with the explanation')}
    </button>
    {!draft.trim() && <p className="finance-hint">{vi ? 'Ghi một nhận xét hoặc câu hỏi trước khi mở phần giải thích. Bạn vẫn có thể chuyển bước bất cứ lúc nào.' : 'Write an observation or question before opening the explanation. You can still move between steps freely.'}</p>}
    <div id="finance-explanation" hidden={!revealed} className="finance-explanation">
      {revealed && <><h4>{vi ? 'Giải thích để đối chiếu' : 'Explanation for comparison'}</h4><MathMarkdown>{step.answer[language]}</MathMarkdown>
        <p className="finance-hint">{vi ? 'So sánh từng bước với lập luận của bạn. Đọc lời giải chưa đồng nghĩa với tự làm được.' : 'Compare each step with your own reasoning. Reading the answer is not evidence that you can reproduce it independently.'}</p></>}
    </div>
  </section>;
}

export function FinanceReader() {
  const {language} = useLanguage();
  const vi = language === 'vi';
  const [index, setIndex] = useState(0);
  const [visited, setVisited] = useState<string[]>([financePilot.steps[0].id]);
  const heading = useRef<HTMLHeadingElement>(null);
  const focusAfterNavigation = useRef(false);
  const step = financePilot.steps[index];
  const sources = financePilot.sources.filter(source => step.sourceIds.includes(source.id));

  useEffect(() => {
    if (focusAfterNavigation.current) {
      heading.current?.focus();
      focusAfterNavigation.current = false;
    }
  }, [index]);

  function goTo(next: number) {
    if (next < 0 || next >= financePilot.steps.length || next === index) return;
    focusAfterNavigation.current = true;
    setIndex(next);
    setVisited(previous => previous.includes(financePilot.steps[next].id) ? previous : [...previous, financePilot.steps[next].id]);
  }

  return <main className="finance-reader">
    <header className="finance-intro">
      <p className="finance-review-note">{vi ? 'Bài học mẫu — đang chờ bạn đánh giá cách học' : 'Sample lesson — learning design awaiting your review'}</p>
      <h1>{financePilot.title[language]}</h1>
      <MathMarkdown>{financePilot.intro[language]}</MathMarkdown>
    </header>
    <div className="finance-layout">
      <aside className="finance-outline">
        <nav aria-label={vi ? 'Các bước của bài học' : 'Lesson steps'}>
          <h2>{vi ? 'Đi từng bước' : 'Step by step'}</h2>
          <ol>{financePilot.steps.map((item, position) => <li key={item.id}>
            <button type="button" onClick={() => goTo(position)} aria-current={position === index ? 'step' : undefined}>
              <span className="finance-step-number" aria-hidden="true">{String(position + 1).padStart(2, '0')}</span>
              <span>{item.title[language]}</span>
              {visited.includes(item.id) && <span className="finance-visited">{vi ? 'Đã mở' : 'Opened'}</span>}
            </button>
          </li>)}</ol>
        </nav>
        <p className="finance-progress" role="status">{vi ? `Đã mở ${visited.length}/${financePilot.steps.length} bước trong lần học này. Đây không phải điểm thành thạo.` : `Opened ${visited.length}/${financePilot.steps.length} steps this visit. This is not a mastery score.`}</p>
      </aside>
      <article className="finance-step" aria-labelledby="finance-step-title">
        <p className="finance-position">{vi ? `Bước ${index + 1} trong ${financePilot.steps.length}` : `Step ${index + 1} of ${financePilot.steps.length}`}</p>
        <h2 id="finance-step-title" ref={heading} tabIndex={-1}>{step.title[language]}</h2>
        <div className="finance-body"><MathMarkdown>{step.body[language]}</MathMarkdown></div>
        <section className="finance-sources" aria-labelledby="finance-sources-title">
          <h3 id="finance-sources-title">{vi ? 'Đọc và kiểm tra nguồn' : 'Read and check the sources'}</h3>
          <ul>{sources.map(source => <li key={source.id}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}<span className="finance-external-note"> {vi ? '(tab mới)' : '(new tab)'}</span></a>
            <span>{source.section}</span>
          </li>)}</ul>
        </section>
        <Comprehension key={`${financePilot.revision}:${step.id}`} step={step}/>
        <nav className="finance-pagination" aria-label={vi ? 'Chuyển bước' : 'Change step'}>
          <button type="button" onClick={() => goTo(index - 1)} disabled={index === 0}>{vi ? 'Bước trước' : 'Previous step'}</button>
          <button type="button" className="finance-next" onClick={() => goTo(index + 1)} disabled={index === financePilot.steps.length - 1}>{vi ? 'Bước tiếp theo' : 'Next step'}</button>
        </nav>
        {index === financePilot.steps.length - 1 && <p className="finance-ending">{vi ? 'Bạn đã đến cuối bài mẫu. Hãy thử giải thích lại mà không nhìn tài liệu, rồi ghi những chỗ bạn muốn bài học giải thích kỹ hơn.' : 'You have reached the end of the sample. Try explaining it without the material, then note what the lesson should explain more fully.'}</p>}
      </article>
    </div>
  </main>;
}
