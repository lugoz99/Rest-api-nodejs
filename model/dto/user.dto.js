const mongoose = require('mongoose');
// funciones que crean elimian editan obitene informacion
/*Using schema*/
const schema = require('../schemas/user.schema');
schema.statics = {
  // inf estudiante / callback
  create: function (data, cb) {
    let doc = new this(data);
    doc.save(cb);
  },
  getAll: function (query, cb) {
    this.find(query, cb);
  },
  getByDocument: function (query, cb) {
    this.find(query, cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  },
  update: function (query, data, cb) {
    this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
  },
  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

const dto = mongoose.model('coll_user', schema);
// para que el modelo de la base de datos quede igual
module.exports = dto;
