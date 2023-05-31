const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TitlesSchema = new Schema({
  data : {
    type : Object,
    required : true
  },
  created_at: {
    type : Date,
    required: true
  }
});

module.exports = User = mongoose.model("titles", TitlesSchema);
