'use strict';

const generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const yosay = require('yosay');
const chalk = require('chalk');

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
      this.appName = props.name;
      this.appPackage = props.package;
      this.androidTargetSdkVersion = props.targetSdk;
      this.androidMinSdkVersion = props.minSdk;
    });
  },

  writing: function () {
    this.copy('gitignore', '.gitignore');
    this.copy('build.gradle', 'build.gradle');
    this.copy('gradle.properties', 'gradle.properties');
    this.copy('gradlew', 'gradlew');
    this.copy('gradlew.bat', 'gradlew.bat');
    this.copy('settings.gradle', 'settings.gradle');
    this.template('README.md', 'README.md');
    this.directory('gradle', 'gradle');

    var packageDir = this.props.appPackage.replace(/\./g, '/');
    mkdirp('app');
    this.copy('app/gitignore', 'app/.gitignore');
    this.copy('app/proguard-rules.pro', 'app/proguard-rules.pro');
    this.template('app/build.gradle', 'app/build.gradle');

    mkdirp('app/src/androidTest/java/' + packageDir);
    this.template('app/src/androidTest/java/in/mvpstarter/sample', 'app/src/androidTest/java/' + packageDir, this, {});

    mkdirp('app/src/commonTest/java/' + packageDir);
    this.template('app/src/commonTest/java/in/mvpstarter/sample', 'app/src/commonTest/java/' + packageDir, this, {});

    mkdirp('app/src/debug');
    this.template('app/src/debug/AndroidManifest.xml', 'app/src/debug/AndroidManifest.xml');
    this.template('app/src/debug/res', 'app/src/debug/res', this, {});

    mkdirp('app/src/main/assets');
    mkdirp('app/src/main/java/' + packageDir);
    this.directory('app/src/main/assets', 'app/src/main/assets');
    this.template('app/src/main/AndroidManifest.xml', 'app/src/main/AndroidManifest.xml');
    this.template('app/src/main/java/in/mvpstarter/sample', 'app/src/main/java/' + packageDir, this, {});
    this.template('app/src/main/res', 'app/src/main/res', this, {});

    mkdirp('app/src/release');
    this.template('app/src/release/res', 'app/src/release/res', this, {});

    mkdirp('app/src/test/java/' + packageDir);
    this.template('app/src/test/java/in/mvpstarter/sample', 'app/src/test/java/' + packageDir, this, {});
  }
});

