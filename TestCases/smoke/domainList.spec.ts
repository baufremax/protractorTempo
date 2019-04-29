/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage, LaunchPage } from '../po/module'
import { CookieSandbox, Util } from '../helper/module'
import * as protractor from 'protractor'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
let expect = chai.expect

describe('[1002] test for domainlist cookie: ', function() {
   this.timeout(20000) // all tests in this suite get 20 seconds before timeout
   let page: LoginPage
   let launchPage: LaunchPage
   let cookieSandbox: CookieSandbox = new CookieSandbox()

   beforeEach(function() {
      page = new LoginPage()
      launchPage = new LaunchPage()
   })

   afterEach(function() {
      Util.clearCookie()
   })

   it ('[1002-0001] domainList is visible when clientHideDomainList = true', function() {
      page.navigateTo()
      let domainListButton = page.getDomainList()
      expect(domainListButton.isDisplayed()).to.eventually.be.true
      page.Login(page.defaultUserInfo)
      expect(launchPage.getPageIdText()).to.eventually.equal('Log Out')
   })

   it('[1002-0001] domainList is visible when clientHideDomainList = false', function() {
      let cookie = cookieSandbox.getDomainListCookie()
      page.navigateTo()
      protractor.browser.manage().addCookie(cookie)
      let domainListButton = page.getDomainList()
      expect(domainListButton.isDisplayed()).to.eventually.be.true
      page.Login(page.defaultUserInfo)
      expect(launchPage.getPageIdText()).to.eventually.equal('Log Out')
   })
})