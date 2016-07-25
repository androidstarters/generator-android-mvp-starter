'use strict';

const generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const path = require('path');
const slug = require('slug');
const yosay = require('yosay');
const chalk = require('chalk');
function makePackageName(name) {
  name = slug(name).toLowerCase();

  return name.indexOf('website-') === 0 ? name : name + '-website';
}

module.exports = generator.Base.extend({
  initializing: function () {
    this.props = {};
  },
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the rad ' + chalk.red('Android MVP Starter') + ' generator!'
    ));
    const prompts = [{
      name: 'name',
      message: 'What are you calling your app?',
      store: true,
      default: this.appname // Default to current folder name
    },
      {
        name: 'package',
        message: 'What package will you be publishing the app under?',
        store: true
      },
      {
        name: 'targetSdk',
        message: 'What Android SDK will you be targeting?',
        store: true,
        default: 23  // Android 6.0 (Marshmallow)
      },
      {
        name: 'minSdk',
        message: 'What is the minimum Android SDK you wish to support?',
        store: true,
        default: 15  // Android 4.0 (Ice Cream Sandwich)
      }];

    return this.prompt(prompts).then(props => {
      // this.props = props;
      this.props.packageName = makePackageName(props.name);

      this.appName = props.name;
      this.appPackage = props.package;
      this.androidTargetSdkVersion = props.targetSdk;
      this.androidMinSdkVersion = props.minSdk;

    // done();
    });
  },
  default: function () {
    if (path.basename(this.destinationPath()) !== this.props.packageName) {
      mkdirp(this.props.packageName);
      this.destinationRoot(this.destinationPath(this.props.packageName));
    }

    this.composeWith('git-init', {}, {
      local: require.resolve('generator-git-init')
    });
  },
  writing: function () {
    this.fs.copy(
      this.templatePath('app/**'),
      this.destinationPath('app')
    );
    this.fs.copy(
      this.templatePath('config/**'),
      this.destinationPath('config')
    );
    this.fs.copy(
      this.templatePath('grandle/**'),
      this.destinationPath('grandle')
    );
    // this.fs.copyTpl(
    //   this.templatePath('_source/css/site.sass'),
    //   this.destinationPath('_source/css/site.sass'), {
    //     backgroundColor: this.props.backgroundColor,
    //     textColor: this.props.textColor,
    //     accentColor: this.props.accentColor
    //   }
    // );

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    // this.fs.copyTpl(
    //   this.templatePath('package.json'),
    //   this.destinationPath('package.json'), {
    //     packageName: this.props.packageName,
    //     authorName: this.props.authorName
    //   }
    // );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'), {
        packageName: this.props.packageName,
        appName: this.props.appName,
        appPackage: this.appPackage
      }
    );
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});
