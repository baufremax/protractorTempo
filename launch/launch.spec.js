"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const launch_po_1 = require("./launch.po");
const protractor_1 = require("protractor");
describe('access apps in launch page: ', function () {
    let page;
    let loginPage;
    let originalTimeout;
    const fs = require('fs');
    const baseLogUrl = './REPORTS/log';
    let itNum = 0;
    beforeEach(() => {
        page = new launch_po_1.LaunchPage();
        // set time out longer so that we can wait for the page to load successfully.
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    afterEach(() => {
        itNum++;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    it('page is a launch page after login', () => {
        debugger;
        page.navigateTo();
        protractor_1.browser.manage().logs().get('browser').then(function (browserLog) {
            expect(browserLog.length).toEqual(0);
            // console.log('log: ' + require('util').inspect(browserLog));
            const logInfo = 'log: ' + require('util').inspect(browserLog);
            fs.writeFile(baseLogUrl + '/launchPageLog' + itNum + '.txt', logInfo, err => {
                if (err)
                    throw err;
            });
        });
        expect(page.getPageIdText()).toEqual('Search');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXVuY2guc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUF3QztBQUN4QywyQ0FBcUM7QUFFckMsUUFBUSxDQUFDLDhCQUE4QixFQUFFO0lBQ3JDLElBQUksSUFBZ0IsQ0FBQTtJQUNwQixJQUFJLFNBQW9CLENBQUE7SUFDeEIsSUFBSSxlQUF1QixDQUFBO0lBQzNCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixNQUFNLFVBQVUsR0FBVyxlQUFlLENBQUE7SUFDMUMsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFBO0lBRXJCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDWixJQUFJLEdBQUcsSUFBSSxzQkFBVSxFQUFFLENBQUE7UUFDdkIsNkVBQTZFO1FBQzdFLGVBQWUsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUE7UUFDbEQsT0FBTyxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQTtJQUM3QyxDQUFDLENBQUMsQ0FBQTtJQUVGLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDWCxLQUFLLEVBQUcsQ0FBQTtRQUNSLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxlQUFlLENBQUE7SUFDdEQsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxFQUFFO1FBQ3pDLFFBQVEsQ0FBQTtRQUNSLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxVQUFVO1lBQzNELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3BDLDhEQUE4RDtZQUM5RCxNQUFNLE9BQU8sR0FBVyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNyRSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsR0FBRyxLQUFLLEdBQUcsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDeEUsSUFBSSxHQUFHO29CQUFFLE1BQU0sR0FBRyxDQUFBO1lBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xELENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==