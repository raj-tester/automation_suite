class CartPage {
 constructor(browser, page) {
        this.browser = browser;
        this.page = page;
        this.deleteLink = "(//input[@value ='Delete'])[1]";

        // this.cart =  Selector('a[id="hlb-view-cart-announce"]')
 }

    async clickCartBasket() 
    {
        await this.page.click(this.cart);
    }

    async deleteItem(context) 
    {
        const allPages = context.pages();
        let PageLen = allPages.length;
        await allPages[PageLen - 1].click(this.deleteLink);
    }

}

export default CartPage;