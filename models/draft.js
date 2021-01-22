const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const draftSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  game: { type: String, required: false, default: ""}, // Change to True When you Figure it Out! //
  topics: {type: Array, required: false},
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});

const Draft = mongoose.model("Draft", draftSchema);

module.exports = Draft;
