/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage } from '../po/login.po'
import { LaunchPage } from '../po/launch.po'
import { browser } from 'protractor'

describe('login as a user: ', function() { 
    let page: LoginPage
    let originalTimeout: number
    let launchUrl: string = new LaunchPage().launchUrl
    let itNum: number = 0
    let EC = protractor.ExpectedConditions
    let anyTextToBePresentInElement = function(elementFinder: protractor.ElementFinder) {
        let hasText = function() {
          return elementFinder.getText().then(function(actualText) {
            return actualText;
          });
        };
        return EC.and(EC.presenceOf(elementFinder), hasText);
    }

    beforeEach(() => {
        page = new LoginPage()
        // set time out longer so that we can wait for the page to load successfully.
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000
    })

    afterEach(() => {
        itNum ++
        // recover the default value.
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

    it('page is login page', () => {
        page.navigateTo()
        expect<any>(page.getPageIdText()).toEqual('Login')
    })

    it('user login with wrong credentials, should stay on login page and see error msg', () => {
        page.navigateTo()
        page.Login(page.anInvalidUser)
        expect<any>(page.getPageIdText()).toEqual('Login')
        
        // might need to trim space. use this.toString().replace(/^\s+|\s+$/g, ''); or something like trim().
        // expect<any>(page.getErrorMsg()).toEqual('Unknown user name or bad password') 
    })

    it('user login successfully, should go to the launch page', () => {
        page.navigateTo()
        page.Login(page.aValidUser)
        expect(page.getCurrentUrl()).toEqual(launchUrl)
    })
})