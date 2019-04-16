/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

exports.config = {
   framework: 'mocha',
   capabilities: {
      browserName: 'chrome',
      loggingPrefs: {
         'driver': 'INFO',
         'browser': 'INFO'
      }
   },

   suites: {
      smoke: 'build/smoke/*.js',
      regression: '',
      performance: ''
      //TODO: function
   },

   // You could set no globals to true to avoid jQuery '$' and protractor '$'
   // collisions on the global namespace.
   noGlobals: false,

   params: {
      baseUrl: ''
   },

   onPrepare: function(){
      switch(browser.params.baseUrl) {
         case 'firsturl':
            browser.baseUrl = 'http://www.firsturl.com'  //replace firsturl with your actual url
            break
         case 'secondurl':
            browser.baseUrl = 'http://www.secondurl.com'
            break
         default:
            browser.baseUrl = 'https://10.117.161.109'
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
         multiReport: false
      },
      timeout: 600000
   },
   plugins: []

};