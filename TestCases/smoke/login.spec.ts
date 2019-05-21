/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage, LaunchPage, PreLogonPage, PublicPage } from '../po/module'
import { Util } from '../helper/module'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { browser } from 'protractor';
chai.use(chaiAsPromised)
let expect = chai.expect

describe('[1003] login as a user: ', function() {
   this.timeout(20000) // all tests in this suite get 20 seconds before timeout
   let page: LoginPage
   let launchPage: LaunchPage

   beforeEach(function() {
      page = new LoginPage()
      launchPage = new LaunchPage()
      page.navigateTo()
   })

   afterEach(function() {
      Util.clearCookie()
   })

   it('[1003-0001] page is login page', function() {
      expect(page.getPageIdText()).to.eventually.equal('Login')
   })

   it('[1003-0002] user login with wrong credentials, should stay on login page and see error msg', function() {
      Util.setCookie('1003-0002')
      page.loginOption.login(page.anInvalidUser)
      expect(page.getPageIdText()).to.eventually.equal('Login')
   })

   it('[1003-0003] user login successfully, should go to the launch page', function() {
      page.loginOption.login(page.aValidUser)
      expect(launchPage.getPageIdText()).to.eventually.equal('Log Out')
   })

   it('[1003-0004] user login failures reach 3 times, should pop up error', function() {
      for (let i = 0; i < 3; ++i) {
         if (i == 2) {
            Util.setCookie('1003-0004', '0002')
         } else {
            Util.setCookie('1003-0004', '0001')
         }
         page.loginOption.login(page.anInvalidUser)
      }
      expect(page.loginOption.getExceedAttempErr()).to.eventually.equal('Maximum login attempts exceeded.')
   })

   it('[1003-0005] Verify authentication with policy that password must change at first logon.', function() {
      Util.setCookie('1003-0005')
      page.loginOption.login(page.loginOption.defaultUserInfo)
      expect(page.passwordOption.getOldPasswordElement().isDisplayed()).to.eventually.equal(true)
      expect(page.passwordOption.getNewPasswordElement().isDisplayed()).to.eventually.equal(true)
      expect(page.passwordOption.getConfirmPasswordElement().isDisplayed()).to.eventually.equal(true)
   })

   it('[1003-0006] RADIUS SecurID 2-Factor Authentication is shown.', function() {
      Util.setCookie('1003-0006', '0001')
      let secureUserName = page.preLogonOption.getSecurUsernameElement()
      let passcode = page.preLogonOption.getPasscodeElement()
      expect(secureUserName.isDisplayed()).to.eventually.equal(true)
      expect(passcode.isDisplayed()).to.eventually.equal(true)
   })

   it('[1003-0007] RADIUS SecurID 2-Factor Authentication failed with unkown user', function() {
      //reuse the cookie set for 1003-0006
      Util.setCookie('1003-0006', '0001')
      page.preLogonOption.RADISLogin(page.aValidUser)
      let passcode = page.preLogonOption.getPasscodeElement()
      let btn = page.loginOption.getLoginButtonBtn()
      expect(passcode.isDisplayed()).to.eventually.equal(true)
      expect(btn.getText()).to.eventually.equal('Continue')
      expect(page.preLogonOption.getLogonHint().getText()).to.eventually.equal('Please enroll at https://api-d987d56d.duosecurity.com/portal?code=fdf6c930fd9cfb74&akey=DA0V9XJXLZI2OVKGZIWO')
   })
})

describe('[1003] prelogin: ', function() {
   this.timeout(20000) // all tests in this suite get 20 seconds before timeout
   let page: PreLogonPage
   let publicPage: PublicPage
   let loginPage: LoginPage
   let launchPage: LaunchPage
   it('[1003-0008] Verify that launching desktop through RSA secure id with user-generated PIN successfully', function() {
      page = new PreLogonPage()
      
      browser.waitForAngularEnabled(false)
      browser.get(browser.baseUrl)
      // Util.setCookie('1003-0008')
      Util.setCookie('1003-0008', '0001')
      publicPage = new PublicPage()
      // here we are in public page.
      publicPage.clientOption.accessClient()
      page.getAcceptDisclaimerBtn().click()
      // now we have navigated to the RSA login page.
      Util.setCookie('1003-0008', '0002')
      page.login(null)
      // now we have navigated to the pin code page.
      Util.setCookie('1003-0008', '0003')
      page.sendPin(null)
      browser.refresh()
      // now we have navigated to the normal login page.
      Util.setCookie('1003-0008', '0004')
      loginPage = new LoginPage()
      loginPage.loginOption.login(null)
      // now we have navigated to the normal launch page.
      launchPage = new LaunchPage()
      expect(launchPage.getPageIdText()).to.eventually.equal('Log Out')
   })
})