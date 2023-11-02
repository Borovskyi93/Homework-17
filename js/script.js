const loopFunction = function () {
    let sumNumber = 0;

    return function (userNumber) {
        sumNumber += userNumber;
        console.log(sumNumber);
        return sumNumber;
    }
}

const loopModernFunc = loopFunction();

loopModernFunc(5);
loopModernFunc(8);
loopModernFunc(2);
