class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  print() {
    let stackArr = [];

    let i = 0;
    let curr = this.first;

    while (i < this.size) {
      stackArr.push(curr);
      curr = curr.next;
      i++;
    }

    console.log(stackArr);
  }
}
let stack = new Stack();

stack.push(0);
stack.push(1);
stack.push(2);
stack.pop();

stack.print();

// console.log(stack);

// Stack is a LIFO data structure
// INSERTION / REMOVAL -> O(1)
// SEARCH / ACCESS (who cares? It's not the purpose) -> O(N)

// here we implemented it with a custom class but we could have more easily implemented it with a built-in array
