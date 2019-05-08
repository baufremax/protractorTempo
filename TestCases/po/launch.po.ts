import { browser, by, element } from 'protractor'
import { Util } from '../helper/module'
import { LoginPage } from './module'

export class LaunchPage {

   defaultItem: string = 'win2019'
   loginPage: LoginPage

   navigateTo() {
      this.loginPage = new LoginPage()
      this.loginPage.navigateTo()
      this.loginPage.Login(this.loginPage.aValidUser)
   }

   getCurrentUrl() {
      return browser.getCurrentUrl()
   }

   searchItem(item: string) {
      let searchBar = Util.wait(element(by.id('header-search')))
      searchBar.sendKeys(item)
   }

   getItemInvisible() {
      let item = Util.waitInvisible(element(by.className('ui-btn')))
      return item
   }

   getItem(itemName: string) {
      let item = Util.wait(element.all(by.className('ui-desktop-name')).filter(function(elem) {
         return elem.getText().then(function(itemText) {
            return itemText === itemName
         })
      }).first())
      return item
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

   confirmLogOut() {
      let confirmBtn = Util.wait(element(by.id('okDialogBtn')))
      confirmBtn.click()
   }

   cancelLogOut() {
      let cancelBtn = Util.wait(element(by.id('cancelDialogBtn')))
      cancelBtn.click()
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