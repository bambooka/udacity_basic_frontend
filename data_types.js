/*
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

console.log(4 * 10 + 5 - 3);

/*
 * The Celsius-to-Fahrenheit formula:
 *    F = C x 1.8 + 32
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 */

let celsius = 12;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

/*
 * Create a string with the name of your favorite food.
 * The first letter of the string should be capitalized.
 */
let favoriteFood = 'Olive';
console.log(favoriteFood);

// fix the right side of the expression
let answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);

/*
 * Using escaping for strings
 */

let joke = 'Why couldn\'t the shoes go out and play?\nThey were all "tied" up!';
console.log(joke);

// esczping strings
let haiku = 'Blowing from the west\n' + 'Fallen leaves gather\n' + 'In the east.'
console.log(haiku);

// using semicolons
let thingOne = 'red';
let thingTwo = 'blue';

console.log(thingOne + ' ' + thingTwo);

// print full name

let fullName = 'Olga Bambooka';
console.log(fullName);

// Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15
// (don't perform the calculation yourself, let JavaScript do it!).
// Next, create a variable called tip and
// assign it the result of multiplying bill by a 15% tip rate.
// Finally, add the bill and tip together and store it into a variable called total.

let bill = 10.25 + 3.99 + 7.15;
let tip = bill * 0.15;
let total = bill + tip;
console.log(total.toFixed(2));

/*
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

let adjective1 = 'amazing';
let adjective2 = 'fun';
let adjective3 = 'entertaining';

let madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 +". I cannot wait to work through the rest of this " + adjective3 + " content!";
console.log(madLib);