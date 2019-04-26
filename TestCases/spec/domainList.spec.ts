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
      value: 'domainListOn'
   }

   beforeEach(function() {
      page = new LoginPage()
   })

   it ('domainList is invisible when cookie not set', function() {
      page.navigateTo()
      expect(page.getDomainList().isDisplayed()).to.eventually.be.false
      // protractor.browser.sleep(3000000)
      // protractor.browser.manage().getCookie('TestCase').then(function(cookie) {
      //    console.log('well... ' + cookie.name + ' ' + cookie.value)
      // })
   })

   it('domainList is visible when set cookie', function() {
      page.navigateTo()
      protractor.browser.manage().addCookie(cookie)
      expect(page.getDomainList().isDisplayed()).to.eventually.be.true
      protractor.browser.manage().deleteCookie(cookie.name)
   })

})