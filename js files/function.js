// FUNCTIONS

// Function declaration - One function that adds 1 and 2 together using Function Declaration.
function addOneAndTwo() {
  let addition = 1 + 2;
  console.log(`The sum of the variable is: ${addition}`); // Logged the values stored in the i variable to the console.
  return addition;
}

addOneAndTwo(); // Called the function to output the function to the console.

// Function Expression - One function that subtracs 10 from 20 using Function Expression.
let subtractTwentyFromTen = function () {
  let difference = 20 - 10;
  console.log(`The subtraction of the variable is: ${difference}`);
  return difference;
};

subtractTwentyFromTen();

// Function with Global Scope - One function that calculates the area of a square using an outside variable, using either function declaration or expression.

let sideOfSquare = 4; // Stored square value in a Global scope variable outside of the function.

function areaOfSquare() {
  let squareArea = sideOfSquare * sideOfSquare;
  console.log(`The area of a square with the side of 4 is: ${squareArea}`);
  return squareArea;
}

areaOfSquare();

// Create a function using function declaration that checks if two parameters are equal in both value and type, just value, or not equal in any way and prints it to the console

// Call the function so that it prints each option.
function isEqual(a, b) {
  if (a === b) {
    // Used a function to pass a parameter and then used an if statement inside a declaration function to access the parameters.
    console.log("They are equal in both value and data type.");
  } else if (a == b) {
    console.log("They are equal in value.");
  } else {
    console.log("Not equal");
  }
}

isEqual(10, 10); // Called the function to output the function parameters and then passed an arguement into it.
isEqual(10, "10"); // Called the function to output the function parameters and then passed an arguement into it.
isEqual(10, 9); // Called the function to output the function parameters and then passed an arguement into it.

console.log("------------------------------------------------------");

// Create a function using function expression that iterates through an array and checks if each index is less than 10 and prints if it is or isn't.

const numbers = [1, 3, 4, 5, 6, 9, 11, 12, 15, 22]; // Created an array of numbers.

let lessThanTen = function (arr) {
  // Used a function, with a loop to iterate within the array, then used a if statement to access the values in the array inividually. Then logged to console.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      console.log(`${arr[i]} is less than 10.`);
    } else {
      console.log(`${arr[i]} is NOT less than 10.`);
    }
  }
};

// Call the function
lessThanTen(numbers);
