function firstNonRepeatingCharacter(string) {
	let repeteur = []
	for (let i = 0; i < string.length; i++) {
		repeteur[i] = 0;
		for (let j = i + 1; j < string.length; j++) {
			if (string[i] == string[j]) {
				repeteur[i]++;
			}
		}
		if (repeteur[i] == 0) {
			return i;
		}
	}
	return -1;

}
// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;