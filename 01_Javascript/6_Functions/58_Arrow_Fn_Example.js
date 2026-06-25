//if (ourStatusCode >= 200 && ourStatusCode <300)

//this is normal function
function validateStatusCode(ourStatusCode){
    if(ourStatusCode >= 200 && ourStatusCode <300){
        console.log("Request is fine!")
    }
}

//This is function as expression
const validateStatusCode1 = function (ourStatusCode){
    if(ourStatusCode >= 200 && ourStatusCode <300){
        console.log("Request is fine!")
    }
}

//This is Arrow function
const validateStatusCode2 = ourStatusCode => {
    if(ourStatusCode >= 200 && ourStatusCode <300){
        console.log("Request is fine!")
    }
}

validateStatusCode(200)
validateStatusCode1(201)
validateStatusCode2(204)
