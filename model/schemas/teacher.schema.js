/*Packages */
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');
/*Esquema de modulo */
const teacherSchema = new mongoose.Schema({
  document: {
    type: 'String',
    required: true,
    unique: true,
  },
  name: {
    type: 'String',
    required: true,
  },
  lastname: {
    type: 'String',
    required: true,
  },
  email: {
    type: 'String',
    required: true,
    unique: true,
  },
  phone: {
    type: 'String',
    required: true,
    unique: true,
  },
  office: {
    type: 'String',
    required: true,
  },
  department: {
    type: 'String',
    required: true,
  },
});
teacherSchema.plugin(validator); // propiedades unicas
module.exports = teacherSchema;
