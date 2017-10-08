var sprintFunctions = {
  largestEl: function(array){  
    return array.sort().pop();
  },
  
  reversed: function(string){  
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(input){  
    return input
    .split(/[^A-Za-z]/)
    .filter(f => f.length > 0)
    .map(s => s.replace(s.charAt(0), s.charAt(0).toUpperCase()))
    .join("_");
  },

  compareArrays: function(ar1, ar2){ 
    
    if (
      (ar1.length == ar2.length) 
      && (ar1.every((n,i) => (n == ar2[i])))
    ){
      return true;
    } 
    else {
      return false;
    }
  },

  fizzBuzz: function(num){  
    var numArray = [];
    for(i = 1; i <= num; i++){
      var fbz;
      if (i % 3 == 0) {
        fbz += "FIZZ";
      }
      if (i % 5 == 0) {
        fbz += "BUZZ";
      }
      if (!fbz) {
        fbz = i;
      } 
      numArray.push(fbz);
      fbz = "";
      console.log(numArray);
    }
    return numArray;
  },

  myMap: function(inputArr, inputFunc){  
    return inputArr.map(inputFunc);
  },

  primes: function(max){  
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        primes.push(i);
        for (j = i*2; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  },
}