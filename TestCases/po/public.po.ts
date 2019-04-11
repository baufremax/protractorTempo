import { browser, by, element } from 'protractor';

export class PublicPage {

    url: string = browser.baseUrl + '/'

    navigateTo() {
        browser.waitForAngularEnabled(false);
        return browser.get(this.url)
    }

    getPageIdText() {   // equals 'VMware Horizon'.
        return browser.getTitle()
    }

    getCurrentUrl() {
        return browser.getCurrentUrl()
    }

    installClient() {
        return element(by.id('nativeClient')).click()
    }

    accessClient() {
        return element(by.id('webClient')).click()
    }
}