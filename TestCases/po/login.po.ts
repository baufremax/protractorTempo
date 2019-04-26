import { browser, element, by, ExpectedConditions } from 'protractor'
import * as protractor from 'protractor'

interface UserInfo {
   subject?: string,
   username: string,
   password: string
}

let waitTime = 5000
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
      browser.wait(EC.visibilityOf(usernameElem), waitTime)
      browser.wait(EC.visibilityOf(passwordElem), waitTime)
      element(by.model('credential.username')).sendKeys(userinfo.username)
      element(by.model('credential.password')).sendKeys(userinfo.password)
      browser.wait(EC.elementToBeClickable(loginFormElem), waitTime)
      loginFormElem.click()
   }

   getPageIdText() {   // equals 'Login'
      let loginFormElem = element(by.css('[ng-click="login(loginForm)"]'))
      let EC = ExpectedConditions
      browser.wait(EC.visibilityOf(loginFormElem), waitTime);
      return loginFormElem.getText()
   }

   getErrorMsg() {     // equals 'Unknown user name or bad password.'
      let errorMsgElem = element(by.css('[ng-click="cancel()"]'))
      let EC = ExpectedConditions
      browser.wait(EC.visibilityOf(errorMsgElem), waitTime)
      return errorMsgElem.getText()
   }

   getDomainList() {
      let EC = ExpectedConditions
      let domainListButton = element(by.id('domain-button'))
      browser.wait(EC.presenceOf(domainListButton), waitTime)
      return domainListButton
   }

   getExceedAttempErr() {  // equals 'Maximum login attempts exceeded.'
      let EC = ExpectedConditions
      let exceedAttempErr = element(by.className('session-ops-window-text'))
      browser.wait(EC.visibilityOf(exceedAttempErr), waitTime)
      return exceedAttempErr.getText()
   }
}