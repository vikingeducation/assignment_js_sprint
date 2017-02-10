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
                  /*could use a sort algorithm. Need to be aware of strings*/
                return largest;
                }
              }
  },
    
  /**
 * Takes a string and reverses it
 * @params str [String]
 * @return [String]
 **/
  reversed: function reversed(str) {
            return str.split("").reverse.join("");

  },
  
  /**
   * Takes a string and replaces non-character elements with underscores and capitalizes the first letter of each word.
   * @params str [String]
   * @return [String]
   *
   **/
  loudSnakeCase: function loudSnakeCase(str) {
                  use regex to match any one or more non-character elements and replace with a single space
                  change everything to lowercase
                  split string into an array at spaces
                  str.split(" ");
                  loop through the array and capitalize the first letter of each word
                  str.join("_");
                  join the array with underscores
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
                    check that both values passed in are arrays
                    if (!arr1.length is arr2.length) {
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
  },

  /**
   * fizzBuzz
   * @params num [number]
   * @return undefined
   *
   **/
  fizzBuzz: function fizzBuzz(num) {
              arr = [];
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
  
  },

  /**
   * Takes array and a function and runs the function passing in the element and replacing the element. myMap only passing the current element value into the provided array.
   * @params arr [Array]
   * @params func [Function]
   * @params [Array]
   **/
  myMap : function myMap(arr, fn) {
            check that first value is an array, if only 1 value, wrap in an array
            check that arr is at least 1 value
            check the fn is a function
            for (let i = 0; i < arr.length; i++) {
              arr[i] = fn.call(this, arr[i]);
            }
            //may need to hard bind if a reference to this is important
            return arr;
    }
  },
    
  /**
   * Takes a number and returns an array containing all the numbers up to and equal to this value that is prime
   * @params num [number]
   * @return [Array]
   *
   **/
  primes: function primes(num) {
          validate that argument is a number
          if num is 1, return "No values"
          check that num is positive integer greater than 1
          var arrOfPrimes = [];
          for (let i = 2; i <= num; i++) {
            if (isPrime(i)) {
              arrOfPrimes.push(i);
            }
          }
          return arrOfPrimes;
  }
}