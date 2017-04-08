// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular/cli'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular/cli/plugins/karma'),
            require('karma-htmlfile-reporter'),
            require('karma-junit-reporter')
        ],
        client:{
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [
            { pattern: './src/test.ts', watched: false }
        ],
        preprocessors: {
            './src/test.ts': ['@angular/cli']
        },
        mime: {
            'text/x-typescript': ['ts','tsx']
        },
        coverageIstanbulReporter: {
            reports: [ 'html', 'cobertura', 'lcovonly' ],
            fixWebpackSourcePaths: true,
            dir: './reports/coverage'
        },
        angularCli: {
            environment: 'dev'
        },

        reporters: config.angularCli && config.angularCli.codeCoverage
            ? ['progress', 'junit', 'html', 'coverage-istanbul']
            : ['progress', 'junit', 'html', 'kjhtml'],

        // Optional Configuration for HTML Reporter
        htmlReporter: {
            outputFile: 'reports/tests/units.html',

            pageTitle: 'Unit Tests',
            subPageTitle: 'Test All The Things'
        },
        // the default configuration
        junitReporter: {
            outputDir: 'reports/junit',
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, // add browser name to report and classes names
            //nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            //classNameFormatter: undefined // function (browser, result) to customize the classname attribute in xml testcase element
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
