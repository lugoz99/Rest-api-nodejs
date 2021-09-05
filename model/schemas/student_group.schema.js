/*Packages */
const mongoose = require('mongoose');
/*Esquema de modulo */
const studentGroupSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'coll_student',
    required: true,
  },
  group_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'coll_group',
    required: true,
  },
});

module.exports = studentGroupSchema;
