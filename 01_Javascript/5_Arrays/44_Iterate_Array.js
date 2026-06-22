let tests = ["login", "checkout", "search"]

for(let i=0;i<tests.length;i++){
    console.log(tests[i])
}

console.log("________________________")

for(i of tests){
    console.log(i)
}

console.log("________________________")

tests.forEach((test, index) => {
    console.log(test, index)
}) 

console.log("________________________")

for(let j in tests){
    console.log(j, "->", tests[j] )
}

console.log("________________________")

for(let [i, test] of tests.entries()){
    console.log(i, test)
}

