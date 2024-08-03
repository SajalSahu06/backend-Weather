// models/Weather.js
const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: String,
  temp: Number,
  des: String,
  imgURL: String,
  humid: Number
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
