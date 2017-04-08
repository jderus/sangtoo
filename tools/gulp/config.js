module.exports = function(){
    // this object has all our configuration settings
    var config = {};

    config.paths = {
        webroot: "./dist/",
        srcroot: "./src/"
    };

    config.paths.gulptasks      = "./tools/gulp/";
    config.paths.sassdocDest    = "./docs/developer/sass/";
    config.paths.typedocDest    = "./docs/developer/ts/";

    return config;
};
