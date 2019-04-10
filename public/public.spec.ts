import { PublicPage } from './public.po'
import { LoginPage } from '../login/login.po'
import { browser } from 'protractor';
// import { browser } from 'protractor'
describe('access public page: ', function() {
    let page: PublicPage
    let loginPage: LoginPage

    beforeEach(() => {
        page = new PublicPage()
        loginPage = new LoginPage()
    })

    it('when browse homepage should see the default page', () => {
        page.navigateTo()
        expect<any>(page.getPageIdText()).toEqual('VMware Horizon')
    })

    it('by click the access area should access to login page', () => {
        page.navigateTo()
        page.accessClient()
        // expect<any>(loginPage.getPageIdText()).toEqual('Login')
        expect(page.getCurrentUrl()).toEqual(loginPage.url)
    })
})

