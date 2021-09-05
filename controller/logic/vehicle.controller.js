const vehicleDto = require('../../model/dto/vehicle.dto');
exports.createVehicle = (req, res, next) => {
  let vh = {
    mark: req.body.mark,
    model: req.body.model,
    colour: req.body.colour,
    fuel: req.body.fuel,
    price: req.body.price,
  };
  vehicleDto.create(vh, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(201).json({
      info: data,
    });
  });
};

exports.updateVehicle = (req, res, next) => {
  let vh = {
    mark: req.body.mark,
    model: req.body.model,
    colour: req.body.colour,
    fuel: req.body.fuel,
    price: req.body.price,
  };
  vehicleDto.update({ _id: req.body.id }, vh, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(201).json({
      info: data,
    });
  });
};

exports.getAll = (req, res, next) => {
  vehicleDto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      info: data,
    });
  });
};
exports.getByModel = (req, res, next) => {
  vehicleDto.getByModel({ model: req.params.model }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      info: data,
    });
  });
};

exports.deleteVehicle = () => {
  vehicleDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(204).json();
  });
};
