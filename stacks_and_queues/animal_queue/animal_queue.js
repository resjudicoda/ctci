const Queue = require('../queue.js');

class Animal {
  constructor(name) {
    this.name = name;
    this.order = null;
  }
  setOrder(order) {
    this.order = order;
  }
  getOrder() {
    return this.order;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

class AnimalQueue {
  constructor() {
    this.order = 0;
    this.dogQueue = new Queue;
    this.catQueue = new Queue;
  }

  enqueue(animal) {
    animal.setOrder(this.order);
    order++;
    if (animal instanceof Dog) {
      this.dogQueue.add(animal);
    }
    else if (animal instanceof Cat) {
      this.catQueue.add(animal);
    }
  }

  dequeueAny() {
    if (this.dogQueue.first == null) return this.catQueue.remove();
    else if (this.catQueue.first == null) return this.dogQueue.remove()
    if (this.dogQueue.first.getOrder() < this.catQueue.first.getOrder()) {
      return this.dogQueue.remove();
    } else return this.catQueue.remove();
  }
  
  dequeueDog() {
    return this.dogQueue.remove();
  }

  dequeueCat() {
    return this.catQueue.remove();
  }
}

const animal_queue = function() {
  return false;
}
module.exports = animal_queue
