function outer(){
    let message = "Hello"
    console.log("Outer function called")
    function inner(){
        console.log(message," From Inner")
    }
    return inner
}

let fn_inner = outer()
fn_inner()


console.log("____________________________")

 function makeCounter (start =0){
    let count = start
    return{
        increment() {count++},
        decrement() {count--},
        get() {return count}
    }
 }

 let counter = makeCounter()
 counter.increment()
 counter.increment()
 counter.increment()
console.log(counter.get())
counter.decrement()
console.log(counter.get()) 
