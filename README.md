## Features
- E2E flow from login to order complete
- Cross-browser testing (Chromium, Firefox, WebKit)
- Support for headless & headed modes
- Using Allure Report 

## Problem
- Url undefined when implement page object loginPage => await page.goto('/')
- Element not found when implement test.beforeEach
- Only run E2E.spec.js for last decision

## Installation & Setup
1. Install Dependencies
```sh
npm install
```

2. Install Playwright Browsers
```sh
npx playwright install
```

3. Running Tests
Run all tests
```sh
npx playwright test
```

4. Run specific test file
```sh
npx playwright test E2E.spec.js
```

5. Run with UI mode
```sh
npx playwright test --ui
```

6. Run in specific browser
```sh
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Reports
1. Generate Allure Report after the tests are executed:
```sh
allure generate ./allure-results -o ./allure-report
```

2. Open the generated report:
```sh
allure open ./allure-report
```