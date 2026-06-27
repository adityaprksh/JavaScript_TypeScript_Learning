//Pure Function
//A pure function always returns the same output for same input. 

//Pure function has predicatable output.

function calculatePassRate(total, passed){
    return ((passed / total)*100).toFixed(2)
}

console.log(calculatePassRate(10,7))

function passingScore(score){
    return score >= threshold
}

let threshold = 70
console.log(passingScore(threshold))

 threshold = 50
console.log(passingScore(threshold))

