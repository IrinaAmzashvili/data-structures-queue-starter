// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value){
    let newNode = new Node(value); //o(1)

    if(!this.length){
      this.front = newNode;

    } else if (this.length > 0) {
      this.back.next = newNode;

    }
    this.back = newNode;
    this.length++;
    return this.length;
  }

  // dequeue(){
  //   if (!this.length) {
  //     return null;
  //   } else if (this.length === 1) {
  //     let dequeued = this.front.value;
  //     this.front = null;
  //     this.back = null;
  //     this.length--;
  //     return dequeued;
  //   } else if (this.length >= 2) {
  //     let dequeued = this.front.value;
  //     this.front = this.front.next;
  //     this.length--;
  //     return dequeued;
  //   }
  // }

  dequeue(){
    let dequeued = this.front;

    if (!this.length) {
      return null;
    } else if (this.length === 1) {
      this.front = null;
      this.back = null;
    } else if (this.length >= 2) {
      this.front = this.front.next;
    }

    this.length--;
    return dequeued.value;
  }


  size(){
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;
