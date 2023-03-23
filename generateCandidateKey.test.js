import generateCandidateKey from "./generateCandidateKey"

describe("generateCandidateKey", () => {

	it("Should generate a key", () => {
		const key = generateCandidateKey()
		expect(key).toBeDefined()
		expect(key.length).toBe(128)
	})

	it("If the same seed is provided, generate the same key", () => {
		const key = generateCandidateKey("sample")
		const key2 = generateCandidateKey("sample")
		expect(key).toBeDefined()
		expect(key2).toBeDefined()
		expect(key).toBe(key2)
	})

	it("Should generate a different key everytime (1000 attempts test)", () => {
		let set = new Set()
		for (let i = 0; i < 1000; i++)
			set.add(generateCandidateKey())
		expect(set.size).toBe(1000)
	})

})
