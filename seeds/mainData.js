const { Main } = require('../models');

const mainData = [
  {
    title: 'Main 1',
    description: 'Description for main 1',
    ingredients: 'Ingredients for main 1',
    instructions: 'Instructions for main 1',
  },
  // Add more mains here...
];

const seedMains = async () => {
  try {
    await Main.sync({ force: true });
    await Main.bulkCreate(mainData);
    console.log('Mains seeded successfully.');
  } catch (error) {
    console.error('Error seeding mains:', error);
  }
};

module.exports = seedMains;
