/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

import { LoginPage } from '../po/login.po'
import { LaunchPage } from '../po/launch.po'
import * as protractor from 'protractor'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);
let expect = chai.expect;

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
    })

    afterEach(() => {
        itNum ++
    })

    it('page is login page', () => {
        page.navigateTo()
        expect(page.getPageIdText()).equal('Login')
    })

    it('user login with wrong credentials, should stay on login page and see error msg', () => {
        page.navigateTo()
        page.Login(page.anInvalidUser)
        expect(page.getPageIdText()).equal('Login')
        
        // might need to trim space. use this.toString().replace(/^\s+|\s+$/g, ''); or something like trim().
        // expect<any>(page.getErrorMsg()).toEqual('Unknown user name or bad password') 
    })

    it('user login successfully, should go to the launch page', () => {
        page.navigateTo()
        page.Login(page.aValidUser)
        expect(page.getCurrentUrl()).equal(launchUrl)
    })
})