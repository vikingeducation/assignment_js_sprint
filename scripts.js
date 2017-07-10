// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){
    return Math.max.apply(null, input);
  },

  reversed: function(input){
    return input.split("").reverse().join("");
  },

  loudSnakeCase: function(input){
    //remove the punctuation
    var modified = input.replace(/[^\w+-]+/g, ' ');

    //remove any remaining trailing spaces
    modified = modified.replace(/[ \t]+$/,'');

    //break words into an array
    modified = modified.split(" ");

    //cap the first letter and lower the rest
    modified = modified.map(function(word){
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    });

    //join the words back together with _
    modified = modified.join("_");

    //output the result
    return modified;
  },

  compareArrays: function(array1, array2){
    return array1.toString() === array2.toString();
  },

  fizzBuzz: function(input){
    var fizzyNumbers = [];

    for(i = 1; i <= input; i++){
      if((i % 3 === 0) && (i % 5 === 0)){
        fizzyNumbers.push("FIZZBUZZ");
      }else if(i % 3 === 0){
        fizzyNumbers.push("FIZZ");
      }else if(i % 5 === 0){
        fizzyNumbers.push("BUZZ");
      }else{
        fizzyNumbers.push(i);
      }
    }

    return fizzyNumbers;
  },

  myMap: function(inputArr, inputFunc){
    outputArr = [];
    inputArr.forEach(function(item){
      outputArr.push(inputFunc(item));
    });

    return outputArr;
  },

  primes: function(input){
    //generate list possible divisors excluding 1 and the input
    var possibleDivisors = [];
    for(i = 2; i < input; i++){
      possibleDivisors.push(i);
    }

    //define isPrime
    var isPrime = function(num) {
      for (var i = 2; i < num; i++) {
        if(num%i==0)
          return false;
      }
      return true;
    }

    //create primes array placeholder
    var primesOutput = [];

    //determine if each divisor is prime and push into placeholder
    possibleDivisors.forEach(function(divisor){
      if(isPrime(divisor)){
        primesOutput.push(divisor);
      }
    });

    return primesOutput;
  },
}
