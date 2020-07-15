var mongoose = require("mongoose");

mongoose.connect(
 //connect to mongo
);

var Schema = mongoose.Schema;

var StickySchema = new Schema({
  studentId: { type: String, required: true, unique: true },
  title: { type: String },
  content: { type: String }
});

module.exports = mongoose.model("Sticky", StickySchema);
