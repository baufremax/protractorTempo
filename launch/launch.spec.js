"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const launch_po_1 = require("./launch.po");
describe('access apps in launch page: ', function () {
    let page;
    let loginPage;
    let originalTimeout;
    beforeEach(() => {
        page = new launch_po_1.LaunchPage();
        // set time out longer so that we can wait for the page to load successfully.
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    it('page is a launch page after login', () => {
        page.navigateTo();
        expect(page.getPageIdText()).toEqual('Search');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXVuY2guc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUF3QztBQUV4QyxRQUFRLENBQUMsOEJBQThCLEVBQUU7SUFDckMsSUFBSSxJQUFnQixDQUFBO0lBQ3BCLElBQUksU0FBb0IsQ0FBQTtJQUN4QixJQUFJLGVBQXVCLENBQUE7SUFFM0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNaLElBQUksR0FBRyxJQUFJLHNCQUFVLEVBQUUsQ0FBQTtRQUN2Qiw2RUFBNkU7UUFDN0UsZUFBZSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQTtRQUNsRCxPQUFPLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFBO0lBQzdDLENBQUMsQ0FBQyxDQUFBO0lBRUYsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNYLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxlQUFlLENBQUE7SUFDdEQsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxFQUFFO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xELENBQUMsQ0FBQyxDQUFBO0FBSU4sQ0FBQyxDQUFDLENBQUEifQ==