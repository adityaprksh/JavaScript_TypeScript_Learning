let fruits = ["banana", "apple","cherry"]
let nums = [3,1,10,2,20,31]

fruits.sort()
nums.sort() //this is natural sorting or Lexical sorting

//console.log(fruits ,nums )


//to make it numeric sorting -- 
//rule -- (a,b)=>a-b   This is ascending order
//------- (a,b)=>b-a   This is descending order

nums.sort((a,b)=>a-b)
console.log(nums)