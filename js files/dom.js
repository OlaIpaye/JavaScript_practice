// Create and Append properties

// Create Element document.createElement() - used to dynamically create a new html element within the dom. It takes the html tag I want to create as an argument and returns a new element of the type.

// Step 1: created a new div element dynamically and stored it in a const variable.
const newDivElement = document.createElement("div");

// Step 2: Customize the div element i dynamically created above
newDivElement.textContent = "This div was created dynamically.";
newDivElement.setAttribute("class", "dynamic-Div"); // this can be seen when i debug the div in browser
newDivElement.setAttribute("style", "margin-bottom: 50px; color: red"); // Customised the div uing the setAttribute method to add color and margin-bottom

// Step 3: Appended the div element I dynamically created to the dom
const parentElement = document.getElementById("parent-Section"); // used getElementById to select the parent element I wanted to add the child element to.
parentElement.appendChild(newDivElement);

//

// Append appendChild() method - used to add a new child element to an existing html element in the html DOM. Allows me to dynamically insert elements as children within another element e.g body, section, etc.

// Step 1: Select and store the parent element I want to append to (optional)
// var bodyParent = document.getElementsByTagName("body");

// Step 2: Created the child element dynamically and stored it in a variable to use
var headerTwo = document.createElement("h2");
headerTwo.textContent = "This is the second heading"; // used textContent property to modify the content
headerTwo.setAttribute("class", "dynamic-H2"); // used the setAttribute property to add a class to the element i dynamicaly created
headerTwo.setAttribute("style", "color: blue"); // used the setAttribute property to change the color and modify the appearance of the element i dynamicaly created

// Step 3:
document.body.appendChild(headerTwo);

//
//
//

// textContent Property - used to access or modify the text content of an html element.

// Used textContent to get the element's text content:
let textDiv = document.getElementById("div1").textContent;
console.log(textDiv); // The text variable is now: 'This is some text!'

// If you prefer to set the element's text content, you can do:
document.getElementById("div1").textContent = "This text is different!";
// Dynamically updated the HTML for the DIV divA to: <div id="divA">This text is different!</div>

// Used textContent to get the p element, and output the text inside the second paragraph in the html
var allPara = document.getElementsByTagName("p");
var secondPara = allPara.item(1);

console.log(secondPara.textContent); // logged out the text inside the second paragraph in the html using the textContent property. Otherwise it would have logged out the <p> node to the console.

//
//
//

// Timers and Intervals

// setTimeout() - used to schedule the execution of a function or a piece of code after a scpecified delay in milliseconds. Allows me to introduce time delay before executing a code, which can be useful for implementing various bahaviors, animations, or asynchronous tasks.

// setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.

// The below example outputs all 3 messages to the console in 5 seconds
setTimeout(() => {
  console.log("this is the first message");
}, 5000); // gets outputs last
setTimeout(() => {
  console.log("this is the second message");
}, 3000); // gets outputs second
setTimeout(() => {
  console.log("this is the third message");
}, 1000); // gets outputs first

// Output:
// this is the third message
// this is the second message
// this is the first message

//
//
//

// Event Listeners

// Click Event -
// const clickButton = document.getElementById("my-Button");

// clickButton.addEventListener("click", function () {
//   alert("Button clicked!");
// });

// Mouseover Event -
// const hoverOver = document.getElementById("hover-Div");

// hoverOver.addEventListener("mouseover", function () {
//   hoverOver.textContent = "Text changed after mouseover detected";
//   hoverOver.setAttribute("style", "color: red");
// });

// // Window load Event -
// window.addEventListener("load", function () {
//   alert("Page has loaded");
// });

// Form Submit Event -

// Keypress Event -
