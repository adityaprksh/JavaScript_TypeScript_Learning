let num = [1,2,3,4,5]

console.log(num.slice(0,3)) // from 0th index to 3-1 = 2 index. 
console.log(num.slice(3)) // from given index till last. 
console.log(num.slice(-3))

// Slice doesnt modify the original array. It only creates a new array only. 

// there is another function as splice 
// Splice modifies the original array as well. 

let arr = [10,20,30,40,50]
console.log(arr.splice(1,3))
console.log(arr)

