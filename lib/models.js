"use strict";

var R = require('ramda');

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var sequelize = libRequire('sequelize');
var imp = sequelize.import.bind(sequelize);

var apps = libRequire('config/apps');
var util = libRequire('util');

var resolve     = util.resolve3('apps', R.__, 'models');
var paths       = R.compose(R.map(util.dirFiles), util.validPaths, R.map(resolve));
var nameModel   = R.compose((x) => R.objOf(x.name, x),  imp);

var modelLists  = R.compose(R.map(nameModel), R.flatten, paths);
var models      = R.compose(R.reduce(R.merge, {}), modelLists);
var db          = models(apps);

/* for each model call associate on the model with the db as argument*/
Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});


sequelize.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
}).catch(function (err) {
    console.log('Unable to connect to the database:', err);
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
