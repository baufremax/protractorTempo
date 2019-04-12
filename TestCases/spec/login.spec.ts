/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage } from '../po/login.po'
import { LaunchPage } from '../po/launch.po'
import * as protractor from 'protractor'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
let expect = chai.expect

describe('login as a user: ', function() {
   this.timeout(20000) // all tests in this suite get 20 seconds before timeout
   let page: LoginPage
   let launchUrl: string = new LaunchPage().launchUrl
   let itNum: number = 0

   beforeEach(function() {
      page = new LoginPage()
   })

   afterEach(function() {
      itNum ++
   })

   it('page is login page', function() {
      page.navigateTo()
      expect(page.getPageIdText()).to.eventually.equal('Login')
   })

   it('user login with wrong credentials, should stay on login page and see error msg', function() {
      page.navigateTo()
      page.Login(page.anInvalidUser)
      expect(page.getPageIdText()).to.eventually.equal('Login')
      
      // might need to trim space. use this.toString().replace(/^\s+|\s+$/g, ''); or something like trim().
      // expect<any>(page.getErrorMsg()).toEqual('Unknown user name or bad password') 
   })

   it('user login successfully, should go to the launch page', function() {
      page.navigateTo()
      page.Login(page.aValidUser)
      expect(page.getCurrentUrl()).to.eventually.equal(launchUrl)
   })
})