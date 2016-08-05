# generator-android-mvp-starter 
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status](https://coveralls.io/repos/github/androidstarter/generator-android-mvp-starter/badge.svg?branch=master)](https://coveralls.io/github/androidstarter/generator-android-mvp-starter?branch=master)
> An MVP Boilerplate to save me having to create the same project over from scratch every time! :)

## How it works?
It provides a generator to create and maintain a android application based on the latests frameworks and patterns used by the community.
Stack:
- [RxJava](https://github.com/ReactiveX/RxJava) and [RxAndroid](https://github.com/ReactiveX/RxAndroid)
- [Retrofit](http://square.github.io/retrofit/) / [OkHttp](http://square.github.io/okhttp/)
- [Gson](https://github.com/google/gson)
- [Dagger 2](http://google.github.io/dagger/)
- [Butterknife](https://github.com/JakeWharton/butterknife)
- [Google Play Services](https://developers.google.com/android/guides/overview)
- [Timber](https://github.com/JakeWharton/timber)
- [Glide 3](https://github.com/bumptech/glide)
- [Stetho](http://facebook.github.io/stetho/)
- [Espresso](https://google.github.io/android-testing-support-library/) for UI tests
- [Robolectric](http://robolectric.org/) for framework specific unit tests
- [Mockito](http://mockito.org/)
- [Checkstyle](http://checkstyle.sourceforge.net/), [PMD](https://pmd.github.io/) and [Findbugs](http://findbugs.sourceforge.net/) for code analysis

## Installation

First, install [Yeoman](http://yeoman.io) and generator-android-mvp-starter using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-android-mvp-starter
```

Then generate your new project:

```bash
mkdir NewApp
cd NewApp
yo android-mvp-starter
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Ravindra Kumar](https://github.com/ravidsrk/)

[npm-image]: https://badge.fury.io/js/generator-android-mvp-starter.svg
[npm-url]: https://npmjs.org/package/generator-android-mvp-starter
[travis-image]: https://travis-ci.org/ravidsrk/generator-android-mvp-starter.svg?branch=master
[travis-url]: https://travis-ci.org/ravidsrk/generator-android-mvp-starter
[daviddm-image]: https://david-dm.org/ravidsrk/generator-android-mvp-starter.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ravidsrk/generator-android-mvp-starter
[coveralls-image]: https://coveralls.io/repos/github/ravidsrk/generator-android-mvp-starter/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/ravidsrk/generator-android-mvp-starter?branch=master
