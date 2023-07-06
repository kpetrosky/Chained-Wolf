const mongoose = require('mongoose');
const Necklaces = require('../models/');

mongoose.connect('your_database_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

const charactersData = [
  {
    name: 'Barbarian',
    class: 'Barbarian',
    special: 10,
    maxHp: 20,
    currentHp: 20,
    attack: 30,
    defense: 15,
    speed: [3, 5],
    dodge: 5,
  },
];

async function seedCharacters() {
  try {
    await Character.deleteMany({});
    await Character.insertMany(charactersData);
    console.log('Characters seeded successfully');
  } catch (err) {
    console.error('Error seeding characters:', err);
  } finally {
    mongoose.disconnect();
  }
}

seedCharacters();
