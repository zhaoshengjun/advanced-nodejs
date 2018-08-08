const { createServer } = require("http");
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");
const file = "./test.mp3";
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(file);
  res.writeHead(200, {
    "Content-Type": "audio/mp3",
    "Content-Length": size
  });
  createReadStream(file).pipe(res);
}).listen(3000, () => console.log("Server is running on port 3000"));
