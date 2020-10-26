"use strict";

// Imports all the models
// Initializes them with our database connection
// So we can use them

// Import depedencies
const fs = require("fs"); // file service
const path = require("path"); // location library
const Sequelize = require("sequelize");
const basename = path.basename(__filename); // what is our working directory

// is this development or production
const env = process.env.NODE_ENV || "development";
// what is the configurtion
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

// Make a connection with the database
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Read all the files from the /models directory
fs.readdirSync(__dirname)
  // filter them, keep them if the end in .js
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  // Initialize each model, with our database connection
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

// Associate all the models (more about that tomorrow)
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Export from the file
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
