function outer(){
    let message = "Hello"
    console.log("Outer function called")
    function inner(){
        console.log(message," From Inner")
    }
    return inner()
}

let fn_inner = outer()
fn_inner()
