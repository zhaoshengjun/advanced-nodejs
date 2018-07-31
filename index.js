function hideString(str) {
  return str.replace(/[[a-zA-Z]/g, "X");
}

var hidden = hideString("Hello World");

console.log(hidden);
console.log("done");
