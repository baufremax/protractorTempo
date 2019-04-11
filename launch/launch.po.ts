import { browser, by, element } from 'protractor'
import { LoginPage } from '../login/login.po'
require('../waitReady.js')

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
        let searchBtnElm = element(by.css('label[for="header-search"]'))
        let idText: string
        searchBtnElm.waitReady().then(() => {
            idText = searchBtnElm.getAttribute('textContent').toString()
        })
        return idText
    }

    // searchItem(name: string | null) {
    //     name = name || this.defaultItem
    //     element(by.model('header.search')).sendKeys(name)
    // }

}