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

let myArray2 = [23, "string", myBool, ANSWER, true]; // arrays can contain any object - variables, numbers, constants, strings, booleans, other arrays, etc.

