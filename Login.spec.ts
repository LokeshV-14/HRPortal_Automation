import {test, expect} from '@playwright/test';
import { User_login } from './helper';

test.describe('Login',async () =>{    
    
    // Test suite for login functionality
    test('HR portal staging URL launch', async ({ page }) => {
        await User_login(page, 'vijays@syncfusion.com', 'staging');
    });
    
    test('For empty validation', async ({ page }) => {
        await page.goto('https://staginghr.syncfusion.com/login?ReturnUrl=%2F');
        await page.locator('#tabfocus').click();
    });
    
    test('For space validation', async ({ page }) => {
        await User_login(page, ' ', ' ');
    });
    
    test('For validating special characters', async ({ page }) => {
        await User_login(page, '@@@', '@@@');
    });
    
    test('For incorrect username and correct password', async ({ page }) => {
        await User_login(page, 'vijays@abc.com', 'staging');
    });
    
    test('For correct username and incorrect password', async ({ page }) => {
        await User_login(page, 'vijays@syncfusion.com', 'stat');
    });
    
    test('For empty username and correct password', async ({ page }) => {
        await User_login(page, '', 'staging');
    });
    
    test('For correct username and empty password', async ({ page }) => {
        await User_login(page, 'vijays@syncfusion.com', '');
    });
    
    test('For special characters in username and incorrect password', async ({ page }) => {
        await User_login(page, '@@@@', 'st');
    });
    
    test('For special characters in password and incorrect username', async ({ page }) => {
        await User_login(page, 'vijay@sync.com', '@@@');
    });
    
    test('Login with correct username and incorrect password', async ({ page }) => {
        await User_login(page, 'vijays@syncfusion.com', 'stat');
    });
    
    test('Login with incorrect username and correct password', async ({ page }) => {
        await User_login(page, 'vijays@syn.com', 'staging');
    });
    
    test('correct login credentials', async ({ page }) => {
        await User_login(page, 'vijays@syncfusion.com', 'staging');
    });
    
    test('To validate the login using Home page URL', async ({ page }) => {
        await User_login(page, 'vijays@syncfusion.com', 'staging');
        const HomePageURL = await page.url();
        console.log('Page URL is:', HomePageURL);
        await expect(page).toHaveURL('https://staginghr.syncfusion.com/');
    });

})
    











