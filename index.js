let delay = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

let tasks = [delay(4), delay(6), delay(3), delay(13), delay(5)];

class PromiseQueue {
  constructor(promises = [], concurrentCount = 1) {
    this.concurrentCount = concurrentCount;
    this.total = promises.length();
    this.todo = promises;
    this.running = [];
    this.complete = [];
  }

  get runAnother() {
    return this.running.length < this.concurrentCount && this.todo.length;
  }

  run() {
    while (this.runAnother) {
      let promise = this.todo.shift();
      promise.then(() => {
        this.complete.push(this.running.shift());
        this.run();
      });

      this.running.push(promise);
    }
  }
}

var delayQueue = new PromiseQueue(tasks, 2);
