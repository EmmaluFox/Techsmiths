const readline = require('readline-sync');
console.log('Hello! Lets do some mathematics!');
console.log('Pick an operator: +, -. / or *');
const sign = readline.keyIn();
console.log('Pick a number, any number');
const result = readline.questionInt();
console.log('Pick another number, I love numbers!');
const response2 = readline.questionInt();
if (sign == '+') {
    var answer = ((result) + (response2));
  } else if (sign == '*') {
    var answer = ((result) * (response2));
  } else if (sign == '-') {
    var answer = ((result) - (response2));
  } else if (sign == '/') {
    var answer = ((result) / (response2));
  } else {
      console.log('Error!')
  }
console.log(result +sign +response2 +' equals ' +answer +'. Clever me!');