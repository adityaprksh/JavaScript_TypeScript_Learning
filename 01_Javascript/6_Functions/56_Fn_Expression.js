//This is normal function -->
function greet(name){
    return `Hello ${name}`
}
let result = greet("Alice")
console.log(result)


//This is function as expression -->
const greet2 = function (name){
    return `Hello ${name}`
}
let result2 = greet2("Aditya")
console.log(result2)
