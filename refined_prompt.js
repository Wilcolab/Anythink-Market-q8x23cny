/**
 * @fileoverview String case conversion utility functions with comprehensive testing.
 * @module refined_prompt
 * @requires assert
 */

/**
 * Executes the complete test suite for the toCamelCase function.
 * 
 * This function runs all unit tests to verify the correct behavior of the toCamelCase
 * function across various scenarios including:
 * - Normal cases with spaces
 * - Edge cases (empty strings, special characters, multiple spaces)
 * - Already formatted strings (camelCase, PascalCase)
 * - Error handling for invalid input types
 * 
 * Each test category uses assertions to validate expected outcomes and logs
 * success or failure messages to the console.
 * 
 * @function runTests
 * @returns {void} Outputs test results to console
 * 
 * @example
 * // Run all tests
 * runTests();
 * // Console output:
 * // Running toCamelCase tests...
 * // ✓ Test 1 passed: Normal cases with spaces
 * // ✓ Test 2 passed: Edge cases (empty, spaces, special characters)
 * // ...
 */
module.exports = { toCamelCase };

// Run tests if this file is executed directly
if (require.main === module) {
    runTests();
}
