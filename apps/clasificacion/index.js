var express = require('express');
var path = require('path');
var app = module.exports = express();
var controller = require('./controller');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/clasificacion/:clasificacionid/edit/', controller.edit);
app.use('/clasificacion/:clasificacionid/del', controller.remove);
app.use('/clasificacion/add', controller.add);
app.use('/clasificacion/list', controller.list);
