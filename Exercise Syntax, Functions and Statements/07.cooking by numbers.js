function cookingByNumbers(numStr, ...params){
let num = Number(numStr);
for(let command of params){
    switch(command){
        case 'chop': num = num / 2; break;
        case 'dice': num = Math.sqrt(num); break;
        case 'spice': num = num + 1; break;
        case 'bake': num = num * 3; break;
        case 'fillet': num = num * 0.8; break;
    }
    console.log(num);
    
}
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet' );