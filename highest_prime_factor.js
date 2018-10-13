let number = 600851475143;

const isPrime = function(number){
  for(let index=2; index<=Math.sqrt(number); index++){
    if(number % index == 0){
      return false;
    }
  }
  return true;
}

const highestPrimeFactor = function(number){
  let highestMultiple = 0;
  for (let index = 2; index <= Math.sqrt(number); index++){
    if (number % index == 0 && isPrime(index)){
      highestMultiple = index;
    }
  }
  return highestMultiple;
}
console.log(highestPrimeFactor(number));
