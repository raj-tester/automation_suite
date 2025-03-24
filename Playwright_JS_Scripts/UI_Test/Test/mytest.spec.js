import { test, expect } from '@playwright/test';  // Import Playwright
import path from 'path';

/*(async () => {
  // 1. Open the webpage
  const browser = await chromium.launch({ headless: false });  // Launch the browser (set headless to false to see the browser)
  const context = await browser.newContext();  // Create a new browser context
  const page = await context.newPage();  // Open a new tab

  await page.goto('https://www.amazon.in/s?rh=n%3A1983518031%2Cp_123%3A627141&dc&qid=1742237324&rnid=91049095031&ref=sr_nr_p_123_2');  // Navigate to the webpage

  // 2. Click a link (make sure to replace the selector with the actual one on the page)
  await page.click('a#link-selector');  // Replace 'a#link-selector' with the actual link selector on the page

  // 3. Wait for the new window to open
  const [newWindow] = await Promise.all([
    context.waitForEvent('page'),  // Wait for a new page (window) to open
    page.click('a#link-selector'),  // Click the link to open the new window
  ]);

  // 4. Perform some action on the new window (for example, click a button)
  await newWindow.click('button#button-selector');  // Replace 'button#button-selector' with the actual button selector

  // 5. Go back to the previous window
  await page.bringToFront();  // Switch back to the original window/tab

  // Optionally, you can close the browser after performing actions
  await browser.close();
})();*/

test('My first test', async({browser}) => {
   const context = await browser.newContext(); 
   const page1 = await context.newPage();
  // const allPages = context.pages();

    await page1.goto('https://www.amazon.in/s?rh=n%3A1983518031%2Cp_123%3A627141&dc&qid=1742237324&rnid=91049095031&ref=sr_nr_p_123_2');
    //await page.locator("//div[contains(@cel_widget_id, 'MAIN-SEARCH_RESULTS')]").nth(3).click({ ctrl: true })
    await page1.getByRole('listitem').filter({ hasText: 'Best sellerin Men\'s Formal' }).getByRole('link').first().click()
   // await page.getByRole('listitem').filter({ hasText: 'Best sellerin Men\'s Formal' }).getByRole('link').first().click()
    const [newWindow] = await Promise.all([
        context.waitForEvent('page')
      ])
      await newWindow.locator("//input[@name='submit.add-to-cart']").click() // Wait for a new page (window) to open
   // await newWindow.waitForLoadState();
    //const pagePromise = await context.waitForEvent('window');
   // const newPage = await context.newPage(); 
   // const newPage = await pagePromise
   
    await page.pause()
    //await page.waitForTimeout(3000)
})