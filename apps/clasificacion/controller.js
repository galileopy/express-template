'use strict';

var R = require('ramda');
var Task = require('data.task');

var models = libRequire('models');
var dummy = (req, res, next) => next();

var fromPromise = function (promFunc) {
    var promise = promFunc();
    return new Task(function (reject, resolve) {
        promise.then(resolve);
        promise.catch(reject)
    });
}

function getClasificaciones() {
    return fromPromise(models.findAll);
}
module.exports = {
    add,
    edit: dummy,
    list: dummy,
    remove: dummy,
    param: dummy
}

function add(req, res, next) {
    var requisitos = getClasificaciones();
    requisitos.fork(
        function susccess(data) { console.log(data); res.render('form');},
        function error(err){console.log(err); next(err)}
    )
}

function param(req, res, next) {

}

function edit(req, res, next) {

}

function list(req, res, next) {

}

function remove(req, res, next) {

}
