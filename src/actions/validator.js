
/**
 * 
 * Verify that Given list is not empty or null 
 * 
 * @param {} lst 
 */
export function isNonEmptyList(lst) {
    return (lst !== null && typeof(lst) == "object" && lst !== "" && lst !== [] && lst.length)
}

/**
 * 
 * Verify that given String is not empty or null
 * 
 * @param {*} __str 
 */
export function isNonNullEmptyString(__str) {
    return (__str !== "" && __str !== null)
}


function validObject(__obj) {
    return (__obj !== null, typeof(__obj) == "object");
}

// check that either given Dictionary is a valid dictionary
export function isValidDict(__dict) {
    return validObject(__dict)
}