// no stream: use buffer, like use bucket to move things.
// use stream: like use pipe to move things.

let fs = require("fs");
let http = require("http");

let file = "./test.mp3";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "audio/mp3" });
    fs.createReadStream(file)
      .pipe(res)
      .on("error", console.error);
  })
  .listen(3000, () => console.log("stream - http://localhost:3000"));
