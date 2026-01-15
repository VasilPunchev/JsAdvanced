function SortAnArrayBy2Criteria(arr){
let sorted = arr.sort((a,b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    } else{
        return a.localeCompare(b);
    }
})
for(let el of sorted ){
    console.log(el);
    
}

}
SortAnArrayBy2Criteria(['test',  

'Deny',  

'omen',  

'Default'] );
