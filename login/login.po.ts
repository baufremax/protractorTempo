import { browser, by, element } from 'protractor';


interface UserInfo {
    subject?: string,
    username: string,
    password: string
}

export class LoginPage {

    url: string = browser.baseUrl + '/portal/webclient/index.html#/'

    defaultUserInfo: UserInfo = {
        username: 'pcoip2',
        password: 'ca$hc0w'
    }

    anInvalidUser: UserInfo = {
        subject: 'this is an invalid user credential',
        username: 'lol',
        password: 'lmao'
    }

    aValidUser: UserInfo = {
        subject: 'this is a valid user credential',
        username: 'pcoip2',
        password: 'ca$hc0w'
    }

    navigateTo() {
        browser.get(this.url)
        // wait for the page to be loaded!!!!!!555
        browser.driver.sleep(5000)
    }

    getCurrentUrl() {
        return browser.getCurrentUrl()
    }

    Login(userinfo: UserInfo | null) {
        userinfo = userinfo || this.defaultUserInfo
        // ng-model = 'xx' ==> by.model('xx')
        element(by.model('credential.username')).sendKeys(userinfo.username)
        element(by.model('credential.password')).sendKeys(userinfo.password)
        // element(by.css('[ng-click="myFunction()"]'))
        element(by.css('[ng-click="login(loginForm)"]')).click()
        browser.driver.sleep(10000)
    }

    getPageIdText() {   // equals 'Login'
        return element(by.css('[ng-click="login(loginForm)"]')).getText()
    }

    getErrorMsg() {     // equals 'Unknown user name or bad password.'
        return element(by.css('[ng-click="cancel()"]')).getText()
    }
}