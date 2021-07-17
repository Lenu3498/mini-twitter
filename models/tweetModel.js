const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  tweet: String,
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // comments: [
  //   {
  //     text: String,
  //     userID: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "User",
  //     },
  //   },
  // ],
});

module.exports = mongoose.model("Tweet", tweetSchema);
