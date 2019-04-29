import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor'

export class Util {
   static wait(o: ElementFinder, timeout: number = 5000) : ElementFinder {
      let EC = ExpectedConditions
      browser.wait(EC.visibilityOf(o), timeout)
      return o
   }

   static clearCookie() {
      browser.manage().deleteAllCookies()
      browser.executeScript('window.sessionStorage.clear();');
      browser.executeScript('window.localStorage.clear();');
   }
}