import { test, expect } from '@playwright/test';

    test('user sucessfully order untill complete', async ({ page }) => {
        // Login flow with valid credential
        await page.goto('/')
        await page.getByText('Swag Labs').isVisible();
        await page.locator('[ placeholder="Username"]').isVisible;
        await page.locator('[placeholder="Password"]').isVisible;
        await page.locator('[ id="user-name"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByText('Products').isVisible();
        await page.locator('[data-test="login-button"]').isVisible();
        await page.locator('[data-test="login-button"]').click();

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
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
        await page.locator('[data-test="login-button"]').isVisible();
        

});
