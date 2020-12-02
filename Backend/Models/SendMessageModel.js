const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class SendMessages extends Model {}
SendMessages.init({
 text: Sequelize.STRING,
 count: Sequelize.INTEGER,
 receiverId: Sequelize.INTEGER,
}, { sequelize, modelName: 'sendMessages' });

module.exports = SendMessages;