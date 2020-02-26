const sequelize = require('sequelize');
const connection = require('../database/database');
const Usuario = require('./Usuario');

const pergunta = connection.define('pergunta' , {
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },

    descricao:{
        type: sequelize.TEXT,
        allowNull: true
    },
});


Usuario.hasMany(pergunta);
pergunta.belongsTo(Usuario)

pergunta.sync({force: false}).then(()=>{});

module.exports = pergunta;