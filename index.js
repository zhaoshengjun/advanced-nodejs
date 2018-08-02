var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);

var beep = () => process.stdout.write("\x07");
var delay = seconds =>
  new Promise((res, rej) => {
    setTimeout(res, seconds * 1000);
  });

const doStuffSequentially = async () => {
  console.log("starting");
  await delay(1);
  console.log("waiting");
  await delay(2);
  await writeFile("file.txt", "Sample file...");
  beep();
  console.log("file created");
  await delay(3);
  await unlink("file.txt");
  beep();
  console.log("file removed");
};

doStuffSequentially();
