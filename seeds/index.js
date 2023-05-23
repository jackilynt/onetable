// const sequelize = require('../config/connection');
// const seedGallery = require('./galleryData');
// const seedPaintings = require('./paintingData');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   await seedGallery();

//   await seedPaintings();

//   process.exit(0);
// };

// seedAll();

const sequelize = require('../config/connection');
const seedAppetizers = require('../seeds/apppetizerData');
const seedMainCourses = require('../seeds/mainData');
const seedDesserts = require('../seeds/dessertData');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });

    await seedAppetizers();
    await seedMainCourses();
    await seedDesserts();

    console.log('Seeding complete.');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedAll();

