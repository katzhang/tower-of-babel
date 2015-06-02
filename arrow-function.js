var inputs = process.argv.slice(2);
var result = inputs.map((value, index) => {
	return value[0];
}).reduce((a, b) => {
	return a + b;
});

console.log(result);
