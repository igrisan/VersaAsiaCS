# Big Bang Generator 🌟

A JavaScript and TypeScript implementation of the Big Bang prediction model based on the collision of prime numbers 3 and 5.

## 📖 Story

There was a tale when 2 prime numbers collided and a big bang happened. Scientists found out the 2 prime numbers are 3 and 5, but they need a model to generate an array of numbers to predict when the big bang will happen again.

## 🎯 Problem

Create a script to iterate through 1 to 100 and replace:
- Any number divisible by 3 with the word **BIG**
- Any number divisible by 5 with the word **BANG**
- Any number divisible by both 3 and 5 with **BIGBANG**

## 🚀 Quick Start

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

## 📁 Project Structure

```
bigbang-generator/
├── bigbang.js          # JavaScript implementation
├── bigbang.ts          # TypeScript implementation
├── test.js             # Test suite
├── package.json        # Project configuration
├── output.json         # Generated output file
└── README.md           # This file
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

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Fun Facts

- This is essentially a creative version of the classic FizzBuzz problem
- The numbers 3 and 5 are indeed prime numbers
- The pattern repeats every 15 numbers (3 × 5 = 15)
- There are 6 "BIGBANG" occurrences in the range 1-100 (at positions 15, 30, 45, 60, 75, 90)

## 🔧 Troubleshooting

### Common Issues

1. **Node.js not found**: Make sure Node.js is installed and in your PATH
2. **Permission denied**: On Unix systems, you might need to run `chmod +x bigbang.js`
3. **Module not found**: Run `npm install` to install dependencies

### Getting Help

If you encounter any issues, please:
1. Check the troubleshooting section above
2. Review the error messages carefully
3. Open an issue on GitHub with details about your problem

---

Made with ❤️ for predicting the next Big Bang! 🌌