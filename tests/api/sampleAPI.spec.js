import { test, expect, request } from '@playwright/test';
import tags from '../../test-data/tags.json'

test.beforeEach(async({page}) => {
    await page.route('*/**/api/tags', async route => { // change https://conduit-api.bondaracademy.com/ with */** */
        await route.fulfill({
            body: JSON.stringify(tags)
        })
    })
     await page.goto('https://conduit.bondaracademy.com/')
})

test('has title', async({page}) => {
  await page.route('*/**/api/articles*', async route => {
        const response = await route.fetch()
        const responseBody = await response.json()
        responseBody.articles[0].title = "This is a MOCK test title"
        responseBody.articles[0].description = "This is a MOCK description"

         await route.fulfill({
            body: JSON.stringify(responseBody)
        })
    })
    await page.getByText('Global Feed').click()
    await expect(page.locator('.navbar-brand')).toHaveText('conduit');
    await expect(page.locator('app-article-list h1').first()).toContainText('This is a MOCK test title')
    await expect(page.locator('app-article-list p').first()).toContainText('This is a MOCK description')
})

test('publish article', async({page, request}) => {
    // const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    //     data: {
    //         "user": {email: "testing.conduit@test.com", password: "12345678"}
    //     }
    // })
    // const responseBody = await response.json()
    // const accessToken = responseBody.user.token

    const articleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data:{
        "article":{"title":"This is testing article by delia","description":"This is testing description by delia","body":"Write body articles here","tagList":[]}
        }
        // headers: {
        //     Authorization: `Token ${accessToken}`
        // }
    })
    expect(articleResponse.status()).toEqual(201)
    await page.getByText('Global Feed').click()
    await page.getByText('This is testing article by delia').click()
    await page.getByRole('button', {name: 'Delete Article'}).first().click()
    await page.getByText('Global Feed').click()

    await expect(page.locator('app-article-list h1').first()).not.toContainText('This is testing article by delia')

})

test('delete article', async({page, request}) => {
    await page.getByText('New Article').click()
    await page.getByRole('textbox', {name: 'Article Title'}).fill('Learning Playwright')
    await page.getByRole('textbox', {name: 'What\'s this article about?'}).fill('About the playwright')
    await page.getByRole('textbox', {name: 'Write your article (in markdown)'}).fill('We like to use playwright')
    await page.getByRole('button', {name: 'Publish Article'}).click()

    // get slug from body response
    const articleResponse = await page.waitForResponse('https://conduit-api.bondaracademy.com/api/articles/')
    const articleResponseBody = await articleResponse.json()
    const slugId = articleResponseBody.article.slug

    await expect(page.locator('.article-page h1')).toContainText('Learning Playwright')
    await page.getByText('Home').click()
    await page.getByText('Global Feed').click()
    await expect(page.locator('app-article-list h1').first()).toContainText('Learning Playwright')

    // need access token to delete article
    // const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    //     data: {
    //         "user": {email: "testing.conduit@test.com", password: "12345678"}
    //     }
    // })
    // const responseBody = await response.json()
    // const accessToken = responseBody.user.token

    const deleteArticleRquest = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugId}`)
    expect(deleteArticleRquest.status()).toEqual(204)
})