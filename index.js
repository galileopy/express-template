'use strict';
require('./lib/require');

var express = require('express');
var R = require('ramda');
var util =  libRequire('util');
var use =   libRequire('express/use');
var app =   libRequire('config/middlewares')(express());
var apps =  libRequire('config/apps');

var resolve     = util.resolve3('apps', R.__, 'index.js');
var validApps   = R.compose(util.validPaths, R.map(resolve));
var middlewares = R.compose(R.map(R.compose(use(app), appRequire)), validApps);

middlewares(apps);

var models = libRequire('models');

models.sequelize.sync().then(function () {
    app.listen(3000);
    app.on('error', ()=>(console.log('error'), err));
    app.on('listening', ()=>(console.log('listening on port 3000')));
});


module.exports = app;
