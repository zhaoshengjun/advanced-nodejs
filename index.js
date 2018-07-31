let delay = seconds =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The long wait is over.");
    }, seconds * 1000);
  });

console.log("Starting delay");

delay(2)
  .then(console.log)
  .then(() => console.log("Hello world"));
