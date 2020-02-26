const sequelize = require('sequelize');
const connection = require('../database/database');

const Usuario = connection.define('usuarios' ,{
    name:{
        type: sequelize.STRING,
        allownull: false
    },
    user:{
        type: sequelize.STRING,
        allownull: false
    },
    email:{
        type: sequelize.TEXT,
        allownull: false
    },
    password: {
        type: sequelize.STRING,
        allownull:false
    }
});

Usuario.sync({force: false}).then(() =>{});

module.exports = Usuario;