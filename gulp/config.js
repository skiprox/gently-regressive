'use strict';

// PULL ALL PATHS FROM JSON FILE
const config = require('./paths.json');

// All other requires
const path = require('path');
const immu = require('immu');

// Command line arguments
const argv = require('yargs')
    .alias('p', 'production')
    .boolean('p')
    .default('p', false)
    .describe('p', 'Sets production flag.')
    .argv;

// Change the output directory if we're in production
config.dir.output = argv.production ? config.dir.output : config.dir.temp;

// Setup the server configuration
config.server = {
    name: 'https://browsersync.io/docs/api#api-get',
    options: {
        server: config.dir.temp,
        files: [path.join(config.dir.temp, '**/*')],
        port: 3000,
        watchOptions: {
            ignoreInitial: true
        }
    }
};

// Set up options for the rev task
config.tasks = {
    /**
     * NOTE: Rev options https://github.com/smysnk/gulp-rev-all#options
     */
    rev: {
        hashLength: 8,
        dontGlobal: [
            /\/apple-touch-icon.png$/,
            /\/favicon.png$/
        ],
        dontRenameFile: [
            /\/index.html$/
        ],
        dontSearchFile: [
            /\/.(jpe?g|png|gif|svg|eot|ttf|woff(2)?|mp4)$/
        ]
    }
};

// Export the entire config
module.exports = immu(Object.assign({}, config, argv));
