# VersaAsia Case Study 
Author: Muhammad Ashraff Bin Azhan

A JavaScript and TypeScript implementation of the Big Bang prediction model based on the collision of prime numbers 3 and 5.
There was a tale when 2 prime numbers collided and a big bang happened. Scientists found out the 2 prime numbers are 3 and 5, but they need a model to generate an array of numbers to predict when the big bang will happen again.

## Problem

Create a script to iterate through 1 to 100 and replace:
- Any number divisible by 3 with the word **BIG**
- Any number divisible by 5 with the word **BANG**
- Any number divisible by both 3 and 5 with **BIGBANG**

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/igrisan/VersaAsiaCS.git
   cd VersaAsianCS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Script

### JavaScript Version

```bash
# Method 1: Using npm script
npm start

# Method 2: Direct node execution
node bigbang.js
```

### TypeScript Version

```bash
# Method 1: Using npm script
npm run start:ts

# Method 2: Direct ts-node execution
npx ts-node bigbang.ts

# Method 3: Compile and run
npm run build
node bigbang.js
```

## 🧪 Testing

Run the test suite to verify the implementation:

```bash
npm test
```

## 📊 Expected Output

The script generates an `output.json` file containing an array like this:

```json
[
  "1", "2", "BIG", "4", "BANG", "BIG", "7", "8", "BIG", "BANG", 
  "11", "BIG", "13", "14", "BIGBANG", "16", "17", "BIG", "19", "BANG",
  ...
]
```

## 🔍 Key Features

- **Dual Implementation**: Both JavaScript and TypeScript versions
- **Clean Code**: Well-documented and structured
- **Error Handling**: Proper error handling and logging
- **Testing**: Simple test suite included
- **Output Generation**: Automatically creates `output.json` file

## 📝 Algorithm Logic

```javascript
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
```
