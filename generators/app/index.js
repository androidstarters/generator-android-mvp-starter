'use strict';

const generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const path = require('path');
const yosay = require('yosay');
const chalk = require('chalk');

function templateDirectory(source, destination) {
  var root = this.isPathAbsolute(source) ? source : path.join(this.sourceRoot(), source);
  var files = this.expandFiles('**', {dot: true, cwd: root});

  for (var i = 0; i < files.length; i++) {
    var f = files[i];
    var src = path.join(root, f);
    if (path.basename(f).indexOf('_') === 0) {
      var destTemplate = path.join(destination, path.dirname(f), path.basename(f).replace(/^_/, ''));
      this.template(src, destTemplate);
    } else {
      var destCopy = path.join(destination, f);
      this.copy(src, destCopy);
    }
  }
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
      this.props.appPackage = props.package;
      this.templateDirectory = templateDirectory;
      this.appName = props.name;
      this.appPackage = props.package;
      this.androidTargetSdkVersion = props.targetSdk;
      this.androidMinSdkVersion = props.minSdk;
    });
  },

  writing: function () {
    this.copy('gitignore', '.gitignore');
    this.copy('_build.gradle', 'build.gradle');
    this.copy('gradle.properties', 'gradle.properties');
    this.copy('gradlew', 'gradlew');
    this.copy('gradlew.bat', 'gradlew.bat');
    this.copy('settings.gradle', 'settings.gradle');
    this.template('_README.md', 'README.md');
    this.directory('gradle', 'gradle');

    var packageDir = this.props.appPackage.replace(/\./g, '/');
    mkdirp('app');
    this.copy('app/gitignore', 'app/.gitignore');
    this.copy('app/proguard-rules.pro', 'app/proguard-rules.pro');
    this.template('app/_build.gradle', 'app/build.gradle');

    mkdirp('app/src/androidTest/java/' + packageDir);
    this.templateDirectory('app/src/androidTest/java', 'app/src/androidTest/java/' + packageDir);

    mkdirp('app/src/commonTest/java/' + packageDir);
    this.templateDirectory('app/src/commonTest/java', 'app/src/commonTest/java/' + packageDir);

    mkdirp('app/src/debug');
    this.template('app/src/debug/_AndroidManifest.xml', 'app/src/debug/AndroidManifest.xml');
    this.templateDirectory('app/src/debug/res', 'app/src/debug/res');

    mkdirp('app/src/main/assets');
    mkdirp('app/src/main/java/' + packageDir);
    this.directory('app/src/main/assets', 'app/src/main/assets');
    this.template('app/src/main/_AndroidManifest.xml', 'app/src/main/AndroidManifest.xml');
    this.templateDirectory('app/src/main/java', 'app/src/main/java/' + packageDir);
    this.templateDirectory('app/src/main/res', 'app/src/main/res');

    mkdirp('app/src/release');
    this.templateDirectory('app/src/release/res', 'app/src/release/res');

    mkdirp('app/src/test/java/' + packageDir);
    this.templateDirectory('app/src/test/java', 'app/src/test/java/' + packageDir);
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});

