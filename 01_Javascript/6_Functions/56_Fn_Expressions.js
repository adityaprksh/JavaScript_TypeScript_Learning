

// We can store a function into some variable. 


function greet(name){
    return `Hello ${name}`
}

let result = greet("Aditya")
console.log(result)

//----- Fn Expression -----

const greet1 = function (name){
    return `Hello ${name}`
}
let result1 = greet1("Aditya")
console.log("result1 =>", result1)
