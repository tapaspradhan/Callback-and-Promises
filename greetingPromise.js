function greetingPromise() {
    return new Promise((resolve, reject) => {
        resolve("Tapas")
    })
}

let result=greetingPromise()

result.then(function (e) {
    console.log("Hello,", e);
}).catch(function (){
    console.log("got it");
})
