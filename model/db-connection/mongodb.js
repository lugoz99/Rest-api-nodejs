const mongoose = require('mongoose');
const config = require('config');
/*acad_rest_api_user*/
/*XE9GWdbe5Rvw5YZ*/
const mongodbInfo = config.get('db-connections.mongodb');
const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;

module.exports = () => {
  mongoose.connect(connStr);
  mongoose.connection.on('connected', () => {
    console.log('mongodb Server Connected');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('mongodb Server DisConnected');
  });
  mongoose.connection.on('error', () => {
    console.log('mongodb Server Connection error');
  });
  mongoose.connection.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('mongodb Server shutting down');
    });
  });
};
