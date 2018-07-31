let delay = seconds =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });

console.log("Starting delay");

delay(2).then(() => {
  console.log("2 seconds");
});
