import { ERROR_EVENT_MUST_BE_DEFINED, MAX_PARTITION_KEY_LENGTH } from "./constants"
import generateCandidateKey from "./generateCandidateKey"

/**
 * 
 * Analyzes an event and returns the a candidate
 * partition key by either using the existing or
 * generating a new one.
 * 
 * If no event is present, generating a new key should
 * NOT be resposability of this function, therefore an
 * error is generated and can be properly handled within
 * the codebase.
 * 
 * __IMPORTANT__ the event will be stringified as the seed
 * for a new partition key if one is not provided. Make sure
 * it contains uniqueness, such as an 'id' unique property.
 * 
 * @param {Object} [event] - the event containing the candidate info
 * @param {Object} event.name - name of the candidate
 * @param {Object} [event.partitionKey] - key of the candidate
 * @returns {string} candidate key
 * 
 */
export default event => {

	// event MUST be defined
	if (!event) throw new Error(ERROR_EVENT_MUST_BE_DEFINED)

	// if no key is present, 
	// or the old partition key is too big,
	// generate a new key for this candidate
	if (!event.partitionKey || event.partitionKey.length > MAX_PARTITION_KEY_LENGTH)
		return generateCandidateKey(JSON.stringify(event))

	// returns the former and usable partition key
	return event.partitionKey

}