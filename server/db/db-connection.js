const Sequelize = require("sequelize");

const sequelize = new Sequelize("zakazivanje_sala1", "root", "", {
  host: "localhost",
  dialect: "mysql",
  authentication: {
    jwtAdminSecret: "adminSecret",
    jwtBasicSecret: "basicSecret",
  },
});

module.exports = sequelize;
