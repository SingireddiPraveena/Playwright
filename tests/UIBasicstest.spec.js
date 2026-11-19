const {test , expect} = require('@playwright/test');
const { only } = require('node:test');


test('Browser Context Playwright test', async ({browser})=>
{
    //chrome-plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com");
    console.log(await page.title());
    
});

test('Page Playwright test', async ({page})=>
{
    await page.goto("https://google.com");
    //get title- assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});


//// end to end

test ('Browser Context Playwright test1', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //CSS- Type and fill we 
   await page.locator('#username').type("rahulshetty");
   await page.locator("[type='#password']").type("learning");
   await page.locator("#signInBtn").click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');


});

test('Browser Context-Validating Error login', async ({browser})=>
{
   
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //CSS- Type and fill we 
   await userName.fill("rahulshetty");
   await page.locator("[type='password']").fill("learning");
   await page.locator("#signInBtn").click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
//type - fill
await userName.fill("");
await userName.fill("rahulshettyacademy");
await signIn.click();
//First element code
// console.log(await page.locator(".card-body a").first().textContent());
// Second element code
// console.log(await page.locator(".card-body a").nth(1).textContent());
//Nth element code
// console.log(await page.locator(".card-body a").nth(0).textContent());
console.log(await cardTitles.first.textContent());
// console.log(await cardTitles.nth(1).textContent());
const allTitles = await cardTitles.allTextContents();

console.log(allTitles);
});
