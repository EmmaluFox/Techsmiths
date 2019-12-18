const readline = require('readline-sync');
console.log('Hello! Lets do some multiplication!');
console.log('Pick a number, any number...');
const result = readline.prompt();
console.log('Pick another number, I love numbers!');
const response2 = readline.prompt();
const answer = ((result)*(response2));
console.log(result +' multiplied by ' +response2 +' equals ' +answer +'. Clever me!');