function solve(num1Str,num2Str){
let number1 = Number(num1Str);
let number2 = Number(num2Str);
let result = 0;
for (let i= number1; i <= number2; i++) {
    result += i;
    
}
console.log(result);



}
solve('1', '5')