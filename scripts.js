// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
      /**
 * Returns the largest value in an array
 * @params arr [Array]
 * @return largest Object
 *
 **/
  largestEl: function largestEl(arr) {
              if (arr.length === 0) {
                  return "none";
              }
              else if (arr.length === 1) {
                  return arr[0];
              }
              else {
                var largest = arr[0];
                for (var i = 1; i < arr.length; i++) {
                  if (largest < arr[i]) {
                    largest = arr[i];
                  }
                }
                  /*could use a sort algorithm. Need to be aware of strings*/
                return largest;
              }
  },
    
  /**
 * Takes a string and reverses it
 * @params str [String]
 * @return [String]
 **/
  reversed: function reversed(str) {
            return str.split("").reverse().join("");

  },
  
  /**
   * Takes a string and replaces non-character elements with underscores and capitalizes the first letter of each word.
   * @params str [String]
   * @return [String]
   *
   **/
  loudSnakeCase: function loudSnakeCase(str) {
    var regex = /[^A-Za-z]+/g; //Finds one or more consecutive non-English alphabet characters
    var snaked = str.replace(regex, " ");//Replaces these occurance with spaces
    snaked = snaked.trim(); //Remove whitespace from ends. Polyfill if necessary
    snaked = snaked.split(" "); //Split string into array at each space
    snaked.forEach(function lowerUpper(element, index, arr) {
      let str = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase(); //Build new string which Uppercase first Char and lowercase rest of string
      arr[index] = str; //Assign back to index position


      });
    snaked = snaked.join("_"); //join the array with underscores
    return snaked;
  },

  /**
   * check if contents of array are equal and in order
   * @params arr1 [Array]
   * @params arr2 [Array]
   * @return [Boolean]
   * Can assume that there are no nested arrays.
   **/
  compareArrays : function compareArrays(arr1, arr2) {
                      if (Array.isArray(arr1) && Array.isArray(arr2)) {
                        if (!(arr1.length === arr2.length)) {
                          return false;
                        }
                        for (let i = 0; i < arr1.length; i++)
                            if (arr1[i] === arr2[i]) {
                              continue;
                            }
                            else {
                              return false;
                            }
                        return true;
                      }
  },

  /**
   * fizzBuzz
   * @params num [number]
   * @return undefined
   *
   **/
  fizzBuzz: function fizzBuzz(num) {
              var arr = [];
              for (let i = 1; i <= num; i++) {
                if (i % 15 === 0) {
                  arr.push("FIZZBUZZ");
                }
                else if (i % 3 === 0) {
                  arr.push("FIZZ");
                }
                else if (i % 5 === 0) {
                  arr.push("BUZZ");
                }
                else {
                  arr.push(i);
                }
              }
              return arr;
  },

  /**
   * Takes array and a function and runs the function passing in the element and replacing the element. myMap only passing the current element value into the provided array.
   * @params arr [Array]
   * @params func [Function]
   * @params [Array]
   **/
  myMap : function myMap(arr, fn) {
          if (Array.isArray(arr) && typeof fn === "function") {
            for (let i = 0; i < arr.length; i++) {
              arr[i] = fn.call(this, arr[i]);
            }
          }
          //may need to hard bind "this" if a reference to this is important
          return arr;
  },
    
  /**
   * Takes a number and returns an array containing all the numbers up to and equal to this value that is prime
   * @params num [number]
   * @return [Array]
   *
   **/
  primes: function primes(num) {
        if (Number.isInteger(num) && num > 1) {
          var arrOfPrimes = [];
          for (let i = 2; i <= num; i++) {
            if (isPrime(i)) {
              arrOfPrimes.push(i);
            }
          }
        return arrOfPrimes;
        }
        else {
          return "No primes";
        }
        function isPrime(num) {
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) { //num is not prime
              return false;
            }
          }
          return true;
        }
  }

};