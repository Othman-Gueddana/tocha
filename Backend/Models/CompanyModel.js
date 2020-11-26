const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class Companys extends Model {}
Companys.init({
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  street : Sequelize.STRING,
  city : Sequelize.STRING,
  zipCode : Sequelize.STRING,
  description : Sequelize.STRING,
  phoneNumber1: Sequelize.STRING,
  phoneNumber2: Sequelize.STRING,
  numberPatent: Sequelize.STRING,
  logo: Sequelize.STRING
}, { sequelize, modelName: 'companys' });

module.exports = Companys;