import { browser, by, element } from 'protractor'
import { Util } from '../helper/module'
import { LoginPage, HelpMenu, SettingMenu, LogoutMenu } from './module'

export class LaunchPage {
   url: string = browser.baseUrl + '/portal/webclient/index.html#/launchitems'
   idText: string = '注销' // 'Log Out'

   defaultItem: string = 'win2019'
   loginPage: LoginPage

   navigateTo(disclaimer: boolean = false) {
      this.loginPage = new LoginPage()
      this.loginPage.navigateTo(disclaimer)
      this.loginPage.loginOption.login(this.loginPage.aValidUser)
   }

   getCurrentUrl() {
      return browser.getCurrentUrl()
   }

   getPageIdText() {
      // equals 'Log Out'
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

   searchOption = new (class {
      searchItem(item: string) {
         let searchBar = Util.wait(element(by.className('search-input')))
         searchBar.sendKeys(item)
      }

      getItemInvisible() {
         let item = Util.waitInvisible(element(by.className('ui-btn')))
         return item
      }

      getItem(itemName: string) {
         const filterFunc = Util.itemFilter(itemName)
         const firstItem = Util.wait(
            element
               .all(by.className('ui-desktop-name'))
               .filter(filterFunc)
               .first(),
         )
         let item = Util.wait(firstItem)
         return item
      }

      clickItem(itemName: string) {
         this.getItem(itemName).click()
      }
   })()

   showSettings() {
      let settingBtn = Util.wait(element(by.id('settingsBtn')))
      settingBtn.click()
   }

   settingOption = new SettingMenu()

   showHelp() {
      let helpBtn = Util.wait(element(by.id('helpBtn')))
      helpBtn.click()
   }

   helpOption = new HelpMenu()

   showLogout() {
      let logoutBtn = Util.wait(element(by.id('logoutBtn')))
      logoutBtn.click()
   }

   logoutOption = new LogoutMenu()
}
