/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { PublicPage, LoginPage, PreLogonPage } from '../po/module'
import { Util } from '../helper/module'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
let expect = chai.expect

describe('[1000] access public page: ', function() {
   this.timeout(30000) // all tests in this suite get 10 seconds before timeout
   let page: PublicPage
   let loginPage: LoginPage

   beforeEach(function() {
      page = new PublicPage()
      loginPage = new LoginPage()
      page.navigateTo()
   })

   afterEach(function() {
      Util.clearCookie()
   })

   it('[1000-0001] when browse homepage should see the default page', function() {
      expect(page.getPageIdText()).to.eventually.equal('Install VMware Horizon Client')
   })

   it('[1000-0002] by click the access area should access to login page', function() {
      page.accessClient()
      expect(page.getCurrentUrl()).to.eventually.equal(loginPage.url)
   })

   it('[1000-0003] Verify pre-login dialog box can be shown as expected', function() {
      Util.setCookie('1000-0006')
      page.accessClient()
      let preLogOnPage = new PreLogonPage()
      expect(preLogOnPage.getAcceptDisclaimerBtn().isDisplayed()).to.eventually.equal(true)
      expect(preLogOnPage.getCancelDisclaimerBtn().isDisplayed()).to.eventually.equal(true)
      expect(preLogOnPage.getDisclaimerText()).to.eventually.equal("The alpaca (Vicugna pacos) is a species of South American camelid. It is similar to, and often confused with, the llama. However, alpacas are often noticeably smaller than llamas. The two animals are closely related and can successfully cross-breed. Alpacas and llamas are also closely related to the vicuña, which is believed to be the alpaca's wild ancestor, and to the guanaco. There are two breeds of alpaca: the Suri alpaca and the Huacaya alpaca.")
   })
})
