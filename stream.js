const { createReadStream, createWriteStream } = require("fs");
const { PassThrough, Duplex } = require("stream");

const readStream = createReadStream("./test.mp3");
const writeStream = createWriteStream("./copy.mp3");

class Throttle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }

  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }

  _read() {}

  _final() {
    this.push(null);
  }
}

const report = new PassThrough();
const throttle = new Throttle(100);
let total = 0;
report.on("data", chunk => {
  total += chunk.length;
  console.log("length: ", total);
});
readStream
  .pipe(throttle)
  .pipe(report)
  .pipe(writeStream)
  .on("error", console.error);
