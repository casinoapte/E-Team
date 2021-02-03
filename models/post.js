const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  game: { type: String, required: false }, // Change to True When you Figure it Out! //
  topics: { type: Array, required: false },
  likes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
