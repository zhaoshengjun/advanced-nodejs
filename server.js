const { createServer } = require("http");
const { createReadStream } = require("fs");

const file = "./test.mp3";

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "audio/mp3" });
  createReadStream(file).pipe(res);
}).listen(3000, () => console.log("Server is running on port 3000"));
