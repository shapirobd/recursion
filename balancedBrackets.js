const correspondingBrackets = {
	"(": ")",
	"[": "]",
	"{": "}",
};
const possibleOpeningBrackets = ["(", "[", "{"];
const possibleClosingBrackets = [")", "]", "}"];

function balancedBrackets(str, i = 0, orderedOpenBrackets = []) {
	const currentOpeningBracket =
		orderedOpenBrackets[orderedOpenBrackets.length - 1];

	if (i === str.length) {
		if (orderedOpenBrackets.length === 0) {
			return true;
		}
		return false;
	}

	if (possibleOpeningBrackets.includes(str[i])) {
		orderedOpenBrackets.push(str[i]);
	} else if (possibleClosingBrackets.includes(str[i])) {
		if (correspondingBrackets[currentOpeningBracket] !== str[i]) {
			return false;
		} else {
			orderedOpenBrackets.pop();
		}
	}

	return balancedBrackets(str, i + 1, orderedOpenBrackets);
}

module.exports = balancedBrackets;
