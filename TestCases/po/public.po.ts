import { browser, by, element } from 'protractor'
import { Util } from '../helper/module'
export class PublicPage {

   url: string = browser.baseUrl + '/'

   navigateTo() {
      browser.waitForAngularEnabled(false)
      return browser.get(this.url)
   }

   getPageIdText() {   // equals 'Install VMware Horizon Client'.
      let itemText = Util.wait(element.all(by.className('portal-list-title')).first())
      return itemText.getText()
   }

   getCurrentUrl() {
      return browser.getCurrentUrl()
   }

   clientOption = new class {
      installClient() {
         return element(by.id('nativeClient')).click()
      }

      accessClient() {
         return element(by.id('webClient')).click()
      }
   }
}