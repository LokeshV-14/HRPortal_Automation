import { test, expect, Page } from '@playwright/test';
import { baseUrl } from '../test_helper/pages/url';
import { AdminLogin } from '../test_helper/pages/Login_helper'; // Import the class

test.describe('Login', () => {
    let loginHelper: AdminLogin; // Declare a variable for the class instance

    test.beforeEach(async ({ page }) => {
        loginHelper = new AdminLogin(page); // Initialize class instance for each test
    });

    // Test suite for login functionality
    test('HR portal staging URL launch', async ({ page }) => {
        await loginHelper.AdminLogin('vijays@syncfusion.com', 'staging');
    });

    test('For empty validation', async ({ page }) => {
        await page.goto(baseUrl);
        await page.locator('#tabfocus').click();
    });

    test('For space validation', async ({ page }) => {
        await loginHelper.AdminLogin(' ', ' ');
    });

    test('For validating special characters', async ({ page }) => {
        await loginHelper.AdminLogin('@@@', '@@@');
    });

    test('For incorrect username and correct password', async ({ page }) => {
        await loginHelper.AdminLogin('vijays@abc.com', 'staging');
    });

    test('For correct username and incorrect password', async ({ page }) => {
        await loginHelper.AdminLogin('vijays@syncfusion.com', 'stat');
    });

    test('For empty username and correct password', async ({ page }) => {
        await loginHelper.AdminLogin('', 'staging');
    });

    test('For correct username and empty password', async ({ page }) => {
        await loginHelper.AdminLogin('vijays@syncfusion.com', '');
    });
});
