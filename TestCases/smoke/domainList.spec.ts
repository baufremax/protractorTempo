/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage } from '../po/login.po'
import { LaunchPage } from '../po/launch.po'
import { CookieSandbox } from '../cookieSandbox'
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
      // this will NOT delete httpOnly cookies.
      protractor.browser.manage().deleteAllCookies()
      protractor.browser.executeScript('window.sessionStorage.clear();');
      protractor.browser.executeScript('window.localStorage.clear();');
   })

   it ('[1002-0001] domainList is invisible when cookie not set', function() {
      page.navigateTo()
      let domainListButton = page.getDomainList()
      expect(domainListButton.isDisplayed()).to.eventually.be.false
      page.Login(page.defaultUserInfo)
      expect(launchPage.getPageIdText()).to.eventually.equal('Log Out')
   })

   it('[1002-0001] domainList is visible when set cookie', function() {
      let cookie = cookieSandbox.getDomainListCookie()
      page.navigateTo()
      protractor.browser.manage().addCookie(cookie)
      let domainListButton = page.getDomainList()
      expect(domainListButton.isDisplayed()).to.eventually.be.true
      page.Login(page.defaultUserInfo)
      expect(launchPage.getPageIdText()).to.eventually.equal('Log Out')
   })

})