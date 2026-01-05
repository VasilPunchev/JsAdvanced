function solve(first,second,third){
let sum = 0;
let avg = 0;
sum += first.length;
sum += second.length;
sum += third.length;
console.log(sum);
avg = Math.floor(sum /3);
console.log(avg);


}
solve('chocolate', 'ice cream', 'cake');