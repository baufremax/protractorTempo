/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { SidebarPage, LaunchPage } from '../po/module'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { browser } from 'protractor';
import { Util } from '../helper/util';
chai.use(chaiAsPromised)
let expect = chai.expect

describe('access apps in launch page: ', function() {
   this.timeout(2000000) // all tests in this suite get 20 seconds before timeout
   let page: LaunchPage
   let sidebarPage: SidebarPage
   let originUrl: string

   beforeEach(function() {
      originUrl = browser.baseUrl
      browser.baseUrl = 'https://10.117.161.109'
      page = new LaunchPage()
      sidebarPage = new SidebarPage()
   })

   afterEach(function() {
      Util.clearCookie()
      browser.baseUrl = originUrl
   })

   it('[Desktop and Applcaiton- launch desktoop and apps] Verify desktop is able to be launched from Launcher', function() {
      page.navigateTo(true)
      page.searchOption.clickItem(page.defaultItem)
      sidebarPage.getToggler().click()
      /** NOTE: the sidebar elements are hidden when toggler not clicked, but even if the toggler is clikced,
       * sometimes the elements in the sidebar are still hidden.
       * THUS, this case would fail when the sidebar were not unfolded.
       * NEED alternative method to deal with this test case, i.e., how to get items when they are hidden. **/
      let runningApp = sidebarPage.searchOption.getAvailableItem(page.defaultItem)
      expect(runningApp.getAttribute('innerHTML')).to.eventually.equal(page.defaultItem)
   })
})