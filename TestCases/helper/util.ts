import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor'

export class Util {
   static wait(o: ElementFinder, timeout: number = 10000) : ElementFinder {
      let EC = ExpectedConditions
      browser.wait(EC.visibilityOf(o), timeout)
      return o
   }
   static waitPresence(o: ElementFinder, timeout: number = 100000) : ElementFinder {
      let EC = ExpectedConditions
      browser.wait(EC.presenceOf(o), timeout)
      return o
   }
   static waitInvisible(o: ElementFinder, timeout: number = 10000) : ElementFinder {
      let EC = ExpectedConditions
      browser.wait(EC.not(EC.visibilityOf(o)), timeout)
      return o
   }

   static clearCookie() {
      browser.manage().deleteAllCookies()
      browser.executeScript('window.sessionStorage.clear();');
      browser.executeScript('window.localStorage.clear();');
   }

   static addCookie(cookieName: string, cookieValue: string) {
      let cookie = {
         name: cookieName,
         value: cookieValue
      }
      browser.manage().deleteCookie(cookieName).then(function() {
         browser.manage().addCookie(cookie)
      })
   }

   static setCookie(caseNum: string, step: string = '') {
      Util.addCookie('TestCase', caseNum)
      if (step !== '') {
         Util.addCookie('TestStep', step)
      }
   }

   static setCookieFunc(fileName: string, funcName: string, funcValue: string = null) {
     Util.addCookie('EditXML', fileName)
     Util.addCookie('TestFunc', funcName)
     Util.addCookie('TestValue', funcValue)
   }

   static click_by_id(idName: string) {
      Util.wait(element(by.id(idName))).click();
   }

   static itemFilter(itemName: string) {
      return function (elem) {
         return elem.getAttribute('innerHTML').then(function (itemText) {
            // remove space from itemText
            console.log('ss'+ itemText + ' ' + itemName)
            return itemText.replace(/\s/g, '') === itemName
         })
      }
   }
}