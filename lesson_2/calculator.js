/* Ask the user for the first number
Ask the user for the second number
Ask the user for the operation
Perform the operation on the two numbers
Print the result to the terminal */

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

prompt('Welcome to the Calculator!');

prompt("What's the first number?");
let number1 = readline.question();

while (number1.trimStart() === '' || invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (number2.trimStart() === '' || invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number");
  number2 = readline.question();
}


prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

console.log(`The result is ${output}`);