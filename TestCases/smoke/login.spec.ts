/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage, LaunchPage } from '../po/module'
import { Util} from '../helper/module'
import * as protractor from 'protractor'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
let expect = chai.expect

describe('[1003] login as a user: ', function() {
   this.timeout(20000) // all tests in this suite get 20 seconds before timeout
   let page: LoginPage
   let launchPage: LaunchPage

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
      Util.setCookie('1003-0002');
      page.Login(page.anInvalidUser)
      expect(page.getPageIdText()).to.eventually.equal('Login')
   })

   it('[1003-0003] user login successfully, should go to the launch page', function() {
      page.navigateTo()
      page.Login(page.aValidUser)
      expect(launchPage.getPageIdText()).to.eventually.equal('Log Out')
   })

   it('[1003-0004] user login failures reach 3 times, should pop up error', function() {

      for (let i = 0; i < 3; ++i) {
         page.navigateTo()
         if (i == 2) {
            Util.setCookie('1003-0004', '0002');
         } else {
            Util.setCookie('1003-0004', '0001');
         }
         page.Login(page.anInvalidUser)
      }
      expect(page.getExceedAttempErr()).to.eventually.equal('Maximum login attempts exceeded.')
   })

   it('[1003-0005] Verify authentication with policy that password must change at first logon.', function() {
      page.navigateTo()
      Util.setCookie('1003-0005');
      page.Login(page.defaultUserInfo)
      expect(page.getOldPasswordElement().isDisplayed()).to.eventually.equal(true)
      expect(page.getNewPasswordElement().isDisplayed()).to.eventually.equal(true)
      expect(page.getConfirmPasswordElement().isDisplayed()).to.eventually.equal(true)
   })
})