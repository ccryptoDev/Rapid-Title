const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TitlesSchema = new Schema({
  titleId: {
    type: Number,
    required: true
  },
  metadataURI: {
    type: String,
    required: true
  },
  data : {
    type : Object,
    required : true
  },
  created_at: {
    type : Date,
    required: true
  }
});

module.exports = Titles = mongoose.model("titles", TitlesSchema);
