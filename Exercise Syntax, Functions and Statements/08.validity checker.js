function validityChecker(x1, y1, x2, y2){

    function check(a1, b1, a2, b2){
    let d = Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2);
    let status =  Number.isInteger(d) ? 'valid' : 'invalid';
    console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is ${status}`);
    
    }
    check(x1, y1, 0, 0);
    check(x2, y2, 0, 0);
    check(x1, y1, x2, y2)
}
validityChecker(3, 0, 0, 4);
