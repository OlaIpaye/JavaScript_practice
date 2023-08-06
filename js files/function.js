// FUNCTIONS

// Function declaration - One function that adds 1 and 2 together using Function Declaration.
function addOneAndTwo() {
    let addition = 1 + 2;
    console.log(`The sum of the variable is: ${addition}`); // Logged the values stored in the i variable to the console.
    return addition;
};

addOneAndTwo(); // Called the function to output the function to the console.


// Function Expression - One function that subtracs 10 from 20 using Function Expression.
let subtractTwentyFromTen = function() {
    let difference = 20 - 10;
    console.log(`The subtraction of the variable is: ${difference}`);
    return difference;
}

subtractTwentyFromTen();


// Function with Global Scope - One function that calculates the area of a square using an outside variable, using either function declaration or expression.

let sideOfSquare = 4; // Stored square value in a Global scope variable outside of the function.

function areaOfSquare() {
    let squareArea = sideOfSquare * sideOfSquare;
    console.log(`The area of a square with the side of 4 is: ${squareArea}`);
    return squareArea;
}

areaOfSquare();