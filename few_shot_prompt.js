/**
 * Converts a string to camelCase format
 * Handles various delimiters: spaces, underscores, hyphens
 * @param {string} str - The string to convert
 * @returns {string} The camelCase formatted string
 */
function toCamelCase(str) {
    if (!str || typeof str !== 'string') {
        return '';
    }

    return str
        // Split by spaces, underscores, or hyphens
        .split(/[\s_-]+/)
        // Convert each word: first word lowercase, rest capitalized
        .map((word, index) => {
            // Convert the entire word to lowercase first
            word = word.toLowerCase();
            
            // For the first word, keep it lowercase
            if (index === 0) {
                return word;
            }
            
            // For subsequent words, capitalize the first letter
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('first name'));        // firstName
// console.log(toCamelCase('user_id'));           // userId
// console.log(toCamelCase('SCREEN_NAME'));       // screenName
// console.log(toCamelCase('mobile-number'));     // mobileNumber

module.exports = toCamelCase;