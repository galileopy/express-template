var express = require('express');
var path = require('path');

var app = module.exports = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function (req, res, next) {
    res.send({
        hola: 'exito'
    })
})
