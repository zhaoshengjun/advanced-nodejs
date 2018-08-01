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

delay(2, (err, message) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(message);
  }
});
