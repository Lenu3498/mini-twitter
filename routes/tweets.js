const express = require("express");
const router = express.Router();
const tweetSchema = require("../models/tweetModel");

router.post("/", async (req, res) => {
  const user = new tweetSchema({
    userName: req.body.userName,
    tweet: req.body.tweet,
  });
  await tweet.save();
  res.send(tweet);
});

router.get("/", (req, res) => {
  tweetSchema.find({}, (err, data) => res.send(data));
});

router.get("/:id", async (req, res) => {
  try {
    const user = await tweetSchema.findOne({ id: req.params.id });
    res.send(tweet);
  } catch {
    res.status(404);
    res.send({ error: "This tweet doesn't exist!" });
  }
});

module.exports = router;
