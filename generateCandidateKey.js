import { createHash } from "crypto"
import { v4 } from "uuid"

/**
 * 
 * Generates a new partition key
 * 
 * @param {string} [seed] - a string seed to generate the key
 * @returns {string} candidate key
 * 
 */
export default seed => {

	// if no seed is provided, use an unique one
	seed ??= v4()

	// The base hash before encondings and updates
	const base = createHash("sha3-512")

	// Updates our hash using the provided information
	if (seed) base.update(seed)

	// returns the new key using our encoder
	return base.digest("hex")

}