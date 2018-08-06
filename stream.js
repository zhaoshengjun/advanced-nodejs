const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./test.mp3");
const writeStream = createWriteStream("./copy.mp3");

readStream.on("data", chunk => {
  writeStream.write(chunk);
});

readStream.on("end", () => writeStream.end());

readStream.on("error", error => {
  console.log("an error has occured");
  console.error(error.message);
});

writeStream.on("close", () => process.stdout.write("file copied!"));
