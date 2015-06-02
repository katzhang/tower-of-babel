const max = process.argv[2];
let FizzBuzz = function *() {
	let number = 0;
	while (number < max) {
		number++;
		if (number % 15 === 0) {
			yield 'FizzBuzz';
		} else if (number % 3 === 0) {
			yield 'Fizz';
		} else if (number % 5 === 0) {
			yield 'Buzz';
		} else {
			yield number;
		}
	}
}();

for (var n of FizzBuzz) {
	console.log(n);
}