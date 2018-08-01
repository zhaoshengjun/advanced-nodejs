let delay = seconds =>
  new Promise((resolve, reject) => {
    if (seconds > 3) {
      reject(new Error("it takes too long!"));
    }
    setTimeout(() => {
      resolve("The long wait is over.");
    }, seconds * 1000);
  });

console.log("Starting delay");

delay(4)
  .then(console.log)
  .then(_ => 42)
  .then(number => console.log(`Hello world, ${number}`))
  .catch(err => {
    console.log(err.message);
  });
