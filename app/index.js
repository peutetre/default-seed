'use strict';
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator');

var DefaultSeedGenerator = module.exports = function DefaultSeedGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({
            skipInstall: true,
            skipMessage: true
        });
    });

    // add all user settings from generator-mobile-app
    for (var setting in options.userSettings) {
        this[setting] = options.userSettings[setting];
    }

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DefaultSeedGenerator, yeoman.generators.Base);

DefaultSeedGenerator.prototype.app = function app() {
    this.mkdir('www/app');
    this.mkdir('www/style');
    this.template('_index.html', 'www/index.html');
    this.template('_main.js', 'www/app/main.js');
    this.copy('main.css', 'www/style/main.css');
};
