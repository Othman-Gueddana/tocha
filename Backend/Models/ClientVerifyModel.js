const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class VerifyClients extends Model {}
VerifyClients.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  street : Sequelize.STRING,
  city : Sequelize.STRING,
  zipCode : Sequelize.INTEGER,
  phoneNumber: Sequelize.INTEGER,
}, { sequelize, modelName: 'verifyClients' });

module.exports = VerifyClients;