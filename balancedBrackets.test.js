const balancedBrackets = require("./balancedBrackets");

describe("balancedBrackets", () => {
	it("should return true if balanced", () => {
		expect(balancedBrackets("hello")).toBe(true);
		expect(balancedBrackets("(hi) [there]")).toBe(true);
		expect(balancedBrackets("(hi [there])")).toBe(true);
		expect(balancedBrackets("(((hi)))")).toBe(true);
	});
	it("should return false if not balanced", () => {
		expect(balancedBrackets("(hello")).toBe(false);
		expect(balancedBrackets("(nope]")).toBe(false);
		expect(balancedBrackets("((ok) [nope)]")).toBe(false);
	});
});
