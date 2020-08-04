const express = require("express");
const User = require("./models").user;
const TodoList = require("./models").todoList;
const app = express();
const PORT = 4000;

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.get("/todolists", async (req, res) => {
  try {
    const todolists = await TodoList.findAll();
    res.send(todolists);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
