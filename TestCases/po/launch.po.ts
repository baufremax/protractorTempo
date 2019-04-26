import { browser, by, element, ExpectedConditions } from 'protractor'
import { LoginPage } from './login.po'

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

   getPageIdText() {   // equals to 'Log Out'.
      let EC = ExpectedConditions
      let logoutBtn = element(by.id('logoutBtn'))
      browser.wait(EC.visibilityOf(logoutBtn), 5000)
      return logoutBtn.getText()
   }

   // searchItem(name: string | null) {
   //     name = name || this.defaultItem
   //     element(by.model('header.search')).sendKeys(name)
   // }

}