## Set Up
use `npm install` to install all dependencies.

The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
`npm run webdriver-update`
or
`webdriver-manager update`

Now start up a server with:
`webdriver-manager start`
This will start up a Selenium Server and will output a bunch of info logs.

## Test
Run the tests with
`npm run test` which will automatically call `npm run tsc && npm run webdriver-update`

You can run tests quickly with
`protractor conf.js`

Before running, you might need to compile the typescript files into js files through
`npm run tsc`

To check the screenshot report, open *./REPORTS/e2e/index.html* in browser.

If there are npm or package errors, try delete *node_modules* and *package-lock.json* and reinstall the packages through `npm install`.
## Debug
### Capture Console.log
see usage in file *./launch/launch.spec.ts*
```javascript
browser.manage().logs().get('browser').then(function(browserLog) {
    // browserLogs is an array of objects with level and message fields
    browserLog.forEach(function(log){
        if (log.level.value > 900) { // it's an error log
        console.log('Browser console error!');
        console.log(log.message);
        }
    })
})
```
To capture different levels of logs, change the capabilities of browser in *conf.js*: capabilities: { loggingPrefs: {'browser': 'INFO'} } to *INFO*, *DEBUG*, *WARNING*, *SEVERE* or simply *ALL*.
### Protractor Debugger
see [Debugging Protractor Tests](https://github.com/angular/protractor/blob/master/docs/debugging.md)
<!-- -   Add “debugger” keyword to the test case that we want to debug.

    ```javascript
    it('should greet the named user', async function() {
        debugger;
        await browser.get('http://www.angularjs.org');

        await element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));

        expect(await greeting.getText()).toEqual('Hello Julie!');
    });
    ```

-   Start test process with a new argument "inspect-brk", which will enable
    inspector agent, listen on default address and port (127.0.0.1:9229) and
    break before user code starts

    Use

    ```
    npm run debug
    ```

-   Open chrome inspector: Enter "chrome://inspect/#devices" in browser, find
    the current running target and click “Inspect”

    ![screenshot](/docs/inspector.png)

-   The test will start and pause at the beginning.

    ![screenshot](/docs/firstBreak.png)

-   We can click F8 (resume script execution), and the test will pause at the
    first line that has our “debugger” keyword. We can then add breakpoints and
    debug tests.

    ![screenshot](/docs/breakpoint.png)

-   We can also open chrome development tool on the webdriver controlled browser
    to check the html elements and do some queries while the test execution is
    pausing.

    ![screenshot](/docs/chromeDevTool.png)

 -->


## Resources
* [Protractor Tutorial](https://www.protractortest.org/#/tutorial)
* [Screenshot Plugin](https://github.com/azachar/protractor-screenshoter-plugin)
* [Protractor Style Guide](https://www.protractortest.org/#/style-guide)
* [Build your first tests with Protractor](https://blog.cloudboost.io/building-your-first-tests-for-angular5-with-protractor-a48dfc225a75)
* [ExpectedConditions](http://www.protractortest.org/#/api?view=ProtractorExpectedConditions)
## Other Issues
* [Protractor-Console](https://github.com/Updater/protractor-console) might be useful, but still don't know how to use.
* [protractor-console-plugin](https://github.com/angular/protractor-console-plugin) is a *Chrome Only* console plugin.