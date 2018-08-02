var fs = require("fs");
var { promisify } = require("util");

var readdir = promisify(fs.readdir);

async function start() {
  var files = await readdir(__dirname);
  console.log(files);
}

start();
