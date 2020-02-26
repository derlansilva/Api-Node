const sequelize = require('sequelize');

const Connection = new sequelize('api' , 'root' ,'1234', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = Connection;