// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {

// largestEl takes an array and returns the largest element.
  largestEl: function(array){
    return array.sort(function(a,b) { return a-b; }).slice(-1)[0]
  },

// reversed takes a string and reverses it.
  reversed: function(string){
    var newString = "";
    for(var i = string.length - 1; i >= 0; i--) {
      newString += string[i];
      }
    return newString;
  },

// loudSnakeCase takes a full sentence and puts it into "Loud_Snake_Case" format but strips out any non-character elements (like punctuation).
  loudSnakeCase: function(string){
    array = string.replace(/[^\w\s]/gi, "");
    array = array.split(/[^\w\S]/);
    new_array = [];
	  for(var i=0; i < array.length; i++) {
      if (array[i].length > 0) {
        element = array[i].replace(/!@#$%^&*()<>?:\.,;/g, "");
        new_array.push(element.charAt(0).toUpperCase() + element.slice(1));
      }
    }
    return new_array.join(",").replace(/,/g, "_");
  },

// compareArrays takes two arrays and checks to see if they are equal (same contents in the same order). Assume they're not nested.
  compareArrays: function(array1, array2){
    check = false;
    if (array1.length === array2.length) {
      for(var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          check = false;
          break;
        } else {
          check = true;
        }
      }
      return check;
    }
  },

// fizzBuzz takes an input of a number and returns an array containing all the elements from 1 to that number. Each element divisible by 3 is replaced by "FIZZ", each element divisible by 5 is replaced by "BUZZ" and each element divisible by both 3 and 5 is replaced by "FIZZBUZZ".
  fizzBuzz: function(number){
    array = [];
    for (var i=1; i <= number; i++) {
      if (i%3 === 0 && i%5 === 0) {
        array.push("FIZZBUZZ");
      } else if (i%3 === 0 ) {
        array.push("FIZZ");
      } else if (i%5 === 0) {
        array.push("BUZZ");
      } else {
        array.push(i);
      }
    }
    return array;
  },

// myMap takes an array and a function. It passes every element from the array into that function, in turn, running the function.
  myMap: function(array, function_name){
    for(i=0; i<array.length; i++) {
      array[i] = function_name(array[i]);
    };
    return array;
  },

// primes takes a number and outputs an array containing all prime numbers that occur prior to that number
  primes: function(number){
    array = [];
    for (var i=2; i < number; i++) {
      if ( (i === 2 || i === 3) || (i%2 !== 0 && i%3 !== 0) ) {
        array.push(i);
      };
    };
    return array;
  },
}
