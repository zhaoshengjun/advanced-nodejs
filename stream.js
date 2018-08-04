// no stream: use buffer, like use bucket to move things.
// use stream: like use pipe to move things.

let fs = require("fs");
let http = require("http");

let file = "./test.mp3";

http
  .createServer((req, res) => {
    fs.readFile(file, (err, data) => {
      if (err) console.log("hmmm: ", err.message);
      res.writeHead(200, { "Content-Type": "audio/mp3" });
      res.end(data);
    });
  })
  .listen(3000, () => console.log("buffer - http://localhost:3000"));
