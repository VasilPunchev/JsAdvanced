function RotateArray(arr,rotations){
rotations = rotations % arr.length;

for (let i = 0; i < rotations; i++) {
    let last = arr.pop();
    arr.unshift(last)
    
}
console.log(arr.join(' '));


}
RotateArray(['1',  

'2',  

'3',  

'4'],  

2);