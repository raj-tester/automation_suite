var testData = require('../TestData/MainData')

class ShoesProductFilter {
    constructor(page) {
        this.page = page
        this.Productfilters = {
            brand: [

                {
                    Bata: "//span[@class='a-list-item']/a/span[text()='Bata']"
                }
            ],

            Uksize: [
                {
                    size8: '//button[@value="8"]'
                }
            ],

            seeMoreLink: "//a[@aria-label ='See more, Brands']/span[text() ='See more']"


        }
    }

    async filterSelection() {
        let brandFilter = testData.filterData.Brand;
        let ukSizeFilter = testData.filterData.UKSize;
        for (var x = 0; x < this.Productfilters.Uksize.length; x++) {
            if (this.Productfilters.Uksize[x].hasOwnProperty([ukSizeFilter])) {
                await this.page.click(this.Productfilters.Uksize[x][ukSizeFilter]);
             }
        }

        for (var x = 0; x < this.Productfilters.brand.length; x++) {
           if (this.Productfilters.brand[x].hasOwnProperty([brandFilter]))
             {
                await this.page.click(this.Productfilters.seeMoreLink);
                await this.page.click(this.Productfilters.brand[x][brandFilter]);
                break;
             }

        }
    }

}
export default ShoesProductFilter;