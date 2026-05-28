const prompt = require("prompt-sync")()

let num = prompt("Enter the number: ")
num = Number(num);

if(num%2===0){
    console.log('Even')
}
else{
    console.log('Odd')
}