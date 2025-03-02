import { test, expect, Page } from '@playwright/test';
import{Login_user,SkillsModuleNavigation,LearningPortalFunctionality}from './MyProfileSkills.helper';
test.describe('Test case : Test run for Skills module', async () => {
    test('Verify the Skills module and its sub tabs', async ({ page }) => {
        await Login_user(page, 'vijays@syncfusion.com', 'staging');
        await SkillsModuleNavigation(page);
        await LearningPortalFunctionality(page);
    })
})