//JS Assignment 12

//Task 01

// var input = prompt("Choose head or tail").toLowerCase();

// var head = 0;
// var tail = 1;

// var randomNumber = Math.floor(Math.random() * 2);

// if (randomNumber === head) {
//     console.log("Heads");
//     if (input === "head") {
//         console.log("You win!");
//     } else {
//         console.log("You lose!");
//     }
// } else if (randomNumber === tail) {
//     console.log("Tails");
//     if (input === "tail") {
//         console.log("You win!");
//     } else {
//         console.log("You lose!");
//     }
// }

//Task 02

// var diceValue = Math.floor(Math.random() * 6) + 1;
// console.log("Rolled: " + diceValue);

//Task 03

// var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// var passwordArray = [];

// for (var i = 0; i < 10; i++) {
//     var randomIndex = Math.floor(Math.random() * characters.length);
//     passwordArray.push(characters[randomIndex]);
// }

// console.log(passwordArray);

// var password = passwordArray.join('');

// console.log("Generated Password: " + password);