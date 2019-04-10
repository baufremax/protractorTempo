## Set Up

`npm install -g protractor`

The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
`webdriver-manager update`

Now start up a server with:
`webdriver-manager start`
This will start up a Selenium Server and will output a bunch of info logs.

## Test
Open a new command line or terminal window and create a clean folder for testing.
Run the tests with
`protractor conf.js`

Before running, you might need to compile the typescript files into js files through
`npm run tsc`
