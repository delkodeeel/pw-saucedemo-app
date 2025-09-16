// import { test, expect } from '@playwright/test';
// import { loginPage } from '../page-objects/loginPage';  

// test('user sucessfully login with valid credential', async ({ page }) => {
//   const loginTo = new loginPage(page)
//   loginTo.loginFormPage('standard_user','secret_sauce' ) 
// });

// test('Verify login form with unregistered data', async ({page}) => {
//   const loginTo = new loginPage(page)
//   loginTo.loginFormPage('xxxxx','123456' ) 
//   await page.locator('[data-test="error"]').textContent('Epic sadface: Username and password do not match any user in this service')
// });

// test('User failed login with locked out credential', async ({page}) => {
//   const loginTo = new loginPage(page)
//   loginTo.loginFormPage('locked_out_user','secret_sauce' ) 
//   await page.locator('[data-test="error"]').textContent('Epic sadface: Sorry, this user has been locked out.')
// });