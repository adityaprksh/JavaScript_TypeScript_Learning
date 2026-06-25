function retry(testName, maxRetries = 3, delay=1000) {
    console.log(`Retrying ${testName} up to max  ${maxRetries} time, with delay of ${delay}`)
}

retry("Login Test")
retry("Login Test 2",5,2000)
 