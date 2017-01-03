// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    largest = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i]
      }
    }
    return largest;
  },

  reversed: function(string){
    string_array = string.split('');
    return string_array.reverse().join('');
  },

  loudSnakeCase: function(phrase){
    phrase = phrase.replace(/[^\w\s]/g, '');
    phrase = phrase.replace(/\s+/g, ' ')
    phrase_array = phrase.split('');
    phrase_array[0] = phrase_array[0].toUpperCase();
    while (phrase_array.indexOf(' ') > -1) {
      index_value = phrase_array.indexOf(' ');
      phrase_array[index_value] = '_';
      phrase_array[index_value + 1] = phrase_array[index_value + 1].toUpperCase();
    }
    return phrase_array.join('');
  },

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
