// textContent Property - used to access or modify the text content of an html element.

// Used textContent to get the element's text content:
let textDiv = document.getElementById("divA").textContent;
console.log(textDiv); // The text variable is now: 'This is some text!'

// Used textContent to get the p element, and output the text inside the second paragraph in the html
var allPara = document.getElementsByTagName("p");
var secondPara = allPara.item(1);

console.log(secondPara.textContent); // logged out the text inside the second paragraph in the html using the textContent property. Otherwise it would have logged out the <p> node to the console.
