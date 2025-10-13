/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with words separated by spaces, hyphens, underscores,
 * or other delimiters and converts it to camelCase, where the first word is lowercase
 * and subsequent words have their first letter capitalized with no separators.
 * 
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} The string converted to camelCase format
 * 
 * @example
 * // Convert a space-separated string
 * toCamelCase('hello world example');
 * // returns: 'helloWorldExample'
 * 
 * @example
 * // Convert a hyphen-separated string
 * toCamelCase('my-function-name');
 * // returns: 'myFunctionName'
 * 
 * @example
 * // Convert an underscore-separated string
 * toCamelCase('user_first_name');
 * // returns: 'userFirstName'
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

module.exports = toCamelCase;