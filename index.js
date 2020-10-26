const express = require("express");
const User = require("./models").user;
// const user = require("./models/user"); // NO! will not be connected with the database

const app = express();
const port = 4000;

const users = [
  { id: 1, firstName: "Wouter" },
  { id: 2, firstName: "Lisa" },
  { id: 3, firstName: "Eszter" },
];

app.get("/users", async (req, res) => {
  const users = await User.findAll(); // all users
  res.json(users);
});

app.get("/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find((user) => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.send("User not found, sorry!");
  }
});

app.listen(port, () => {
  console.log("listening on port:", 4000);
});
