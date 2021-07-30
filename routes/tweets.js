const express = require("express");
const router = express.Router();
const tweetSchema = require("../models/tweetModel");
const userSchema = require("../models/userModel");

//create new post
router.post("/", async (req, res) => {
  const user = await userSchema.findOne({ _id: req.body.userID }); //where can we provide the _id?
  console.log(user);
  const tweet = new tweetSchema({
    tweet: req.body.tweet,
    userID: user._id,
  });
  await tweet.save();
  res.send(tweet);
});

//get all tweets by all users
router.get("/", (req, res) => {
  tweetSchema.find({}, (err, data) => res.send(data));
});

// router.get("/:id", async (req, res) => {
//   try {
//     const tweet = await tweetSchema.findOne({ _id: req.params.id });
//     res.send(tweet);
//   } catch {
//     res.status(404);
//     res.send({ error: "This tweet doesn't exist!" });
//   }
// });

//get one tweet by tweet._id
router.get("/:id", (req, res) => {
  const result = tweetSchema
    .findOne({ _id: req.params.id })
    .populate("userID")
    .exec((err, tweet) => res.send(tweet));
});

module.exports = router;
