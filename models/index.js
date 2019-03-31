var Sequelize = require('sequelize');
var db = {};

var sequelize = new Sequelize('', '', '', { host: "", dialect: "mysql" });

// USER
var user = sequelize.import("user");
db["user"] = user;

// EVENT
var event = sequelize.import("event");
db["event"] = event;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;