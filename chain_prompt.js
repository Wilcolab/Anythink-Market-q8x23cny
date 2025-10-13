/**
 * Converts a string to kebab-case format
 * @param {string} input - The string to convert
 * @returns {string} The kebab-cased string
 * @throws {TypeError} If input is not a string
 */
function toKebabCase(input) {
    // Step 3: Error handling - check if input is a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Step 3: Handle empty strings
    if (input.length === 0) {
        return '';
    }

    // Step 2: Convert the string to kebab-case
    return input
        // Handle camelCase and PascalCase by inserting hyphens before uppercase letters
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Replace underscores and spaces with hyphens
        .replace(/[\s_]+/g, '-')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '')
        // Replace multiple consecutive hyphens with a single hyphen
        .replace(/-+/g, '-');
}

module.exports = toKebabCase;