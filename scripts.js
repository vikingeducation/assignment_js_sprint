// FILL IN THE FUNCTIONS BELOW
// largestEl takes an array and returns the largest element.
var sprintFunctions = {
  largestEl: function(array){
    return array.sort(function(a,b) { return a-b; }).slice(-1)[0]
  },

  reversed: function(string){
    var newString = "";
    for(var i = string.length - 1; i >= 0; i--) {
      newString += string[i];
      }
    return newString;
  },

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

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
