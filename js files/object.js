// Arrays are used to store collections of things in such as strings and numbers.

let greatNames = ["Ola", "Toby", "Bukola"];
/*
greatNames[1] = "Marley"; // Used the variable and [] to reassign the value with the index of 1, and override it to change it to Marley. 
console.log(greatNames[1]); // Used the square bracket notation[] to get a single value from the list of values in the array in the variable. */

/*
let ages = ["17", "20", "23", "26", "29"];

ages[3] = "36";
console.log(ages[3]); */


// let random = ["Ola", "Toby", "Florence", 30, 60];
// console.log(random[2]);

// console.log(greatNames.length); // The length property outputs the amount of values stored in the greatNames array, which is 3.



// ARRAY FUNCTIONS - types of fucntions to use in an array.

// let outcome = greatNames.join(", "); // Used the join function to join the values in the greatNames array together into one value seperated with a comma and space.

// let outcome = greatNames.indexOf("Bukola"); // Used the indexOf function to get the index of the value of Bukola, inside the greatNames array, which is 2.

// let outcome = greatNames.concat(["Ibrahim", "Testimony", "Micheal"]); // Used the concat function (concatenation function), to pass an argument to the greatNames array, and added the additional values in the concat function to the original values to create one whole array.

let outcome = greatNames.push("Marley"); // Used the push function to add values to the greatNames array and output the length, which is 4 because the original array contains 3 values, then one more way added using the push function. The push function is called a destructive function bceause it changes the original value of the greatNames array.

outcome = greatNames.pop(); // Used the pop function to take off the end value in the greatNames array. So I used .push("Marley") to add a value to the end of the greatNames array, and then I used the pop function to take if off. The pop function is also a destructive function because it changes the original value in the greatNames array.

console.log(outcome);




// Undefined & Null
let sex;

console.log(sex, sex + 3, `Do not have ${sex}`); // It returns undefined when I output it because when a variable hasnt been given a value, it automatically output as undefined.


let age = null;

console.log(age, age + 3, `Do not have ${age}`); // The null value will output as null when used on it's own or in a template string, but it will return 0 when used with another number.


console.log("--------------------------------------------------------------------");



// OBJECTS - examples from my Coding Bootcamp

// It's done when the `customerOrder` object has three properties that store the drink's name, the number of sugars, and a Boolean indicating whether the order is ready.

let customerOrder = {
    drink: "coffee",
    numbOfSugar: 4,
    isOrderReady: false
};

console.log(customerOrder);

// It's done when the drink name and the number of sugars is logged to the console.

console.log(customerOrder.drink);
console.log(customerOrder.numbOfSugar);

// It's done when, if the order is ready, the message `"Ready for pick-up"` logs.

// if (customerOrder.isOrderReady == true) {
//     console.log("Ready for pick-up");
// } 

if (customerOrder.isOrderReady == true) {
    console.log(`Ready for pick-up: ${customerOrder.drink}`);
} 

// It's done when, if the order is not ready, the message `"Still in order queue"` logs.

// else {
//     console.log("Still in order queue");
// }

else {
    console.log(`Still in order queue: ${customerOrder.drink}`);
}

console.log("----------------------------------------");


// Using a For...in statement for Objects

for (let order in customerOrder) {
    console.log(order); // Used a for...in statement to output the const object by creating a new variable to access the key property in the const object and then logged to console.
}

for (let order in customerOrder) {
    console.log(customerOrder[order]); // To log only the values in the const object, I used a for...in statment to create a new variable and used the new variable name in a bracket notation with the const object name.
}

// Using a For...of statment for Arrays
const arrays = [1, 2, 3, 4, 5];

for (let logArray of arrays) {
    console.log(logArray); // Used the For..of statement to log out the values in the const variable.
}

console.log("----------------------------------------------------------------");

// Object.keys()

console.log(Object.keys(customerOrder)); // object.keys() outputs the const object key properties in an array.

console.log(Object.values(customerOrder)); // object.values() outputs the const object values in an array.

console.log(Object.entries(customerOrder)); // object.entries() outputs the const object key properties and values in an array.


console.log("----------------------------------------------------------------");


// It's done when the `menu` object has properties that store drink names, and prices.
const menu = {
    coffee: 4.50,
    hotChocolate: 4,
    milkshake: 3.50,
    latte: 2,
};

console.log(Object.keys(menu));


// It's done when the total price of the menu is calculated and printed to the console.

console.log(menu.coffee + menu.hotChocolate + menu.milkshake + menu.latte);


// Another way to do the above using a for loop

let totalPrice = Object.values(menu); // Stored the object property values in a let variable.

let menuTotal = 0; // Stored 0 in another variable to later use to output the For loop below.

for (let i = 0; i < totalPrice.length; i++) {
    menuTotal += totalPrice[i];
}

console.log("Total drinks menu cost:", + menuTotal);

// console.log(`Total drinks menu cost: ${menuTotal}`); // or log the above using Template string


console.log("---------------------------------------------------------------");



// Create a `menu` object that has properties that store drink options, food options, milk options, and size options.

const menuObject = {
    drinks: {
        ["name"]: ["coffee"],
        ["price"]: [5],
        ["size"]: ["large", "small", "xtraSmall"],
        ["withMilk"]: [false],
        ["iced"]: [true],
        ["withSugar"]: [true]
    },
    food: {
        cake: false,
        rice: true,
        pizza: true,
    },
    milk: {
        wholeMilk: "100%",
        almondMilk: "vegan",
        hempMilk: "vegetarian",
    },
    size: {
        large: true,
        small: true,
        xtraLarge: false
    }

};


// Each data set within the `menu` object should be created from either an array or object.

// Done.



// The Drinks array should consist of drink objects that contain the following properties if relevant to that drink: Name, Price, Size Options, Milk Options (If necessary), Iced or Not, Sugar or Not.

// Done.


// Print the following to the console: The price of a drink, The price of two drinks, The milk and size options


console.log(`The coffee drink costs: ${menuObject.drinks.price} pounds.`);

console.log(`Two coffee drinks cost: ${menuObject.drinks.price * 2} pounds.`);

console.log(`You can choose from these milk options: ${Object.keys(menuObject.milk)}`);

console.log(`You can choose from these size options: ${Object.keys(menuObject.size)}`);


// Get the length of drinks Object in the menuObject variable multidimensional object of array and objects

let drinksLength = Object.keys(menuObject.drinks).length; // Created a new let variable to store the length of the drinks array within the menuObject multidimensional object

console.log(drinksLength); // Then logged the new variable to the console.



console.log("----------------------------------------------------------");



