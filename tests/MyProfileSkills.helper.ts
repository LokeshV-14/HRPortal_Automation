import {test, Page, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
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
       await page.locator('#leftSideMenuPanel').getByRole('link', { name: 'Skills', exact: true }).click({ timeout: 5000 });
       await page.waitForTimeout(3000); // Waits for 3 seconds

    } catch(error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}
export async function LearningPortalFunctionality(page:Page){
    try{
        await page.waitForTimeout(2000);
        //All drop down 
        await page.locator("//span[@class='e-icon e-arrow-sans-down']").nth(0).click();
        
        await page.locator("//span[@class=' e-ddltxt'][contains(text(),'Completed')]").click();
        await page.waitForTimeout(2000);
        //category
await page.locator("//input[@id='categoryDropdown_hidden']").click();
await page.waitForTimeout(2000);
const selectBox = page.locator("//span[@class='e-chk-image e-icon e-checkmark']").nth(6);
await selectBox.click();
await page.locator("//input[@id='categoryDropdown_hidden']").click();
await page.locator("//input[@id='categoryDropdown_hidden']").click(); 
await page.locator("//span[@class='e-chk-image e-icon']").nth(2).click();

//apply button 
await page.locator("//a[@id='learningportalApplyButton']").click();
await page.waitForTimeout(2000);

//Grid filter functions
await page.locator("//div[@class='e-filtericon e-icon e-filterset']").nth(1).click();
await page.waitForTimeout(2000);
await page.locator("//a[@class='e-menulink'][contains(text(),'Sort A to Z')]").click();
await page.waitForTimeout(2000);
await page.locator("//div[@class='e-filtericon e-icon e-filterset e-sortfiltericon']").click();
await page.waitForTimeout(2000);
await page.locator("//a[@class='e-menulink'][contains(text(),'Sort Z to A')]").click();
await page.waitForTimeout(2000);
//text filters
await page.locator("//div[@class='e-filtericon e-icon e-filterset e-sortfiltericon']").click();
await page.waitForTimeout(2000);
await page.locator("//span[@class='e-chk-image e-icon e-checkmark']").nth(0).click();
await page.waitForTimeout(2000);
//A guide to new manager
await page.locator("//span[@class='e-chk-image e-icon']").nth(1).click();
await page.waitForTimeout(2000);
await page.locator("//input[@id='LearningPortalCourseGridstring_OkBtn']").click();
await page.waitForTimeout(2000);
//course navigation
await page.locator("//a[contains(text(),'ASP.NET Core for Beginners')]").click();
await page.waitForTimeout(13000);
const context = page.context(); // Get the browser context
await page.waitForTimeout(5000); // Small wait to ensure new tabs are detected

const pages = context.pages(); // Get all open pages

if (pages.length > 1) {
    const firstTab = pages[0]; // Get the first tab
    await firstTab.bringToFront(); // Switch to the first tab
} else {
    console.log("Only one tab is open, cannot switch.");
}
await page.waitForTimeout(5000);

await page.locator("//a[@class='e-toolbaricons e-excelIcon e-icon']").click();

       
} catch(error) {
        console.error('Error in LearningPortalFunctionality', error);
        throw error;
    }
}
export async function WebinarSubTab(page:Page){
    try{
        await page.locator("//a[contains(text(),'WEBINAR')]").click();
        await page.waitForTimeout(2000);
        await page.locator("//span[@id='meetingtypeDropdown_dropdown']").click();
        await page.waitForTimeout(2000);
        //Meeting type
        await page.locator("//span[@class='e-chk-image e-icon e-checkmark']").nth(7).click();
        await page.waitForTimeout(2000);
        //select select all
        await page.locator("//span[@class='e-chk-image e-icon']").nth(2).click();
        await page.waitForTimeout(2000);
        //apply
        await page.locator("//a[@id='webinarApplyButton']").click();
        await page.waitForTimeout(2000);
        //columns
        await page.locator("//span[@class='e-btntxt']").click();
        await page.locator("//span[@class='e-chk-image e-icon']").nth(3).click();
        await page.waitForTimeout(2000);
        await page.locator("//button[@class='e-ccformbtn e-btnsub e-flat e-button e-js e-ntouch e-btn-normal e-btn e-select e-widget e-txt e-corner']").click();
        //grid filters

        await page.locator("//div[@class='e-filtericon e-icon e-filterset']").nth(0).click();
        await page.waitForTimeout(2000);
        await page.locator("//a[@class='e-menulink'][contains(text(),'Sort A to Z')]").click();
        await page.waitForTimeout(2000);
        await page.locator("//div[@class='e-filtericon e-icon e-filterset e-sortfiltericon']").click();
        await page.waitForTimeout(2000);
        await page.locator("//a[@class='e-menulink'][contains(text(),'Sort Z to A')]").click();
        await page.waitForTimeout(2000);
        //text filters
        await page.locator("//div[@class='e-filtericon e-icon e-filterset e-sortfiltericon']").click();
        await page.waitForTimeout(2000);
        await page.locator("//span[@class='e-chk-image e-icon e-checkmark']").nth(0).click();
        await page.waitForTimeout(2000);
        await page.locator("//span[@class='e-chk-image e-icon']").nth(0).click();
        await page.waitForTimeout(2000);
        await page.locator("//input[@id='EmployeeMeetingRecordsGridstring_OkBtn']").click();
        await page.waitForTimeout(2000);
        await page.locator("//a[@class='e-toolbaricons e-excelIcon e-icon']").click();
        await page.waitForTimeout(2000);
        
        //Link 
        await page.locator("//a[@title='https://staginghr.syncfusion.com/']").click();
        await page.waitForTimeout(10000);
        const context = page.context(); // Get the browser context
        await page.waitForTimeout(5000); // Small wait to ensure new tabs are detected
        
        const pages = context.pages(); // Get all open pages
        
        if (pages.length > 1) {
            const firstTab = pages[0]; // Get the first tab
            await firstTab.bringToFront(); // Switch to the first tab
        } else {
            console.log("Only one tab is open, cannot switch.");
        }
        
      
    } catch(error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}

const filePath2 = path.join(__dirname, 'test-file.txt'); // File stored 


if (!fs.existsSync(filePath2)) {
    fs.writeFileSync(filePath2, 'This is a sample test file.');
}
const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'];

// Function to create a valid test file
function createTestFile(extension: string) {
    if (!allowedExtensions.includes(extension)) {
        throw new Error(`Invalid file type: ${extension}. Only ${allowedExtensions.join(', ')} are allowed.`);
    }

    const filePath = path.join(__dirname, `test-file.${extension}`);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, 'This is a sample test file.');
    }
    return filePath;
}

export async function CoursesAndCertificationsTab(page:Page){
    try{
        await page.locator("//a[contains(text(),'COURSES AND CERTIFICATIONS')]").click();  
        
       await page.waitForTimeout(2000); 
       await page.locator("//a[@id='courseAddButton']").click();
       await page.waitForTimeout(2000);
       await page.locator("//input[@id='courseName']").fill("TestAuto");
       await page.waitForTimeout(2000);
    //    await page.locator("//input[@id='courseLink']").fill("www.google.com");
    //    await page.waitForTimeout(2000);
       await page.locator("//input[@id='addCourseCategoryAutocomplete']").click();
       await page.waitForTimeout(2000);
       await page.locator("//li[contains(text(),'AWS')]").click();
       await page.waitForTimeout(2000);
       await page.locator("//input[@id='certifiedByDropdown_hidden']").click();
       await page.waitForTimeout(2000);
       await page.locator("//span[contains(text(),'Coursera')]").click();
       await page.waitForTimeout(2000);
       
       await page.locator("//span[@class='e-icon e-calendar']").nth(3).click();
        await page.waitForTimeout(2000);
        await page.locator("//span[contains(text(),'Today')]").click();
       await page.waitForTimeout(2000);
       
       await page.locator("//button[@id='addCourse']").click();
       await page.waitForTimeout(2000);
       const errorLabel = page.locator('#errorDescriptionLabel');

    // Expected text
    const expectedText = 'Description is required.';

    // Assertion
    await expect(errorLabel).toHaveText(expectedText);
    await page.waitForTimeout(2000);
    console.log("The mandatory field is verified");
       await page.locator("//textarea[@id='addCourseDescription']").fill("This AWS course provides a comprehensive understanding of cloud computing using Amazon Web Services (AWS). It covers foundational to advanced AWS services, including compute, storage, networking, security, and database solutions.");
       await page.waitForTimeout(3000);
       await page.locator("//button[@id='addCourse']").click();
       await page.waitForTimeout(2000);
      //filtering the new course 
      await page.locator("//div[@class='e-filtericon e-icon e-filterset']").nth(7).click();
      await page.waitForTimeout(3000);
      await page.locator("//a[contains(text(),'Sort by Newest')]").nth(0).click();
      await page.waitForTimeout(3000);
      
       //Editing the course 
       await page.locator("//i[@class='fa fa-edit']").nth(3).click();
        await page.waitForTimeout(3000);
       //Attach a file certficate
       const fileInput = page.locator('#certificate'); 

    // Upload the file
    await fileInput.setInputFiles(filePath2);
    await page.waitForTimeout(3000);
    await page.locator("//button[@id='editCourse']").click();
       await page.waitForTimeout(2000);
       const errorLabel1 = page.locator("//label[@id='errorCertificateLabel']");

       // Expected text
       const expectedText1 = 'Invalid file type. Only JPEG, JPG, PNG, and PDF files are allowed.';
   
       // Assertion
       await expect(errorLabel).toHaveText(expectedText);
       await page.waitForTimeout(3000);
       console.log("The Invalid File type is verified");

       //upload valid file 
       const fileInput1 = page.locator('#certificate'); // Update the selector if needed

    // Create a valid file (change 'jpg' to test other valid types)
    const filePath = createTestFile('jpg');

    // Upload the file
    await fileInput1.setInputFiles(filePath);

    

    console.log('File uploaded successfully.');
    await page.waitForTimeout(3000);
    await page.locator("//button[@id='editCourse']").click();
       await page.waitForTimeout(3000);
     
    //course category dropdown
    await page.locator("//span[@id='courseCategoryDropdown_dropdown']").click();
       await page.waitForTimeout(2000);
       await page.locator("//div[contains(text(),'Select All')]").nth(2).click();
       await page.waitForTimeout(3000);
       await page.locator("//span[@id='courseCategoryDropdown_dropdown']").click();
       await page.waitForTimeout(3000);
       //excel export
       await page.locator("//li[@id='courseAndCertificateGrid_excelExport']").click();
       await page.waitForTimeout(3000);
       //download certificate
       await page.locator("//i[@class='glyphicon glyphicon-download-alt icon-dark-color']").nth(2).click();
       await page.waitForTimeout(2000);
       
       
    } catch(error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}
test.afterAll(() => {
    allowedExtensions.forEach(ext => {
        const filePath = path.join(__dirname, `test-file.${ext}`);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    });
});

