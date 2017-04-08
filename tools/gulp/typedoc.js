module.exports = function (gulp, config, plugins) {
    return function () {
        console.log(plugins.util.colors.blue("// Gulp: Typedoc  ------------------------------------------------------------------------------------------>"));
        console.log(plugins.util.colors.blue("// Documents ts to" + config.paths.typedocDest));

        gulp.src(["src/**/*.ts", "!src/**/*.spec.ts"])
        .pipe(plugins.typedoc({
            module: "commonjs",
            target: "es5",
            out: config.paths.typedocDest,
            name: "My project title",
            mode: "modules",
            theme: "default",
            ignoreCompilerErrors: "true",
            experimentalDecorators: "true",
            emitDecoratorMetadata: "true",
            moduleResolution: "node",
            preserveConstEnums: "true",
            stripInternal: "true",
            suppressExcessPropertyErrors: "true",
            suppressImplicitAnyIndexErrors: "true"
        }))
    ;
    };
};
