let username = "Dev";
let password = "secure123";
let isAccountLocked = false;

// Logical operator + if-else statement

if (username==='Dev' && password==='secure123'){
    if(isAccountLocked){
        console.log("Account is locked")
    }
    else{
        console.log("Login successful")
    }
}
else{
    console.log("Can't login")
}

//Que2-- 
let x = 10;
if (x > 5)
    console.log("x is big"); //Single line if condition is valid. Only if is also valid. 

//Que3 --- Even Odd - 
let num = 98
if(num%2===0){
    console.log(num + " is even")
}
else{
    console.log(num + " id odd")
}

//Que4 - Leap year 

let year = 2028
if(( year%4 === 0 && year%100 !==0) || year%400===0 ){
    console.log("Leap year")
}
else{
    console.log("Not a leap year")
}

