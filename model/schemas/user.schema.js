/*Packages */
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');
/*Esquema de modulo user */
const userSchema = new mongoose.Schema({
  name: {
    type: 'String',
    required: true,
  },
  lastname: {
    type: 'String',
    required: true,
  },
  username: {
    type: 'String',
    required: true,
    unique: true,
  },
  password: {
    type: 'String',
    required: true,
    unique: true,
  },
  role: {
    // 1 0 2
    type: 'Number',
    required: true,
  },
});
userSchema.plugin(validator); // propiedades unicas
module.exports = userSchema;
