const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class ReceivedMessages extends Model {}
ReceivedMessages.init({
 text: Sequelize.STRING,
 count: Sequelize.INTEGER,
 senderId: Sequelize.INTEGER,
}, { sequelize, modelName: 'receivedMessages' });

module.exports = ReceivedMessages;