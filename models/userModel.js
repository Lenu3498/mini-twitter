const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    //_id: ObjectId,
    name: {
      first: String,
      last: String,
    },
    userName: String,
    email: String,
    avatarURL: String,
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
