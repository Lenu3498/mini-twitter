const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = Schema(
  {
    tweet: String,
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
  // comments: [
  //   {
  //     text: String,
  //     userID: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "User",
  //     },
  //   },
  // ],
);

module.exports = mongoose.model("Tweet", tweetSchema);
