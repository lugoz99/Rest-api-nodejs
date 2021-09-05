/*Packages */
const mongoose = require('mongoose');
/*Mongoose contiene los esquemas internamente*/
// creacion del esquema
const periodSchema = new mongoose.Schema({
  // es como una clase de java
  year: {
    type: 'Number',
    required: true,
    min: 2020,
    max: 2030,
  },
  number: {
    type: 'Number',
    required: true,
    min: 1,
    max: 2,
  },
  current: {
    type: 'Boolean',
    required: true,
    default: true,
  },
});

module.exports = periodSchema;
