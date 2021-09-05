// packages
const mongoose = require('mongoose');
// funciones que crean elimian editan obitene informacion
/*Using schema de student*/
const schema = require('../schemas/student.schema');
const db = require('../db-connection/mongodb');
db();

schema.statics = {
  // data inf estudiante / callback
  create: function (data, cb) {
    // this esquema al que se hace referencia
    let doc = new this(data);
    // llama al cb del controlador
    doc.save(cb);
  },
  getAll: function (query, cb) {
    // trae una consulta asociada
    this.find(query, cb);
  },
  getByCode: function (query, cb) {
    this.find(query, cb);
  },
  update: function (query, data, cb) {
    // consulta asociada --> query u
    this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
  },

  delete: function (query, cb) {
    // eL ERROR QUE SE DEBE SOLUCIONAR ES CB candidata a solucion
    this.findOneAndDelete(query);
  },
};

const dto = mongoose.model('coll_student', schema);
module.exports = dto;
