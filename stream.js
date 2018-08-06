const { createReadStream, createWriteStream } = require("fs");
const { PassThrough } = require("stream");

const readStream = createReadStream("./test.mp3");
const writeStream = createWriteStream("./copy.mp3");

const report = new PassThrough();
let total = 0;
report.on("data", chunk => {
  total += chunk.length;
  console.log("length: ", total);
});
readStream
  .pipe(report)
  .pipe(writeStream)
  .on("error", console.error);
