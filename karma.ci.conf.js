const baseConfig = require('./karma.conf.js');

// Einmaliger Lauf im headless Chrome für die CI
module.exports = function (config) {
    baseConfig(config);
    config.set({
        browsers: ['ChromeHeadlessCI'],
        customLaunchers: {
            ChromeHeadlessCI: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        reporters: ['progress'],
        autoWatch: false,
        singleRun: true
    });
};
