const fs = require("fs");

const readStream = fs.createReadStream("./test.mp3");

readStream.on("data", chunk => {
  console.log("reading little chunk\n", chunk.length);
});

readStream.on("end", () => console.log("read stream finished"));

readStream.on("error", error => {
  console.log("an error has occured");
  console.error(error.message);
});

readStream.pause();

process.stdin.on("data", chunk => readStream.read());
