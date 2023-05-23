const { Appetizer } = require('../models');

const appetizerData = [
  {
    title: 'Appetizer 1',
    description: 'Description for appetizer 1',
    ingredients: 'Ingredients for appetizer 1',
    instructions: 'Instructions for appetizer 1',
  },
  // Add more appetizers here...
];

const seedAppetizers = async () => {
  try {
    await Appetizer.sync({ force: true });
    await Appetizer.bulkCreate(appetizerData);
    console.log('Appetizers seeded successfully.');
  } catch (error) {
    console.error('Error seeding appetizers:', error);
  }
};

module.exports = seedAppetizers;
