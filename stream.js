process.stdin.on("data", chunk => {
  let text = chunk.toString().trim();
  console.log("echo: ", text);
});
