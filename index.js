function hideString(str, done) {
  done(str.replace(/[[a-zA-Z]/g, "X"));
}

hideString("Hello World", hidden => {
  console.log(hidden);
});

console.log("done");
