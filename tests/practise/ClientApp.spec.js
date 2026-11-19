const {test , expect} = require('@playwright/test');

test('@LoginPractice', async ({page})=>
{
    const email = "praveenasingireddi1990@gmail.com";
    const productName = 'zara coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill("Ideya@123");
    await page.locator("[value='Login']").click();
    //- Discourage await page.waitForLoadState('networkidle');
    //waitfor is work correctly when we have 1 element.
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
});
