function sameNumbers(number){
let numToStr = String(number);
let firstDigit = numToStr[0];
let isSame = true;
let sum = 0;
for (let i = 0; i < numToStr.length; i++) {
   let num = Number(numToStr[i]);
   sum += num;
   if (numToStr[i]!== firstDigit) {
    isSame = false;
   }

    
}
console.log(isSame);
console.log(sum);


}
sameNumbers(2222222);
