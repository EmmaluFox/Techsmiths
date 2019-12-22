const readline = require('readline-sync');

function greeting() {
console.log('Hello! Lets do some mathematics!');
}

function num(numb) {
  this.numb = +numb;
}

greeting();

console.log('Pick an operator:');
const sign = readline.keyIn('+  - / or  *: ', {limit: '+-*/'}); //Limits user input to operators +, -, / & *


console.log('Pick a number, any number');
var mynumb = new num(readline.questionInt());
console.log('Pick another number, I love numbers!');
var mynumb2 = new num(readline.questionInt());


var answer;
//Applies the chosen operator
  
  switch(sign) {
    case '+':
      answer = (mynumb.numb + mynumb2.numb);
      break;
    case '*':
        answer = (mynumb.numb * mynumb2.numb);
      break;
    case '-':
        answer = (mynumb.numb - mynumb2.numb);
      break;
      case '/':
        answer = (mynumb.numb / mynumb2.numb);
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

