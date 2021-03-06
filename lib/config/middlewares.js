var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var R = require('ramda');

var use = libRequire('express/use');

var middlewares = [
    logger('dev'),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    cookieParser(),
    express.static(path.join(path.resolve('.'), 'public'))
];

module.exports = (app) => R.head(R.map(use(app), middlewares));
