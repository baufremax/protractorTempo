import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor'

export class Util {
   static wait(o: ElementFinder, timeout: number = 10000) : ElementFinder {
      let EC = ExpectedConditions
      browser.wait(EC.visibilityOf(o), timeout)
      return o
   }

   static clearCookie() {
      browser.manage().deleteAllCookies()
      browser.executeScript('window.sessionStorage.clear();');
      browser.executeScript('window.localStorage.clear();');
   }

   static setCookie(caseNum: string, step: string = '') {
      let testCaseCookie = {
         name: 'TestCase',
         value: caseNum
      }
      browser.manage().deleteCookie("TestCase").then(function(cookie) {
         browser.manage().addCookie(testCaseCookie)
      })

      if (step !== '') {
         let stepCookie = {
            name: 'TestStep',
            value: step
         }
         browser.manage().deleteCookie("TestStep").then(function(cookie) {
            browser.manage().addCookie(stepCookie)
         })
      }
   }
}