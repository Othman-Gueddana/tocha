const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class Feedbacks extends Model {}
Feedbacks.init({
 text: Sequelize.STRING,
 clientName: Sequelize.STRING,
 clientId: Sequelize.INTEGER,
}, { sequelize, modelName: 'feedbacks' });

module.exports = Feedbacks;