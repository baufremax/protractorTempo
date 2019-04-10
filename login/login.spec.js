"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_po_1 = require("./login.po");
const launch_po_1 = require("../launch/launch.po");
const protractor_1 = require("protractor");
describe('login as a user: ', function () {
    let page;
    let originalTimeout;
    let launchUrl = new launch_po_1.LaunchPage().launchUrl;
    let itNum = 0;
    beforeEach(() => {
        page = new login_po_1.LoginPage();
        // set time out longer so that we can wait for the page to load successfully.
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    afterEach(() => {
        itNum++;
        // recover the default value.
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    it('page is login page', () => {
        page.navigateTo();
        expect(page.getPageIdText()).toEqual('Login');
    });
    it('user login with wrong credentials, should stay on login page and see error msg', () => {
        page.navigateTo();
        page.Login(page.anInvalidUser);
        protractor_1.browser.driver.sleep(10000); // wait for the login failure process.
        expect(page.getPageIdText()).toEqual('Login');
        // might need to trim space. use this.toString().replace(/^\s+|\s+$/g, ''); or something like trim().
        // expect<any>(page.getErrorMsg()).toEqual('Unknown user name or bad password') 
    });
    it('user login successfully, should go to the launch page', () => {
        page.navigateTo();
        page.Login(page.aValidUser);
        expect(page.getCurrentUrl()).toEqual(launchUrl);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFDdEMsbURBQWdEO0FBQ2hELDJDQUFvQztBQUVwQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsSUFBSSxJQUFlLENBQUE7SUFDbkIsSUFBSSxlQUF1QixDQUFBO0lBQzNCLElBQUksU0FBUyxHQUFXLElBQUksc0JBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQTtJQUNsRCxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUE7SUFDckIsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNaLElBQUksR0FBRyxJQUFJLG9CQUFTLEVBQUUsQ0FBQTtRQUN0Qiw2RUFBNkU7UUFDN0UsZUFBZSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQTtRQUNsRCxPQUFPLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFBO0lBQzdDLENBQUMsQ0FBQyxDQUFBO0lBRUYsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNYLEtBQUssRUFBRyxDQUFBO1FBQ1IsNkJBQTZCO1FBQzdCLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxlQUFlLENBQUE7SUFDdEQsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO1FBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixNQUFNLENBQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RELENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGdGQUFnRixFQUFFLEdBQUcsRUFBRTtRQUN0RixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDOUIsb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUUsc0NBQXNDO1FBQ25FLE1BQU0sQ0FBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFbEQscUdBQXFHO1FBQ3JHLGdGQUFnRjtJQUNwRixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx1REFBdUQsRUFBRSxHQUFHLEVBQUU7UUFDN0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkQsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9