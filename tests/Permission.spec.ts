import { test, expect, BrowserContext, Page } from "@playwright/test";
import { Create_Permission } from "../test_helper/pages/CreatePermission_helper";
import { FrontOfficeLogin } from "../test_helper/pages/Login_helper";
import { create } from "domain";


let context: BrowserContext;
let page: Page;
let createPermission : Create_Permission;
let frontOffice : FrontOfficeLogin;

test.describe("General Permission", () => {

    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        frontOffice = new FrontOfficeLogin(page);
        createPermission = new Create_Permission(page);
        await frontOffice.login("freedap@syncfusion.com", "staging");

    });

    test("Create Permission Page", async () => {
        await createPermission.createPermission();
    });

    test("Verify empty validations in create permission", async () => {

        await createPermission.emptyValidations();
    })

    test("Verify by selecting live chat 10:30 morning employee and shift validation", async () =>{
        await createPermission.livechatmorning1030shiftEmployeeshiftvalidation();
    })

    test ("Verify by selecting Noon shift employee and the shift field validation", async () =>{
        await createPermission.noonshiftEmployeeshiftvalidation();
    })

    test("Verify by selecting night shift employee and shift validation", async () =>{
        await createPermission.nightshiftEmployeevalidation();
    })

    test("Verify by selecting Early evening shift employee and shift validation", async () =>{
        await createPermission.earlyeveningshiftEmployeevalidation();
    })

    test ("Verify by selecting Regular shift employee and shift field validation", async() => {
        await createPermission.regularshiftEmployeevalidation();
    })

    test("Verify the Negative case validation for the Late noon shift employee", async() => {
        await createPermission.negativeValidationforlatenoonshiftEmployee();
    })

    test("Verify the attachment validation for file more than 5mb", async()=>{
        await createPermission.fileValidationmorethan5mb();
    })

    test("Verify the success message is shown when less than 5 mb file is uploaded", async() =>{
        await createPermission.fileValidationlessthan5mb();
    })

    test("Verify the general permission successful creation", async()=>{
        await createPermission.successfullgeneralPermission(); 
    })

    test("Verify by changing the status open from closed for the general permission created", async()=>{
        await createPermission.changeOpenstatus();
    })

    test("Verify the edit general permission by changing the permission date, time and number of hours", async() =>{
        await createPermission.editgeneralpermissionValidation();
    })

    test("Verify when empty data is given in the comment field", async () =>{
        await createPermission.commentfieldemptyValidation();
    })

    test ("Verify by giving space alone in the comment field", async ()=> {
        await createPermission.commentfieldspaceValidation();
    })

    test ("Verify the comment field validation by uploading only file without comment", async () =>{
        await createPermission.fileuploawithoutncommentValidation();
    })

    test ("Verify by adding data in the comment field", async()=>{
        await createPermission.updatecommentwithdataValidation();
    })

    test("Verify the general permission status is changed to cancelled", async()=>{
        await createPermission.statuscancelValidation();
    })

    test("Verify by deleting the general permission", async ()=> {
        await createPermission.deletepermissionValidation();
    })

    test("Verify the general permission creation for Kenya employee", async()=>{
        await createPermission.generalpermissionKenyaemployee();
    })

    test("Verify the general permission creation for morning 10:30 AM shift", async()=>{
        await createPermission.generalpermissionlivechatmorning1030shiftEmployee();
    })

    test('Verify the general permission for each number of hours', async () => {
        await createPermission.generalPermissionForEachHour();
    });

    test.afterAll(async () => {
        await context.close();
    });
});


test.describe("Late Night Permission", () => {

    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        frontOffice = new FrontOfficeLogin(page);
        createPermission = new Create_Permission(page);
        await frontOffice.login("freedap@syncfusion.com", "staging");
    });

    test("Verify the creation of late night permission", async ()=>{
        await createPermission.latenightPermissioncreation();
    })

    test("Verify the request for approval status for late night permission", async()=>{
        await createPermission.requestforapprovalstatusValidation();
    })

    test("Verify the request for clarification for late night permission", async()=>{
        await createPermission.requestforclarificationstatusValidation();
    })

    test("Verify the rejected status for late night permission", async()=>{
        await createPermission.rejectedtatusValidation();
    })

    test("Verify the approved status for late night permission", async ()=>{
        await createPermission.approvedstatusValidation();
    })

    test("Verify the cancelled status for late night permission", async()=>{
        await createPermission.cancelledstatusValidation();
    })

    test("Verify by deleting the late night permission", async()=>{
        await createPermission.deletelatenightpermissionValidation();
    })

    test.afterAll(async () => {
        await context.close();
    });

});