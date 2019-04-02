// Stryker.conf.js
module.exports = function (config) {
    config.set({
        // ...
        testRunner: 'karma',
        // ...
        karma: {
            projectType: 'custom', // or 'angular-cli'
            configFile: 'config-no-coverage.js', // default `undefined`
            config: { // default `undefined`
                browsers: ['Chrome'] // override config settings
            }
        }
    });
}