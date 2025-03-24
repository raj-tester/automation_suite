//import CartPage from '../Pages/CartPage'

//const cartPageObj = new CartPage()

class Util {

   
    constructor(page) {
        this.page = page
        this.addToCart = "//input[@name='submit.add-to-cart']"
        this.subTotalValue = "//span[@id = 'sc-subtotal-amount-activecart']/span[contains (@class, 'sc-price')]";
        this.newWindow =null;

    }

    async addProductCart(newWindow){
        newWindow.click(this.addToCart)
    }

    async getsubTotal(){
        
        return await this.newWindow.locator("//span[@id = 'sc-subtotal-amount-activecart']/span[contains (@class, 'sc-price')]").textContent();


    }


    async selecttheProduct(totalProduct, context, page1) {

        
        for(let x=1; x<=totalProduct;x++)
      
            {
              [this.newWindow] = await Promise.all([
                 context.waitForEvent('page'),
                 page1.locator(`(//img[@class='s-image'])[${x}]`).click({force: true})
            ])
            if(x<=totalProduct)
            {  
            if(this.newWindow){
              await this.newWindow.waitForLoadState()
              await this.addProductCart(this.newWindow)
      
               if(x==totalProduct)
                 {
                  await this.newWindow.waitForLoadState()
                  await this.newWindow.locator("//a[@href = '/gp/cart/view.html?ref_=nav_cart']").click()
                 }
            }
          } 
        }
         //await this.newWindow.bringToFront();


        
         
       

      

   }}


export default Util;