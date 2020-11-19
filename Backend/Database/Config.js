const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();


const sequelize = new Sequelize( process.env.MYSQL_ADDON_DB , process.env.MYSQL_ADDON_USER , process.env.MYSQL_ADDON_PASSWORD, {
  host:process.env.MYSQL_ADDON_HOST,
  dialect: "mysql",
  port: "3306",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
sequelize.sync();

module.exports = sequelize;