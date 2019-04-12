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

   //TODO: remove this, should pass by command.
   baseUrl: 'https://10.117.161.109',
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