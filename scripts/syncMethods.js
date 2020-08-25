const methods = require("../src/methods");
const { readFileSync, writeFileSync, fstat } = require("fs");

const targetPath = "./src/index.template.js";
const destPath = "./src/index2.js";

const template = readFileSync(targetPath, "utf-8");

const changed = template
  .replace(
    "// ARRAYFRIEND PROTOS",
    Object.keys(methods)
      .map((method) => `ArrayFriend.prototype.${method} = methods.${method};`)
      .join("\n")
  )
  .replace(
    "// ARRAY PROTOS",
    Object.keys(methods)
      .map((method) => `Array.prototype.${method} = methods.${method};`)
      .join("\n")
  );

writeFileSync(destPath, changed);
