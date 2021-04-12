const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  url: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

let PostMessage = mongoose.model("postMessage", postSchema);

module.exports = PostMessage;
