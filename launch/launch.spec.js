"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const launch_po_1 = require("./launch.po");
const protractor_1 = require("protractor");
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
        debugger;
        page.navigateTo();
        protractor_1.browser.pause();
        expect(page.getPageIdText()).toEqual('Search');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXVuY2guc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUF3QztBQUN4QywyQ0FBcUM7QUFFckMsUUFBUSxDQUFDLDhCQUE4QixFQUFFO0lBQ3JDLElBQUksSUFBZ0IsQ0FBQTtJQUNwQixJQUFJLFNBQW9CLENBQUE7SUFDeEIsSUFBSSxlQUF1QixDQUFBO0lBRTNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDWixJQUFJLEdBQUcsSUFBSSxzQkFBVSxFQUFFLENBQUE7UUFDdkIsNkVBQTZFO1FBQzdFLGVBQWUsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUE7UUFDbEQsT0FBTyxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQTtJQUM3QyxDQUFDLENBQUMsQ0FBQTtJQUVGLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDWCxPQUFPLENBQUMsd0JBQXdCLEdBQUcsZUFBZSxDQUFBO0lBQ3RELENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsRUFBRTtRQUN6QyxRQUFRLENBQUE7UUFDUixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDakIsb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEQsQ0FBQyxDQUFDLENBQUE7QUFJTixDQUFDLENBQUMsQ0FBQSJ9