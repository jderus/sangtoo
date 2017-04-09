var gulp    = require('gulp');                              // gulp reference
var plugins = require('gulp-load-plugins')();               // plugins to pass around
var config  = require("./tools/gulp/config.js")();          // all of our configuration vars
var del     = require('del');                               // deleting files (no rim-raf)

var sassdoc = require('sassdoc');                           // docsing for sass.

// Use a function to get tasks defined in separate files and modules
function getFileTask(task, param) {
    if (param == undefined) {  return require(config.paths.gulptasks + task)(gulp, config, plugins); }
    else { return require(config.paths.gulptasks + task)(gulp, config, plugins, param); }
}

// Gulp FileTasks ----------------------------------------------------------------------------------------------
// Hello World Example as a Sanity Check
gulp.task('hello'   , getFileTask('hello'))

// Gulp FileTasks ----------------------------------------------------------------------------------------------
gulp.task('sassdoc' , getFileTask('sassdoc', sassdoc));
gulp.task('typedoc' , getFileTask('typedoc'));

// Gulp Dependent FileTasks ------------------------------------------------------------------------------------
// slight bug here with timing of sassdoc. ---------------------------------------------------------------------
gulp.task('sassdocreport', ['sassdoc'], getFileTask('open', config.paths.sassdocDest + "index.html" ));
gulp.task('typedocreport', ['typedoc'], getFileTask('open', config.paths.typedocDest + "index.html" ));
gulp.task('docs',['sassdoc','typedoc']);


