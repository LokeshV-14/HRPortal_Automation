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
export async function performanceModuleNavigation(page:Page){
    try{
        await page.locator('//nav[@class="navbar-default navbar-static-side sidebar"]').hover();  
        await page.getByRole('link', { name: 'My Profile ' }).click();
       // await page.getByRole('link', { name: 'Overview' }).click();
        await page.locator("//a[contains(text(),'Performance')]").click();

    } catch(error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}

export async function EventsTab(page: Page) {
    try {
        // Scrolling to the bottom of the page
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(5000);
        await page.locator("//a[@id='scroll-to-top']").click();
        
        

    } catch (error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}


export async function Ratingtab(page:Page){
    try{
        await page.locator("//a[@id='ratingdetails']").click();
        
        await page.locator("(//a[contains(text(),'Show Feedback')])[1]").click({ timeout: 10000 });
        await page.locator("(//i[@class='material-icons'][contains(text(),'close')])[22]").click();
        //descending
        await page.locator('shadow-root-selector').locator("div.e-filtermenudiv").click();



        
        await page.locator("//li[@class='e-excel-descending e-menu-item e-focused']").click({ timeout: 1000 });
        //ascending
        await page.locator("(//div[@class='e-filtermenudiv e-icons e-icon-filter'])[1]").click({ timeout: 50000 });
        await page.locator("//li[@class='e-excel-ascending e-menu-item e-focused']").click({ timeout: 50000 });
        //Text filters
        await page.locator("(//div[@class='e-filtermenudiv e-icons e-icon-filter'])[1]").click({ timeout: 50000 });
        await page.locator("//li[@class='e-submenu e-menu-item e-focused e-selected']").click({ timeout: 50000 });
        await page.locator("//li[@class='e-menu-item e-focused']").click({ timeout: 50000 });
        await page.locator("//div[@class='e-dlg-container e-dlg-center-center']").click({ timeout: 50000 });
        
        
        
        
    } catch(error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}
//a[@id='ratingdetails']


