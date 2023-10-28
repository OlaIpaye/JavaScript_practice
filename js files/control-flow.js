// LOOPS - Loops are used to loop through a portion of code over and over at a set number of times.

// Loop Breakdown
// if (initialiazation variable; this condition is true; execute this expression) {
//    do what's in this code block...
// }

// for (initialization; condition; afterthought) // this is the for loop set up, followed by a statement
//  statement

// for loop

for (let i = 0; i < 5; i++) {
  console.log("In loop: ", i);
}

console.log("loop finished");

const names = ["Ola", "Toby", "Micheal", "Bukola"]; // An array with names with values in lenght of 4.
/*
for (let i = 0; i < names.length; i++) { // Used this for loop to output each names in the array by using the lenght property to get the exact lenght of the array.
    console.log(names[i]);
}
*/

for (let i = 0; i < names.length; i++) {
  // Used this for loop to iterate through the array and output each names in the array by using a Template string to create a html template from the names in the array.
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

console.log("----------------------------------------------------------");

// while loop - the syntax is different from for loops
/*
let i = 0; // initialiazing variable.

while (i < 5) { // When using a while loop, I don't initialize the variable inside the loop, but it should already exist outside...
    console.log("In loop: ", i);
    i++; // Then put the execution expression below the console, inside the code block.
}
*/

// const realNames = ["Dimeji", "Toby", "Micheal", "Bukola", "Testimony"]; // An array with names with values in lenght of 5.

// let i = 0;

// while (i < realNames.length) {
//     console.log(realNames[i]);
//     i++;
// }

// do while loop

let i = 5; // do while loop initializes the variable first.

do {
  console.log("Value of i is: ", i); // Used a do while loop to initialize this code, regardless of the condition in the above variable.
  i++; // Then added 1 to it..
} while (i < 5); // Then execute this condition. So it will iterate the code block once because the value in the variable is 5.

console.log("----------------------------------------------------------");

// if statements

//
//
//

// Switch Statement Example
// Switch statements are useful when comparing a single value to multiple conditions.
var myAge = 29;

switch (myAge) {
  case 30:
    console.log("My age is 30.");
    break;
  case 29:
    console.log("My real age is 29.");
    break;
  case 31:
  case 40:
  case 55:
    console.log("These are not my real age.");
    break;
  default:
    console.log("My actual age is 29 and I will be 30 in Febrary 2024.");
}
