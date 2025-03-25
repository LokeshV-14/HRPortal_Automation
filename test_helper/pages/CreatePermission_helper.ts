import { expect, Page } from "@playwright/test";

import { baseUrl, createPermissionUrl } from "./url";


export class Create_Permission {
    static createPermission() {
    }
    private page1: Page;
    constructor(private page: Page) {}

    async createPermission() {
        await this.page.getByRole('button', { name: 'Create' }).click();
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: 'Create Permission' }).click();
        const page1 = await page1Promise;
        await expect(page1).toHaveTitle('Create Leave System | Syncfusion HR Portal');
        await page1.close();
    }

    async emptyValidations() {  
        await this.page.goto(baseUrl+createPermissionUrl)
        await this.page.locator('#leaveSystemUpdateClick').click();    
        await expect(this.page.getByText('Engineer is required.')).toBeVisible();
        await expect(this.page.getByText('General Permission is not applicable for the selected employee.')).toBeVisible();
        await expect(this.page.getByText('You must specify a summary.')).toBeVisible();
        await expect(this.page.getByText('Description is required.')).toBeVisible();
        await expect(this.page.getByText('Shift is required.')).toBeVisible();
        await expect(this.page.getByText('Start time is required.')).toBeVisible();
        await expect(this.page.getByText('Number of Hours is required.')).toBeVisible();
    }

    async livechatmorning1030shiftEmployeeshiftvalidation(){
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('sathya');
        await this.page.getByText('Sathya Nagarajan - sathyan@').click();
        const shiftField = this.page.locator("(//span[@class='e-input-group e-control-wrapper e-ddl e-lib e-keyboard e-valid-input'])[4]"); 
        await expect(shiftField).toHaveText("Live Chat - Morning (10:30) Shift");
    }

    async noonshiftEmployeeshiftvalidation(){
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('manikandan sel');
        await this.page.getByText('Manikandan Selvaraj -').click();
        const shiftField = this.page.locator("(//span[@class='e-input-group e-control-wrapper e-ddl e-lib e-keyboard e-valid-input'])[4]");
        await expect(shiftField).toHaveText("Noon Shift");
    }

    async nightshiftEmployeevalidation(){
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('jaya');
        await this.page.getByText('Jayakrishnan Jayakumar -').click();
        const shiftField = this.page.locator("(//span[@class='e-input-group e-control-wrapper e-ddl e-lib e-keyboard e-valid-input'])[4]");
        await expect(shiftField).toHaveText("Night Shift");
    }

    async earlyeveningshiftEmployeevalidation(){
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('elakkiya');
        await this.page.getByText('Elakkiya Renganathan -').click();
        const shiftField = this.page.locator("(//span[@class='e-input-group e-control-wrapper e-ddl e-lib e-keyboard e-valid-input'])[4]");
        await expect(shiftField).toHaveText("Early Evening Shift");
    }

    async regularshiftEmployeevalidation(){
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('Lokesh');
        await this.page.getByText('Lokesh Playwright -').click();
        const shiftField = this.page.locator("(//span[@class='e-input-group e-control-wrapper e-ddl e-lib e-keyboard e-valid-input'])[4]");
        await expect(shiftField).toHaveText("Regular Shift");
    }

    async negativeValidationforlatenoonshiftEmployee(){
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('jeba');
        await this.page.getByText('Jebaraj Manickam - jebarajm@').click();
        const shiftField = this.page.locator("(//span[@class='e-input-group e-control-wrapper e-ddl e-lib e-keyboard e-valid-input'])[4]");
        await expect(shiftField).not.toHaveText("Regular Shift");
    }

    async fileValidationmorethan5mb(){
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('Lokesh');
        await this.page.getByText('Lokesh Playwright -').click();
        await this.page.locator('#summary').click();
        await this.page.locator('#summary').fill('Test Permission');
        await this.page.locator('#leavesystemdescription_rte-edit-view').click();
        await this.page.locator('#leavesystemdescription_rte-edit-view').fill('Test Permission');
        await this.page.setInputFiles('input[type="file"]', './Data/10mb.pdf');
        await expect(this.page.getByText('Attachment(s) exceed the 5 MB limit')).toBeVisible(); 
        await this.page.getByLabel('', { exact: true }).first().click();
        await this.page.getByRole('option', { name: '1.0' }).click();
        await this.page.locator('#leaveSystemUpdateClick').click();        
    }

    async fileValidationlessthan5mb(){
        await this.page.setInputFiles('input[type="file"]', './Data/3-mb-sample-pdf-file.pdf');
        const successMessage = this.page.locator("//span[text()=' Ready to upload ']");
        await expect(successMessage).toBeVisible();   
    }

    async successfullgeneralPermission() {
        await this.page.goto(baseUrl+createPermissionUrl)
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('Lokesh');
        await this.page.getByText('Lokesh Playwright -').click();
        await this.page.locator('#summary').click();
        await this.page.locator('#summary').fill('Test General Permission');
        await this.page.locator('#leavesystemdescription_rte-edit-view').click();
        await this.page.locator('#leavesystemdescription_rte-edit-view').fill('Test General Permission');
        await this.page.setInputFiles('input[type="file"]', './Data/3-mb-sample-pdf-file.pdf');
        await this.page.locator('.startTime > .inputdiv > .e-input-group > .e-input-group-icon').click();
        await this.page.getByRole('option', { name: '05:00 PM' }).click();
        await this.page.waitForTimeout(3000);
        await this.page.locator('.generalpermision > .e-input-group > .e-input-group-icon').click();
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('option', { name: '2.5' }).click();
        await this.page.locator('#leaveSystemUpdateClick').click();    
        const statusField = this.page.locator("(//span[@class='e-input-group e-control-wrapper e-ddl e-lib e-keyboard e-valid-input'])[1]");
        await expect(statusField).toHaveText("Closed");
        const permissionTypeField = this.page.locator("(//span[@class='e-input-group e-control-wrapper e-ddl e-lib e-keyboard e-valid-input'])[3]");
        await expect(permissionTypeField).toHaveText("General Permission");
    }

    async generalpermissionKenyaemployee(){
        await this.page.goto(baseUrl+createPermissionUrl)
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('Vinod');
        await this.page.getByText('Vinod Kumar Rajan - vinodr@').click();
        await this.page.locator('#summary').click();
        await this.page.locator('#summary').fill('Test General Permission');
        await this.page.locator('#leavesystemdescription_rte-edit-view').click();
        await this.page.locator('#leavesystemdescription_rte-edit-view').fill('Test General Permission');
        await this.page.getByPlaceholder('Select start date of your work').click();
        await this.page.getByPlaceholder('Select start date of your work').fill('3/25/');
        await this.page.getByRole('button', { name: 'select' }).first().click();
        await this.page.getByTitle('Tuesday, March 25,').click();
        await this.page.locator('.startTime > .inputdiv > .e-input-group > .e-input-group-icon').click();
        await this.page.getByRole('option', { name: '02:00 PM' }).click();
        await this.page.getByLabel('', { exact: true }).first().click();
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('option', { name: '1.0' }).click();
        await this.page.locator('#leaveSystemUpdateClick').click();
        await this.page.locator('#DeleteLeave').click();
        await this.page.locator('#deleteleave').click();
    }
    
    async generalPermissionForEachHour() {
        let hourOptions = ['0.5', '1.0', '1.5', '2.0'];
    
        for (let hours of hourOptions) {
            // Navigate to the create permission page
            try {
                await this.page.goto(baseUrl + createPermissionUrl, { waitUntil: 'load', timeout: 60000 });
            } catch (error) {
                console.error("Navigation failed:", error);
                continue; // Skip to the next iteration if navigation fails
            }
    
            // Select the engineer
            await this.page.locator('.e-input-group').first().click();
            await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('Maith');
            await this.page.getByText('Maithiliy Karthikeyan -').click();
    
            // Fill in the summary and description
            await this.page.locator('#summary').fill('Test General Permission');
            await this.page.locator('#leavesystemdescription_rte-edit-view').fill('Test general permission');
    
            // Select the date
            await this.page.getByRole('button', { name: 'select' }).first().click();
            await this.page.getByTitle('Tuesday, March 25,').click();
    
            // Select the start time
            await this.page.locator('.startTime > .inputdiv > .e-input-group > .e-input-group-icon').click();
            await this.page.getByRole('option', { name: '10:00 AM' }).click();
    
            // Select the number of hours
            if (hours) {
                await this.page.getByLabel('', { exact: true }).first().click();
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('option', { name: hours }).click();
            }
    
            // Submit the permission
            await this.page.locator('#leaveSystemUpdateClick').click();
    
            // Wait for confirmation message (optional, modify selector accordingly)
            //await this.page.waitForSelector('#confirmationMessage', { timeout: 5000 });
    
            // Delete the permission
            await this.page.waitForTimeout(3000);
            await this.page.locator('#DeleteLeave').click();
            await this.page.locator('#deleteleave').click();
    
            // Wait for deletion to complete before navigating again
            await this.page.waitForTimeout(3000);
    
            // Re-navigate to create permission page for the next iteration
            await this.page.goto(baseUrl + createPermissionUrl, { waitUntil: 'load', timeout: 60000 });
        }
    }    

    async generalpermissionlivechatmorning1030shiftEmployee(){
        await this.page.goto(baseUrl+createPermissionUrl)
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('Maith');
        await this.page.getByText('Maithiliy Karthikeyan -').click();
        await this.page.locator('#summary').click();
        await this.page.locator('#summary').fill('Test General Permission');
        await this.page.locator('#leavesystemdescription_rte-edit-view').click();
        await this.page.locator('#leavesystemdescription_rte-edit-view').fill('Test general permission');
        await this.page.getByRole('button', { name: 'select' }).first().click();
        await this.page.getByTitle('Tuesday, March 25,').click();
        await this.page.locator('.startTime > .inputdiv > .e-input-group > .e-input-group-icon').click();
        await this.page.getByRole('option', { name: '10:00 AM' }).click();
        await this.page.getByLabel('', { exact: true }).first().click();
        await this.page.getByRole('option', { name: '3.0' }).click();
        await this.page.locator('#leaveSystemUpdateClick').click();
        await this.page.locator('#DeleteLeave').click();
        await this.page.locator('#deleteleave').click();
    }

    async changeOpenstatus(){
        await this.page.getByRole('combobox', { name: 'Closed' }).locator('span').click();
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('option', { name: 'Open' }).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator('#Statuscomments_rte-edit-view').click();
        await this.page.locator('#Statuscomments_rte-edit-view').fill('Changed to open status');
        const statusField = this.page.locator("(//span[@class='e-input-group e-control-wrapper e-ddl e-lib e-keyboard e-valid-input'])[1]");
        await expect(statusField).toHaveText("Open");        
        await this.page.locator('#TaskStatusUpdateClick').click();
        await this.page.getByRole('link', { name: 'History', exact: true }).click();
        const statusUpdateField = this.page.locator("(//pre[@id='historytext'])[1]");
        await expect(statusUpdateField).toContainText("Status Updated.");
        await expect(statusUpdateField).toContainText("Status: changed to Open from Closed.");
    }

    async editgeneralpermissionValidation(){
        await this.page.getByRole('combobox', { name: 'datepicker' }).click();
        await this.page.getByRole('combobox', { name: 'datepicker' }).fill('02/Mar/2025');
        await this.page.locator('#createLeaveSystemForm div').filter({ hasText: 'Start Time' }).locator('span').nth(2).click();
        await this.page.getByRole('option', { name: '05:30 PM' }).click();
        await this.page.getByRole('combobox', { name: '1.0' }).click();
        await this.page.getByRole('option', { name: '2.0' }).click();
        await this.page.getByRole('button', { name: 'Update' }).click();
        const permissionDateField = this.page.locator("//input[@id='permissiondate']");
        await expect(permissionDateField).toHaveValue("02/Mar/25");
        const startTimeField = this.page.locator("//input[@id='starttime']");
        await expect(startTimeField).toHaveValue("05:30 PM");
    }

    async commentfieldemptyValidation(){
        await this.page.getByRole('link', { name: 'Comments' }).click();
        await this.page.getByRole('textbox', { name: 'Add a comment...' }).click();
        await this.page.locator('#commentUpdateClick').click();
        await expect(this.page.getByText('The Comments field is required.')).toBeVisible();
    }

    async commentfieldspaceValidation(){
        await this.page.locator('#commentbox_rte-edit-view').click();
        await this.page.locator('#commentbox_rte-edit-view').fill(' ');
        await this.page.locator('#commentUpdateClick').click();
        await expect(this.page.getByText('The Comments field is required.')).toBeVisible();
    }

    async fileuploawithoutncommentValidation(){
        await this.page.setInputFiles('input[type="file"]', './Data/3-mb-sample-pdf-file.pdf');
        await this.page.locator('(//a[text()="Save"])[2]').click();
        //await expect(this.page.getByText('The Comments field is required.')).toBeVisible();
    }

    async updatecommentwithdataValidation(){
        await this.page.getByRole('link', { name: 'Comments' }).click();
        await this.page.locator('(//a[text()="Save"])[2]').click();
        //await expect(this.page.getByText('Comment has been updated.')).toBeVisible();
    }

    async statuscancelValidation(){
        await this.page.getByRole('combobox', { name: 'Open' }).locator('span').click();
        await this.page.getByRole('option', { name: 'Cancelled' }).click();
        await this.page.locator('#Statuscomments_rte-edit-view').click();
        await this.page.locator('#Statuscomments_rte-edit-view').fill('Test');
        await this.page.locator('#TaskStatusUpdateClick').click();
    }

    async deletepermissionValidation(){
        await this.page.locator('#DeleteLeave').click();
        await this.page.locator('#deleteleave').click();
        //await expect(this.page.getByText('Permission Request has been')).toBeVisible();
    }

    async latenightPermissioncreation(){
        await this.page.goto(baseUrl+createPermissionUrl);
        await this.page.locator('.e-input-group').first().click();
        await this.page.getByRole('dialog', { name: 'engineer' }).getByRole('combobox').fill('Lokesh');
        await this.page.getByText('Lokesh Playwright -').click();
        await this.page.getByRole('combobox', { name: 'General Permission' }).click();
        await this.page.getByText('Late Night Permissionnull').click();
        await this.page.locator('#summary').click();
        await this.page.locator('#summary').fill('Test Late night permission');
        await this.page.locator('#leavesystemdescription_rte-edit-view').click();
        await this.page.locator('#leavesystemdescription_rte-edit-view').fill('Test Late night permission');
        await this.page.getByRole('button', { name: 'select' }).click();
        await this.page.getByText('20', { exact: true }).click();
        await this.page.locator('.startTime > .inputdiv > .e-input-group > .e-input-group-icon').click();
        await this.page.getByRole('option', { name: '02:00 PM' }).click();
        await this.page.getByLabel('', { exact: true }).nth(1).click();
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('option', { name: '03 h' }).click();
        await this.page.waitForTimeout(3000);
        await this.page.getByLabel('', { exact: true }).nth(1).click();
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('option', { name: '00 m' }).click();
        await this.page.locator('#leaveSystemUpdateClick').click();
    }

    async requestforapprovalstatusValidation(){
        await this.page.getByRole('combobox', { name: 'Open' }).click();
        await this.page.getByRole('option', { name: 'Request For Approval' }).click();
        await this.page.locator('#modalComment_rte-edit-view').click();
        await this.page.locator('#modalComment_rte-edit-view').fill('Test request for approval status');
        await this.page.locator('#requestForApprovalClick').click();
    }

    async requestforclarificationstatusValidation(){
        await this.page.getByRole('combobox', { name: 'Request For Approval' }).click();
        await this.page.getByRole('option', { name: 'Request For Clarification' }).click();
        await this.page.locator('#Statuscomments_rte-edit-view').click();
        await this.page.locator('#Statuscomments_rte-edit-view').fill('Test Request for clarification status');
        await this.page.locator('#TaskStatusUpdateClick').click();        
    }

    async rejectedtatusValidation(){
        await this.page.getByRole('combobox', { name: 'Request For Clarification' }).click();
        await this.page.getByRole('option', { name: 'Rejected' }).click();
        await this.page.locator('#Statuscomments_rte-edit-view').click();
        await this.page.locator('#Statuscomments_rte-edit-view').fill('Test');
        await this.page.locator('#TaskStatusUpdateClick').click();
    }

    async approvedstatusValidation(){
        await this.page.getByRole('combobox', { name: 'Rejected' }).click();
        await this.page.getByRole('option', { name: 'Open' }).click();
        await this.page.locator('#Statuscomments_rte-edit-view').fill('Test Open status');
        await this.page.locator('#TaskStatusUpdateClick').click();
        await this.page.getByRole('combobox', { name: 'Open' }).locator('span').dblclick();
        await this.page.getByRole('option', { name: 'Approved' }).click();
        await this.page.locator('#Statuscomments_rte-edit-view').click();
        await this.page.locator('#Statuscomments_rte-edit-view').fill('Test approved status');
        await this.page.locator('#TaskStatusUpdateClick').click();
    }

    async cancelledstatusValidation(){
        await this.page.getByRole('combobox', { name: 'Approved' }).click();
        await this.page.getByRole('option', { name: 'Cancelled' }).click();
        await this.page.locator('#Statuscomments_rte-edit-view').click();
        await this.page.locator('#Statuscomments_rte-edit-view').fill('Test cancelled status');
        await this.page.locator('#TaskStatusUpdateClick').click();
    }

    async deletelatenightpermissionValidation(){
        await this.page.locator('#DeleteLeave').click();
        await this.page.locator('#deleteleave').click();
        await expect(this.page.getByText('Permission Request has been')).toBeVisible();
    }
    getRandomTime() {
        const startMinutes = 10 * 60 + 30; // 10:30 AM
        const endMinutes = 19 * 60 + 30;   // 7:30 PM
        const excludeStart = 13 * 60;      // 1:00 PM
        const excludeEnd = 14 * 60;        // 2:00 PM

        let randomMinutes;
        do {
            randomMinutes = Math.floor(Math.random() * (endMinutes - startMinutes + 1)) + startMinutes;
        } while (randomMinutes >= excludeStart && randomMinutes < excludeEnd); // Avoid 1-2 PM

        // Convert minutes to HH:MM AM/PM format
        let hours = Math.floor(randomMinutes / 60);
        let minutes = randomMinutes % 60;
        let period = hours >= 12 ? "PM" : "AM";

        if (hours > 12) hours -= 12; // Convert to 12-hour format
        if (hours === 0) hours = 12; // Handle midnight case

        return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
    }
}
