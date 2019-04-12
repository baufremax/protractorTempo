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

   baseUrl: 'https://10.117.161.109',

   params: {
      baseUrl: '',
      url: ''
   },

   onPrepare: function(){
      switch(browser.params.baseUrl) {
         case 'firsturl':
            browser.params.url = 'http://www.firsturl.com'; //replace firsturl with your actual url
            break;
         case 'secondurl':
            browser.params.url = 'http://www.secondurl.com';
            break;
         // no default. if params.baseUrl is '', we should use baseUrl rather than params.baseUrl
      }
      if (browser.params.baseUrl) {
         // if params.baseUrl is passed through command, then replace baseUrl with params.url.
         browser.baseUrl = browser.params.url
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