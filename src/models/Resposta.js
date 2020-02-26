const sequelize = require('sequelize');
const Connection = require('../database/database')
const Pergunta = require('./Pergunta')

const Resposta = Connection.define('resposta' , {

    corpo: {
        type: sequelize.TEXT,
        allownull: false
    }
});

Pergunta.hasMany(Resposta); //1 pergunta tem mutos Respostas
Resposta.belongsTo(Pergunta); //1 resposta pertence a uma pergunta

Resposta.sync({force: false})

module.exports= Resposta