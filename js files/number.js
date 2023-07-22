let radius = 10;
const pi = 3.14;

// console.log(radius, pi); // Logged the values of the let and const variables to the console.

// Using number data types with Arithmetic operators (+, -, *, /, %, **) Use the order of operations PEDMAS/BIDMAS
// console.log(10 / 2);
// let result = radius % 3;

// let result = pi * radius**2;

/*
let result = 5 * (10-3)**2; // Using PEDMAS, it outputs 245.

console.log(result); */


// Using Shorthand Notations ++, --, +=, -=, *=, /= to speed things up when doing calculations
let likes = 10;
// likes = likes + 1;
// likes++; // Used a shorthand notation ++ to add 1 to the value of the let variable, likes. It performs the same as the above likes variable reassignment and outputs 11.
//likes--; // Used a shorthand notation -- to subtract 1 from the value of the let variable, likes.

// likes += 10; // The += shorthand notation takes the value in the let variable, likes, and then add it to the 10. It outputs as 20.
// likes -= 5; // The -= shorthand notation takes the value in the let variable, likes, and then subtract it from the 5. It outputs as 5.
// likes *= 2; // The *= shorthand notation takes the value in the let variable, likes, and then multiplies it by 2. It outputs as 20.
//likes /= 2; // The /= shorthand notation takes the value in the let variable, likes, and then divides it by 2. It outputs as 5.
console.log(likes);


/*
// NaN - Not a Number shows up in the output when I make errors while calculating that didn't result to a number, examples below
console.log(5 - "hello");
console.log(10 / "yo"); */


// Concatenation with number data type values
// console.log("The blog post has " + likes + " retweets.");

// Concatenation VS Template string or Template literal
const title = "The Bro Code";
const author = "Ola";
const numbOfSales = "50";

// Concatenation
// let output = "The book called " + title + " by " + author + " has " + numbOfSales + " sales."; // Using concatenation with strings and +, gets the job done but it is a very long process and can get confusing.
// console.log(output);

// Template string or Template literal - This is created using backticks `` instead of strings, and using ${} instead of + to concatenate variables and strings together. It is better to concatenate variables using this method when I have multiple variables to work with.
let output = `The book called ${title} by ${author} has ${numbOfSales} sales.`;
console.log(output);

// Using Template string to create HTML Templates
let htmlTemplate = `
    <h2>${title}</h2>
    <p>by ${author}</p>
    <span>This book has ${numbOfSales} sales.</span>
`;

console.log(htmlTemplate);