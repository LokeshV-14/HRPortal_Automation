import { Page } from "@playwright/test";

// Admin Login Class
export class AdminLogin {
    constructor(private page: Page) {}

    async login(username: string, password: string) {
        await this.page.goto("https://staginghrcore.syncfusion.com/login?ReturnUrl=%2F");
        await this.page.fill("#EmailId", username);
        await this.page.fill("#Password", password);
        await this.page.click("#tabfocus"); // Login button selector
    }
}

// Front Office Login Class
export class FrontOfficeLogin {
    constructor(private page: Page) {}

    async login(email: string, environment: string) {
        await this.page.goto("https://staginghrcore.syncfusion.com/login?ReturnUrl=%2F");
        await this.page.fill("#EmailId", email);
        await this.page.fill("#Password", environment);
        await this.page.click("#tabfocus"); // Login button selector
    }
}

