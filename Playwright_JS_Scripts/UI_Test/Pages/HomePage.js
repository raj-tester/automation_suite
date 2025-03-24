
class HomePage {

    constructor(page){
        
        this.page = page
        this.allMenu = '//a[@id="nav-hamburger-menu"]';
        this.MenuOptions = 
               {
                shopByCategory :
                 [
                  {    
                  bestSellers: "//a/div[text() =\"Men's Fashion\"]"
                  }
                ]

     }

    }


     async viewAllMenuOptions(){
       
        await this.page.click(this.allMenu);
        await this.page.waitForLoadState("networkidle")

    }

    async viewMenFashionDepartment(){
        await this.page.click(this.MenuOptions.shopByCategory[0].bestSellers);

    }

}
export default HomePage;