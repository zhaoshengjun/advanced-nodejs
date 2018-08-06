const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./test.mp3");
const writeStream = createWriteStream("./copy.mp3");
readStream.pipe(writeStream).on("error", console.error);
