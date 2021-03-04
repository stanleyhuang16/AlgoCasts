// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor() {
		this.first = new Stack();
		this.second = new Stack();
	}

	add(node) {
		this.first.push(node);
	}

	remove() {
		// this.first.peek = stack's peek() { return this.data[this.data.length - 1]; }
		// while there is a last element in first array
		while (this.first.peek()) {
			// push last element in second array
			this.second.push(this.first.pop());
		}

		// hold a record of the last element in second array
		const record = this.second.pop();

		// while there's a last element in second array
		while (this.second.peek()) {
			// push last element in first array
			this.first.push(this.second.pop());
		}

		return record;
	}

	peek() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}

		const record = this.second.peek();

		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}

		return record;
	}
}

const q = new Queue();
console.log(q.add(1));
console.log(q.add(2));
console.log(q.peek()); // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2

module.exports = Queue;
