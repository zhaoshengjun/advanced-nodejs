const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./test.mp3");
const writeStream = createWriteStream("./copy.mp3");

readStream.on("data", chunk => {
  const result = writeStream.write(chunk);
  if (!result) {
    // hose is full
    console.log("backpressure");
    readStream.pause();
  }
});

readStream.on("end", () => writeStream.end());

readStream.on("error", error => {
  console.log("an error has occured");
  console.error(error.message);
});
writeStream.on("drain", () => {
  console.log("drained");
  readStream.resume();
});

writeStream.on("close", () => process.stdout.write("file copied!"));
