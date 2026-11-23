import {test,expect} from '@playwright/test';

test('finance reader keeps drafts, resets explanation and switches languages',async({page})=>{
 await page.goto('/finance');
 await expect(page.locator('.finance-step')).toBeVisible();
 const draft=page.locator('#finance-draft');
 await expect(draft).toBeEnabled();
 const reveal=page.locator('.finance-reveal');
 await expect(reveal).toBeDisabled();
 await draft.fill('Tôi cần phân biệt dòng tiền với thay đổi giá trị tài sản.');
 await reveal.click();
 await expect(page.locator('#finance-explanation')).toBeVisible();
 await page.locator('.finance-next').click();
 await expect(page.locator('#finance-explanation')).toBeHidden();
 await page.locator('.finance-pagination button').first().click();
 await expect(draft).toHaveValue('Tôi cần phân biệt dòng tiền với thay đổi giá trị tài sản.');
 await expect(page.locator('#finance-explanation')).toBeHidden();
 await page.reload();
 await expect(draft).toHaveValue('Tôi cần phân biệt dòng tiền với thay đổi giá trị tài sản.');
 await page.getByRole('button',{name:'EN',exact:true}).click();
 await expect(page.locator('html')).toHaveAttribute('lang','en');
 await expect(page.locator('.finance-position')).toContainText('Step 1');
 await expect(draft).toHaveValue('Tôi cần phân biệt dòng tiền với thay đổi giá trị tài sản.');
 await page.getByRole('button',{name:'VI',exact:true}).click();
 const buttons=page.locator('.finance-outline button');
 for(let i=0;i<await buttons.count();i++){
   await buttons.nth(i).click();
   await expect(page.locator('.finance-step .katex-error')).toHaveCount(0);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1)).toBe(true);
   expect(await page.locator('.finance-sources a').count()).toBeGreaterThan(0);
 }
});

test('finance reader remains usable when browser storage fails',async({page})=>{
 await page.addInitScript(()=>{
   Storage.prototype.getItem=()=>{throw new Error('Storage unavailable');};
   Storage.prototype.setItem=()=>{throw new Error('Storage unavailable');};
 });
 await page.goto('/finance');
 await page.locator('#finance-draft').fill('Bản nháp chưa lưu được.');
 await expect(page.locator('#finance-draft-note')).toContainText('không lưu được');
 await page.locator('.finance-reveal').click();
 await expect(page.locator('#finance-explanation')).toBeVisible();
 await page.locator('.finance-next').click();
 await expect(page.locator('.finance-position')).toContainText('Bước 2');
});
