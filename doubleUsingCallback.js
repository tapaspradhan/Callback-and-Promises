// Question No 1
function double( integer, callback){
    const doubleArr=integer.map((number)=>{
        return callback (number)
    })
    return doubleArr
    
}
let arr=[2,4,5,6,9]

function callback(num) {
    return num * 2
}

const result=double(arr,callback)

console.log(result);