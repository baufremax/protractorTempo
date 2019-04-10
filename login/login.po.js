"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPage {
    constructor() {
        this.url = protractor_1.browser.baseUrl + '/portal/webclient/index.html#/';
        this.defaultUserInfo = {
            username: 'pcoip2',
            password: 'ca$hc0w'
        };
        this.anInvalidUser = {
            subject: 'this is an invalid user credential',
            username: 'lol',
            password: 'lmao'
        };
        this.aValidUser = {
            subject: 'this is a valid user credential',
            username: 'pcoip2',
            password: 'ca$hc0w'
        };
    }
    navigateTo() {
        protractor_1.browser.get(this.url);
        // wait for the page to be loaded!!!!!!555
        protractor_1.browser.driver.sleep(5000);
    }
    getCurrentUrl() {
        return protractor_1.browser.getCurrentUrl();
    }
    Login(userinfo) {
        userinfo = userinfo || this.defaultUserInfo;
        // ng-model = 'xx' ==> by.model('xx')
        protractor_1.element(protractor_1.by.model('credential.username')).sendKeys(userinfo.username);
        protractor_1.element(protractor_1.by.model('credential.password')).sendKeys(userinfo.password);
        // element(by.css('[ng-click="myFunction()"]'))
        protractor_1.element(protractor_1.by.css('[ng-click="login(loginForm)"]')).click();
    }
    getPageIdText() {
        return protractor_1.element(protractor_1.by.css('[ng-click="login(loginForm)"]')).getText();
    }
    getErrorMsg() {
        return protractor_1.element(protractor_1.by.css('[ng-click="cancel()"]')).getText();
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQVNsRCxNQUFhLFNBQVM7SUFBdEI7UUFFSSxRQUFHLEdBQVcsb0JBQU8sQ0FBQyxPQUFPLEdBQUcsZ0NBQWdDLENBQUE7UUFFaEUsb0JBQWUsR0FBYTtZQUN4QixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsU0FBUztTQUN0QixDQUFBO1FBRUQsa0JBQWEsR0FBYTtZQUN0QixPQUFPLEVBQUUsb0NBQW9DO1lBQzdDLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLE1BQU07U0FDbkIsQ0FBQTtRQUVELGVBQVUsR0FBYTtZQUNuQixPQUFPLEVBQUUsaUNBQWlDO1lBQzFDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxTQUFTO1NBQ3RCLENBQUE7SUE0QkwsQ0FBQztJQTFCRyxVQUFVO1FBQ04sb0JBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3JCLDBDQUEwQztRQUMxQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDbEMsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUF5QjtRQUMzQixRQUFRLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUE7UUFDM0MscUNBQXFDO1FBQ3JDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEUsK0NBQStDO1FBQy9DLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUQsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDckUsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDN0QsQ0FBQztDQUNKO0FBL0NELDhCQStDQyJ9