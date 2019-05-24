import { browser, element, by } from 'protractor'
import { Util } from '../helper/module'
import { PreLogonPage } from './module'
interface UserInfo {
   subject?: string,
   username: string,
   password: string
}

let prelogonPage: PreLogonPage
export class LoginPage {

   url: string = browser.baseUrl + '/portal/webclient/index.html#/'

   

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

   navigateTo(disclaimer: boolean = false) {
      browser.get(this.url)
      if (disclaimer) {
         prelogonPage = new PreLogonPage()
         prelogonPage.getAcceptDisclaimerBtn().click()
      }
   }

   getCurrentUrl() {
      return browser.getCurrentUrl()
   }

   getPageIdText() {   // equals 'Login'
      let loginFormElem = Util.wait(element(by.css('[ng-click="login(loginForm)"]')))
      return loginFormElem.getText()
   }

   getErrorMsg() {     // equals 'Unknown user name or bad password.'
      let errorMsgElem =  Util.wait(element(by.css('[ng-click="cancel()"]')))
      return errorMsgElem.getText()
   }
   
   loginOption = new class {
      defaultUserInfo: UserInfo = {
         username: 'pcoip2',
         password: 'ca$hc0w'
      }
      login(userinfo: UserInfo | null) {
         userinfo = userinfo || this.defaultUserInfo
         // wait for the elements being visible
         let usernameElem = Util.wait(element(by.model('credential.username')))
         let passwordElem = Util.wait(element(by.model('credential.password')))
         let loginFormElem = Util.wait(element(by.css('[ng-click="login(loginForm)"]')))
         
         usernameElem.sendKeys(userinfo.username)
         passwordElem.sendKeys(userinfo.password)
         
         loginFormElem.click()
      }

      getExceedAttempErr() {  // equals 'Maximum login attempts exceeded.'
         let exceedAttempErr = Util.wait(element(by.className('session-ops-window-text')))
         return exceedAttempErr.getText()
      }

      getLoginButtonBtn() {
         return Util.wait(element(by.id('loginButton')))
      }
   }

   domainListOption = new class {
      getDomainList() {
         let domainListButton = Util.wait(element(by.id('domain-button')))
         return domainListButton
      }

      getDomainListInvisible() {
         let btn = Util.waitInvisible(element(by.id('domain-button')))
         return btn
      }
   }

   passwordOption = new class {
      getOldPasswordElement() {
         return Util.wait(element(by.id('oldpassword')))
      }

      getNewPasswordElement() {
         return Util.wait(element(by.id('newpassword1')))
      }

      getConfirmPasswordElement() {
         return Util.wait(element(by.id('newpassword2')))
      }
   }

   preLogonOption = new class {
      getSecurUsernameElement() {
         return Util.wait(element(by.id('securUsername')))
      }

      getPasscodeElement() {
         return Util.wait(element(by.id('passcode')))
      }

      getSecurLoginButton() {
         return Util.wait(element(by.id('securLoginButton')))
      }

      getLogonHint() {
         return Util.wait(element(by.className('ui-login-hint-text')))
      }
      
      RADISLogin(userinfo: UserInfo | null) {
         let secureUserName = this.getSecurUsernameElement()
         let passcode = this.getPasscodeElement()
         let btn = this.getSecurLoginButton()
         secureUserName.sendKeys(userinfo.username)
         passcode.sendKeys(userinfo.password)
         btn.click()
      }
   }
}