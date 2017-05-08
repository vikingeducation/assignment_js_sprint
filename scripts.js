// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    let answer = 0;
    array.forEach(function(element) {
      answer = answer < element ? element : answer; 
    });
    return answer;
  },
  
  reversed: function(string){  
    let stringArray = string.split("");
    let newString = [];
    for(let i = stringArray.length - 1; i >= 0; i--){
      newString.push(stringArray[i]);
    }

    return newString.join("");
  },

  loudSnakeCase: function(string){  
    let stringArray = string.split(" ").filter(el => el !== "").map(el => el.replace(/\W/g, ''));
    let capitlized = stringArray.map(word => word.replace(/\b\w/g, l => l.toUpperCase()));
    return capitlized.join("_")
  },

  compareArrays: function(firstArray, secondArray){ 
    
    for(let i = 0; i < firstArray.length; i++){
      if(firstArray[i] !== secondArray[i]){
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(num){
    let answer = [];

    for(let i = 1; i <= num; i++){
      if (((i % 3) === 0) && ((i % 5) === 0)){
        answer.push("FIZZBUZZ");
      } else if((i % 3) === 0) {
        answer.push("FIZZ")
      } else if ((i % 5) === 0){
        answer.push("BUZZ")
      } else {
        answer.push(i)
      }
    }

    return answer;
  },

  myMap: function(array, func){  
    resultArray = [];
    array.forEach((el) => {
      resultArray.push(func(el));
    });

    return resultArray;
  },

  primes: function(num){  
    let primeArray = [];

    for(let i = 2; i <= num; i++){
      isPrime = true
      for(let j = 2; j <= i; j++){
        if((j !== i) && ((i % j ) === 0))
          isPrime = false
      }

      if(isPrime)
        primeArray.push(i)
    }

    return primeArray;
  },
}