<<<<<<< HEAD
//----- Fn as Expression -----

const greet1 = function (name){
    return `Hello ${name}`
}
let result1 = greet1("Aditya")
console.log("result1 =>", result1)


// So now the same fucntion can be written as -->

const greet2 = (name)=> "Hi " + name
let r = greet2("Aditi")
console.log(r)


// - ------------------------------

const doubleIt = n => n*2
console.log(doubleIt(10)) 


// - ------------------------------

function add1(a,b){ 
    return a+b    
}


const add2 = (a,b)=>a+b
add2(21,34)

console.log(add1(21,34),add2(21,34))
console.log("------------------------------")

const say1 = ()=>"Hi"
console.log(say1())
=======
// Arrow Function (ES6)

// const greet = function (name1) {
//     return "Hi" + name1;
// }

// let r = greet("Pramod");
// console.log(r);

// const greet2 = (name1) => "Hi" + name1;
// let r2 = greet2("Pramod");
// console.log(r2);

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
// 

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Dutta");

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;

function say() {
    console.log("Hi");
}

const say1 = () => console.log("Hi");
const say2 = () => 'Hi';


//When there are multiple lines in Arrow function. 
const greet = (name) => {
    const message = "Hi" + name;
    return message;
}

>>>>>>> b15be4a (Ädding functions)
