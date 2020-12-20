// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const tally = {};
	let max = 0;
	for (let char of str) {
		tally[char] = (tally[char] || 0) + 1;
		max = Math.max(max, tally[char]);
	}
	for (let char in tally) {
		if (tally[char] === max) return char;
	}
}

console.log(maxChar('abcccccccd')); // -> "c"
console.log(maxChar('apple 1231111')); // -> "1"

module.exports = maxChar;
