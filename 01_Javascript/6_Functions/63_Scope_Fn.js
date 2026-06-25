//Scope in functions

let env = "Staging"

function setupConfig(){
    let timeOut = 3000;
    console.log(env)
    console.log(timeOut)
}

setupConfig()
console.log(env)
// console.log(timeOut)