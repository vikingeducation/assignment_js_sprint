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
            return str.split("").reverse.join("");

  },
  
  /**
   * Takes a string and replaces non-character elements with underscores and capitalizes the first letter of each word.
   * @params str [String]
   * @return [String]
   *
   **/
  loudSnakeCase: function loudSnakeCase(str) {
  },

  /**
   * check if contents of array are equal and in order
   * @params arr1 [Array]
   * @params arr2 [Array]
   * @return [Boolean]
   * Can assume that there are no nested arrays.
   **/
  compareArrays : function compareArrays(arr1, arr2) {
  },

  /**
   * fizzBuzz
   * @params num [number]
   * @return undefined
   *
   **/
  fizzBuzz: function fizzBuzz(num) {
  
  },

  /**
   * Takes array and a function and runs the function passing in the element and replacing the element. myMap only passing the current element value into the provided array.
   * @params arr [Array]
   * @params func [Function]
   * @params [Array]
   **/
  myMap : function myMap(arr, fn) {
  },
    
  /**
   * Takes a number and returns an array containing all the numbers up to and equal to this value that is prime
   * @params num [number]
   * @return [Array]
   *
   **/
  primes: function primes(num) {

  }
}