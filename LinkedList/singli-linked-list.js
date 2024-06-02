const resultRef = document.getElementById("result");
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

let myList = new LinkedList();

function addNode() {
  const nodeValue = document.getElementById("txtNode").value;
  let node = new Node(nodeValue);
  myList.appendNode(node);
  resultRef.textContent = JSON.stringify(myList, undefined, 2);
}

function traverseNode() {
  let currentNode = myList.head;
  console.log(JSON.stringify(myList, null, 4));
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}

function removeNode() {
  const searchElement =  document.getElementById("txtNode").value;
  let currentNode = myList.head;
  while (currentNode) {
    if (currentNode.data == searchElement) {
      console.log(`Element Found ${currentNode.data} breaking out of loop.`);
      break;
    }
    console.log(
      `Element {${currentNode.data}} not found yet, moving to next element`
    );
    currentNode = currentNode.next;
  }
}

console.log(JSON.stringify(myList, null, 4));

resultRef.textContent = JSON.stringify(myList, undefined, 2);
