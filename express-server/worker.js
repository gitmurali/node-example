const { Worker, isMainThread, parentPort } = require("node:worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on("message", (msg) => {
    console.log(msg);
  });
} else {
  parentPort.postMessage("Hey bob!");
}
