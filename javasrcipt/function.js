// funciton (F,C) {
//     C=(F-32)/1.8;
//     let= (F-32)/1.8;
//     return let;
// }
// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);
//     document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
// }


function convertCtoF (C) {
let F= C*9/5 +32;
return F;
    
}
console.log(convertCtoF(10));
