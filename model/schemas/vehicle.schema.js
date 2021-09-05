const mongoose = require('mongoose');
const vehicleSchema = new mongoose.Schema({
  mark: {
    type: 'String',
    required: true,
  },
  model: {
    type: 'String',
    required: true,
  },

  colour: {
    type: 'String',
    required: true,
  },
  fuel: {
    type: 'String',
    required: true,
  },
  price: {
    type: 'Number',
    required: true,
  },
});

module.exports = vehicleSchema;
