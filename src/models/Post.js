const sequelize = require('sequelize')
const connection = require('../database/database')
const Usuario = require('./Usuario')

const Post = connection.define('posts' , {
    title: {
        type: sequelize.STRING,
        allownull: false
    },

    image:{
        type: sequelize.STRING,
        allownull: false
    },

});

Usuario.hasMany(Post)
Post.belongsTo(Usuario)

Post.sync({force: true}).then(()=>{});
module.exports =Post;