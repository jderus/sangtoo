var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
//var config = require("./tools/gulptasks/config.js")();     // all of our configuration vars

var del = require('del');

var Server = require('karma').Server;

gulp.task("clean", function (cb) {
    del(["./dist/**"])
    return del(["./src/**/*.js*"]);
});

// Testing ----------------------------------------------------------------------------------------------------
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true //set to false to debug tests
    }, function (exitCode) {
        done();
    }).start();
    
});