import { LoginPage } from '../login/login.po'
import { LaunchPage } from './launch.po'
import { browser } from 'protractor';

describe('access apps in launch page: ', function() {
    let page: LaunchPage
    let loginPage: LoginPage
    let originalTimeout: number
    const fs = require('fs')
    const baseLogUrl: string = './REPORTS/log'
    let itNum: number = 0

    beforeEach(() => {
        page = new LaunchPage()
        // set time out longer so that we can wait for the page to load successfully.
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000
    })

    afterEach(() => {
        itNum ++
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

    it('page is a launch page after login', () => {
        debugger
        page.navigateTo()
        browser.manage().logs().get('browser').then(function(browserLog) {
            expect(browserLog.length).toEqual(0)
            // console.log('log: ' + require('util').inspect(browserLog));
            const logInfo: string = 'log: ' + require('util').inspect(browserLog)
            fs.writeFile(baseLogUrl + '/launchPageLog' + itNum + '.txt', logInfo, err => {
                if (err) throw err
            })
        })
        expect(page.getPageIdText()).toEqual('Search')
    })

})