import { browser, by, element } from 'protractor'
import { LoginPage } from '../login/login.po'

export class LaunchPage {

    launchUrl: string = browser.baseUrl + '/portal/webclient/index.html#/launchitems'

    defaultItem: string = 'win2019'

    loginPage: LoginPage

    navigateTo() {
        // first get login page, then login with valid user credential.
        this.loginPage = new LoginPage()
        this.loginPage.navigateTo()
        this.loginPage.Login(this.loginPage.aValidUser)
    }

    getPageIdText() {   // equals to 'Search'.
        return element(by.css('label[for="header-search"]')).getAttribute('textContent')
    }

    // searchItem(name: string | null) {
    //     name = name || this.defaultItem
    //     element(by.model('header.search')).sendKeys(name)
    // }

}