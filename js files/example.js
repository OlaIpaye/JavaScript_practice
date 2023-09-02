// Learning JS Concepts - JavaScript: Understanding the Weird Parts - The First 3.5 Hours

// Variable Environments - Execution Stack
function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

// Outputs: 1 2 undefined 1
// Explanation: The output is because line (15 and 16) gets logged to the console first because the variable is a global variable since it is outside of the function and it is first on the execution stack. So it outputs 1, straight-forward. Then it moves on to line (17) and logs the function a and whats inside of it - which is its own varible and outputs 2. Then while still in function a, it logs the function b and goes inside the function b and logs the variable inside function b, and outputs undefined. Lastly, it comes back to line (18), and logs the global variable again, and outputs 1 to the console.

//
//
//

//
