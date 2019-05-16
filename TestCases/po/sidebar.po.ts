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

   aboutHozironOption = new class extends SidebarPage {
      clickHorizonLogo() {
         let logo = Util.wait(element(by.className('horizon-logo-image')))
         logo.click()
      }

      closeAboutHorizon() {
         let btn = Util.wait(element(by.id('aboutDialogCloseBtn')))
         btn.click()
      }

      clickAboutHorizonHelp() {
         let btn = Util.wait(element(by.id('aboutDialogHelpUrl')))
         btn.click()
      }
   }
}