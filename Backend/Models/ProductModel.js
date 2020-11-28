const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class Products extends Model {}
Products.init({
 name:Sequelize.STRING,
 oldPrice:Sequelize.STRING,
 newPrice:Sequelize.STRING,
 description:Sequelize.STRING,
 category:Sequelize.STRING,
 image:Sequelize.STRING,
 ownerId:Sequelize.INTEGER,
 ownerType:Sequelize.STRING,
 expiredDate:Sequelize.STRING,
 creationDate:Sequelize.STRING,
 quantity:Sequelize.INTEGER,
 device:Sequelize.STRING,
 humanKind:Sequelize.STRING,
 type:Sequelize.STRING,
}, { sequelize, modelName: 'products' , timestamp : false  });

module.exports = Products;