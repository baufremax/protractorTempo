"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const login_po_1 = require("../login/login.po");
class LaunchPage {
    constructor() {
        this.launchUrl = protractor_1.browser.baseUrl + '/portal/webclient/index.html#/launchitems';
        this.defaultItem = 'win2019';
        // searchItem(name: string | null) {
        //     name = name || this.defaultItem
        //     element(by.model('header.search')).sendKeys(name)
        // }
    }
    navigateTo() {
        // first get login page, then login with valid user credential.
        this.loginPage = new login_po_1.LoginPage();
        this.loginPage.navigateTo();
        this.loginPage.Login(this.loginPage.aValidUser);
    }
    getPageIdText() {
        return protractor_1.element(protractor_1.by.css('label[for="header-search"]')).getAttribute('textContent');
    }
}
exports.LaunchPage = LaunchPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGF1bmNoLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlEO0FBQ2pELGdEQUE2QztBQUU3QyxNQUFhLFVBQVU7SUFBdkI7UUFFSSxjQUFTLEdBQVcsb0JBQU8sQ0FBQyxPQUFPLEdBQUcsMkNBQTJDLENBQUE7UUFFakYsZ0JBQVcsR0FBVyxTQUFTLENBQUE7UUFlL0Isb0NBQW9DO1FBQ3BDLHNDQUFzQztRQUN0Qyx3REFBd0Q7UUFDeEQsSUFBSTtJQUVSLENBQUM7SUFoQkcsVUFBVTtRQUNOLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksb0JBQVMsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDcEYsQ0FBQztDQU9KO0FBeEJELGdDQXdCQyJ9