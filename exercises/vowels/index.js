// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return (matches || []).length;
}

// my solution
function vowels2(str) {
	let count = 0;
	for (let char of str) {
		if (char.match(/[aeiou]/gi)) count++;
	}
	return count;
}

console.log(vowels('Hi There!')); // -> 3
console.log(vowels('Why do you ask?')); // -> 4
console.log(vowels('Why?')); // -> 0

module.exports = vowels;
