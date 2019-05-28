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

   getToggler() {
      return Util.wait(element(by.id('sidebar-toggler')))
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
         Util.clickById('aboutDialogCloseBtn')
      }

      clickAboutHorizonHelp() {
         Util.clickById('aboutDialogHelpUrl')
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
         let filterFunc = Util.itemFilter(itemName)
         let firstItem = element.all(by.css('.available-app-name')).filter(filterFunc).first()
         return firstItem
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
         Util.clickById('sidebar-about-button')
      }

      showAboutInfo() {
         Util.clickById('sidebar-about-button')
      }

      closeAboutInfo() {
         Util.clickById('aboutDialogCloseBtn')
      }

      showHelpInfo() {
         Util.clickById('aboutDialogHelpUrl')
      }

      logout() {
         Util.clickById('sidebar-logout-button')
         Util.clickById('okDialogBtn')
      }

      cancelLogout() {
         Util.clickById('cancelDialogBtn')
      }

      showSettings() {
         Util.clickById('sidebar-user-info')
      }

      closeSettings() {
         Util.clickById('closeSettingsBtn')
      }

      resetSettings() {
         Util.wait(element(by.css('.modal-button-reset'))).click()
      }
   }

}
