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