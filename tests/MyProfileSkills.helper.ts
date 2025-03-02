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
export async function SkillsModuleNavigation(page:Page){
    try{
        await page.locator('//nav[@class="navbar-default navbar-static-side sidebar"]').hover();  
        await page.getByRole('link', { name: 'My Profile ' }).click();
       // await page.getByRole('link', { name: 'Overview' }).click();
       await page.locator('#leftSideMenuPanel').getByRole('link', { name: 'Skills', exact: true }).click();

    } catch(error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}
export async function LearningPortalFunctionality(page:Page){
    try{
//         await page.locator("//a[contains(text(),'Database Design')]").click();
// await page.waitForTimeout(3000); // Wait for the new tab to open

// const context = page.context(); 
// const pages = context.pages(); 

// const [newPage] = await Promise.all([
//     context.waitForEvent('page'), // Wait for the new tab to open
//     page.locator("//a[contains(text(),'Database Design')]").click(),
// ]);

// await newPage.waitForTimeout(3000); // Wait for the new page to load

// // Now switch back to the original tab
// await page.bringToFront();
// await page.waitForTimeout(6000);
    // Perform actions in the previous tab
    await page.locator("(//span[@class='e-input-group e-control-wrapper e-ddl e-lib e-keyboard e-valid-input'])[1]").click();
    
    await page.keyboard.press('ArrowDown'); // Move to the next option
    await page.keyboard.press('Enter'); 
       
} catch(error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}
