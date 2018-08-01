var { promisify } = require("util");

let delay = (seconds, callback) =>
  new Promise((resolve, reject) => {
    if (seconds > 3) {
      callback(new Error("it takes too long!"));
    } else {
      setTimeout(() => {
        callback(null, "The long wait is over.");
      }, seconds * 1000);
    }
  });

console.log("Starting delay");

var promiseDelay = promisify(delay);

promiseDelay(5)
  .then(console.log)
  .catch(err => console.log(err.message));
