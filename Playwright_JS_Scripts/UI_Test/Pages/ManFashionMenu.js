class ManFashionMenu {

  constructor(page) {
    this.page = page
    this.menu = {

      menuOptions: [
        {
          shoes: '//a[text()="Shoes"]'
        }
      ]
    }

  }

  async viewMenShoes() {
    await this.page.click(this.menu.menuOptions[0].shoes);

  }
}
export default ManFashionMenu;