const readline = require('readline-sync');
console.log('Hello! Lets do some mathematics!');


console.log('Pick an operator:');
const sign = readline.keyIn('+  - / or  *: ', {limit: '+-*/'}); //Limits user input to operators +, -, / & *
console.log('Pick a number, any number');
const result = readline.questionInt();
console.log('Pick another number, I love numbers!');
const response2 = readline.questionInt();

var answer;
//Applies the chosen operator
  
  switch(sign) {
    case '+':
      answer = (result + response2);
      break;
    case '*':
        answer = (result * response2);
      break;
    case '-':
        answer = (result - response2);
      break;
      case '/':
        answer = (result / response2);
        break;
    default:
        answer = console.log('Error!');
  }

  //Option to add further numbers
  console.log('Would you like to enter another number?');
  var moreNum = readline.keyIn('y/n: ', {limit: 'yn'}); //Limits user input to y (yes) or n (no)

  var newAnswer;

  //Repeat indefinitely until user has finished entering numbers
for (answer; moreNum=='y'; answer=newAnswer) {
  console.log('Go on then...');
  let latestNum = readline.questionInt();
  
  
  switch(sign) {
    case '+':
      newAnswer = (answer + latestNum);
      break;
    case '*':
      newAnswer = (answer * latestNum);
      break;
    case '-':
      newAnswer = (answer - latestNum);
      break;
      case '/':
        newAnswer = (answer / latestNum);
        break;
    default:
      newAnswer = console.log('Error!');
  }
  console.log('Total is ' +newAnswer +' Would you like to enter another number?');
  var moreNum = readline.keyIn('y/n: ', {limit: 'yn'}); //Limits user input to y (yes) or n (no)
}
if (newAnswer == undefined) {
  var newAnswer = answer;
};
console.log('The total is ' +newAnswer +' Clever me!');
console.log('Thank you for using my calculator!');



