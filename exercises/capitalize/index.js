// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	// ^\w = first character of the string
	// | = or
	// \s\w = first character after whitespace
	return str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

// my solution
function capitalize2(str) {
	return str
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

// without .split(' ')
function capitalize3(str) {
	let result = str[0].toUpperCase();
	for (let i = 1; i < str.length; i++) {
		str[i - 1] === ' ' ? (result += str[i].toUpperCase()) : (result += str[i]);
	}
	return result;
}

console.log(capitalize('a short sentence')); // -> 'A Short Sentence'
console.log(capitalize('a lazy fox')); // -> 'A Lazy Fox'
console.log(capitalize('look, it is working!')); // -> 'Look, It Is Working!'

module.exports = capitalize;
