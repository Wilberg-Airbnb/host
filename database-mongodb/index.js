const mongoose = require('mongoose');

module.exports.mongoose = mongoose;

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/airbrb-host', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const hostSchema = mongoose.Schema({
  hostId: {type: Number, unique: true},
  listingId: [{type: Number}],
  fullName: String,
  joined: String,
  photoUrl: String,
  superhost: String,
  verification: String,
  description: String,
  duringYourStay: String,
  languages: [{type: String}],
  responseRate: Number,
  responseTime: String
});

const Host = mongoose.model('Host', hostSchema);

module.exports.Host = Host;
