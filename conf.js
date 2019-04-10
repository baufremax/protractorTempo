// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, run `protractor conf.js`.
let HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter')
let reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
})
exports.config = {
  framework: 'jasmine2',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [
    './login/login.spec.js',
    './launch/launch.spec.js'
  ],
  // to get the baseUrl in protractor, use browser.baseUrl
  baseUrl: 'https://10.117.161.109',
  directConnect: true,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: false,

  plugins: [{
    package: 'protractor-screenshoter-plugin',
    screenshotPath: './REPORTS/e2e',
    screenshotOnExpect: 'failure+success',
    screenshotOnSpec: 'none',
    withLogs: true,
    writeReportFreq: 'asap',
    imageToAscii: 'none',
    clearFoldersBeforeTest: true
  }],

  onPrepare: function() {
    // returning the promise makes protractor wait for the reporter config before executing tests
    return global.browser.getProcessedConfig().then(function(config) {
        //it is ok to be empty
    });
  }
};
