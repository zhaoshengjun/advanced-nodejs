let fs = require("fs");
let { promisify } = require("util");

let readdir = promisify(fs.readdir);
let writeFile = promisify(fs.writeFile);
let unlink = promisify(fs.unlink);

let delay = seconds =>
  new Promise((resolve, reject) => setTimeout(resolve, seconds * 1000));

Promise.race([delay(2), delay(3), delay(5), delay(4)]).then(() =>
  console.log("done")
);
