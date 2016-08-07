"use strict";

module.exports = function(sequelize, DataTypes) {
    var Clasificacion = sequelize.define("Clasificacion", {
        nombre: DataTypes.STRING
    });
    return Clasificacion;
};
