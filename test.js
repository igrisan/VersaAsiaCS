const { generateBigBangArray } = require('./bigbang.js');

/**
 * Simple test function to verify the Big Bang array generation
 */
function testBigBangArray() {
    console.log("Running tests...");
    
    const result = generateBigBangArray();
    
    // Test array length
    console.assert(result.length === 100, "Array should have 100 elements");
    
    // Test specific values
    console.assert(result[0] === "1", "First element should be '1'");
    console.assert(result[2] === "BIG", "Third element should be 'BIG' (divisible by 3)");
    console.assert(result[4] === "BANG", "Fifth element should be 'BANG' (divisible by 5)");
    console.assert(result[14] === "BIGBANG", "Fifteenth element should be 'BIGBANG' (divisible by both 3 and 5)");
    console.assert(result[29] === "BIGBANG", "Thirtieth element should be 'BIGBANG' (divisible by both 3 and 5)");
    
    // Test some regular numbers
    console.assert(result[6] === "7", "Seventh element should be '7'");
    console.assert(result[10] === "11", "Eleventh element should be '11'");
    
    console.log("All tests passed! ✅");
    
    // Display first 20 elements for verification
    console.log("\nFirst 20 elements:");
    console.log(result.slice(0, 20));
    
    return true;
}

// Run tests
testBigBangArray();