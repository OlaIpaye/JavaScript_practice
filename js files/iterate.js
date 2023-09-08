// Ways to iterate over an Object and Array

// Using a For..in loop
// This example uses a for...in loop to iterate over the enumerable properties (keys) of the person object.
// In each iteration, the key variable holds the property name (e.g., 'firstName') and person[key] retrieves the corresponding value (e.g., 'Oladimeji').
// The loop logs both the property name and its value.
const person = {
  firstName: "Oladimeji",
  age: 29,
  city: "Dudley",
};

for (const key in person) {
  console.log(key, person[key]);
}
// Output:
// firstName Oladimeji
// age 29
// city Dudley

//
//
//

// Object.keys() method
// The Object.keys() method returns an array of the object's own enumerable property names (keys).
const keys = Object.keys(person);
console.log(keys);
// Here, Object.keys(person) returns an array containing the enumerable property names (keys) of the person object.
// The resulting array, keys, is then logged to the console.
// Output: ['firstName', 'age', 'city']

//
//
//

// Object.values() method
// The Object.values() method returns an array of the object's own enumerable property values.

const values = Object.values(person);
console.log(values); // Output: ['Oladimeji', 29, 'Dudley']

// Object.values(person) returns an array containing the enumerable property values of the person object.
// The resulting array, values, is logged to the console.

//
//
//

// Object.entries() method
// The Object.entries() method returns an array of the object's own enumerable property [key, value] pairs.

const entries = Object.entries(person);
console.log(entries);

// Output: [['firstName', 'Oladimeji'], ['age', 29], ['city', 'Dudley']]
// Object.entries(person) returns an array of [key, value] pairs for each enumerable property in the person object.
// The resulting array, entries, contains arrays where the first element is the property name (key), and the second element is the property value.
// The entire array of entries is logged to the console.

//
//
//

// Using a for...of Loop with Object.entries() method together

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}
// This example combines a for...of loop with Object.entries() to iterate over the [key, value] pairs of the person object.
// In each iteration, the key variable holds the property name, and the value variable holds the property value.
// The loop logs both the property name and its value.
// Output:
// firstName Oladimeji
// age 29
// city Dudley

//
//
//

// Using forEach() (for Arrays Only)
// You can use the forEach() method to iterate over the elements of an array, but not for general objects.
const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  console.log(index, color);
});
// The forEach() method is used to iterate over the elements of the colors array.
// For each element, the provided callback function is called. In this case, the callback function logs the index and the color.
// This method is suitable for iterating over arrays, but not for general objects like the previous examples.
// Output:
// 0 'red'
// 1 'green'
// 2 'blue'

//
//
//

// Using forEach() (for Object Only)
const objectWithValues = {
  lastName: "Ipaye",
  age: 29,
  city: "Dudley",
};

// Convert the values of the object to an array
const valuesArray = Object.values(objectWithValues);

// Now, you can use forEach() on the values array
valuesArray.forEach((value, index) => {
  console.log(`Value at index ${index}: ${value}`);
});
// In this example:
// We first use Object.values() to convert the values of the objectWithValues object into an array. This makes it iterable.
// Then, we use forEach() on the valuesArray to iterate over the values. The callback function receives each value and its index.
// Keep in mind that this method allows you to iterate over the values of an object, but it doesn't give you access to the keys or the original object structure. If you need to iterate over both keys and values, other methods like for...in or Object.entries() are more appropriate.
// Output:
// Value at index 0: Ipaye
// Value at index 1: 29
// Value at index 2: Dudley

//
//
//

// Using a for loop to iterate over an object
const objectToIterate = {
  middleName: "Ibrahim",
  age: 29,
  country: "India",
};

const objectKeys = Object.keys(objectToIterate);

for (let i = 0; i < objectKeys.length; i++) {
  const key = objectKeys[i];
  const value = objectToIterate[key];
  console.log(`Key: ${objectKeys}, Value: ${value}`);
}
// In this example:
// We first use Object.keys(objectToIterate) to get an array of the object's keys.
// We then use a regular for loop to iterate over the indices of the keys array.
// Inside the loop, we access the key at the current index, and then use that key to access the corresponding value from the objectToIterate.
// We log both the key and the value.
// Using a regular for loop gives you fine-grained control over the iteration process, and it allows you to access both the keys and values of the object. However, keep in mind that it's slightly more verbose compared to methods like for...in, Object.keys(), or Object.entries().

//
//
//

//
