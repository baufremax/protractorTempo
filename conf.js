/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

exports.config = {
   framework: 'mocha',
   capabilities: {
      browserName: 'chrome',
      loggingPrefs: {
         driver: 'INFO',
         browser: 'INFO',
      },
   },

   suites: {
      smoke: 'build/smoke/*.js',
      regression: '',
      performance: '',
      test: 'build/smoke/login.spec.js',
      //TODO: function
   },

   // You could set no globals to true to avoid jQuery '$' and protractor '$'
   // collisions on the global namespace.
   noGlobals: false,

   params: {
      baseUrl: 'https://10.117.161.109',
   },

   baseUrl: 'https://10.117.163.92', // default value for baseUrl.

   onPrepare: function() {
      switch (browser.params.baseUrl) {
         case 'firsturl':
            browser.params.baseUrl = 'https://10.117.161.109' //replace firsturl with your actual url
            break
         case 'secondurl':
            browser.params.baseUrl = 'http://www.secondurl.com'
            break
         default:
            break
      }
   },

   directConnect: true,

   mochaOpts: {
      reporter: 'mochawesome-screenshots',
      reporterOptions: {
         reportDir: './REPORTS/screenshot',
         reportName: 'index',
         reportTitle: 'screenshot e2e report',
         reportPageTitle: 'screenshot-e2e',
         takePassedScreenshot: false,
         clearOldScreenshots: true,
         shortScrFileNames: false,
         jsonReport: false,
         multiReport: false,
      },
      timeout: 600000,
   },

   plugins: [],
}
