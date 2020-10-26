const express = require("express");

const app = express();
const port = 4000;

const users = [
  { id: 1, firstName: "Wouter" },
  { id: 2, firstName: "Lisa" },
  { id: 3, firstName: "Eszter" },
];

app.get("/users", (req, res) => {
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

app.listen(4000, () => {
  console.log("listening on port:", 4000);
});
