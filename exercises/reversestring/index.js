// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// return str.split('').reverse().join('');
	let reversed = '';
	for (let i = str.length - 1; i > -1; i--) {
		reversed += str[i];
	}
	return reversed;
}

console.log(reverse('apple')); // -> 'leppa'
console.log(reverse('hello')); // -> 'olleh'
console.log(reverse('Greetings!')); // -> '!sgniteerG

module.exports = reverse;
