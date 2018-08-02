let fs = require("fs");
let { promisify } = require("util");

let readdir = promisify(fs.readdir);
let writeFile = promisify(fs.writeFile);
let unlink = promisify(fs.unlink);

let delay = seconds =>
  new Promise((resolve, reject) => setTimeout(resolve, seconds * 1000));

Promise.all([
  writeFile("readme.md", "# Hello world"),
  writeFile("readme.txt", " Hello world"),
  writeFile("readme.json", '{" Hello":" world"}')
])
  .then(() => readdir(__dirname))
  .then(console.log);
