/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { PublicPage } from '../po/public.po'
import { LoginPage } from '../po/login.po'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { browser } from 'protractor';
import { beforeEach } from 'mocha';
chai.use(chaiAsPromised)
let expect = chai.expect

describe('[1000] access public page: ', function() {
   this.timeout(30000) // all tests in this suite get 10 seconds before timeout
   let page: PublicPage
   let loginPage: LoginPage

   beforeEach(function() {
      page = new PublicPage()
      loginPage = new LoginPage()
   })

   it('[1000-0001] when browse homepage should see the default page', function() {
      page.navigateTo()
      expect(page.getPageIdText()).to.eventually.equal('VMware Horizon')
   })

   it('[1000-0002] by click the access area should access to login page', function() {
      page.navigateTo()
      page.accessClient()
      expect(page.getCurrentUrl()).to.eventually.equal(loginPage.url)
   })
})
