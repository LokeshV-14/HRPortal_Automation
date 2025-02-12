import { Page, expect } from '@playwright/test';
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
export async function Overview_Navigation(page:Page) {
    try{
    await page.locator('//nav[@class="navbar-default navbar-static-side sidebar"]').hover();  
    await page.getByRole('link', { name: 'My Profile ' }).click();
    await page.getByRole('link', { name: 'Overview' }).click();
} catch(error) {
    console.error('Error while Navigation:', error);
    throw error;
}
}
export async function PersonalTab(page:Page) {
    try{
        await page.locator("xpath=//a[@id='personaldetails']").click();
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
          });
          
          await page.waitForTimeout(3000); 
          await page.locator("//i[@class='fa fa-angle-up']").click();
} catch(error) {
    console.error('Error while Navigation:', error);
    throw error;
}
}
export async function Contact_tab(page:Page) {
    try{
        await page.locator("//a[@id='contactdetails']").click();
        await page.locator("//a[@id='visitorslogs']").click();
        await page.locator("//i[@class='icon-button pageBackButton']").click();
        await page.locator("//a[@class='linkUnderline default-color employee-popover'][@data-employeeid='SF1807']").click();
        await page.bringToFront();
} catch(error) {
    console.error('Error while Navigation:', error);
    throw error;
}
}
export async function Education_tab(page:Page) {
    try{
    await page.locator("//a[@id='educationdetails']").click();
    
} catch(error) {
    console.error('Error while Navigation:', error);
    throw error;
}
}
export async function AboutMe_tab(page:Page) {
    try{
        await page.locator("//a[@id='aboutMeDetails']").click();
        await page.locator("//a[contains(text(),'https://syncfusion.atlassian.net/browse/HRPORTAL-2948.')]").click();
        await page.bringToFront();
        
} catch(error) {
    console.error('Error while Navigation:', error);
    throw error;
}
}
export async function Update_button(page:Page) {
    try{
        await page.locator("//button[@class='btn  btn-primary btn-sm'][@id='aboutMeButton']").click();
        
        
  // 1.Who Am I? field
  const whoAmIField = await page.locator("//textarea[@class='form-control aboutMe'][@id='whoAmI']"); 
  await whoAmIField.clear(); 
  await whoAmIField.fill('Testing engineer'); 

  // 2. Favorite place field
  const favoritePlaceField = await page.locator("//textarea[@class='form-control aboutMe'][@id='favoritePlace']");
  await favoritePlaceField.clear();
  await favoritePlaceField.fill('https://syncfusion.atlassian.net/browse/HRPORTAL-2948.');

  // 3. 'Inspired by' field
  const inspiredByField = await page.locator("//textarea[@class='form-control aboutMe'][@id='inspiredBy']"); 
  await inspiredByField.clear();
  await inspiredByField.fill('APJ. Abdul Kalam, Mahatma gandhi.');

  // 4.  'Fun activities' field
  const funActivitiesField = await page.locator("//textarea[@class='form-control aboutMe'][@id='funactivity']");
  await funActivitiesField.clear();
  await funActivitiesField.fill('sample test.');

  // 5.  'Like to learn more about' field
  const likeToLearnField = await page.locator("//textarea[@class='form-control aboutMe'][@id='learnAbout']");
  await likeToLearnField.clear();
  await likeToLearnField.fill('Syncfusion');

  const updateButton = await page.locator('button#updateAboutMeDetails'); 

  // Click the button
  await updateButton.click();
  
  await page.locator("//button[@class='btn  btn-primary btn-sm'][@id='aboutMeButton']").click();

  // 6. Asserting field values 
  expect(await whoAmIField.inputValue()).toBe('Testing engineer');
  expect(await likeToLearnField.inputValue()).toBe('Syncfusion');
 
  const message ='Successfully updated';
  console.log(message);
 // Warning message
  await updateButton.click();
  const actualResultElement = await page.locator('label#aboutMeerrorlabel');
  const actualResult = await actualResultElement.textContent();

  
  const expectedResult = 'No changes found.';

  
  if (actualResult === expectedResult) {
    console.log('Test Passed: Actual result matches the expected result:', actualResult);
  } else {
    console.log('Test Failed: Results do not match.');
    console.log('Actual Result:', actualResult);
    console.log('Expected Result:', expectedResult);
  }
  await page.locator('a#cancelAboutMeDetails').click();
  
         
} catch(error) {
    console.error('Error while Navigation:', error);
    throw error;
}
}