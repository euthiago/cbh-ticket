import { ERROR_EVENT_MUST_BE_DEFINED, MAX_PARTITION_KEY_LENGTH } from "./constants"
import getCandidateKeyByEvent from "./getCandidateKeyByEvent"

describe("getCandidateKeyByEvent", () => {

	it("If no event is present, throws an error", () => {
		const throwable = () => getCandidateKeyByEvent()
		expect(throwable).toThrow(ERROR_EVENT_MUST_BE_DEFINED)
	})

	it("If the partition key is present use it", () => {
		const expected = "acceptable_pk"
		const result = getCandidateKeyByEvent({
			partitionKey: expected
		})
		expect(result).toBe(expected)
	})

	it("If the partition key is too long, generate a new one", () => {
		const expected = Array(MAX_PARTITION_KEY_LENGTH + 1).fill("a")
		const result = getCandidateKeyByEvent({
			partitionKey: expected
		})
		expect(result).toBeDefined()
		expect(result).not.toBe(expected)
	})

	it("Events that do not contain a partition key are stringified as key", () => {
		const result1 = getCandidateKeyByEvent({ id: "same_id" })
		const result2 = getCandidateKeyByEvent({ id: "same_id" })
		expect(result1).toBeDefined()
		expect(result2).toBeDefined()
		expect(result1).toBe(result2)
	})

})
