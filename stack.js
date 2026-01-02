class Stack {
  constructor() {
    this.all = [];
  }

  print() {
    return this.all.length === 0 ? "Sorry, nothing yet" : this.all;
  }

  length() {
    return this.all.length === 0
      ? "Nothing to count, stack is empty"
      : `${this.all.length} item(s) in the stack`;
  }

  add(item) {
    this.all.push(item);
  }

  remove() {
    this.all.length === 0 ? console.log("Nothing to remove") : this.all.pop();
  }

  peekFirst() {
    if (this.all.length === 0) {
      return "empty stack, nothing to peek at the beginning";
    } else {
      return this.all.length === 1
        ? `only one item: ${this.all[0]} in the stack`
        : this.all[0];
    }
  }

  peekLast() {
    if (this.all.length === 0) {
      return "empty stack, nothing to peek at the end";
    } else {
      return this.all.length === 1
        ? `only one item: ${this.all[this.all.length-1]} in the stack`
        : this.all[this.all.length-1];
    }
  }

  isEmpty () {
    return this.all.length<1 ? true : false;
  }
}

const stackOne = new Stack();
stackOne.add("Pepper");
stackOne.add("Indomie");
stackOne.add("Ata rodo");
// stackOne.remove();
console.log(stackOne.peekFirst());
console.log(stackOne.peekLast());
console.log(stackOne.isEmpty());
console.log(stackOne.print());
console.log(stackOne.length());

// Assume all users are dumb. (allegedly) - as a dev