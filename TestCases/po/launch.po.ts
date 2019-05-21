import { browser, by, element } from 'protractor'
import { Util } from '../helper/module'
import { LoginPage } from './module'

export class LaunchPage {

   url: string = browser.baseUrl + '/portal/webclient/index.html#/launchitems'

   defaultItem: string = 'win2019'
   loginPage: LoginPage

   navigateTo() {
      this.loginPage = new LoginPage()
      this.loginPage.navigateTo()
      this.loginPage.loginOption.login(this.loginPage.aValidUser)
   }

   getCurrentUrl() {
      return browser.getCurrentUrl()
   }

   getPageIdText() {    // equals 'Log Out'
      let logoutBtn = Util.wait(element(by.id('logoutBtn')))
      return logoutBtn.getText()
   }

   showAll() {
      let allItmBtn = Util.wait(element(by.id('showAllBtn')))
      allItmBtn.click()
   }

   showFavorite() {
      let favorBtn = Util.wait(element(by.id('showFavoritesBtn')))
      favorBtn.click()
   }

   searchOption = new class {
      searchItem(item: string) {
         let searchBar = Util.wait(element(by.id('header-search')))
         searchBar.sendKeys(item)
      }

      getItemInvisible() {
         let item = Util.waitInvisible(element(by.className('ui-btn')))
         return item
      }

      getItem(itemName: string) {
         const filterFunc = Util.itemFilter(itemName)
         const firstItem = element.all(by.className('ui-desktop-name')).filter(filterFunc).first()
         let item = Util.wait(firstItem)
         return item
      }

      clickItem(itemName: string) {
         this.getItem(itemName).click()
      }
   }

   settingOption = new class {
      getSettingInfo() {   // equals 'settings'
         let settingBtn = Util.wait(element(by.className('dialog-title')))
         return settingBtn.getText()
      }

      getSettingInvisible() {
         let settingBtn = Util.waitInvisible(element(by.className('dialog-title')))
         return settingBtn
      }

      getResetButton() {
         let resetBtn = Util.wait(element(by.className('modal-button-reset')))
         return resetBtn
      }

      showSettings() {
         let settingBtn = Util.wait(element(by.id('settingsBtn')))
         settingBtn.click()
      }

      closeSettings() {
         let closeSetBtn = Util.wait(element(by.id('closeSettingsBtn')))
         closeSetBtn.click()
      }
   }

   helpOption = new class {
      getHelpInfo() {   // equals 'About VMware Horizon Client'
         let helpBtn = Util.wait(element(by.className('dialog-title')))
         return helpBtn.getText()
      }

      getHelpInvisible() {
         let helpBtn = Util.waitInvisible(element(by.className('dialog-title')))
         return helpBtn
      }

      showHelp() {
         let helpBtn = Util.wait(element(by.id('helpBtn')))
         helpBtn.click()
      }

      closeHelp() {
         let closeBtn = Util.wait(element(by.id('aboutDialogCloseBtn')))
         closeBtn.click()
      }
   }

   logoutOption = new class {
      logout() {
         let logoutBtn = Util.wait(element(by.id('logoutBtn')))
         logoutBtn.click()
      }

      confirmLogout() {
         let confirmBtn = Util.wait(element(by.id('okDialogBtn')))
         confirmBtn.click()
      }

      cancelLogout() {
         let cancelBtn = Util.wait(element(by.id('cancelDialogBtn')))
         cancelBtn.click()
      }
   }
}