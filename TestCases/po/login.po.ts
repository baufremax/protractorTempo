import { browser, element, by, ExpectedConditions } from 'protractor'
import * as protractor from 'protractor'

interface UserInfo {
   subject?: string,
   username: string,
   password: string
}

export class LoginPage {

   url: string = browser.baseUrl + '/portal/webclient/index.html#/'

   defaultUserInfo: UserInfo = {
      username: 'pcoip2',
      password: 'ca$hc0w'
   }

   anInvalidUser: UserInfo = {
      subject: 'this is an invalid user credential',
      username: 'lol',
      password: 'lmao'
   }

   aValidUser: UserInfo = {
      subject: 'this is a valid user credential',
      username: 'pcoip2',
      password: 'ca$hc0w'
   }

   anyTextToBePresentInElement(elementFinder: protractor.ElementFinder) {
      let EC = ExpectedConditions
      let hasText = function() {
         return elementFinder.getText().then(function(actualText) {
         return actualText;
         });
      };
      return EC.and(EC.presenceOf(elementFinder), hasText);
   }

   navigateTo() {
      browser.get(this.url)
   }

   getCurrentUrl() {
      return browser.getCurrentUrl()
   }

   Login(userinfo: UserInfo | null) {
      userinfo = userinfo || this.defaultUserInfo
      // ng-model = 'xx' ==> by.model('xx')
      let EC = ExpectedConditions
      let usernameElem = element(by.model('credential.username'))
      let passwordElem = element(by.model('credential.password'))
      let loginFormElem = element(by.css('[ng-click="login(loginForm)"]'))
      // wait for the elements being visible。
      browser.wait(EC.visibilityOf(usernameElem), 5000)
      browser.wait(EC.visibilityOf(passwordElem), 5000)
      element(by.model('credential.username')).sendKeys(userinfo.username)
      element(by.model('credential.password')).sendKeys(userinfo.password)
      browser.wait(EC.elementToBeClickable(loginFormElem), 5000)
      loginFormElem.click()
   }

   getPageIdText() {   // equals 'Login'
      let loginFormElem = element(by.css('[ng-click="login(loginForm)"]'))
      browser.wait(this.anyTextToBePresentInElement(loginFormElem), 5000);
      return loginFormElem.getText()
   }

   getErrorMsg() {     // equals 'Unknown user name or bad password.'
      let errorMsgElem = element(by.css('[ng-click="cancel()"]'))
      browser.wait(this.anyTextToBePresentInElement(errorMsgElem), 5000)
      return errorMsgElem.getText()
   }
}