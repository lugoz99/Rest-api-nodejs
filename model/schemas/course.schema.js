/*Packages */
const mongoose = require('mongoose');
/*Esquema de modulo course */
const courseSchema = new mongoose.Schema({
  code: {
    type: 'String',
    required: true,
  },
  name: {
    type: 'String',
    required: true,
  },
});

module.exports = courseSchema;
