var fs = require("fs");

var beep = () => process.stdout.write("\x07");

const doStuffSequentially = () => {
  console.log("starting");
  setTimeout(() => {
    console.log("waiting");
    setTimeout(() => {
      console.log("waiting some more");
      fs.writeFile("file.txt", "sample file...", error => {
        if (error) {
          console.error(error);
        } else {
          beep();
          console.log("file created");
          setTimeout(() => {
            beep();
            fs.unlink("file.txt", error => {
              if (error) {
                console.error(error);
              } else {
                console.log("file removed");
                console.log("sequential execute done.");
              }
            });
          }, 3000);
        }
      });
    }, 2000);
  }, 1000);
};

doStuffSequentially();
