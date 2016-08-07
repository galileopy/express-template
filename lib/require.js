'use strict';
var path = require('path');
var R = require('ramda');
// add to the global scope functions that allow the inclusion of apps and lib without needing
// to use relative paths
var resolve = R.curryN(2, path.resolve);
global.appRequire = R.compose(require, resolve('apps'));
global.libRequire = R.compose(require, resolve('lib'));
