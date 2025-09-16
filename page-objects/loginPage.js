import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class loginPage extends HelperBase  {
   
    constructor(page) {
      super(page)
    }

    async loginFormPage(username, password) {
    await page.goto('https://www.saucedemo.com/')
    //await expect(page.getByText('Swag Labs')).toBeVisible()
    await page.getByText('Swag Labs').isVisible();
    //await expect(this.page.locator('[data-test="username"]')).toBeVisible();
    await page.locator('[ placeholder="Username"]').isVisible;
    await page.locator('[placeholder="Password"]').isVisible;
     await page.locator('[ id="user-name"]').fill(username);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-button"]').isVisible();
    await page.locator('[data-test="login-button"]').click();
   await page.getByText('Products').isVisible();
    await this.waitForNumberOfSeconds(10)

    }

}