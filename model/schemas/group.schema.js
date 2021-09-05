/*Packages */
const mongoose = require('mongoose');
/*Esquema de modulo */
const groupSchema = new mongoose.Schema({
  course_id: {
    // llave referenciada
    type: mongoose.Schema.Types.ObjectId,
    // coleccion del curso
    ref: 'coll_course',
    required: true,
  },
  period_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'coll_period',
    required: true,
  },
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'coll_teacher',
    required: true,
  },
  number: {
    // numero del grupo
    type: 'Number',
    required: true,
  },
});

module.exports = groupSchema;
