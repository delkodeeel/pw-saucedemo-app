import { test, expect } from '@playwright/test';
const LoginPage =require("../pages/loginpage")
const HomePage=require("../pages/homepage")
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))

    test('user sucessfully order untill complete', async ({ page }) => {
        await page.goto('/')
        const loginPage = new LoginPage(page)
        await loginPage.loginToApps(testdata.username, testdata.password)

        // Add product to cart
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="secondary-header"]').isVisible();
        await page.locator('[data-test="cart-desc-label"]').isVisible();
        await page.locator('[data-test="cart-quantity-label"]').isVisible();

        // Remove product from cart`
        await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();

        // Checkout Form
        await page.locator('[data-test="firstName"]').fill('Testing');
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('Buyer');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('123456');
        await page.locator('[data-test="continue"]').click();

        await page.locator('[data-test="payment-info-label"]').isVisible();
        await page.locator('[data-test="payment-info-value"]').isVisible();
        await page.locator('[data-test="shipping-info-label"]').isVisible();
        await page.locator('[data-test="shipping-info-value"]').isVisible();
        await page.locator('[data-test="total-info-label"]').isVisible();
        await page.locator('[data-test="subtotal-label"]').isVisible();
        await page.locator('[data-test="tax-label"]').isVisible();
        await page.locator('[data-test="total-label"]').isVisible();
        await page.locator('[data-test="finish"]').click();

        // Complete order
        await page.locator('[data-test="pony-express"]').isVisible();
        await page.locator('[data-test="complete-header"]').isVisible();
        await page.locator('[data-test="complete-text"]').isVisible();

        // Logout
       const homePage = new HomePage(page)
       await homePage.logoutApps()
       await loginPage.verifySignIn()
        

});
