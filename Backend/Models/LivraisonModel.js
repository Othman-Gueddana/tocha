const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class Livraisons extends Model {}
Livraisons.init({
 status: Sequelize.STRING,
 clientName: Sequelize.STRING,
 clientId: Sequelize.INTEGER,
 clientEmail: Sequelize.STRING,
 clientNumber: Sequelize.INTEGER,
 clientStreet: Sequelize.STRING,
 clientCity: Sequelize.STRING,
 clientZip: Sequelize.INTEGER,
 productId: Sequelize.INTEGER,
 productName: Sequelize.STRING,
 price: Sequelize.STRING,
 quantity: Sequelize.INTEGER,
}, { sequelize, modelName: 'livraisons' });

module.exports = Livraisons;