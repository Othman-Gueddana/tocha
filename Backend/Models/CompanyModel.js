const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class Companys extends Model {}
Companys.init({
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  address : Sequelize.STRING,
  description : Sequelize.STRING,
  phoneNumber1: Sequelize.INTEGER,
  phoneNumber2: Sequelize.INTEGER,
  numberPatent: Sequelize.INTEGER,
  logo: Sequelize.STRING
}, { sequelize, modelName: 'companys' });

module.exports = Companys;