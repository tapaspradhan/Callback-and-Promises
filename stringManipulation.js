
function manipulateString(string,callbackFn) {
    const strOne=string.toUpperCase()
    callbackFn (strOne)
}


function logString(strTwo){
    console.log(strTwo);
}

manipulateString("hello world",logString);