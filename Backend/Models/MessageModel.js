const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class Messages extends Model {}
Messages.init({
 messageSent: Sequelize.STRING,
 messageReceived: Sequelize.STRING,
 senderId: Sequelize.INTEGER,
 receiverId: Sequelize.INTEGER,
}, { sequelize, modelName: 'messages' });

module.exports = Messages;