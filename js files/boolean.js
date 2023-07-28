// Booleans and Comparisons
// console.log(true, false, "true", "false");

// Functions can return booleans
// let thisEmail = "ipayeola@gmail.com";
// let evidenceFile = ["ola", "marley", "testimony", "bukola"];

// let evidence = thisEmail.includes("@"); // Used the includes function to output true or false, if the variable thisEmail includes the @, in its value and it does so it outputs true, if it didn't it would output false.

// let evidence = evidenceFile.includes("bukola"); // Used the includes function to output true or false, if the array evidenceFile includes the argument I passed it "bukola", in its value and if it does, it outputs as true, if it doesn't it out puts as false. It outputs as true.

// console.log(evidence);


// COMPARISION OPERATORS ==, !=, <, >, <=, >=,
let ages = 30;

// console.log(ages == 30); // Used the == comparision operator to check if ages is equal in value, and it returns true, if not it will return false. It output as true because 30 == 30.

// console.log(ages == 25); // It outputs as false because ages has a value of 30, and it is not equal to 25.

// console.log(ages != 30); // Used the != comparision operator to check if ages if not equal in value, and it returns false, because ages has a value of 30, and it is equal to 30. The ! negation operator returns the opposite.

// console.log(ages < 30);

// console.log(ages > 25);

// console.log(ages <= 25);

// console.log(ages >= 25);


// let ourName = "ola";

// console.log(ourName == "ola");
// console.log(ourName == "Ola");
// console.log(ourName > "Abba"); // Outputs as true because the first letter in the value of the ourName variable, comes later in the alphabeth than the first letter in the string in the console. Also, small caps are greated than capitals in JavaScript.
// console.log(ourName > "steve"); // Outputs as false because the first letter in the string in the console is greater than the first letter in the value of the ourName variable, because it comes later in the alphabeth. So it is deemed greater in JavaScript.


// // LOOSE COMPARISION
// console.log(ages == 30); // Outputs as true because ages is equal to 30.
// console.log(ages == "30"); // Outputs as true too, but due to javaScript coercion converting a string to a numnber because it conatins a number first.
// console.log(ages != 30); // Output as false because ages is equal to 30.
// console.log(ages != "30"); // Outputs as false too, but due to javaScript coercion converting a string to a numnber because it conatins a number first.

// // STRICT COMPARISION
// console.log(ages === 30); // Used strict equality comparision operation to check if ages is equal in value and data type. It outputs as true.
// console.log(ages === "30"); // Outputs as false, bceause the ages variable is not equal in value and data type.

// console.log(ages !== 30); // Output as fasle, because ages is equal to 30, in value and data type.
// console.log(ages !== "30"); // Output as true because ages is not equal to "30", which is a string.



// EXPLICIT DATA TYPE CONVERSION
let score = "200"; // It started as a string value.

score = Number(score); // Used this Number function to convert the data type from a string value to a number value and then added 1 to it in the console. It outputs as 201.
console.log(score + 1); // Logged out the variable, and added 1 to it, since it has been reassigned and converted to a number value.
console.log(typeof score); // Logged out the primitive data type.


let stringToNumber = String(50); // Used the String function to convert the value stored in the variable from a number into a string data type.
console.log(stringToNumber, typeof stringToNumber); // Then I logged out the variable and used the typeof operation to output the original data type.

// TRUTHY and FALSEY VALUES
// let truFal = Boolean(0); // Used the Boolean function to output the truthy or falsey value stored in the variable. In JS, positive numbers are considered truthy values and negative numbers are considered falsey values. So it outputs as true.

let truFal = Boolean("0"); // This outputs as true because strings are always truthy values unless they are empty, then that is the only time they are falsey values.

console.log(truFal, typeof truFal); // Logged out the variable and the primitive data type.

// EXPLICIT DATA TYPE CONVERSION
// This type fo data type conversion is what happens when JavaScript converts data types in the background by coersion, e.g by converting a string container a number, into a number value when adding that value to another number.




