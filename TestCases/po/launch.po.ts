import { browser, by, element, ExpectedConditions } from 'protractor'
import { Util } from '../util'
import { LoginPage } from './login.po'

export class LaunchPage {

   defaultItem: string = 'win2019'
   loginPage: LoginPage

   navigateTo() {
      this.loginPage = new LoginPage()
      this.loginPage.navigateTo()
      this.loginPage.Login(this.loginPage.aValidUser)
   }

   getPageIdText() {
      let logoutBtn = Util.wait(element(by.id('logoutBtn')))
      return logoutBtn.getText()
   }

   logOut() {
      let logoutBtn = Util.wait(element(by.id('logoutBtn')))
      logoutBtn.click()
   }
}