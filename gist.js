"use strict";
var R = require('ramda');

var fs        = require("fs");
var path      = require("path");

var apps = ['users', 'animals', 'taxonomy'];

var attempt     = (fn) =>  {var x; try { fn(); x = true } catch(e){ x = false }; return x};
var access      = R.partial(fs.accessSync);
var fsexists    = R.compose(attempt, access, R.of);
var validPaths  = R.filter(fsexists)
var resolve3    = R.curryN(3, path.resolve),

function dirFiles (dir) {
    return  R.map(R.curryN(2, path.resolve)(dir), fs.readdirSync(dir))
}

var resolve     = util.resolve3('apps', R.__, 'models');
var paths       = R.compose(R.map(util.dirFiles), validPaths, R.map(resolve));
var nameModel   = R.compose((x) => R.objOf(x.name, x),  imp);
