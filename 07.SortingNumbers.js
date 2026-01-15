function SortingNumbers(arr){
let result = [];
let sorted = arr.sort((a,b)=> a - b);
while(sorted.length > 0){
    let firstelement = sorted.shift();
    result.push(firstelement);
    let lastElement = sorted.pop();
    result.push(lastElement)
}
return result;


}
console.log(SortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
