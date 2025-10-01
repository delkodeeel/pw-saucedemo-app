class HomePage {
    constructor(page) {
        this.page=page
        this.title=":text-is('Products')"
        this.menu="#react-burger-menu-btn"
        this.logoutBtn="#logout_sidebar_link"
    }

    async logoutApps() {
        await this.page.click(this.menu)
        await this.page.click(this.logoutBtn)
    }
}

module.exports= HomePage;