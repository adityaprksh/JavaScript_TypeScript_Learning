let browsers = ["Chrome", "Firefox", "Opera", "Edge", "Safari"]
console.log("Existing list", browsers)
for(let i=0;i<browsers.length; i++){
    if(browsers[i]==="Opera"){
        console.log("Opera is not supported in selenium, hence removing it")
        browsers.splice([i],1)
        break
    } 
}
console.log("New list", browsers)