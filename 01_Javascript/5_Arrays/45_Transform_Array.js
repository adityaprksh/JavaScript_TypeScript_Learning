let scores = [45,82,91,60,73]

//map - trasnform elvery element and return a new array.
// it returns same number of elements in your array. 
let grades = scores.map(s => s > 70 ? "Pass" : "Fail")
console.log(grades)

let passing = scores.filter(s => s > 70)
console.log(passing)

let sum = scores.reduce((a,b)=>a+b,0)
console.log(sum)

let nested = [[1,2],[3,4],[5]]
console.log(nested.flat())