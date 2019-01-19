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