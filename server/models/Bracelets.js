const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BraceletsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 1,
    max: 1000
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const bracelets = mongoose.model('Bracelets', BraceletsSchema);

module.exports = Bracelets;
