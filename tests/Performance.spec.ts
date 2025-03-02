import { test, expect, Page } from '@playwright/test';
import{Login_user,performanceModuleNavigation,EventsTab,Ratingtab}from './Performance.helper.ts';
test.describe('Test case : Test run for Performance module', async () => {
    test('Verify the Overview module and its sub tabs', async ({ page }) => {
        await Login_user(page, 'vijays@syncfusion.com', 'staging');
        await performanceModuleNavigation(page);
        await EventsTab(page);
        await Ratingtab(page);
        
    })
})