import { test, expect, Page } from '@playwright/test';
import{Login_user,AchievementsModuleNavigation,ProgressTab,BadgesTab,StatisticsTab,HistoryTab}from './MyProfileAchivements.helper';
test.describe('Test case : Test run for Performance module', async () => {
    test('Verify the Overview module and its sub tabs', async ({ page }) => {
        await Login_user(page, 'vijays@syncfusion.com', 'staging');
        await AchievementsModuleNavigation(page);
        await ProgressTab(page);
        await BadgesTab(page);
        await StatisticsTab(page);
        await HistoryTab(page);   
    })
})