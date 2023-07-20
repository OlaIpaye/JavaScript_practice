// This is my first Javascript code!
// console.log('Hello World');


// Variables to store values
var hungerLevel = 50;
var isLunchTime = true;
var lunchBill = 11;


// Using Conditional Statements - if statement
if (hungerLevel === 50) {
    console.log("Hungry!");
}

// Using Conditional Statements - if, else if
if (isLunchTime === true) {
    console.log("Not Hungry at all!");
} else if (isLunchTime === true) {
    console.log("It is in fact Lunchtime now");
}

// Using Conditional Statements - if, else if, else
if (lunchBill < 10) {
    console.log("Blah Blah");
}   else if (lunchBill >= 11) {
    console.log("The bill is ready!");
}   else {
    console.log("Bill is now ready yo!");
}

// Typeof console log
console.log("This is a number data type: " + typeof lunchBill);
console.log(typeof isLunchTime);
console.log(typeof hungerLevel);