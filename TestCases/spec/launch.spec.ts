/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage } from '../po/login.po'
import { LaunchPage } from '../po/launch.po'
import { browser, element, by } from 'protractor'
import * as protractor from 'protractor'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { PublicPage } from '../po/module';
chai.use(chaiAsPromised)
let expect = chai.expect

describe('access apps in launch page: ', function() {
   this.timeout(20000) // all tests in this suite get 20 seconds before timeout
   let page: LaunchPage
   let loginPage: LoginPage
   const fs = require('fs')
   const baseLogUrl: string = './REPORTS/log'

   beforeEach(function() {
      page = new LaunchPage()
      page.navigateTo()
   })

   it('[1004-0001] page is a launch page after login', function() {
      expect(page.getPageIdText()).to.eventually.equal('Log Out')
      // method to get logging info: 
      /* browser.manage().logs().get('browser').then(function(browserLog) {
         expect(browserLog.length).to.equal(0)
         // console.log('log: ' + require('util').inspect(browserLog));
         const logInfo: string = 'log: ' + require('util').inspect(browserLog)
         fs.writeFile(baseLogUrl + '/launchPageLog' + itNum + '.txt', logInfo, err => {
               if (err) throw err
         })
      })
      */

      // alternative method to take advantage of browserLog.
      /*
      browser.manage().logs().get('browser').then(function(browserLog) {
          // browserLogs is an array of objects with level and message fields
          browserLog.forEach(function(log){
              if (log.level.value > 900) { // it's an error log
              console.log('Browser console error!');
              console.log(log.message);
              }
          })
      })
      */
   })

   it('[1004-0002] setting panel is clickable and closable', function() {
      page.showSettings()
      expect(page.getSettingInfo()).to.eventually.equal('Settings')
      page.closeSettings()
      expect(page.getSettingInvisible().isPresent()).to.become(false)
   })

   it('[1004-0003] help panel is clickable and closable', function() {
      page.showHelp()
      expect(page.getHelpInfo()).to.eventually.equal('About VMware Horizon Client')
      page.closeHelp()
      expect(page.getHelpInvisible().isPresent()).to.become(false)
   })

   it('[1004-0004] logout works well', function() {
      page.logOut()
      page.confirmLogOut()
      let publicPage = new PublicPage()
      expect(publicPage.getPageIdText()).to.eventually.equal('Install VMware Horizon Client')
   })

   it('[1004-0005] logout can be canceled', function() {
      page.logOut()
      page.cancelLogOut()
      expect(page.getPageIdText()).to.eventually.equal('Log Out')
   })

   it('[1004-0006] search bar is available and no item is present when type in strange word', function() {
      page.searchItem('$')
      expect(page.getItemInvisible().isPresent()).to.become(false)
   })

   it('[1004-0007] search bar works well when type in available name', function() {
      page.searchItem('win2019')
      expect(page.getItem('win2019').isPresent()).to.become(true)
   })
})