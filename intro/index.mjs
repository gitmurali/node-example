import { readFile, writeFile } from "fs/promises";

let template = await readFile(
  new URL("template.html", import.meta.url),
  "utf-8"
);

// console.log(import.meta.url);

const data = {
  title: "node.js",
  body: "This is the final html",
};

for (const [k, v] of Object.entries(data)) {
  template = template.replace(`{${k}}`, v);
}

await writeFile(new URL("index.html", import.meta.url), template);
