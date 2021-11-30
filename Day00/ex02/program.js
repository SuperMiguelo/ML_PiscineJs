function threeLargestNumbers(array) {
	let Output = []

	for (let i = 0; i < 3; i++) {
		let result = Math.max(...array);
		Output.push(result);
		array.splice(array.indexOf(result), 1);
	}

	function compare(num1, num2) {
		return num1 - num2;
	}
	Output.sort(compare);
	return Output;
}
    
// Merci de ne pas effacer la ligne en dessous.
exports.threeLargestNumbers =  threeLargestNumbers;