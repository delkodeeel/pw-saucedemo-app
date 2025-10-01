const { expect } = require("allure-playwright")
const {test}=require("@playwright/test")

class LoginPage {
    constructor(page)
    {
        this.page=page
        this.header=":text-is('Swag Labs')"
        this.username="//input[@placeholder='Username']"
        this.password="//input[@placeholder='Password']"
        this.loginbutton="//input[@id='login-button']"
    }

    async loginToApps(username, password) {
        await this.page.fill(this.username, username)
        await this.page.fill(this.password, password)
        await this.page.click(this.loginbutton)
    }

    async verifySignIn() {
        await expect(this.page.locator(this.header)).toBeVisible()
        await expect(this.page.locator(this.loginbutton)).toBeVisible()
    }
}

module.exports = LoginPage;