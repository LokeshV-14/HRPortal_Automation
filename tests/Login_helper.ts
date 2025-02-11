import { Page, expect } from '@playwright/test';

// Function to fill login fields and submit
export async function User_login(page: Page, username: string, password: string) {
    try {
        await page.goto('https://staginghr.syncfusion.com/login?ReturnUrl=%2F');
        await page.fill('#EmailId', username);
        await page.fill('#Password', password);
        await page.click('#tabfocus'); // Login selector
    } catch (error) {
        console.error('Error during login:', error);
        throw error; // Re-throwing error for upstream handling
    }
}