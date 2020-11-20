const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class Clients extends Model {}
Clients.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  address : Sequelize.STRING,
  phoneNumber: Sequelize.INTEGER,
}, { sequelize, modelName: 'clients' });

module.exports = Clients;