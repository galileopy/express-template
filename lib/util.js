"use strict";

var R = require('ramda');
var fs        = require("fs");
var path      = require("path");

var attempt     = (fn) =>  {var x; try { fn(); x = true } catch(e){ x = false }; return x};
var access      = R.partial(fs.accessSync);
var fsexists    = R.compose(attempt, access, R.of);
function dirFiles (dir) {
    return  R.map(R.curryN(2, path.resolve)(dir), fs.readdirSync(dir))
}
module.exports = {
    attempt     : attempt,
    access      : access,
    fsexists    : fsexists,
    resolve2    : R.curryN(2, path.resolve),
    resolve3    : R.curryN(3, path.resolve),
    validPaths  : R.filter(fsexists),
    dirFiles    : dirFiles
}
