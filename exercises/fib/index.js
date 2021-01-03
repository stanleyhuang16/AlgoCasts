// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the proceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
	// store function values
	const cache = [0, 1];

	function memoize(num) {
		// get the value for current number
		let result = cache[num];
		// console.log(result);

		// if there's already an existing value, return it
		if (typeof result === 'number') return result;

		// else call the function recursively
		result = fib(num - 1) + fib(num - 2);
		// store the result
		cache[num] = result;
		// console.log(cache[num], cache);
	}
	memoize(n);

	return cache[n];
}

function slowFib(n) {
	/* 	
  fib(3) + fib(2)
	fib(3): fib(2) + fib(1)
	        fib(2): fib(1) + fib(0) -> 1 + 0 = 1
	        1 + fib(1) -> 1 + 1 = 2
	fib(3) = 2

	2 + fib(2)
	    fib(2): fib(1) + fib(0) -> 1 + 0 = 1
	fib(2) = 1

	2 + 1 = 3
  */
	return n < 2 ? n : slowFib(n - 1) + slowFib(n - 2);
}

function bruteForceFib(n) {
	const result = [0, 1];
	for (let i = 2; i <= n; i++) {
		const a = result[i - 1];
		const b = result[i - 2];
		result.push(a + b);
		// console.log(a);
		// console.log(b);
		// console.log(result);
	}
	return result[n];
}

console.log(fib(4)); // -> 3

module.exports = fib;
