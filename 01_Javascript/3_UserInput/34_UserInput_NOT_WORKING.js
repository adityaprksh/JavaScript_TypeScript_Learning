// const prompt = require("prompt-sync")()

// let num = prompt("Enter the number: ")
// num = Number(num);

// if(num%2===0){
//     console.log('Even')
// }
// else{
//     console.log('Odd')
// }


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processNumber(input) {
  const num = Number(input.trim());

  if (Number.isNaN(num)) {
    console.log('Please enter a valid number.');
  } else if (num % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }

  rl.close();
}

rl.question('Enter number: ', processNumber);