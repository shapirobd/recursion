/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
	if (i === nums.length) return 1;

	return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, maxLength = 0) {
	if (i === words.length) return maxLength;

	if (words[i].length > maxLength) maxLength = words[i].length;
	return longest(words, i + 1, maxLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
	if (i === str.length) return "";

	if (i % 2 === 0) {
		return str[i] + everyOther(str, i + 1);
	} else {
		return everyOther(str, i + 1);
	}
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, leftIdx = 0, rightIdx = str.length - 1) {
	if (leftIdx > rightIdx) return true;

	if (str[leftIdx] !== str[rightIdx]) {
		return false;
	} else {
		return isPalindrome(str, leftIdx + 1, rightIdx - 1);
	}
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (i === arr.length) return -1;

	if (arr[i] === val) {
		return i;
	} else {
		return findIndex(arr, val, i + 1);
	}
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, revStr = "", i = str.length - 1) {
	if (i === -1) return revStr;

	revStr += str[i];
	return revString(str, revStr, i - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strArr = [], i = 0) {
	let values = Object.values(obj);
	if (i === values.length) return strArr;
	if (typeof values[i] === "object") {
		gatherStrings(values[i], strArr);
	}
	if (typeof values[i] === "string") {
		strArr.push(values[i]);
	}
	return gatherStrings(obj, strArr, i + 1);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
	if (leftIdx > rightIdx) return -1;

	const midIdx = Math.floor((leftIdx + rightIdx) / 2);
	if (arr[midIdx] === val) {
		return midIdx;
	} else if (arr[midIdx] > val) {
		rightIdx = midIdx - 1;
	} else {
		leftIdx = midIdx + 1;
	}
	return binarySearch(arr, val, leftIdx, rightIdx);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
