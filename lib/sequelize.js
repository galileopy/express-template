var Sequelize = require('sequelize');
var config = libRequire('config/db');

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = sequelize;
