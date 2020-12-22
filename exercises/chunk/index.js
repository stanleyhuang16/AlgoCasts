// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const chunked = [];
	for (let i = 0; i < array.length; i += size) {
		chunked.push(array.slice(i, i + size));
	}
	return chunked;
}

// my solution
function chunk2(array, size) {
	const copy = array.slice();
	const result = [];
	for (let el of array) {
		if (copy.length) result.push(copy.splice(0, size));
	}
	return result;
}

console.log(chunk([1, 2, 3, 4], 2)); // -> [[ 1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // -> [[ 1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // -> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // -> [[ 1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // -> [[ 1, 2, 3, 4, 5]]

module.exports = chunk;
