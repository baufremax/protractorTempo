import { browser, by, element } from 'protractor'
import { Util } from '../helper/module'
import { LaunchPage } from './module'
export class SidebarPage {
   url: string = browser.baseUrl + '/portal/webclient/index.html#/desktop'

   launchPage: LaunchPage

   navigateTo() {
      this.launchPage = new LaunchPage()
      this.launchPage.navigateTo()
      this.launchPage.searchOption.clickItem(this.launchPage.defaultItem)
   }

   getCurrentUrl() {
      return browser.getCurrentUrl()
   }

   searchItem(item: string) {
      let searchInput = Util.wait(element(by.id('search-input')))
      searchInput.sendKeys(item)
   }

   aboutHorizonOption = new class {
      clickHorizonLogo() {
         let logo = Util.wait(element(by.className('horizon-logo-image')))
         logo.click()
      }

      closeAboutHorizon() {
         Util.click_by_id('aboutDialogCloseBtn')
      }

      clickAboutHorizonHelp() {
         Util.click_by_id('aboutDialogHelpUrl')
      }
   }

   searchOption = new class {
      searchItem(itemName: string) {
         let searchBar = Util.wait(element(by.id('search-input')))
         searchBar.sendKeys(itemName)
      }

      getRunningItem(itemName: string) {
         const filterFunc = Util.itemFilter(itemName)
         const firstItem = element.all(by.className('running-app-name')).filter(filterFunc).first()
         let item = Util.wait(firstItem)
         return item
      }

      getAvailableItem(itemName: string) {
         const filterFunc = Util.itemFilter(itemName)
         const firstItem = element.all(by.className('available-app-name')).filter(filterFunc).first()
         let item = Util.wait(firstItem)
         return item
      }

      clickItem(itemName: string) {
         this.getAvailableItem(itemName).click()
      }
   }

   contextMenuOption = new class {
      clickMenu() {
         Util.wait(element(by.id('contextMenu'))).click()
      }

      getUserInfo() {
         let userInfo = Util.wait(element(by.css('.menu-item-title.unselectable.ng-binding')))
         return userInfo.getText()
      }

      showFullscreen() {
         Util.click_by_id('sidebar-about-button')
      }

      showAboutInfo() {
         Util.click_by_id('sidebar-about-button')
      }

      closeAboutInfo() {
         Util.click_by_id('aboutDialogCloseBtn')
      }

      showHelpInfo() {
         Util.click_by_id('aboutDialogHelpUrl')
      }

      logout() {
         Util.click_by_id('sidebar-logout-button')
         Util.click_by_id('okDialogBtn')
      }

      cancelLogout() {
         Util.click_by_id('cancelDialogBtn')
      }

      showSettings() {
         Util.click_by_id('sidebar-user-info')
      }

      closeSettings() {
         Util.click_by_id('closeSettingsBtn')
      }

      resetSettings() {
         Util.wait(element(by.css('.modal-button-reset'))).click()
      }
   }

}
