import { Page } from "@playwright/test";

// Admin Login Class
export class AdminLogin {
    AdminLogin(arg0: string, arg1: string) {
        throw new Error('Method not implemented.');
    }
    constructor(private page: Page) {}

    async login(username: string, password: string) {
        await this.page.goto("https://staginghr.syncfusion.com/login?ReturnUrl=%2F");
        await this.page.fill("#EmailId", username);
        await this.page.fill("#Password", password);
        await this.page.click("#tabfocus"); // Login button selector
    }
}

// Front Office Login Class
export class FrontOfficeLogin {
    constructor(private page: Page) {}

    async login(email: string, environment: string) {
        await this.page.goto("https://staginghr.syncfusion.com/login?ReturnUrl=%2F");
        await this.page.fill("#EmailId", email);
        await this.page.fill("#Password", environment);
        await this.page.click("#tabfocus"); // Login button selector
    }
}

