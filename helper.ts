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

//Function to navigate to timsheet page from Attendance Module (Attendance--> Timesheet)
export async function Timesheet_Navigation(page:Page) {
    try{
       // Hover over the navbar
       await page.locator('//nav[@class="navbar-default navbar-static-side sidebar"]').hover();  
       // Click on the attendance option
       await page.locator("(//span[contains(@class,'fa arrow')])[7]").click();      
       // Click on the Timesheet link
       await page.locator("//a[contains(.,'Timesheet')]").click();
    } catch(error) {
        console.error('Error while Navigation:', error);
        throw error;
    }
}

//Function to select an employee in the timesheet page:
export async function selectEmployee(page: Page, employeeName: string) {
    try{
       // Click on the Employee dropdown
       await page.locator("(//input[@class='e-input'])[1]").click();           
       // Enter the employee name in the search field
       await page.locator("(//input[@class='e-input'])[2]").fill(employeeName);    
       // Click on the specific employee in the dropdown list
       await page.locator(`//span[contains(.,'${employeeName}')]`).click();    
    } catch(error) {
        console.error('Error while selecting an employee',error);
        throw error;
    }
}

//Function to select the date in the timesheet page:
export async function selectDate(page:Page) {
    try{
        //Click Date field:
         await page.locator("//div[@class='pull-right innerlabel']").click();
        // Click on the Date field
         await page.locator("//li[contains(.,'Custom Range')]").click();
        //Enter the start date
         await page.locator("//input[@class='input-mini active']").fill("10/23/2024");
        //Enter the end date
         await page.locator("//input[@class='input-mini']").fill('10/23/2024')                 
        //Click apply button
         await page.locator("//button[contains(.,'Apply')]").click();
     }catch(error){
       console.error('Error while selecting the date',error);
       throw error;
    }
 }


//Function to select the options dropdown and manual entry option:
export async function selectManualentry(page:Page) {
    try{
        //Click options dropdown
        await page.locator("//button[@id='dropdownMenu1']").click();
        //Click manual entry
        await page.locator("//a[@id='addManualEntryDialog']").click();
    }catch(error){
        console.error('Error while selecting the manual entry page',error);
        throw error;
    }
    
}


//Function to Open add manual entry and select the employee in the Employee name dropdown
export async function selectEmployeeName(page: Page) {
    try {
         await page.locator("//input[@id='employeeName_hidden']").click();
        //  await page.locator("//input[@id='employeeName_inputSearch']").click();
         await page.locator("(//li[@id='52814'])[2]").click();
         await page.locator("//input[@id='employeeName_hidden']").click();
     } catch (error) {
         console.error('Error while selecting the employee', error);
         throw error;
     }
 }
    
 //Function to select the office option in the manual entry page:
 export async function selectOfficeIn(page:Page) {
    try{
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[1]").click();//Click office radio button.        
    }catch (error){
        console.error('Error while selecting the office',error);
        throw error;
    }
    
 }

 //Function to select the Eymard completed in reader name:
 export async function selectEymardcomplex(page:Page) {
    try{
        await page.locator("//input[@id='readerName_hidden']").click();
        await page.locator("(//span[text()='Eymard Complex'])[2]").click();
    }catch(error){
        console.error('Error while selecting Eymard Complex in Reader name',error);
        throw error;
    }    
 }

 //Function to select the Eymard complex web Check in in reader name:
 export async function selectEymardwebcheckin(page:Page) {
    try{
        await page.locator("//input[@id='readerName_hidden']").click();
        await page.locator("(//span[text()='Eymard Complex (Web Check-in)'])[2]").click();
    }catch(error){
        console.error('Error while selecting Eymard complex web check in in Reader name',error);
        throw error;
    }    
 }

 //Function to select the Mathura Towers Web check in:
 export async function selectMathurawebcheckin(page:Page) {
    try{
        await page.locator("//input[@id='readerName_hidden']").click();
        await page.locator("(//span[text()='Mathura Towers (Web Check-in)'])[2]").click();
    }catch(error){
        console.error('Error while selecting Mathura Towers web check in in Reader name',error);
        throw error;
    }    
 }

 //Function to select the Mathura Towers- 1st floor:
 export async function selectMathura1stfloor(page:Page) {
    try{
        await page.locator("//input[@id='readerName_hidden']").click();
        await page.locator("(//span[text()='Mathura Towers - 1st Floor'])[2]").click();
    }catch(error){
        console.error('Error while selecting Mathura Towers- 1st floor in Reader name',error);
        throw error;
    }    
 }

 //Function to select the Mathura Towers- 2nd floor:
 export async function selectManthura2ndfloor(page:Page) {
    try{
        await page.locator("//input[@id='readerName_hidden']").click();
        await page.locator("(//span[text()='Mathura Towers - 2nd Floor'])[2]").click();
    }catch(error){
        console.error('Error while selecting Mathura- 2nd floor in Reader name',error);
        throw error;

    }
    
 }

 //Function to select the Mathura Towers- 3rd floor:
 export async function selectMathura3rdfloor(page:Page) {
    try{
        await page.locator("//input[@id='readerName_hidden']").click();
        await page.locator("(//span[text()='Mathura Towers - 3rd Floor'])[2]").click();

    }catch(error){
        console.error('Error while selecting Mathura- 3rd floor in Reader name',error);
        throw error;
    }
    
 }

 //Function to select the Mathura Towers- 4th floor:
 export async function selectMathura4thfloor(page:Page) {
    try{
        await page.locator("//input[@id='readerName_hidden']").click();
        await page.locator("(//span[text()='Mathura Towers - 4th Floor'])[2]").click();
    }catch(error){
        console.error('Error while  selecting Mathura- 4th floor',error);
        throw error;
    }
    
 }

 //Function to select the Home option in the manual entry page:
 export async function selectHomeIn(page:Page){
    try{
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[1]").click();//Click office radio button.
    }catch (error){
        console.error('Error while selecting Home radio button',error);
        throw error;
    }
 }

 //Function to select the Check in radio button in the manual entry page:
 export async function selectCheckin(page:Page) {
    try{
        await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[2]").click();
    }catch(error){
        console.error('Error while check in',error);
        throw error;
    }    
 }

 //Function to select the Check out radio button in the manual entry page:
 export async function selectCheckout(page:Page) {
    try{
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[2]").click
    }catch(error){
        console.error('Error while Check out',error);
        throw error;
    }
    
 }

 //Function to select the Entry check out dropdown for Lunch:
 export async function selectLunchout(page:Page) {
    try{
        await page.locator("//input[@id='CheckOutTypeName_hidden']").click();
        await page.locator("(//span[text()='Lunch'])[3]").click();
    }catch(error){
        console.error('Error while selecting the Lunch in checkout type',error);
        throw error;
    }    
 }

 //Function to select the Entry check out dropdown for Work wrap up
 export async function selectWorkwrapup(page:Page) {
    try{
        await page.locator("//input[@id='CheckOutTypeName_hidden']").click();
        await page.locator("(//span[text()='Work wrap up'])[2]")
    }catch(error){
        console.error('Error while selecting the work wrap up in checkout type',error);
        throw error;
    }    
 }

 //Function to select the Entry check out dropdown for Mobile Test/Dev:
 export async function selectMobiletestdev(page:Page) {
    try{
        await page.locator("//input[@id='CheckOutTypeName_hidden']").click();
        await page.locator("(//span[text()='Mobile Test/Dev'])[2]").click();

    }catch(error){
        console.error('Error while selecting the Mobile test/dev as checkout type',error);
        throw error;
    }
    
 }

 //Function to select the Permission of the manual entry page:
 export async function selectPermission(page:Page) {
    try{
        await page.locator("//input[@id='CheckOutTypeName_hidden']").click();
        await page.locator("(//span[text()='Permission'])[2]").click();
    }catch(error){
        console.error('Error while selecting Permission in the checkout type',error);
        throw error;
    }    
 }

 //Function to selet the Break option in the Manual entry page:
 export async function selectBreak(page:Page) {
    try{
        await page.locator("//input[@id='CheckOutTypeName_hidden']").click();
        await page.locator("(//span[text()='Break'])[2]").click();        
    }catch(error){
        console.error('Error while selecting Break as checkout type',error);
        throw error;
    }    
 }

 //Function to select the Others in the Manual entry check out type.
 export async function selectOthers(page:Page) {
    try{
        await page.locator("//input[@id='CheckOutTypeName_hidden']").click();
        await page.locator("(//span[text()='Others'])[2]").click();
    }catch(error){
        console.error('Error while selecting Other in the checkout type entry',error);
        throw error;
    }    
 }

 //Function to select the Date in the calender of the manual entry page:
 export async function selectEntrydate(page:Page) {
    try{
        await page.locator("//span[@class='e-datewidget e-widget e-ntouch e-valid']").click();
        await page.locator("//input[@class='form-control e-datepicker e-js e-input']").clear();
        await page.locator("//input[@class='form-control e-datepicker e-js e-input']").fill("10/23/2024");
    }catch(error){
        console.error('Error while enter the date in the date field',error);
        throw error;
    }    
 }

 //Function to select the AM in the manual entry page:
 export async function selectEntrytimeAM(page:Page) {
    try{
        await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[3]").click();
    }catch(error){
        console.error('Error while selecting the AM in Entry time',error);
        throw error;
    }    
 }

 //Function to select the PM in the manual entry page:
 export async function selectEntrytimePM(page:Page) {
    try{
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[3]").click();
    }catch(error){
        console.error('Error while select the PM in Entry time',error);
        throw error;
    }    
 }

 //Function in the grid search:
 export async function selectSearchgrid(page:Page) {
    try{
        await page.locator("//input[@id='inandouttimegrid_searchbar']").fill("");
        await page.locator("//a[@class='e-searchitem e-toolbaricons e-disabletool e-icon e-searchfind']").click();
    }catch(error){
        console.error('Error while clicking search icon in the grid',error);
        throw error;
    }    
 }

 //Function to click and check the export:
 export async function selectExportbutton(page:Page) {
    try{
        await page.locator("//a[@class='e-toolbaricons e-excelIcon e-icon']").click();

    }catch(error){
        console.error('Error while clicking export option',error);
        throw error;
    }    
 }

 //Function to Open the accordion of the entry.
 export async function selectOpenaccordion(page:Page) {
    try{
        await page.locator("//div[@class='e-icon e-gnextforward']").click();
    }catch(error){
        console.error('Error while clicking accordian for the entry',error);
        throw error;
    }
 }

 //Function to click 1st gear icon in the child entry grid of timesheet page:
 export async function select1stgearicon(page:Page) {
    try{
        await page.locator("(//span[@class='glyphicon glyphicon-cog dropdown-toggle'])[1]").click();
    }catch(error){
        console.error('Error while clicking 1st gear icon',error);
        throw error;
    }    
 }

 //Function to Edit the in entry for the first gear icon:
 export async function selectEditcheckin(page:Page) {
    try{        
        await page.locator("//a[@class='fa fa-edit']").click();
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[1]").click();//Select office radio button.
        await page.locator("(//div[@class='e-radiobtn-wrap e-widget e-radsmall'])[2]").click();//Select Home radio button.
        await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[2]").click(); //Select In radio button.
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[2]").click(); //Select Out radio button.
        await page.locator("//input[@class='form-control e-datepicker e-js e-input']").fill("10/25/2024");//Select entry date
        await page.locator("//input[@class='form-control e-maskedit e-js e-input']").fill("10:00:00");//Enter entry time
        await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[3]").click();//Select AM
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[3]").click();//Select PM
        // await page.locator("//button[@id='reset-manualEntryDialog']").click();//Click reset button.
        // await page.locator("//button[@id='cancel-manualEntryDialog']").click();//Click cancel button.
        await page.locator("//button[@id='submit-manualEntryDialog']").click();//Click update button.
    }catch(error){
        console.error('Error while editing the entries',error);
        throw error;
    }
    
 }

  //Function edit checkout manual entry:
  export async function selectEditcheckout(page:Page) {
    try{
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[1]").click();//Click edit check out entry.
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[1]").click(); //Click office radio button.
        await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[1]").click(); //Click home radio button.
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[2]").click(); //Click In radio button.
        await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[2]").click(); //Click Out radio button.
        await page.locator("//input[@id='CheckOutTypeName_hidden']").click(); //Click checkout type dropdown.
        await page.locator("//li[@data-value='1']//span").click(); //Click Lunch option in checkout
        await page.locator("(//li[@data-value='2']//span)[4]").click(); //Click workwrap up in checkout.
        await page.locator("(//li[@data-value='3']//span)[4]").click(); //Click Mobile test/dev in checkout.
        await page.locator("(//li[@data-value='4']//span)[4]").click(); //Click Permission in checkout.
        await page.locator("(//li[@data-value='5']//span)[4]").click(); //Click Break in checkout.
        await page.locator("(//li[@data-value='6']//span)[1]").click(); //Click other in checkout type.
        await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[3]").click(); //Click AM radio button.
        await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[3]").click(); //Click PM radio button.
    }catch(error){
        console.error('Error while selecting the edit manual entry',error);
        throw error;
    }    
 }


 //Function to Delete the in entry for the first gear icon:
 export async function selectDeletein(page:Page){
    try{       
        await page.locator("(//a[@class='fa fa-bitbucket'])[1]").click();
        await page.locator("//button[@class='confirm btn-danger']").click(); //Click yes button in delete dialog.
        //await page.locator("//button[@class='cancel']").click(); //Click No button in delete dialog.
    }catch(error){
        console.error('Error while deleting the check in entry',error);
        throw error;
    }
 }

 //Function to Delete the out entry for the first gear icon:
 export async function selectDeleteout(page:Page){
    try{
        await page.locator("(//a[@class='fa fa-bitbucket']//span)[2]").click(); //Click delete option of check out entry.
        await page.locator("//button[@class='confirm btn-danger']").click(); //Click Yes in the delete option.
        //await page.locator("//button[@class='cancel']").click(); //Click No button in the delete option.
    }catch(error){
        console.error("Error while deleting the check out entry",error);
        throw error;
    }
    
 }

 //Function to click 2nd gear icon in the entry grid:
 export async function select2ndgearicon(page:Page){
    try{
        await page.locator("(//span[@class='glyphicon glyphicon-cog dropdown-toggle'])[2]").click();
    }catch(error){
        console.error('Error while click 2nd gear icon',error);
        throw error;
    }
 }


//  //Function to edit check in entry for second gear icon:
//  export async function selectEditCheckin2(page:Page) {
//     try{
//         await page.locator("(//a[@class='fa fa-edit'])[3]").click(); //Click Edit in 2nd gear icon.
//         await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[1]").click();//Select office radio button.
//         await page.locator("(//div[@class='e-radiobtn-wrap e-widget e-radsmall'])[2]").click();//Select Home radio button.
//         await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[2]").click(); //Select In radio button.
//         await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[2]").click(); //Select Out radio button.
//         await page.locator("//input[@class='form-control e-datepicker e-js e-input']").fill("10/25/2024");//Select entry date
//         await page.locator("//input[@class='form-control e-maskedit e-js e-input']").fill("10:00:00");//Enter entry time
//         await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[3]").click();//Select AM
//         await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[3]").click();//Select PM
//         // await page.locator("//button[@id='reset-manualEntryDialog']").click();//Click reset button.
//         // await page.locator("//button[@id='cancel-manualEntryDialog']").click();//Click cancel button.
//         await page.locator("//button[@id='submit-manualEntryDialog']").click();//Click update button.
//     }catch(error){
//         console.error('Error while editing the entries',error);
//         throw error;
//     }    
//  }

//  //Function to edit check out entry for second gear icon:
//  export async function selectEditcheckout2(page:Page) {
//     try{
//         await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[1]").click();//Click edit check out entry.
//         await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[1]").click(); //Click office radio button.
//         await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[1]").click(); //Click home radio button.
//         await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[2]").click(); //Click In radio button.
//         await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[2]").click(); //Click Out radio button.
//         await page.locator("//input[@id='CheckOutTypeName_hidden']").click(); //Click checkout type dropdown.
//         await page.locator("//li[@data-value='1']//span").click(); //Click Lunch option in checkout
//         await page.locator("(//li[@data-value='2']//span)[4]").click(); //Click workwrap up in checkout.
//         await page.locator("(//li[@data-value='3']//span)[4]").click(); //Click Mobile test/dev in checkout.
//         await page.locator("(//li[@data-value='4']//span)[4]").click(); //Click Permission in checkout.
//         await page.locator("(//li[@data-value='5']//span)[4]").click(); //Click Break in checkout.
//         await page.locator("(//li[@data-value='6']//span)[1]").click(); //Click other in checkout type.
//         await page.locator("(//span[@class='e-rad-icon e-icon e-rad-select'])[3]").click(); //Click AM radio button.
//         await page.locator("(//span[@class='e-rad-icon e-icon e-circle_01'])[3]").click(); //Click PM radio button.
//     }catch(error){
//         console.error('Error while selecting the edit manual entry',error);
//         throw error;
//     }    
//  }

 //Function to delete check in entry for second gear icon:
 export async function selectDeletein2(page:Page) {
    try{
        await page.locator("(//a[@class='fa fa-bitbucket'])[3]").click();
        await page.locator("//button[@class='confirm btn-danger']").click();
        //await page.locator("//button[@class='cancel']").click(); //Click cancel button.
    }catch(error){
        console.error('Error while deleting the check in in 2nd gear',error);
        throw error;
    }    
 }

 //Function to delete check out entry for third gear icon:
 export async function select3rdgearicon(page:Page) {
    try{
        await page.locator("(//span[@class='glyphicon glyphicon-cog dropdown-toggle'])[3]").click();
    }catch(error){
        console.error('Error while clicking 3rd gear icon',error);
        throw error;
    }    
 }

  //Function to delete check out entry for fourth gear icon:
  export async function select4thgearicon(page:Page) {
    try{
        await page.locator("(//span[@class='glyphicon glyphicon-cog dropdown-toggle'])[4]").click();
    }catch(error){
        console.error('Error while clicking 4th gear icon',error);
        throw error;
    }    
 }


   //Function to delete check out entry for fourth gear icon:
   export async function select5thgearicon(page:Page) {
    try{
        await page.locator("(//span[@class='glyphicon glyphicon-cog dropdown-toggle'])[5]").click();
    }catch(error){
        console.error('Error while clicking 5th gear icon',error);
        throw error;
    }    
 }

