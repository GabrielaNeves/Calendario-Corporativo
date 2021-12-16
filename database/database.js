const Sequelize = require('sequelize');

const connection = new Sequelize('calendariocorporativo', 'root', '123', { // (nome do banco, usuário, senha)
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;