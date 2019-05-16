/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage, LaunchPage } from '../po/module'
import { Util } from '../helper/module'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
let expect = chai.expect

describe('[1002] test for DomainList in login page: ', function() {
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

   it ('[1002-0001] domainList is invisible when clientHideDomainList = true', function() {
      this.retries(2)
      page.navigateTo()
      Util.setCookie('1002-0001')
      expect(page.domainListOption.getDomainListInvisible().isPresent()).to.become(false)
      page.loginOption.login(page.defaultUserInfo)
      expect(launchPage.getPageIdText()).to.eventually.equal('Log Out')
   })

   it('[1002-0002] domainList is visible when clientHideDomainList = false', function() {
      page.navigateTo()
      let domainListButton = page.domainListOption.getDomainList()
      expect(domainListButton.isDisplayed()).to.eventually.be.true
      page.loginOption.login(page.defaultUserInfo)
      expect(launchPage.getPageIdText()).to.eventually.equal('Log Out')
   })
})