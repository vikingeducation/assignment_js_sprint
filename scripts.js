// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function self(array){  
    if (array.length <= 1) {
      return array[0];
    } else {
      elem = array[0];
      largest = self(array.slice(1));
      if (elem > largest){
        return elem;
      } else {
        return largest;
      }
    };
  },
  
  reversed: function(string){  
    var chars = [];
    for (var x = string.length - 1; x >= 0; x-- ) {
      chars.push(string[x]);
    }
    return chars.join("");
  },

  loudSnakeCase: function(sentence){  
    //split on any cluster of non-letter characters
    words = sentence.split(/[^a-zA-Z0-9]+/);

    //if last chars were not letters, above regex leaves final blank
    if(words[words.length-1] == "") {
      words.pop();
    }

    //capitalize each word
    words.forEach(function(word, index, array) {
      array[index] = word.charAt(0).toUpperCase() + word.slice(1);
    });

    //return with snake_join
    return words.join("_");
  },

  compareArrays: function(arrayOne, arrayTwo){ 
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    } else {
        var sameElements = true
        arrayOne.forEach(function(elem, index){
          if(elem !== arrayTwo[index]){
            sameElements = false;
          }
        });
        return sameElements;
    }
  },

  fizzBuzz: function(num){  
    var resultArray = [];

    for (var i = 1; i <= num; i++) {
      if (i % 15 === 0) {
        resultArray.push("FIZZBUZZ");
      } else if (i % 5 === 0) {
        resultArray.push("BUZZ");
      } else if (i % 3 === 0) {
        resultArray.push("FIZZ");
      } else {
        resultArray.push(i);
      };
    }
    return resultArray;
  },

  myMap: function(myArray, myFunction){  
    var newArray = [];
    myArray.forEach(function(elem){
      newArray.push(myFunction(elem));
    })
    return newArray;
  },

  primes: function(maxNumber){
    if (maxNumber < 2) {
      return [];
    } else if (maxNumber == 2) {
      return [2];

    //main case here
    } else {
      var primeArray = [];

      //define a prime function in this function to pass around
      var isPrime = function(number) {
        for (i = 2; i < number; i++) {
          if (number % i === 0)
          return false;
        }
        return true;
      };

      //cycle through the possible primes and push primes to array
      for (var testNum = 2; testNum <= maxNumber; testNum++) {
        if (isPrime(testNum)){
          primeArray.push(testNum);
        }
      };

      return primeArray;
    }
  },
}
