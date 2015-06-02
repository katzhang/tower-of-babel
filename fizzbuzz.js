const max = process.argv[2];
let FizzBuzz = {
	[Symbol.iterator]() {
		let number = 0;
		return {
			next() {
				number++;
				if (number <= max) {
					return {
						done: false,
						value: (function() {
							if (number % 15 === 0) {
								return 'FizzBuzz';
							} else if (number % 3 === 0) {
								return 'Fizz';
							} else if (number % 5 === 0) {
								return 'Buzz';
							} else {
								return number;
							}
						}())
					}
				} else {
					return {
						done: true
					}
				}
			}
		}
	}
}

for (var n of FizzBuzz) {
	console.log(n);
}