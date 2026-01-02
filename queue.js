// methods include enqueue, dequeue, front, size, isEmpty, print, end
class Queue {
  constructor() {
    this.queue = [];
  }

  print() {
    return this.queue.length === 0 ? "nothing in the queue" : this.queue;
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    const shiftedTask = this.queue.shift();
    this.queue.length === 0
      ? console.log("The queue is empty, nothing to dequeue")
      : shiftedTask;
      console.log(shiftedTask);
  }

  front() {
    if (this.queue.length === 0) {
      return "The queue is empty";
    } else {
      return this.queue.length === 1
        ? `There is only one item: ${this.queue[0]} in the queue`
        : `${this.queue[0]} is at the front`;
    }
  }

  end() {
    if (this.queue.length === 0) {
      return "The queue is empty";
    } else {
      return this.queue.length === 1
        ? `There is only one item: ${this.queue[0]} in the queue`
        : `${this.queue[this.queue.length - 1]} is at the end`;
    }
  }

  isEmpty() {
    return this.queue.length < 1 ? true : false;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Fish");
myQueue.enqueue("Meat");
myQueue.enqueue("Ponmo");
myQueue.dequeue()
console.log(myQueue.front());
console.log(myQueue.end());
console.log(myQueue.isEmpty());
console.log(myQueue.print());