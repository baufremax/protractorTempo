"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const public_po_1 = require("./public.po");
const login_po_1 = require("../login/login.po");
// import { browser } from 'protractor'
describe('access public page: ', function () {
    let page;
    let loginPage;
    beforeEach(() => {
        page = new public_po_1.PublicPage();
        loginPage = new login_po_1.LoginPage();
    });
    it('when browse homepage should see the default page', () => {
        page.navigateTo();
        expect(page.getPageIdText()).toEqual('VMware Horizon');
    });
    it('by click the access area should access to login page', () => {
        page.navigateTo();
        page.accessClient();
        // expect<any>(loginPage.getPageIdText()).toEqual('Login')
        expect(page.getCurrentUrl()).toEqual(loginPage.url);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdWJsaWMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3QztBQUN4QyxnREFBNkM7QUFFN0MsdUNBQXVDO0FBQ3ZDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTtJQUM3QixJQUFJLElBQWdCLENBQUE7SUFDcEIsSUFBSSxTQUFvQixDQUFBO0lBRXhCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDWixJQUFJLEdBQUcsSUFBSSxzQkFBVSxFQUFFLENBQUE7UUFDdkIsU0FBUyxHQUFHLElBQUksb0JBQVMsRUFBRSxDQUFBO0lBQy9CLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEdBQUcsRUFBRTtRQUN4RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDakIsTUFBTSxDQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQy9ELENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHNEQUFzRCxFQUFFLEdBQUcsRUFBRTtRQUM1RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLDBEQUEwRDtRQUMxRCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN2RCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=