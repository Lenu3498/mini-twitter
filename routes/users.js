const express = require("express");
const router = express.Router();
const userSchema = require("../models/userModel");
const tweets = require("../models/tweetModel");

router.post("/", async (req, res) => {
  console.log(tweets);
  const user = new userSchema({
    name: {
      first: req.body.name.first,
      last: req.body.name.last,
    },
    userName: req.body.userName,
    email: req.body.email,
    avatarURL: req.body.avatarURL,
    tweets: tweets.tweet,
  });

  await user.save();
  res.send(user);
});

//get all users
router.get("/", (req, res) => {
  userSchema.find({}, (err, data) => res.send(data));
});

//get one user
router.get("/:id", async (req, res) => {
  try {
    const user = await userSchema.findOne({ _id: req.params.id });
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "This user doesn't exist!" });
  }
});

//get all tweets by one user
router.get("/:id/tweets", (req, res) => {
  const userTweets = tweets
    .find({ userID: req.params.id })
    .populate("tweets")
    .exec((err, data) => res.send(data));
});

module.exports = router;
