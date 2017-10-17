// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // your code here
    return (array.reduce(function(largest, value) {
      return (largest > value) ? largest : value;
    }, 0));
  },
  
  reversed: function(string){  
    // your code here
    const stringArray = string.split("");
    return stringArray.reverse().join("");
  },

  loudSnakeCase: function(string){  
    // your code here
    const stringArray = string.split(/\s+|\W+/g);
    let finalArray = [];
    
    stringArray.forEach(function(value) {
        if ((/\w+/).test(value)) {
            value = value[0].toUpperCase() + value.slice(1);
            finalArray.push(value);
        }
    });
    return finalArray.join("_");
  },

  compareArrays: function(array1, array2){ 
    // your code here (replace the return)
      let array1Str = array1.join("");
      let array2Str = array2.join("");
      if (array1Str === array2Str) {
          return true;
      } else {
          return false;
      }
  },

  fizzBuzz: function(num){  
    // your code here
    let fizzBuzzArray = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArray.push('FIZZBUZZ');
        } else if (i % 3 === 0) {
            fizzBuzzArray.push('FIZZ');
        } else if (i % 5 === 0) {
            fizzBuzzArray.push('BUZZ');
        } else {
            fizzBuzzArray.push(i);
        }
    }
    return fizzBuzzArray;
  },

  myMap: function(array, func){  
    // your code here
    let myArray = [];
    if (array === 'undefined' || func === 'undefined') {
      return myArray;
    } else {
      for (let i = 0; i < array.length; i++) {
          myArray.push(func(array[i]));
      }
    }
    return myArray;
  },

  primes: function(num){  
    // your code here
    let primeArray = [];
    if (num === 'undefined' || num ==='null') {
        return primeArray;
    }
    for (let i = 2; i < num; i++) {
        if (i % 2 === 0 && i !== 2) {
            continue;
        } else if (i === 2) {
            primeArray.push(i);
        } else {
            for (let j = i - 1; j >= 2; j--) {
                if (i % j === 0) {
                    if (primeArray.includes(i)) {
                        primeArray.splice(primeArray.indexOf(i), 1);
                    }
                    break;
                } else if (primeArray.includes(i) === false) {
                    primeArray.push(i);
                }
            }          
        }
    }
    return primeArray;
  }
}