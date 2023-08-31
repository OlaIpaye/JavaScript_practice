// Learning NODE.JS

//

// PROCESS.ARGV - An array that stores the command line arguments passed to thenode.js script when iot is executed in the terminal.
// argv stands for "argument vector".

// Task - I want to use command-line arguments as input when writing Node.js applications.

// It's done when I have created a file, `index.js`, in the working directory.
// Done.

// It's done when I use `process.argv` to assign two arguments to variables.
const num1 = process.argv[2];
const num2 = process.argv[3];

// It's done when I compare those two variables to see whether they are the same or not.
// It's done if the program returns `true` when the values are the same and `false` if they are not.
if (num1 === num2) {
  console.log(true);
} else console.log(false);
