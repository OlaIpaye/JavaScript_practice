// This is my first Javascript code!
// console.log('Hello World');


// Variables to store values
var hungerLevel = 50;
var isLunchTime = true;
var lunchBill = 11;
var firstName = "Ola";
var surname = "Ipaye";
var fullName = firstName + " " + surname; // Used string concatenation in this fullName variable to add space between the values.

var nameLists = ["Ola", "Ibrahim", "Babatunde", "Ipaye"];


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
console.log("This is a number data type: " + typeof lunchBill); // Using the typeof operator to log the value type stored in the lunchBill variable. Then using an expression and a plus concatenation to display the value.

console.log(typeof isLunchTime); // Using the typeof operator to log the value type stored in the isLunchTime variable.

console.log(typeof hungerLevel); // Using the typeof operator to log the value type stored in the hungerLevel variable.

console.log(firstName, surname); // Using the console(); function to output the values in the firstName and surname variable.

console.log(fullName); // Using the console(); function to output the values in the fullName variable with help of string concatenbation.

console.log(fullName.length); // Using the console(); function to output the length property of the string values in the fullName variable.

console.log(nameLists.indexOf("Ipaye")); // Using a indexOf() function to log the output of the index of "Ipaye" in the array named nameLists.

console.log(fullName[5]); // Using the console(); function to output the single character from the fullName varible string values, with help of the square bracket notation []. It outputs p because the " ", in the fullName variable count as a characrter too.


console.log(fullName.toUpperCase()); // Using a toUpperCase() function in the colsole.log function to log the output of the fullName variable as capital letters.

let lowerCase = fullName.toLowerCase(); // Created a let variable called lowerCase to store the value that fullName variable outputs in the console. Then using the toLowerCase function to change the values to lowercase using console.log function.
console.log(fullName);


console.log("-------------------------------------------------------------------------------------------------------------------------------");