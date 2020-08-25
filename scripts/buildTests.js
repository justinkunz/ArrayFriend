const fs = require("fs");
const $ = require("../src/index").protos();

const generateTests = () => {
  const contents = fs.readFileSync("./README.md", "utf-8");
  const code = contents
    .split("```js")
    .map((a) => a.split("```")[0])
    .oddIndexes()
    .map((c) => c.replace('require("arrayfriend")', 'require("../src/index")'))
    .map((c) => {
      const lines = c.split("\n");
      lines.pop();
      const [variableName] = (lines.last().split("const ")[1] || " ").split(" = ");
      return `module.exports = () => {`.concat(c).concat(`\nreturn ${variableName};\n};`);
    });

  code.forEach((c, index) => fs.writeFileSync(`./test-exports/test-${index}.js`, c));
  return code;
};

generateTests();
