// const User = require('./User');
// const Gallery = require('./Gallery');
// const Painting = require('./Painting');

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

// module.exports = { User, Gallery, Painting };


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Appetizer = sequelize.define('Appetizer', {
  // Define the Appetizer model attributes/columns
  // Example:
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more attributes as needed
});

const MainCourse = sequelize.define('MainCourse', {
  // Define the MainCourse model attributes/columns
  // Example:
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more attributes as needed
});

const Dessert = sequelize.define('Dessert', {
  // Define the Dessert model attributes/columns
  // Example:
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Add more attributes as needed
});

Appetizer.hasMany(MainCourse, {
  foreignKey: 'appetizer_id',
});

MainCourse.belongsTo(Appetizer, {
  foreignKey: 'appetizer_id',
});

MainCourse.hasMany(Dessert, {
  foreignKey: 'main_course_id',
});

Dessert.belongsTo(MainCourse, {
  foreignKey: 'main_course_id',
});

module.exports = { Appetizer, MainCourse, Dessert };

