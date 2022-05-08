const cluster = require("cluster");

if (cluster.isMaster) {
  //execute index.js again in child mode.
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  //child act like a server and do nothing else
  const express = require("express");
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.use("/", (req, res) => {
    doWork(5000);
    res.send("hi there");
  });

  app.listen(3000, () => {
    console.log("listening on 3000");
  });
}
