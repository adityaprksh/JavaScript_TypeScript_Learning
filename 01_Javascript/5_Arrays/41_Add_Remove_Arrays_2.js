let arr = [1,2,3,4,5,6]
console.log(arr)
arr.splice(2,1) // on second index, delete one item.
arr.splice(2,0,99) // on second index, do not delete, but insert one element 99
arr.splice(1,2,10,20)

console.log(arr)
