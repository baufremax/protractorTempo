/*********************************************************
 * Copyright (C) 2019 VMware, Inc. All rights reserved.
 *********************************************************/

exports.config = {
   framework: 'jasmine2',
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
      performance: '',
      //TODO: function
   },

   //TODO: remove this, should pass by command.
   baseUrl: 'https://10.117.161.109',
   directConnect: true,

   plugins: [
      {
         package: 'protractor-screenshoter-plugin',
         screenshotPath: './REPORTS/e2e',
         screenshotOnExpect: 'failure+success',
         screenshotOnSpec: 'none',
         withLogs: true,
         writeReportFreq: 'asap',
         imageToAscii: 'none',
         clearFoldersBeforeTest: true
      }
   ]
};