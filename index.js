const readline = require('readline-sync');
console.log('Hello! Lets do some mathematics!');
console.log('Pick an operator: +, -. / or *');
const sign = readline.keyIn();
console.log('Pick a number, any number');
const result = readline.questionInt();
console.log('Pick another number, I love numbers!');
const response2 = readline.questionInt();
  var answer;
  
  switch(sign) {
    case '+':
      answer = (result + response2);
      break;
    case '*':
      text = "I am not a fan of orange.";
      break;
    case '-':
      text = "How you like them apples?";
      break;
      case '/':
        answer = (result / response2);
        break;
    default:
        console.log('Error!');
  }

console.log(result +sign +response2 +' equals ' +answer +'. Clever me!');