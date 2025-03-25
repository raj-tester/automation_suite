// @ts-check
import { test, expect, defineConfig } from '@playwright/test';
import HomePage from '../UI_Test/Pages/HomePage';
import ManFashionMenu from '../UI_Test/Pages/ManFashionMenu';
import ShoesMenu from '../UI_Test/Pages/ShoesMenu';
import ShoesProductFilter from '../UI_Test/Product Filter/ShoesProductFilter'
import Util from '../UI_Test/Utility/Util'
import CartPage from '../UI_Test/Pages/CartPage'

export default defineConfig({
  use: {
    //actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
  },
  retries: 2
});


test.use({ viewport: { width: 1560, height: 855 } })

test('My first test', async ({ browser }) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();

  await page1.goto("https://www.amazon.in/")
  const HomePageObj = new HomePage(page1)
  const ManFashionMenuObj = new ManFashionMenu(page1)
  const ShoesMenuObj = new ShoesMenu(page1)
  const ShoesProductFilterObj = new ShoesProductFilter(page1)
  const utilObj = new Util(page1)
  const cartPageObj = new CartPage(page1)

  await HomePageObj.viewAllMenuOptions();
  await HomePageObj.viewMenFashionDepartment();
  await ManFashionMenuObj.viewMenShoes();
  await ShoesMenuObj.viewFormalShoes();
  await ShoesProductFilterObj.filterSelection();
  await utilObj.selecttheProduct(3, context, page1);
  let subTotalValue = await utilObj.getsubTotal();
  let subTotal = parseFloat(subTotalValue.replace(/[^\d.-]/g, '').replace(',', ''));
  console.log(subTotal);

  if (subTotal > 1500) {
    await cartPageObj.deleteItem(context);
    let newSubTotalValue = await utilObj.getsubTotal();
    console.log(newSubTotalValue);

  }

  page1.close();
});
