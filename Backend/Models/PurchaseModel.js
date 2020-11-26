const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class Purchases extends Model {}
Purchases.init({
 productId: Sequelize.INTEGER,
 clientId: Sequelize.INTEGER,
}, { sequelize, modelName: 'purchases' });

module.exports = Purchases ;