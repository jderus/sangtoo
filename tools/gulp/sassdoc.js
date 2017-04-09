module.exports = function (gulp, config, plugins, sassdoc) {
    return function () {
        console.log(plugins.util.colors.blue("// Gulp: Sassdoc  ------------------------------------------------------------------------------------------>"));
        console.log(plugins.util.colors.blue("// Documents Sass to" + config.paths.sassdocDest));

        var sassdocOptions = {
            dest: config.paths.sassdocDest
            // theme: 'neat'
        };

        var stream = sassdoc(sassdocOptions);

        gulp.src(config.paths.srcroot + "/**/*.scss")
            .pipe(stream)
            .on('end', function(){
                plugins.util.log("END of sassdoc parsing phase")
            })
            .resume();

        return stream.promise.then(function() {
            plugins.util.log('END of sassdoc processing phase');
        })
    };
};
