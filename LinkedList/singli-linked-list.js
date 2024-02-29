class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  appendNode(newNode) {
    let node = this.head;
    if (node == null) {
      this.head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


let myList = new LinkedList();
console.log(myList);
let node1 = new Node(5)
console.log(node1);
let node2 = new Node(7);
console.log(node2)


myList.appendNode(node1);
console.log(myList);


myList.appendNode(node2);
console.log(myList);










