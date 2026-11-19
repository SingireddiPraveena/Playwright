const {test , expect} = require('@playwright/test');{
    
    test.only('UI Controls', async ({page})=>
    {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control")
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    // await page.waitForLoadState('networkidle');
    await page.locator("#okayBtn").click();
    // Assertion//
    console.log(await page.locator(".radiotextsty").last().isChecked());
   await expect(page.locator(".radiotextsty").last()).toBeChecked();
   // fixture
   await page.locator("#terms").click();
   await expect(page.locator("#terms")).toBeChecked();
   await page.locator("#terms").uncheck();
   expect(await page.locator("#terms").isChecked()).toBeFalsy();
   await expect(documentLink).toHaveAttribute("class","blinkingText");

    // user below pause locator to see whether the action happening or not
    //await page.pause();
});





 test