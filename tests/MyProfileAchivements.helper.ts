import { Page, expect } from '@playwright/test';
export async function Login_user(page: Page, username: string, password: string){

    try {
        await page.goto('https://staginghr.syncfusion.com/login?ReturnUrl=%2F');
        await page.fill('#EmailId', username);
        await page.fill('#Password', password);
        await page.click('#tabfocus'); 
    } catch (error) {
        console.error('Error during login:', error);
        throw error; 
    }
}
export async function AchievementsModuleNavigation(page:Page){
    try{
        await page.locator('//nav[@class="navbar-default navbar-static-side sidebar"]').hover();  
        await page.getByRole('link', { name: 'My Profile ' }).click();
       // await page.getByRole('link', { name: 'Overview' }).click();
       await page.locator('#leftSideMenuPanel').getByRole('link', { name: 'Achievements', exact: true }).click();

    } catch(error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}
export async function ProgressTab(page:Page){
    try{
        await page.getByText('% completed.').click();
        // await page.locator("//div[@class='e-filtermenudiv e-icons e-icon-filter'][@e-mappinguid='e-flmenu-grid-column1']").click();
        // await page.getByText('Sort A to Z').click();
        // await page.locator('th').filter({ hasText: 'BadgesPress Alt Down to open' }).locator('div').nth(2).click();
        // await page.getByText('Sort Z to A').click();
        // await page.locator('th').filter({ hasText: 'AwardedPress Alt Down to open' }).locator('div').nth(2).click();
        // await page.getByText('Sort A to Z').click();
        // await page.locator('th').filter({ hasText: 'AwardedPress Alt Down to open' }).locator('div').nth(2).click();
        // await page.getByText('Sort Z to A').click();
        // const downloadPromise = page.waitForEvent('download');
        // await page.getByLabel('Export to Excel').click();
        // const download = await downloadPromise;
        await page.getByText('DISMISS').click();

    } catch(error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}
export async function BadgesTab(page:Page){
    try{
        await page.getByRole('link', { name: 'Badges' }).click();
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Always There Month ×' }).click();
        const page1 = await page1Promise;
        const context = page.context(); 
        const pages = context.pages(); 

       if (pages.length > 1) {
       const previousTab = pages[pages.length - 2]; 
       await previousTab.bringToFront();
       await page.waitForTimeout(3000);
      
//        // await page.locator('//span[@class="e-input-group-icon e-ddl-icon e-search-icon"]').nth(1).click();
    
//   await page.getByRole('option', { name: 'January' }).click();
//        await page.getByRole('option', { name: 'January' }).click();
//        await page.getByText('No badges found for selected').click();
//        await expect(page.locator('#overview-badges-message')).toContainText('No badges found for selected month.');

   await page.getByText('more_vert').click();
  await page.getByRole('link', { name: 'Overall' }).click();
  await page.waitForTimeout(3000);
  await page.getByText('more_vert').click();
  await page.getByRole('link', { name: 'Monthly' }).click();
  await page.waitForTimeout(3000);
  await page.locator('#recentActivities-content').getByText('Bronze').click();
  await page.waitForTimeout(2000);
  //await page.locator("(//button[@id='excelExport'])[2]").click();
 
  await page.getByText('DISMISS').click();
  await page.waitForTimeout(2000);
  //await page.locator("(//span[@title='No leave taken in a month.'])[2]").click();
  //await page.getByText('DISMISS').click();
//   await page.getByLabel('Jul 2024 - Jun').locator('span').click();
//   await page.getByRole('option', { name: 'Jul 2024 - Jun' }).click();
//   await page.getByLabel('Jul 2024 - Jun').locator('span').click();
//   await page.getByRole('option', { name: 'Jul 2023 - Jun' }).click();
//   await page.getByLabel('Jul 2023 - Jun').locator('span').click();
//   await page.getByRole('option', { name: 'Jul 2022 - Jun' }).click();
       }
    }catch(error) {
        console.error('Error while Navigation:', error);``
        throw error;
    }
    }
    
    export async function StatisticsTab(page:Page){
        try{
            await page.getByRole('link', { name: 'Statistics' }).click();
            await page.getByRole('link', { name: 'Category' }).click();
            await page.waitForTimeout(2000);
            // await page.getByText('Bronze', { exact: true }).click();
            //  await page.getByText('DISMISS').click();
             await page.locator('#badges').click();
             
  await page.getByRole('link', { name: 'Always There Month' }).click();
  
  const context = page.context(); // Get the browser context
const pages = context.pages(); // Get all open pages

if (pages.length > 1) {
    const previousTab = pages[pages.length - 2]; 
    await previousTab.bringToFront(); 
    await previousTab.bringToFront();
}

        } catch(error) {
            console.error('Error while Navigation:', error);
            throw error;
        }
    }
    export async function HistoryTab(page:Page){
        try{
            await page.getByRole('link', { name: 'History', exact: true }).click();
            await page.locator('#historyLoadMore-content').getByText('Always There Month').click();
            await page.getByText('DISMISS').click();
            await page.getByRole('link', { name: 'Medal' }).click();
            await page.getByRole('link', { name: 'Others' }).click();
            await page.locator('#historyLoadMore-content').getByText('Daily Login Reward').click();
            await page.getByText('DISMISS').click();
            await page.getByRole('link', { name: 'Badge', exact: true }).click();
            
        } catch(error) {
            console.error('Error while Navigation:', error);
            throw error;
        }
    }