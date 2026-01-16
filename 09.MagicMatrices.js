function MagicMatrices(matrix){
   const targetSum = matrix[0].reduce((a,b)=> a + b, 0);

   const rowsAreMagic = matrix.reduce((isValid,row) => {
    const rowSum = row.reduce((a,b)=> a + b,0);
    return isValid && rowSum === targetSum;
   },true);

   const colsAreMagic = matrix[0].reduce((isValid ,_ ,colIndex )=> {

    const colSum = matrix.reduce((sum, row) => sum + row[colIndex],0);
   
   return isValid && colSum === targetSum;
}, true);
 return rowsAreMagic && colsAreMagic;
}
console.log(MagicMatrices([[4, 5, 6], 
               [6, 5, 4], 
               [5, 5, 5]]));
