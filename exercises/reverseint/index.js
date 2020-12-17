// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	// return n > -1
	// 	? +n.toString().split('').reverse().join('')
	// 	: -1 * n.toString().slice(1).split('').reverse().join('');

	const reversed = n.toString().split('').reverse().join('');
	return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(15)); // -> 51
console.log(reverseInt(981)); // -> 189
console.log(reverseInt(500)); // -> 5
console.log(reverseInt(-15)); // -> -51
console.log(reverseInt(-90)); // -> -9

module.exports = reverseInt;
