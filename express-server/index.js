process.env.UV_THREADPOOL_SIZE = 1; // 1 cluster child has 1 thread
const cluster = require("cluster");

if (cluster.isMaster) {
  //execute index.js again in child mode.
  //max children is the amount of max cores cpu you have.
  cluster.fork(); // 1 child
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  //child act like a server and do nothing else
  const express = require("express");

  const crypto = require("crypto");
  const app = express();
  //   function doWork(duration) {
  //     const start = Date.now();
  //     while (Date.now() - start < duration) {}
  //   }

  //if cluster is not enabled this would have taken more time as the / request will take 5s
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
}
