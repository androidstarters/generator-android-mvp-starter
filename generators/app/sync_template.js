'use strict';

const renamer = require('renamer');
const rimraf = require('rimraf');
const async = require('async');
const path = require('path');
const mv = require('mv');
const mkdirp = require('mkdirp');
const Git = require('nodegit');
const replace = require('replace');
const filter = require('filter-files');
const findInFiles = require('find-in-files');
const ncp = require('ncp').ncp;
const Finder = require('fs-finder');

// Clone a given repository into the `./tmp` folder.
rimraf.sync(__dirname + '/templates');
rimraf.sync(__dirname + '/tmp');
mkdirp('./templates');

Git.Clone('https://github.com/ravidsrk/android-mvp-starter', './tmp')
  .then(function (repo) {
    checkOutAndCopy(repo, 'master');
  })
  .catch(function (err) {
    console.log(err);
  });

function checkOutAndCopy(repo, name) {
  repo.getBranch('refs/remotes/origin/' + name)
    .then(function (reference) {
      console.log('Checking out branch ' + name);
      return repo.checkoutRef(reference);
    })
    .then(function () {
      replace({
        regex: 'in.mvpstarter.sample',
        replacement: '<%= appPackage %>',
        paths: ['./tmp/app'],
        recursive: true,
        silent: true
      });

      mv('./tmp/.gitignore', './tmp/gitignore', function (err) {
        console.log('Renamed root folder .gitignore');
      });

      mv('./tmp/app/.gitignore', './tmp/app/gitignore', function (err) {
        console.log('Renamed app folder .gitignore');
      });

      console.log('Copying files to ./templates');
      ncp.limit = 1600;
      ncp('./tmp', './templates', function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('Copying complete!');
        rimraf.sync(__dirname + '/tmp');
      });
    });
}
