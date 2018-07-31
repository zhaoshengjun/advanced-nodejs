let delay = seconds =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The long wait is over.");
    }, seconds * 1000);
  });

console.log("Starting delay");

delay(2)
  .then(console.log)
  .then(_ => 42)
  .then(number => console.log(`Hello world, ${number}`));
