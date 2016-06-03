'use strict';

var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    browsers: ['PhantomJS'],
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './test/*.ts',
      './test/**/*.ts'
    ],

    exclude: [
    ],

    preprocessors: {
        'test/*.ts': ['webpack'],
        'test/**/*.ts': ['webpack']
    },

    webpack: webpackConfig,

    reporters: ['progress'],

    plugins: [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-webpack'
    ],
  })
}
