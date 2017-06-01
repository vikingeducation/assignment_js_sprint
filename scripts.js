// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){ 
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    } 

    return max;
  },
  
  reversed: function(str){  
    if (str.length < 1) {
      return '';
    }

    return str[str.length - 1] + this.reversed(str.substring(0, str.length - 1))
  },

  // loudSnakeCase takes a full sentence and puts it into "Loud_Snake_Case" format but strips out any non-character elements (like punctuation).

  loudSnakeCase: function(str){  
    let filtered = str.replace(/[^a-zA-Z ]/g, '');
    let strArr = filtered.split(' ');
    let result = [];
    
    for (let i = 0; i < strArr.length; i++) {
      let newWord;
      let firstLetter = strArr[i][0];
      let restOfWord = strArr[i].slice(1);
      
      if (strArr[i] !== '') {
        newWord = firstLetter.toUpperCase() + restOfWord;
        result.push(newWord);
      }
    }
    
    return result.join('_');
  },

  compareArrays: function(arr1, arr2){ 
    let result = false;
    let checker = 0;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        checker++;
      } 
    }

    if (checker === arr2.length) {
      result = true;
    }

    return result;
  },

  fizzBuzz: function(n){  
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        console.log('FIZZBUZZ');
      } else if (i % 5 === 0) {
        console.log('BUZZ');
      } else if (i % 3 === 0) {
        console.log('FIZZ');
      } else {
        console.log(i);
      }
    }
  },

  myMap: function(arr, predicateFunction){  
    for (let i = 0; i < arr.length; i++) {
      predicateFunction(arr[i]);
    }
  },

  primes: function(n){  
    let primes = [];
    
    let isPrime = function(n) {
      if (n < 2) {
        return false;
      }
      
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      
      return true;
    };

    for (let i = 2; i < n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }

    return primes;
  },
}




