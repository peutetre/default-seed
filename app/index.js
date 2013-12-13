'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var DefaultSeedGenerator = module.exports = function DefaultSeedGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({
        skipInstall: true,
        skipMessage: true
    });
  });

  this.appName = config.userSetting.appName;
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DefaultSeedGenerator, yeoman.generators.Base);

// add questions...
/*DefaultSeedGenerator.prototype.askUserFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    type:'input',
    name:'name',
    message:'Give me a name ?',
    default:null
  }];

  this.prompt(prompts, function (props) {
    this.name = props.name;
    cb();
  }.bind(this));

};*/

DefaultSeedGenerator.prototype.app = function app() {
  this.template('_index.html', 'www/index.html');
};
