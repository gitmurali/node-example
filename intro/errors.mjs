import { readFile } from "fs/promises";

// readFile(new URL("app.mjs", import.meta.url), "utf-8", (err, data) => {
//   if (err) {
//     // console.error(err);
//     throw err;
//   } else {
//   }
// });

// try {
//   const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8");
// } catch (e) {
//   console.log(e);
//   process.exit(0);
// }

process.on("uncaughtException", (e) => {
  console.log("bob", e);
});

const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8");
const abc = result;
console.log("hello..", abc);
