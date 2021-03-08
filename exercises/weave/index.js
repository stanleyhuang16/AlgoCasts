// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alternating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
	const queueThree = new Queue();

	// while there's a last element in either queues
	while (sourceOne.peek() || sourceTwo.peek()) {
		console.log('sourceOne.peek(): ', sourceOne.peek());
		console.log('sourceTwo.peek(): ', sourceTwo.peek());
		// if last element in queue #1, UNSHIFT it to queueThree
		if (sourceOne.peek()) queueThree.add(sourceOne.remove());
		// if last element in queue #2, UNSHIFT it to queueThree
		if (sourceTwo.peek()) queueThree.add(sourceTwo.remove());
		console.log('queueThree: ', queueThree);
	}

	return queueThree;
}

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');

const q = weave(queueOne, queueTwo);
console.log('q: ', q);
console.log(q.remove()); // 1
console.log(q.remove()); // 'Hi'
console.log(q.remove()); // 2
console.log(q.remove()); // 'There'

module.exports = weave;
