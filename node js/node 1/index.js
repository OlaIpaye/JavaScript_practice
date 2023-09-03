// Learning NODE.JS

//
//

// PROCESS.ARGV - An array that stores the command line arguments passed to thenode.js script when iot is executed in the terminal.
// argv stands for "argument vector".

// Task - I want to use command-line arguments as input when writing Node.js applications.

// It's done when I have created a file, `index.js`, in the working directory.
// Done.

// It's done when I use `process.argv` to assign two arguments to variables.
// const num1 = process.argv[2];
// const num2 = process.argv[3];

// It's done when I compare those two variables to see whether they are the same or not.
// It's done if the program returns `true` when the values are the same and `false` if they are not.

// Used if statement to evaluate the arguments and determine if the condition is true or false.
// if (num1 === num2) {
//   console.log(true);
// } else console.log(false);

//

// Alternatively, using a Ternary Operator instead for the above
// console.log(num1 === num2 ? true : false);

//
//

// FS Module - Its a built-in module that provides file system functionality, allowing me to work with files, directories and thier properties. Allows me to read, write, update, delete files.
// fs is a Node standard library package for reading and writing files

// (fs.readFile) - Reading a file
// Importing fs module using the reqire statement and granting access from node, very important.
const fs = require("fs");

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// fs.readFile("data.csv", "utf8", (error, data) =>
//   error ? console.error(error) : console.log(data)
// ); // Goes into our file(file to read), utf8 helps in reading the file contents(encoding format), passed it 2 arguments (call back - if there is error or if not read the data file).. then output accordingly uisng the ternary operator.

//
//

// (fs.writeFile) - Writing a file
// Importing fs module using the reqire statement and granting access from node, very important.

fs.writeFile("log.txt", process.argv[2], (err) =>
  err ? console.error(err) : console.log("Success!")
);
