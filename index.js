var { promisify } = require("util");
var fs = require("fs");

var writeFile = promisify(fs.writeFile);
writeFile("sample.txt", "This is a sample")
  .then(() => console.log("file successfully created."))
  .catch(err => console.log(err.message));
