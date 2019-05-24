/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { PublicPage, LoginPage, LaunchPage } from '../po/module'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { browser } from 'protractor';
import { Util } from '../helper/util';
chai.use(chaiAsPromised)
let expect = chai.expect

describe('access apps in launch page: ', function() {
   this.timeout(2000000) // all tests in this suite get 20 seconds before timeout
   let page: LaunchPage
   let publicPage: PublicPage
   let loginPage: LoginPage

   beforeEach(function() {
      page = new LaunchPage()
   })

   afterEach(function() {
      Util.clearCookie()
   })

   it('[1004-0001] page is a launch page after login', function() {
      page.navigateTo()
      expect(page.getPageIdText()).to.eventually.equal('Log Out')
   })

   it('[1004-0003] help panel is clickable and closable', function() {
      page.navigateTo()
      page.helpOption.showHelp()
      expect(page.helpOption.getHelpInfo()).to.eventually.equal('About VMware Horizon Client')
      page.helpOption.closeHelp()
      expect(page.helpOption.getHelpInvisible().isPresent()).to.become(false)
   })

   it('[1004-0004] logout works well', function() {
      page.navigateTo()
      page.logoutOption.logout()
      page.logoutOption.confirmLogout()
      let publicPage = new PublicPage()
      expect(publicPage.getPageIdText()).to.eventually.equal('Install VMware Horizon Client')
   })

   it('[1004-0005] logout can be canceled', function() {
      page.navigateTo()
      page.logoutOption.logout()
      page.logoutOption.cancelLogout()
      expect(page.getPageIdText()).to.eventually.equal('Log Out')
   })

   it('[1004-0006] search bar is available and no item is present when type in strange word', function() {
      page.navigateTo()
      page.searchOption.searchItem('$')
      expect(page.searchOption.getItemInvisible().isPresent()).to.become(false)
   })

   it('[1004-0007] search bar works well when type in available name', function() {
      page.navigateTo()
      page.searchOption.searchItem(page.defaultItem)
      expect(page.searchOption.getItem(page.defaultItem).isPresent()).to.become(true)
   })

   it('[SSO - launch desktop] Desktop is launched successfully, and user is logged in to desktop, no extra authentication is needed', function() {
      page.navigateTo()
      Util.setCookie('1004-0008')
      browser.getCurrentUrl().then(function(url: string) {
         // console.log(url)
         browser.get(url)
      })
      expect(page.getPageIdText()).to.eventually.equal('Log Out')
   })

   it('[Forcibly disconnect users] Verify session is timeout after 1 hour and reauthentication is required after broker session is timeout', function(){
      // in our test we set the timeout to 5 seconds.
      publicPage = new PublicPage()
      publicPage.navigateTo()
      Util.setCookieFunc('do-submit-authentication', 'set_idle_time', '5')
      page.navigateTo()
      browser.sleep(6000)
      browser.refresh()
      loginPage = new LoginPage()
      expect(loginPage.getPageIdText()).to.eventually.equal('Login')
   })
})

describe('setting button in launch page', function() {
   this.timeout(20000) // all tests in this suite get 20 seconds before timeout
   let page: LaunchPage
   let loginPage: LoginPage
   const fs = require('fs')
   const baseLogUrl: string = './REPORTS/log'

   beforeEach(function() {
      page = new LaunchPage()
      page.navigateTo()
   })

   afterEach(function() {
      Util.clearCookie()
   })

   it('[1004-0002] setting panel is clickable and closable', function() {
      page.settingOption.showSettings()
      expect(page.settingOption.getSettingInfo()).to.eventually.equal('Settings')
      page.settingOption.closeSettings()
      expect(page.settingOption.getSettingInvisible().isPresent()).to.become(false)
   })

   it('[Setting - applications reset - confirm] Check the function to reset application from Settings dialog box', function() {
      page.settingOption.showSettings()
      expect(page.settingOption.getResetButton().isEnabled()).to.become(false)
   })
})