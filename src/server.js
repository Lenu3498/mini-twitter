const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db");
const userRouter = require("../routes/users");
const tweetRouter = require("../routes/tweets");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.set("json spaces", 2);

app.use(express.json()); // to parse json data
//app.use(express.urlencoded()) // to parse .txt or .html data

app.use("/api/users", userRouter);
app.use("/api/tweets", tweetRouter);

app.listen(port, () => {
  console.log(`Mini-twitter app listening at http://localhost:${port}`);
});
