//Question 1 - 

let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
        break
    case "banana":
        console.log("Banana selected");
        break
    case "cherry":
        console.log("Cherry selected");
    case "date":
        console.log("Date selected");
    default:
        console.log("Default reached");
}


// Questions 2 - 
let score = 69

switch(true){
    case (score>=90):
        console.log('Top performer')
        break
    case(score>=80):
        console.log('Second performer')
        break
    case(score>=70):
        console.log('Can work with')
        break
    default:
        console.log('Retry')
}