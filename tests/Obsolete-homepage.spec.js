// import { test, expect } from '@playwright/test';
// import { loginPage } from '../page-objects/loginPage'; 

// // test('User can sort product using name by ascending', async ({page}) => {
// //   const loginTo = new loginPage(page)
// //   loginTo.loginFormPage('standard_user','secret_sauce' )  
// //   const sortProduct = page.locator('[data-test="product-sort-container"]')
// //   await sortProduct.selectOption('az');

// // await page.locator('[data-test="item-4-title-link"]').isVisible();

// //   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
// //   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
// //   await page.locator('[data-test="shopping-cart-link"]').click();
// //   await page.locator('[data-test="secondary-header"]').isVisible();
// //   await page.locator('[data-test="cart-desc-label"]').isVisible();
// //   await page.locator('[data-test="cart-quantity-label"]').isVisible();
// //   await page.locator('[data-test="checkout"]').click();
// //   await page.locator('[data-test="firstName"]').click();
// //   await page.locator('[data-test="firstName"]').fill('Testing');
// //   await page.locator('[data-test="lastName"]').click();
// //   await page.locator('[data-test="lastName"]').fill('Buyer');
// //   await page.locator('[data-test="postalCode"]').click();
// //   await page.locator('[data-test="postalCode"]').fill('123456');
// //   await page.locator('[data-test="continue"]').click();

// //   await page.locator('[data-test="payment-info-label"]').isVisible();
// //   await page.locator('[data-test="payment-info-value"]').isVisible();
// //   await page.locator('[data-test="shipping-info-label"]').isVisible();
// //   await page.locator('[data-test="shipping-info-value"]').isVisible();
// //   await page.locator('[data-test="total-info-label"]').isVisible();
// //   await page.locator('[data-test="subtotal-label"]').isVisible();
// //   await page.locator('[data-test="tax-label"]').isVisible();
// //   await page.locator('[data-test="total-label"]').isVisible();
// //   await page.locator('[data-test="finish"]').click();
// //   await page.locator('[data-test="pony-express"]').isVisible();
// //   await page.locator('[data-test="complete-header"]').isVisible();
// //   await page.locator('[data-test="complete-text"]').isVisible();
// });

// test('User can sort product using name by descending', async ({page}) => {
//   const loginTo = new loginPage(page)
//   loginTo.loginFormPage('standard_user','secret_sauce' )  
//   const sortProduct = page.locator('[data-test="product-sort-container"]')
//    await sortProduct.selectOption('za');
//    await page.locator('[data-test="item-4-title-link"]').isVisible();
// }); 

// test('User can sort product using price low to high', async ({page}) => {
//   const loginTo = new loginPage(page)
//   loginTo.loginFormPage('standard_user','secret_sauce' )  
//   const sortProduct = page.locator('[data-test="product-sort-container"]')
//    await sortProduct.selectOption('lohi');
//    await page.getByText('$7.99').isVisible();
// }); 

// test('User can sort product using price high to low', async ({page}) => {
//   const loginTo = new loginPage(page)
//   loginTo.loginFormPage('standard_user','secret_sauce' )  
//   const sortProduct = page.locator('[data-test="product-sort-container"]')
//    await sortProduct.selectOption('hilo');
//    await page.getByText('$49.99').isVisible();
// }); 

// test('Verify inventory page using standar user', async ({page}) => {
//   const loginTo = new loginPage(page)
//   loginTo.loginFormPage('standard_user','secret_sauce' )  
//   const sortProduct = page.locator('[data-test="product-sort-container"]')
//    await page.locator('[data-test="shopping-cart-link"]').isVisible();
//    await page.locator('[data-test="item-4-title-link"]').isVisible();
//    await page.locator('[data-test="item-0-title-link"]').isVisible();
//    await page.locator('[data-test="item-1-title-link"]').isVisible();
//    await page.locator('[data-test="item-5-title-link"]').isVisible();
//    await page.locator('[data-test="item-2-title-link"]').isVisible();
//    await page.locator('[data-test="item-3-title-link"]').isVisible();

// }); 

