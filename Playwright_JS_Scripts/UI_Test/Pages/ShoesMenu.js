class ShoesMenu {

  constructor(page) {
    this.page = page
    this.menu = {

      shoeOptions: [
        {
          formalShoes: '//span[text()="Formal Shoes"]'
        }
      ]
    }

  }

  async viewFormalShoes() {
    await this.page.click(this.menu.shoeOptions[0].formalShoes);

  }
}
export default ShoesMenu;