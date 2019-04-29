import { browser, element, by } from 'protractor'
import * as protractor from 'protractor'
import { Util } from '../util'

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

   navigateTo() {
      browser.get(this.url)
   }

   getCurrentUrl() {
      return browser.getCurrentUrl()
   }

   Login(userinfo: UserInfo | null) {
      userinfo = userinfo || this.defaultUserInfo
      // wait for the elements being visible
      let usernameElem = Util.wait(element(by.model('credential.username')))
      let passwordElem = Util.wait(element(by.model('credential.password')))
      let loginFormElem = Util.wait(element(by.css('[ng-click="login(loginForm)"]')))
      
      usernameElem.sendKeys(userinfo.username)
      passwordElem.sendKeys(userinfo.password)
      
      loginFormElem.click()
   }

   getPageIdText() {   // equals 'Login'
      let loginFormElem = Util.wait(element(by.css('[ng-click="login(loginForm)"]')))
      return loginFormElem.getText()
   }

   getErrorMsg() {     // equals 'Unknown user name or bad password.'
      let errorMsgElem =  Util.wait(element(by.css('[ng-click="cancel()"]')))
      return errorMsgElem.getText()
   }

   getDomainList() {
      let domainListButton = Util.wait(element(by.id('domain-button')))
      return domainListButton
   }

   getExceedAttempErr() {  // equals 'Maximum login attempts exceeded.'
      let exceedAttempErr = Util.wait(element(by.className('session-ops-window-text')))
      return exceedAttempErr.getText()
   }

   getChangePassWordUI() {
   }
}