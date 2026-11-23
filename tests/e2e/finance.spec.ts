import {test,expect} from '@playwright/test';
import {lessons} from '../../content/finance';

test('learner answers, reviews, persists drafts and switches languages',async({page})=>{
 await page.goto('/finance/pnl');
 const outline=page.locator('.fq-reader aside nav button');
 for(let i=0;i<3;i++){
  await outline.nth(i).click();
  await page.locator('.fq-exercise textarea').fill('Tôi đối chiếu dòng tiền, vị thế và phí.');
  await page.getByRole('button',{name:'Xem lời giải',exact:true}).click();
  await page.getByRole('button',{name:'Tự làm được',exact:true}).click();
 }
 await outline.last().click();
 await page.getByRole('button',{name:'Hoàn thành & lên lịch ôn',exact:true}).click();
 await expect(page.getByRole('status')).toContainText('Đã lưu');
 await page.reload();await expect(page.getByRole('button',{name:'Hoàn thành & lên lịch ôn',exact:true})).toBeDisabled();await outline.first().click();
 await expect(page.locator('textarea')).toHaveValue('Tôi đối chiếu dòng tiền, vị thế và phí.');
 await expect(page.locator('.fq-solution')).toHaveCount(0);
 await page.getByRole('button',{name:'EN',exact:true}).click();
 await expect(page.locator('html')).toHaveAttribute('lang','en');
 await expect(page.getByRole('heading',{name:'What you will learn',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Start a new review'}).click();await expect(page.getByRole('button',{name:'Show solution',exact:true})).toBeDisabled();
 await page.locator('textarea').fill('A new independent attempt');await expect(page.getByRole('button',{name:'Show solution',exact:true})).toBeEnabled();
 await page.goto('/daily');await expect(page.locator('.fq-review-list li')).toHaveCount(1);
 const download=page.waitForEvent('download');await page.getByRole('button',{name:'Export JSON backup'}).click();expect((await download).suggestedFilename()).toBe('finance-progress.json');
 await page.locator('input[type=file]').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{"version":2}')});
 await expect(page.getByRole('status')).toContainText('Invalid backup');await expect(page.locator('.fq-review-list li')).toHaveCount(1);
});

test('storage failure preserves in-session learning and warns honestly',async({page})=>{
 await page.addInitScript(()=>{Storage.prototype.getItem=()=>{throw Error('blocked')};Storage.prototype.setItem=()=>{throw Error('blocked')};});
 await page.goto('/finance/pnl');await page.locator('textarea').fill('98');
 await expect(page.locator('main [role=alert]')).toContainText('không lưu được');
 await page.getByRole('button',{name:'Xem lời giải',exact:true}).click();await expect(page.locator('.fq-solution')).toBeVisible();
 await page.getByRole('button',{name:'Tiếp theo',exact:false}).click();await page.getByRole('button',{name:'Trước',exact:true}).click();await expect(page.locator('textarea')).toHaveValue('98');
});

test('catalog, project checks and interactive lab work',async({page})=>{
 await page.goto('/path');await expect(page.locator('.fq-module')).toHaveCount(9);
 await page.locator('input[type=search]').fill('P&L');await page.locator('.fq-module li a').filter({hasText:'P&L'}).first().click();await expect(page.locator('h1')).toContainText('P&L');
 await page.goto('/projects');await page.locator('#ledger input[type=checkbox]').first().check();await page.reload();await expect(page.locator('#ledger input[type=checkbox]').first()).toBeChecked();
 const download=page.waitForEvent('download');await page.locator('#ledger a[download]').click();expect((await download).suggestedFilename()).toBe('ledger.py');
 await page.goto('/lab');await expect(page.locator('.fq-results').first()).toContainText('98');
 await page.getByLabel('Giá bán',{exact:true}).fill('100.1');await page.getByLabel('Cổ tức / đơn vị',{exact:true}).fill('0');await expect(page.locator('.fq-results').first()).toContainText('-1');
 await page.getByLabel('Số lượng',{exact:true}).fill('0');await expect(page.locator('main [role=alert]')).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
});

for(const lesson of lessons)test('lesson renders: '+lesson.id,async({page})=>{
 const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));await page.goto('/finance/'+lesson.id);
 await expect(page.locator('h1')).toHaveText(lesson.title.vi);
 for(const lang of ['vi','en'] as const){
  await page.getByRole('button',{name:lang.toUpperCase(),exact:true}).click();
  const outline=page.locator('.fq-reader aside nav button');
  for(let i=0;i<lesson.sections.length;i++){
   await outline.nth(i).click();await expect(page.locator('.fq-reading>h2')).toHaveText(lesson.sections[i].title[lang]);
   await expect(page.locator('.katex-error')).toHaveCount(0);
   if(await page.locator('textarea').count()){await page.locator('textarea').fill('test');await page.getByRole('button',{name:lang==='vi'?'Xem lời giải':'Show solution',exact:true}).click();await expect(page.locator('.katex-error')).toHaveCount(0);}
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
  }
  await outline.last().click();await expect(page.locator('.fq-sources a')).toHaveCount(lesson.sources.length);
 }
 expect(errors).toEqual([]);
});

test('progress updates survive editing separate tabs',async({page,context})=>{
 await page.goto('/finance/pnl');const other=await context.newPage();await other.goto('/projects');
 await page.locator('textarea').fill('A retained draft');await other.locator('#ledger input[type=checkbox]').first().check();
 await page.reload();await expect(page.locator('textarea')).toHaveValue('A retained draft');
 await other.reload();await expect(other.locator('#ledger input[type=checkbox]').first()).toBeChecked();await other.close();
});
