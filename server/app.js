const express = require("express");
const cors = require("cors");
const { login } = require("./authentication");
const { resumeUpdate } = require("./dbUpdate");
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));

//old user login
app.get("/api/login/:username/:password", async (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  const result = await login(username, password);
  res.send(result);
});

//profile picture upload
app.post("/api/resume", async (req, res) => {
  const username = req.body.username;
  const url = req.body.url;
  resumeUpdate(username, url);
});

app.listen();
