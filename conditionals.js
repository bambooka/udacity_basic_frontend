/*
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 */

let number = 2;

if (number % 2 === 0) {
    console.log('even')
} else {
    console.log('odd');
}

/*
 * Print type of group of musician by number person in it
 */

let musicians = 2;

if ((musicians === 0) || (musicians < 0) ) {
    console.log('not a group');
} else if (musicians === 1) {
    console.log('solo');
} else if (musicians === 2) {
    console.log('duet');
} else if (musicians === 3) {
    console.log('trio');
} else if (musicians === 4) {
    console.log('quartet');
} else if (musicians > 4) {
    console.log('this is a large group');
}

/*
 * write the code to represent checking your balance at the ATM.
 */

let balance = 325.00;
let checkBalance = true;
let isActive = false;

if(checkBalance){
    if(isActive && balance > 0){
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if(!isActive){
        console.log("Your account is no longer active.");
    } else if(balance === 0){
        console.log("Your account is empty.");
    } else{
        console.log("Your balance is negative. Please contact bank.");
    }
} else{
    console.log("Thank you. Have a nice day!");
}

/*
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 */

let flavor = 'strawberry';
let vessel = 'cone';
let toppings = 'cookies';

if (flavor === 'strawberry' || vessel === 'cone' || toppings === 'cookies') {
    console.log('I\'d like two scoops of '
        + flavor + ' ice cream in a ' + vessel
        + ' with ' + toppings + '.')
}

/*
* choose clothes for current weather
*/

let shirtWidth = 18;
let shirtLength = 28;
let shirtSleeve = 8.12;

if (shirtWidth <= 18 ) {
    if (shirtLength <= 28) {
        if (shirtSleeve <= 8.13) {
            console.log('S');
        }
    }
} else if ((shirtWidth >= 20) && (shirtWidth < 22)) {
    if (shirtLength === 29) {
        if (shirtSleeve === 8.38) {
            console.log('M');
        }
    }
} else if ((shirtWidth >= 22) && (shirtWidth < 24)) {
    if (shirtLength === 30) {
        if ((shirtSleeve >= 8.63) && (shirtSleeve < 8.88)) {
            console.log('L');
        }
    }

} else if ((shirtWidth >= 24) && (shirtWidth < 26)) {
    if (shirtLength === 31) {
        if ((shirtSleeve >= 8.88
            ) && (shirtSleeve < 9.63)) {
            console.log('XL');
        }
    }
} else if ((shirtWidth >= 26) && (shirtWidth < 28)) {
    if (shirtLength === 33) {
        if ((shirtSleeve >= 9.63) && (shirtSleeve < 10.13)) {
            console.log('2XL');
        }
    }
} else if ((shirtWidth >= 26) && (shirtWidth < 28)) {
    if (shirtLength === 34) {
        if (shirtSleeve >= 10.13) {
            console.log('3XL');
        }
    }
} else {
    console.log('N/A');
}

/*
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals

 */

let eatsPlants = true;
let eatsAnimals = false;

let category;
category = eatsPlants && eatsAnimals ?
    "omnivore" :
    eatsPlants ?
        "herbivore" :
        eatsAnimals ?
            "carnivore" :
            undefined;

console.log(category);

/*Write a switch statement to set the average
salary of a person based on their type of completed education.*/

let education;

education = "no high school diploma";
/*education = "a high school diploma";*/
/*education = "an Associate's degree";*/
/*education = "a Bachelor's degree";*/
/*education = "a Master's degree";*/
/*education = "a Professional degree";*/
/*education = "a Doctoral degree";*/

let salary;

switch (education) {
    case "no high school diploma": salary = 25636;
        break;
    case "a high school diploma": salary = 35256;
        break;
    case "an Associate's degree": salary = 41496;
        break;
    case "a Bachelor's degree": salary = 59124;
        break;
    case "a Master's degree": salary = 69732;
        break;
    case "a Professional degree": salary = 89960;
        break;
    case "a Doctoral degree": salary = 84396;
        break;
}

console.log('In 2015, a person with ' + education
    + ' earned an average of ' + '$' + salary.toLocaleString("en-US") + '/year.');