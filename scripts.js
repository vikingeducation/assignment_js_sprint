// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(inArray){
    let largest = inArray[0];
    for (i=1;i<inArray.length; i++){
      if (inArray[i] > largest) {
        largest = inArray[i];
      }
    }
    return largest;
  },

  reversed: function(inString){
    let reverseString = '';
    for (i=inString.length - 1; i>=0; i--){
      reverseString = reverseString.concat(inString[i]);
    }
    return reverseString;
  },

  loudSnakeCase: function(inString){
    inString = inString.replace(/\W/g,'_');
    let returnArray = [];

    inString.split('_').forEach(function(element){
      if (element.match(/\w/)) {
        returnArray.push(element.charAt(0).toUpperCase()+element.slice(1).toLowerCase());
      };
    });

    return returnArray.join('_');
  },

  compareArrays: function(inArray1, inArray2){
    if (inArray1.length = inArray2.length) {
      for(i=0;i<inArray1.length;i++) {
        if (inArray1[i] !== inArray2[i]) return false;
      };
    } else return false;
    return true;
  },

  fizzBuzz: function(inNumber){
    let returnArray = [];
    for(let i=1;i<=inNumber; i++){
      if (!(i % 3) && !(i % 5)) {
        returnArray.push('FIZZBUZZ');
      } else if (!(i % 5)) {
        returnArray.push('BUZZ');
      } else if (!(i % 3)) {
        returnArray.push('FIZZ');
      } else returnArray.push(i);
    };
    return returnArray;
  },

  myMap: function(inArray, inFunc){
    return inArray.map(inFunc);
  },

  primes: function(inNum){
    // Sieve of Eratosthenes
    let primeArray = [];
    let resultArray = [];
    for(var i=0; i<inNum;i++){
      primeArray.push(true);
    };


    for(var p = 2; p*p <= inNum; p++) {
    // If prime[p] is not changed, then it is a prime
      if (primeArray[p] == true) {
        // Update all multiples of p
        for(var i = p*2; i < inNum; i += p) {
            primeArray[i] = false;
        };
      };
    };

    // generate output array
    for(var i=2; i<inNum;i++){
      if (primeArray[i]) {resultArray.push(i);};
    };

    return resultArray;
  },
}
