"use strict";

module.exports = function(sequelize, DataTypes) {
    var Clasificacion = sequelize.define("clasificacion", {
        nombre: DataTypes.STRING
    },{
        classMethods :{
            associate: function (models) {
                Clasificacion.belongsToMany(Clasificacion, {as: 'requisito' , through: 'requerimientos'});
            }
        }
    });
    return Clasificacion;
};
