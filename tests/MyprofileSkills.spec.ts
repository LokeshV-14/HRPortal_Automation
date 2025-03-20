import { test, expect,BrowserContext, Page } from '@playwright/test';
import{Login_user,SkillsModuleNavigation,LearningPortalFunctionality,WebinarSubTab,CoursesAndCertificationsTab}from './MyProfileSkills.helper';
test.describe('Test case : Test run for Skills module', async () => {
   

let context: BrowserContext;
let page: Page;

test.describe('Test case: Skills Module Flow', () => {
    
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();

        // Call login function directly
        await Login_user(page, 'vijays@syncfusion.com', 'staging');
    });

    test('Verify the Skills Module Navigation User', async () => {
        await SkillsModuleNavigation(page);
    });

    test('Verify the Learning Portal Functionality', async () => {
        await LearningPortalFunctionality(page);
    });

    test('Verify the Webinar Sub Tab', async () => {
        await WebinarSubTab(page);
    });

    test('Verify the Courses And Certifications Tab', async () => {
        await CoursesAndCertificationsTab(page);
    });

    test.afterAll(async () => {
        await context.close();
    });

});

})