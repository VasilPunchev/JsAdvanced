function solve(arr){
let sum = 0;
let inverse = 0;
let result = '';
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
for(let num of arr){
    inverse += 1/num;
}
console.log(inverse);

for(let str of arr){
    result += str;
    
}
console.log(result);


}
solve([1, 2, 3]);
