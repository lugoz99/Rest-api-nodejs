const mongoose = require('mongoose');
const schema = require('../schemas/vehicle.schema');
schema.statics = {
  create: function (data, cb) {
    let doc = new this(data);
    doc.save(cb);
  },
  getAll: function (query, cb) {
    this.find(query, cb);
  },
  getByModel: function (query, cb) {
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
const dto = mongoose.model('coll_vehicle', schema);
module.exports = dto;
