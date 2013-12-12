'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var DefaultSeedGenerator = module.exports = function DefaultSeedGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({
        npm: true,
        bower: false
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DefaultSeedGenerator, yeoman.generators.Base);

DefaultSeedGenerator.prototype.askUserFor = function askFor() {
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

};

DefaultSeedGenerator.prototype.app = function app() {
  this.log.ok('YEP ' + this.name);
  this.copy('index.html', 'www/index.html');
};
