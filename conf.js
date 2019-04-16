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

      require('protractor-http-mock').config = {
         rootDirectory: __dirname, // default value: process.cwd()
         protractorConfig: 'conf.js' // default value: 'protractor-conf.js'
      }
   },

   directConnect: true,

   mocks: {
      default: [], // default mocks to load for every test
      dir: 'TestCases/mocks' // the name of the folder where your mocks will reside. default value: 'mocks'
   },

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