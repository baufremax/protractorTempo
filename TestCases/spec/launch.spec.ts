/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage } from '../po/login.po'
import { LaunchPage } from '../po/launch.po'
import { browser } from 'protractor'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);
let expect = chai.expect;

describe('access apps in launch page: ', function() {
   let page: LaunchPage
   let loginPage: LoginPage
   let originalTimeout: number
   const fs = require('fs')
   const baseLogUrl: string = './REPORTS/log'
   let itNum: number = 0

   beforeEach(() => {
      page = new LaunchPage()
   })

   afterEach(() => {
      itNum ++
   })

   it('page is a launch page after login', () => {
      debugger
      page.navigateTo()
      browser.manage().logs().get('browser').then(function(browserLog) {
         expect(browserLog.length).equal(0)
         // console.log('log: ' + require('util').inspect(browserLog));
         const logInfo: string = 'log: ' + require('util').inspect(browserLog)
         fs.writeFile(baseLogUrl + '/launchPageLog' + itNum + '.txt', logInfo, err => {
               if (err) throw err
         })
      })

      // alternative method to take advantage of browserLog.
      // browser.manage().logs().get('browser').then(function(browserLog) {
      //     // browserLogs is an array of objects with level and message fields
      //     browserLog.forEach(function(log){
      //         if (log.level.value > 900) { // it's an error log
      //         console.log('Browser console error!');
      //         console.log(log.message);
      //         }
      //     })
      // })
      
      expect(page.getPageIdText()).equal('Search')
   })

})