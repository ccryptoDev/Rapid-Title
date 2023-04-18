const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TitlesSchema = new Schema({
  image : {
    type : String,
    required : true
  },
  sn: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  floorPlan: {
    type: Number,
    required: false
  },
  duration: {
    type: Number,
    required: false
  },
  number: {
    type: String,
    required: false
  },
  holds: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: false
  },
  observer: {
    type: String,
    required: false
  },
  observer_name: {
    type: String,
    required: false
  },
});

module.exports = User = mongoose.model("titles", TitlesSchema);
