const { createServer } = require("http");
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");
const file = "./test.mp3";
const fileInfo = promisify(stat);

const responseWithContent = async (req, res) => {
  const { size } = await fileInfo(file);
  const range = req.headers.range;
  if (range) {
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;
    res.writeHead(200, {
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Type": "audio/mp3"
    });
    createReadStream(file, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Type": "audio/mp3",
      "Content-Length": size
    });
    createReadStream(file).pipe(res);
  }
};

createServer((req, res) => {
  if (req.url === "/audio") {
    responseWithContent(req, res);
  } else {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(`
    <form enctype="multipart/form-data" method="POST" action="/">
      <input type="file" name="upload-file" />
      <button>Upload File</button>
    </form>
    `);
  }
}).listen(3000, () => console.log("Server is running on port 3000"));
