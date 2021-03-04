// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
	constructor() {
		this.data = [];
	}

	// why add at the beginning? should be .push(el)
	add(el) {
		this.data.unshift(el);
	}

	// why remove at the end? should be .unshift()
	remove() {
		return this.data.pop();
	}
}

const q = new Queue();
console.log(q.add(1));
console.log(q.remove()); // returns 1;

module.exports = Queue;
