class CartPage {

    constructor(browser, page){
        this.browser = browser;
        this.page = page;

       // this.cart =  Selector('a[id="hlb-view-cart-announce"]')
        
        this. deleteLink = "(//input[@value ='Delete'])[1]"

    }

    async clickCartBasket(){

        await this.page.click(this.cart);
    }

    async deleteItem(context){
         const allPages = context.pages();

        let PageLen = allPages.length;
        await allPages[PageLen-1].click(this.deleteLink);
    }

}

export default CartPage;