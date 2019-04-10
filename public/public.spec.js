"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const public_po_1 = require("./public.po");
const login_po_1 = require("../login/login.po");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdWJsaWMuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3QztBQUN4QyxnREFBNkM7QUFFN0MsUUFBUSxDQUFDLHNCQUFzQixFQUFFO0lBQzdCLElBQUksSUFBZ0IsQ0FBQTtJQUNwQixJQUFJLFNBQW9CLENBQUE7SUFFeEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNaLElBQUksR0FBRyxJQUFJLHNCQUFVLEVBQUUsQ0FBQTtRQUN2QixTQUFTLEdBQUcsSUFBSSxvQkFBUyxFQUFFLENBQUE7SUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0RBQWtELEVBQUUsR0FBRyxFQUFFO1FBQ3hELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixNQUFNLENBQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDL0QsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0RBQXNELEVBQUUsR0FBRyxFQUFFO1FBQzVELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbkIsMERBQTBEO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==