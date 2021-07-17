const express = require("express");
const router = express.Router();
const tweetSchema = require("../models/tweetModel");
const userSchema = require("../models/userModel");

router.post("/", async (req, res) => {
  const user = await userSchema.findOne({ _id: req.body.userID });
  console.log(user);
  const tweet = new tweetSchema({
    tweet: req.body.tweet,
    userID: user._id,
  });

  // This is the schema from tweetModel:
  // {
  //   userName: String,
  //   tweet: String,
  //   postedBy: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  //   comments: [
  //     {
  //       text: String,
  //       postedBy: {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: "User",
  //       },
  //     },
  //   ],
  // }
  await tweet.save();
  res.send(tweet);
});

router.get("/", (req, res) => {
  tweetSchema.find({}, (err, data) => res.send(data));
});

router.get("/:id", async (req, res) => {
  try {
    const tweet = await tweetSchema.findOne({ _id: req.params.id });
    res.send(tweet);
  } catch {
    res.status(404);
    res.send({ error: "This tweet doesn't exist!" });
  }
});

module.exports = router;
