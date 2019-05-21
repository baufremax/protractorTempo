import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor'

export class Util {
   static wait(o: ElementFinder, timeout: number = 10000) : ElementFinder {
      let EC = ExpectedConditions
      browser.wait(EC.visibilityOf(o), timeout)
      return o
   }

   static waitInvisible(o: ElementFinder, timeout: number = 10000) : ElementFinder {
      let EC = ExpectedConditions
      browser.wait(EC.not(EC.visibilityOf(o)), timeout)
      return o
   }

   static clearCookie() {
      browser.manage().deleteAllCookies()
      // browser.executeScript('window.sessionStorage.clear();');
      // browser.executeScript('window.localStorage.clear();');
   }

   static setCookie(caseNum: string, step: string = '') {
      let testCaseCookie = {
         name: 'TestCase',
         value: caseNum
      }
      browser.manage().deleteCookie('TestCase').then(function(cookie) {
         browser.manage().addCookie(testCaseCookie)
      })

      if (step !== '') {
         let stepCookie = {
            name: 'TestStep',
            value: step
         }
         browser.manage().deleteCookie('TestStep').then(function(cookie) {
            browser.manage().addCookie(stepCookie)
         })
      }
   }

   static click_by_id(idName: string) {
      Util.wait(element(by.id(idName))).click();
   }

   static itemFilter(itemName: string) {
      return function (elem) {
         return elem.getText().then(function (itemText) {
            return itemText === itemName;
         });
      };
   }
}