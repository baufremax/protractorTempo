/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { PublicPage } from '../po/public.po'
import { LoginPage } from '../po/login.po'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);
let expect = chai.expect;

describe('access public page: ', function() {
   this.timeout(10000) // all tests in this suite get 10 seconds before timeout
   let page: PublicPage
   let loginPage: LoginPage

   beforeEach(function() {
      page = new PublicPage()
      loginPage = new LoginPage()
   })

   it('when browse homepage should see the default page', function() {
      page.navigateTo()
      expect(page.getPageIdText()).to.eventually.equal('VMware Horizon')
   })

   it('by click the access area should access to login page', function() {
      page.navigateTo()
      page.accessClient()
      expect(page.getCurrentUrl()).to.eventually.equal(loginPage.url)
   })
})
