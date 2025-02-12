import { test, expect, Page } from '@playwright/test';
import{Login_user,Overview_Navigation,PersonalTab,Contact_tab,Education_tab,AboutMe_tab,Update_button}from './Overview.helper';
test.describe('Test case : Functionalities of overview', async () => {
    test('Verify the Overview module and its sub tabs', async ({ page }) => {
        await Login_user(page, 'vijays@syncfusion.com', 'staging');
        await Overview_Navigation(page);
        await PersonalTab(page);
        await Contact_tab(page);
        await Education_tab(page);
        await AboutMe_tab(page);
        await Update_button(page);
    })
})