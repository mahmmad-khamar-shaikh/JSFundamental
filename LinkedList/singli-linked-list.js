class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
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

// let node0 = new Node(3);
let myList = new LinkedList();
//console.log(myList);
let node1 = new Node(5);
//console.log(node1);
let node2 = new Node(7);
//console.log(node2)

let node3 = new Node(9);
//console.log(node3);

myList.appendNode(node1);
//console.log(myList);

myList.appendNode(node2);
//console.log(myList);

myList.appendNode(node3);
// console.log(myList);

function iterate(obj, stack) {
  for (var property in obj) {
    console.log(property);
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] == "object") {
        iterate(obj[property], stack + "." + property);
      } else {
        console.log(property + " " + obj[property]);
      }
    }
  }
}

//iterate(myList,'');

const node = {
  data: 1,
  next: {
    data: 3,
    next: {
      data: 5,
      next: {
        data :7,
        next : {
          data : 9,
          next :  null
        }
      },
    },
  },
};




console.log( JSON.stringify(node,null,4));



