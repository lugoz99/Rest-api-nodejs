const mongoose = require('mongoose');
// funciones que crean elimian editan obitene informacion
/*Using schema*/
const schema = require('../schemas/group.schema');

schema.statics = {
  // inf estudiante / callback
  create: function (data, cb) {
    let doc = new this(data);
    doc.save(cb);
  },
  getAll: function (query, cb) {
    this.find(query, cb);
  },
  getByCode: function (query, cb) {
    this.find(query, cb);
  },
  update: function (query, data, cb) {
    // consulta asociada --> query
    this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
  },
  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

const dto = mongoose.model('coll_group', schema);
module.exports = dto;
