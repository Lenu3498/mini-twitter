const express = require("express");
const router = express.Router();
const userSchema = require("../models/userModel");

router.post("/", async (req, res) => {
  const user = new userSchema({
    name: {
      first: req.body.name.first,
      last: req.body.name.last,
    },
    userName: req.body.userName,
    email: req.body.email,
    avatarURL: req.body.avatarURL,
  });
  await user.save();
  res.send(user);
});

router.get("/", (req, res) => {
  userSchema.find({}, (err, data) => res.send(data));
});

router.get("/:id", async (req, res) => {
  try {
    const user = await userSchema.findOne({ id: req.params.id });
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "This user doesn't exist!" });
  }
});

module.exports = router;
