/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage, LaunchPage } from '../po/module'
import { Util, CookieSandbox} from '../helper/module'
import * as protractor from 'protractor'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
let expect = chai.expect

describe('[1003] login as a user: ', function() {
   this.timeout(20000) // all tests in this suite get 20 seconds before timeout
   let page: LoginPage
   let launchPage: LaunchPage
   let cookieSandbox = new CookieSandbox()

   beforeEach(function() {
      page = new LoginPage()
      launchPage = new LaunchPage()
   })

   afterEach(function() {
      Util.clearCookie()
   })

   it('[1003-0001] page is login page', function() {
      page.navigateTo()
      expect(page.getPageIdText()).to.eventually.equal('Login')
   })

   it('[1003-0002] user login with wrong credentials, should stay on login page and see error msg', function() {
      page.navigateTo()
      let cookie = cookieSandbox.getLoginFailCookie()
      protractor.browser.manage().addCookie(cookie)
      page.Login(page.anInvalidUser)
      expect(page.getPageIdText()).to.eventually.equal('Login')
   })

   it('[1003-0003] user login successfully, should go to the launch page', function() {
      page.navigateTo()
      page.Login(page.aValidUser)
      expect(launchPage.getPageIdText()).to.eventually.equal('Log Out')
   })

   it('[1003-0004] user login failures reach 3 times, should pop up error', function() {
      let cookie = cookieSandbox.getLoginFailCookie()
      for (let i = 0; i < 3; ++i) {
         page.navigateTo()
         protractor.browser.manage().addCookie(cookie)
         if (i == 2) {
            cookie = cookieSandbox.getLoginFailCookie('0002')
            protractor.browser.manage().addCookie(cookie)
         }
         page.Login(page.anInvalidUser)
      }
      expect(page.getExceedAttempErr()).to.eventually.equal('Maximum login attempts exceeded.')
   })


//   it('[1003-0005] Verify authentication with policy that password must change at first logon.', function() {
//      let cookie = cookieSandbox.getFirstLogonUserCookie()
//      page.navigateTo()
//      page.Login(page.defaultUserInfo)
//      expect(page.getExceedAttempErr()).to.eventually.equal('Maximum login attempts exceeded.')
//   })
})