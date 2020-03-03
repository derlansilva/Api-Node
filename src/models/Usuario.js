const sequelize = require('sequelize');
const connection = require('../database/database');
const bcript = require('bcrypt-nodejs')

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

/*Usuario.methods.gerarSenha = function(password){
    return bcript.hashSync(password , bcript.genSaltSync(9));
}

Usuario.methods.validarSenha = function(password){
    return bcript.compareSync( password , this.password);
}*/

Usuario.sync({force: false}).then(() =>{});

module.exports = Usuario;