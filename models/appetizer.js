const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Appetizer = db.define('appetizer', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ingredients: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Appetizer;
