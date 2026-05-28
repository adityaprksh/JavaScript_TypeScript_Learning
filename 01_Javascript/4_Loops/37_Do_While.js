// DO While

// let i=0

// do{
//     console.log(i)
//     i++
// }
// while(i<=9)


//another example. 

// let retry=0
// do{
//     console.log("Execute a code")
//     console.log("Retry something", retry)
//     retry++
// } while(retry<3)


let i = 0;
do {
    console.log(i);
    i--;
} while (i > 0);

for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i);
}