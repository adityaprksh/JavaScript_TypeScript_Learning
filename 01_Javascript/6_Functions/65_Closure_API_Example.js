function makeRetryTracker(max){
    let attempt = 0
    function tryAgain(testName){
        attempt++
        if(attempt>max){
            return `${testName} exceeded the retries ${max}`
        }
        return `${attempt}/${max} for ${testName}`
    }
    return tryAgain
}

let retry = makeRetryTracker(3)

console.log(retry("Login"))
console.log(retry("Login"))
console.log(retry("Login"))
console.log(retry("Login"))