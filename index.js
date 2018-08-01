var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);

var beep = () => process.stdout.write("\x07");
var delay = seconds =>
  new Promise((res, rej) => {
    setTimeout(res, seconds * 1000);
  });

const doStuffSequentially = () =>
  Promise.resolve()
    .then(() => console.log("Starting"))
    .then(() => delay(1))
    .then(() => "waiting")
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile("file.txt", "Sample text ..."))
    .then(beep)
    .then(() => "file created")
    .then(console.log)
    .then(() => delay(3))
    .then(() => unlink("file.txt"))
    .then(beep)
    .then(() => "file removed")
    .then(console.log)
    .catch(console.log);

doStuffSequentially();
