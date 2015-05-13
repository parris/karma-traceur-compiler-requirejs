karma-traceur-compiler-requirejs
====

Experimental (not for general use).

Quick karma-framework to place traceur-compiler as the first dependency in karma (before requirejs). I will rename if more people find it useful.

## Installation

Install `karma-traceur-compiler` as a devDependency for your project:

```bash
npm install karma --save-dev
npm install karma-traceur-compiler --save-dev
```

## Usage

In karma.conf.js:

Make sure to place `traceur-compiler-requirejs` **last** in the frameworks array.

```
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs', 'traceur-compiler-requirejs'],
```
