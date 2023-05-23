const { Dessert } = require('../models');

const dessertData = [
  {
    title: 'Dessert 1',
    description: 'Description for dessert 1',
    ingredients: 'Ingredients for dessert 1',
    instructions: 'Instructions for dessert 1',
  },
  // Add more desserts here...
];

const seedDesserts = async () => {
  try {
    await Dessert.sync({ force: true });
    await Dessert.bulkCreate(dessertData);
    console.log('Desserts seeded successfully.');
  } catch (error) {
    console.error('Error seeding desserts:', error);
  }
};

module.exports = seedDesserts;
