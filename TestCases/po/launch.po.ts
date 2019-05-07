import { browser, by, element, ExpectedConditions } from 'protractor'
import { Util } from '../helper/util'
import { LoginPage } from './login.po'

export class LaunchPage {

   defaultItem: string = 'win2019'
   loginPage: LoginPage

   navigateTo() {
      this.loginPage = new LoginPage()
      this.loginPage.navigateTo()
      this.loginPage.Login(this.loginPage.aValidUser)
   }

   getPageIdText() {    // equals 'Log Out'
      let logoutBtn = Util.wait(element(by.id('logoutBtn')))
      return logoutBtn.getText()
   }

   getSettingInfo() {   // equals 'settings'
      let settingBtn = Util.wait(element(by.className('dialog-title')))
      return settingBtn.getText()
   }

   getSettingInvisible() {
      let settingBtn = Util.waitInvisible(element(by.className('dialog-title')))
      return settingBtn
   }

   getHelpInfo() {   // equals 'About VMware Horizon Client'
      let helpBtn = Util.wait(element(by.className('dialog-title')))
      return helpBtn.getText()
   }

   getHelpInvisible() {
      let helpBtn = Util.waitInvisible(element(by.className('dialog-title')))
      return helpBtn
   }

   logOut() {
      let logoutBtn = Util.wait(element(by.id('logoutBtn')))
      logoutBtn.click()
   }

   showAll() {
      let allItmBtn = Util.wait(element(by.id('showAllBtn')))
      allItmBtn.click()
   }

   showFavorite() {
      let favorBtn = Util.wait(element(by.id('showFavoritesBtn')))
      favorBtn.click()
   }

   showSettings() {
      let settingBtn = Util.wait(element(by.id('settingsBtn')))
      settingBtn.click()
   }

   showHelp() {
      let helpBtn = Util.wait(element(by.id('helpBtn')))
      helpBtn.click()
   }

   closeSettings() {
      let closeSetBtn = Util.wait(element(by.id('closeSettingsBtn')))
      closeSetBtn.click()
   }

   closeHelp() {
      let closeBtn = Util.wait(element(by.id('aboutDialogCloseBtn')))
      closeBtn.click()
   }
}