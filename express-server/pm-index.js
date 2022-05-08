const express = require("express");

const crypto = require("crypto");
const app = express();

app.get("/fast", (req, res) => {
  res.send("cluster mode...");
});

app.get("/", (req, res) => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    res.send("hi there");
  });
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
