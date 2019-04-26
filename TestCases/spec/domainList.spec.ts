/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage } from '../po/login.po'
import * as protractor from 'protractor'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
let expect = chai.expect

describe('test for domainlist cookie: ', function() {
   this.timeout(20000) // all tests in this suite get 20 seconds before timeout
   let page: LoginPage

   let cookie = {
      name: 'TestCase',
      value: '1001-0001'   // 1001 is for DomainList test.
   }

   beforeEach(function() {
      page = new LoginPage()
   })

   afterEach(function() {
      // this will NOT delete httpOnly cookies.
      protractor.browser.manage().deleteAllCookies()
  })

   it ('domainList is invisible when cookie not set', function() {
      page.navigateTo()
      let domainListButton = page.getDomainList()
      expect(domainListButton.isDisplayed()).to.eventually.be.false
   })

   it('domainList is visible when set cookie', function() {
      this.retries(2)   // retry two times until success.
      page.navigateTo()
      protractor.browser.manage().addCookie(cookie)
      let domainListButton = page.getDomainList()
      expect(domainListButton.isDisplayed()).to.eventually.be.true
   })

})