// Create and Append properties

// Create Element document.createElement() - used to dynamically create a new html element within the dom. It takes the html tag I want to create as an argument and returns a new element of the type.

// Step 1: created a new div element dynamically and stored it in a const variable.
const newDivElement = document.createElement("div");

// Step 2: Customize the div element i dynamically created above
newDivElement.textContent = "This div was created dynamically.";
newDivElement.setAttribute("class", "dynamic-Div"); // this can be seen when i debug the div in browser
newDivElement.setAttribute("style", "margin-bottom: 50px; color: red"); // Customised the div uing the setAttribute method to add color and margin-bottom

// Step 3: Appended the div element I dynamically created to the dom
const parentElement = document.getElementById("parent-Section");
parentElement.appendChild(newDivElement);

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
