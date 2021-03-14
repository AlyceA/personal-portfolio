typeof myNum; // check the type of data (string, number, etc.)

// Variables - containers that store values

var name; // a declared variable, but not initialized (no value) and it's in the global scope (BAD).

let foo; // a declared variable that can be changed

const bar = 'Bar'; // a declared and initialized variable that can't be changed - short for 'constant'
// = is the assignment operator. Read as "is assigned the value of..."

const ANSWER = 42; // you cannot reassign the constant to anything else. ANSWER will always be 42. 

// (asi) automatic semicolon insertion - javascript compiler will do this automatically. Semicolons are more of a style thing

// Strings - a string of characters. Encased in single quotes or double quotes.

let string1 = "Hello World!";

let string2 = 'Hello Internet';

let string3 = new String("A Whole New World");

// Numbers 

let myNum = 123456789;

let myNum2 = 76.89;

"1" == 1; // true, because of type coercion and loose equality checking (changes the data type)
"1" === 1; // false, because this is strict equality checking. Both data must be the same data type

// Boolean - can only be true or false

let myBool = false;

// Array - a list of things

let myArray = []; // empty array

//              0       1        2       3      4
let myArray2 = [23, "string", myBool, ANSWER, true]; // arrays can contain any object - variables, numbers, constants, strings, booleans, other arrays, etc.
// Arrays are indexed. Everything in the array has an index number (where it sits in the array). 23 is at index 0, "string" is at index 1, etc. Arrays are a 0-base index.

let secondElement = myArray2[1]; // returns "string" (if the position doesn't exist in an array, will return undefined)

let lastItem = myArray2[myArray2.length - 1]; // returns last item in the array (need the -1 because of 0 index)

myArray2.push('Alyce'); // adds 'Alyce' to the end of myArray2

myArray2.pop; // removes the last item in the array

myArray2.unshift('beginning'); // adds 'beginning' to index 0 within myArray2

myArray2.shift; // removes the first item in the array

let myLongString = "asdfjkl;1235kl;lkjdanivioowlndiojanwe34345346432";

myLongString.length; // returns 48. Strings are basically just arrays of characters

// Object - everything in Javascript is essentially an object. Javascript is an object-based language (different from object-oriented language)

let minObject = {}; // {} are an indicator of the body of an object or the body of a function

const myCar = {
    make: 'Honda',
    model: 'Element',
    year: '2008',
    color: 'black',
    vin: '9809709870q12342asdfj2343', // dangling comma - a lot of programmers prefer adding it
}
// order of key properties doens't matter

myCar.numDoors = 4; // adds property numDoors to the object myCar

const anotherObject = {
    words: ['string', 'hello', 'world'],
    car: {
        make: 'Ford',
        model: 'Focus',
    },
    awesome: true,
}; // Object properties can include entire objects within the object

// Functions - little engines. It takes inputs and when it runs, it can produce outputs

function myFunction() { // () indicate a function is involved
    return 'Hello World!';
};

myFunction(); // calls the function - it will return the output of the function
myFunction; // calls the actual function (won't run the function)

function sumTwoThings(one, two) { // one and two are parameters or arguments
    return one + two;
};

sumTwoThings(2, 2); // returns 4
sumTwoThings('2', '2'); // returns '22' because of concatenation - combining two string characters together.
sumTwoThings('4', 5); // returns '45' because of type coersion - turns 5 into a string.
sumTwoThings('8', true); // returns '8true' because of type coersion - turns true into a string.

// Arrow Functions - takes its parameter to the left of the arrow, then returns the value on the right hand side of the arrow. Can do it on one line.

const theFunction = () => 'I am an arrow function';

// find is a higher order function. It accepts another function as a parameter.
// filter, map, and reduce are the most popular higer order functions(HOF), but forEach, every, find, and some are also HOFs.