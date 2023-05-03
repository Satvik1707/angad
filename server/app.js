const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8000;
const { MONGOURI } = require("./keys");

//require("./models/user");
//const User = require("./models/user")

//link router in appjs
app.use(express.json());
app.use(require("./routes/auth"));

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("mongo db is connected");
});

mongoose.connection.on("error", (err) => {
  console.log("connected", err);
});

app.get("/", (req, res) => {
  res.send("Hello suvidhi");
});

app.get("/about", (req, res) => {
  console.log("about page");
  res.send("Hello suvidhi to the about page");
});

app.get("/contact", (req, res) => {
  res.cookie("test", "thapa");
  res.send("Hello suvidhi to the contact page");
});

app.get("/login", (req, res) => {
  res.send("Hello login page");
});

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
