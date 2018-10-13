let nthNumber = 10;

const sum_of_multiples = function(nthNumber){
  let sum = 0;
  for(let index=1; index < nthNumber; index++){
    if(index % 3 == 0 || index % 5 == 0){
      sum = sum + index;
    }
  }
  return sum;
}
console.log(sum_of_multiples(nthNumber));
