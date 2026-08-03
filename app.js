const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");

// Middleware
app.use(cors());


app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Parse incoming JSON requests
app.use(express.json());

app.get("/users", controller.getUsers);

app.post("/users", controller.addUser);
app.put("/users", controller.updateUser);
app.delete("/users", controller.deleteUser);


module.exports = app;
