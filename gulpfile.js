var gulp = require('gulp');
var del = require('del');

gulp.task("clean", function (cb) {
    del(["./dist/**"])
    return del(["./src/**/*.js*"]);
});