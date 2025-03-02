import { test, expect } from 'playwright/test';
import { User_login, Timesheet_Navigation, selectEmployee, selectDate, selectEmployeeName, selectHomeIn, selectCheckin, selectEntrytimeAM, selectManualentry, selectCheckout, selectEntrytimePM, selectLunchout, selectEntrydate, selectOpenaccordion, selectDeletein, selectDeleteout, selectDeletein2, select1stgearicon, select2ndgearicon, selectCloseicon } from './helper';

test.describe('Timesheet--> Add 8 hours general case', async () => {


    test('Verify the employee check in at 9:00AM and 6:00PM', async ({ page }) => {
        await User_login(page, 'vijays@syncfusion.com', 'staging');
        await Timesheet_Navigation(page);
        await selectEmployee(page, 'Lokesh Playwright');  
        await selectDate(page);  
        await page.locator("//a[contains(., 'Search')]").click();
        await selectManualentry(page);
        await selectEmployeeName(page);
        await selectHomeIn(page);
        await selectCheckin(page);
        await selectEntrydate(page);
        await page.locator("//input[@class='form-control e-maskedit e-js e-input']").fill("09:00:00");
        await selectEntrytimeAM(page);
        await page.locator("//button[@id='submit-manualEntryDialog']").click();
        await selectCloseicon(page);
        await selectManualentry(page);
        await selectEmployeeName(page);
        await selectHomeIn(page);
        await selectCheckout(page);
        await selectDate(page);
        await page.locator("//input[@class='form-control e-maskedit e-js e-input']").fill("06:00:00");
        await selectEntrytimePM(page);
        await page.locator("//button[@id='submit-manualEntryDialog']").click();
        await selectOpenaccordion(page);
        await select1stgearicon(page);
        await selectDeletein(page);
        await selectOpenaccordion(page);
        await select1stgearicon(page);
        await selectDeleteout(page);
        await selectOpenaccordion(page);
        await select2ndgearicon(page);
        await selectDeletein(page);       
        await selectOpenaccordion(page);
        await select2ndgearicon(page);
        await selectDeleteout(page);
    })

})