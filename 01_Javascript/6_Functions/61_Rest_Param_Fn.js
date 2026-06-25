//This is called Rest of paramaters
//Also known as Spread

function logResults(suiteName, ...result){
    console.log(suiteName)
    console.log(result)
}

logResults("Login", 1,2,3,4)
logResults("Register", "Hello","Aditya")
 