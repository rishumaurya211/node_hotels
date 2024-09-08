const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,

  },
  tast: {
    type: String,
    enum: ['sweet', 'spicy', 'sour'],
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredinet: {
    type: String,
    deafult: [],
  },
  num_salse: {
    type: Number,
    default: 0,
  },

})

const MenuItem = mongoose.model('MenuSchema', menuItemSchema);
module.exports = MenuItem;