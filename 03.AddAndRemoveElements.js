function AddAndRemoveElements(arr){
let result = [];
let initialNum = 1;

for(let command of arr){

    if (command === 'add') {

        result.push(initialNum);

    }else if(command === 'remove'){
        result.pop();
    }
         initialNum++;
}
    if (result.length === 0) {

     console.log("Empty");
        
        
    } else {
      for(let el of result){
        console.log(el);
        
    }
}

}
AddAndRemoveElements(['add',  

'add',  

'add',  

'add']);
