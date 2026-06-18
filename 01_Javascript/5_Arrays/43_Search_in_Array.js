let results = ["Pass", "Fail", "Pass", "Error", "Fail"]

// indexOf function - returns first index of element

// console.log(results.indexOf("Fail")) //1
// console.log(results.indexOf("Skip")) //-1 because this is not present in elements. 


// console.log(results.lastIndexOf("Fail")) //4

// console.log(results.includes("Error")) //True
// console.log(results.includes("Skp")) //false

//FINDING an element
let nums = [10,20,30,40,50]
console.log(nums.find(x=>x>20))
console.log(nums.findIndex(x=>x>20))
console.log(nums.findLast(x=>x>20))
console.log(nums.findLastIndex(x=>x>20))
