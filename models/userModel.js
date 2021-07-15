const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    //_id: ObjectId,
    name: {
      first: String,
      last: String,
    },
    userName: String,
    email: String,
    avatarURL: String,
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", userSchema);
