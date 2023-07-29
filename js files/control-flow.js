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

for (let i = 0; i < names.length; i++) { // Used this for loop to iterate through the array and output each names in the array by using a Template string to create a html template from the names in the array.
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

console.log("----------------------------------------------------------");

// while loop - the syntax is different from for loops

let i = 0;

while (i < 5) { // When using a while loop, I don't initialize the variable inside the loop, but it should already exist outside...
    console.log("In loop: ", i);
    i++; // Then put the execution expression below the console, inside the code block.
}


