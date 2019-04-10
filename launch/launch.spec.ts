import { LoginPage } from '../login/login.po'
import { LaunchPage } from './launch.po'

describe('access apps in launch page: ', function() {
    let page: LaunchPage
    let loginPage: LoginPage
    let originalTimeout: number

    beforeEach(() => {
        page = new LaunchPage()
        // set time out longer so that we can wait for the page to load successfully.
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000
    })

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

    it('page is a launch page after login', () => {
        debugger
        page.navigateTo()
        expect(page.getPageIdText()).toEqual('Search')
    })



})