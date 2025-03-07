import { test, expect, Page } from '@playwright/test';
import { Login } from '../test_helper/pages/Login_helper';
import { baseURL } from '../playwright.config';

test.describe('Login', async () => {
    
    // Test suite for login functionality
    test('HR portal staging URL launch', async ({ page }) => {
        await Admin_login(page, 'vijays@syncfusion.com', 'staging');
    });
    
    test('For empty validation', async ({ page }) => {
        await page.goto(baseURL);
        await page.locator('#tabfocus').click();
    });
    
    test('For space validation', async ({ page }) => {
        await Admin_login(page, ' ', ' ');
    });
    
    test('For validating special characters', async ({ page }) => {
        await Admin_login(page, '@@@', '@@@');
    });
    
    test('For incorrect username and correct password', async ({ page }) => {
        await Admin_login(page, 'vijays@abc.com', 'staging');
    });
    
    test('For correct username and incorrect password', async ({ page }) => {
        await Admin_login(page, 'vijays@syncfusion.com', 'stat');
    });
    
    test('For empty username and correct password', async ({ page }) => {
        await Admin_login(page, '', 'staging');
    });
    
    test('For correct username and empty password', async ({ page }) => {
        await Admin_login(page, 'vijays@syncfusion.com', '');
    });
    
    test('For special characters in username and incorrect password', async ({ page }) => {
        await Admin_login(page, '@@@@', 'st');
    });
    
    test('For special characters in password and incorrect username', async ({ page }) => {
        await Admin_login(page, 'vijay@sync.com', '@@@');
    });
    
    test('Login with correct username and incorrect password', async ({ page }) => {
        await Admin_login(page, 'vijays@syncfusion.com', 'stat');
    });
    
    test('Login with incorrect username and correct password', async ({ page }) => {
        await Admin_login(page, 'vijays@syn.com', 'staging');
    });
    
    test('correct login credentials', async ({ page }) => {
        await Admin_login(page, 'vijays@syncfusion.com', 'staging');
    });
    
    test('To validate the login using Home page URL', async ({ page }) => {
        await Admin_login(page, 'vijays@syncfusion.com', 'staging');
        const HomePageURL = await page.url();
        console.log('Page URL is:', HomePageURL);
        await expect(page).toHaveURL('https://staginghr.syncfusion.com/');
    });
});


function Admin_login(page: Page, arg1: string, arg2: string) {
    throw new Error('Function not implemented.');
}

