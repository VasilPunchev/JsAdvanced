function previousDay(year,month,day){
let previousDay = new Date(year,month - 1,day- 1).getDate(day - 1);
console.log(`${year}-${month}-${previousDay}`);

}
previousDay(2015, 5, 10 );
