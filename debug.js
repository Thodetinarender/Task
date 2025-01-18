// Function to add 1 to the first number (a) and 2 to the second number (b)
function addOne(a, b) {
    return a + 1, b + 2;
}

// Function to add 2 to the first number (a) and 3 to the second number (b)
function addTwo(a, b) {
    return a + 2, b + 3;
}

// Function to add the two numbers a and b
function add(a, b) {
    return a + b;
}

// Example of calling the functions with two parameters
const resultOne = addOne(5, 11);  // Should return (6, 12)
const resultTwo = addTwo(5, 10);  // Should return (7, 13)
const resultThree = add(5, 10);   // Should return 15

console.log(resultOne, resultTwo, resultThree);  // Logs: (6, 12) (7, 13) 15
