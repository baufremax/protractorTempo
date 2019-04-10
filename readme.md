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