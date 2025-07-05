const fs = require('fs');

/**
 * Big Bang Number Generator
 * Generates an array of numbers from 1 to 100 with special replacements:
 * - Numbers divisible by 3: "BIG"
 * - Numbers divisible by 5: "BANG"
 * - Numbers divisible by both 3 and 5: "BIGBANG"
 */
function generateBigBangArray() {
    const result = [];
    
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIGBANG");
        } else if (i % 3 === 0) {
            result.push("BIG");
        } else if (i % 5 === 0) {
            result.push("BANG");
        } else {
            result.push(i.toString());
        }
    }
    
    return result;
}

/**
 * Main function to generate the array and save to output.json
 */
function main() {
    try {
        console.log("Generating Big Bang array...");
        const bigBangArray = generateBigBangArray();
        
        // Write to output.json file
        fs.writeFileSync('output.json', JSON.stringify(bigBangArray, null, 2));
        
        console.log("Big Bang array generated successfully!");
        console.log("Output saved to 'output.json'");
        console.log("First 20 elements:", bigBangArray.slice(0, 20));
        
    } catch (error) {
        console.error("Error generating Big Bang array:", error);
        process.exit(1);
    }
}

// Export for testing
module.exports = { generateBigBangArray };

// Run if this file is executed directly
if (require.main === module) {
    main();
}