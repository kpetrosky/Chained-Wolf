const mongoose = require('mongoose');

const databaseName = 'chainedwolfe'; // Replace 'chainedwolfe' with your desired database name without any spaces

mongoose.connect(`mongodb://localhost/${databaseName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
    // Your further code here
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

module.exports = mongoose.connection;
