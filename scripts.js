// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    // your code here
    return array.sort(function(a, b) { return a - b; })[array.length - 1];
  },
  
  reversed: function(string){  
    // your code here
    var rev_string = "";

    for (var i = string.length - 1; i >= 0; i--) {
      rev_string += string[i];
    }

    return rev_string;
  },

  loudSnakeCase: function(sentence){  
    var words = [];
    var new_word = "";
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i].match(/[a-zA-Z]/)) {
        if (new_word)
          new_word += sentence[i];
        else
          new_word += sentence[i].toUpperCase();
      }
      else {
        if (new_word) {
          words.push(new_word);
          new_word = "";
        }
      }
    }
    
    return words.join("_");
  },

  compareArrays: function(array1, array2){ 
    if (array1.length !== array2.length) return false;

    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }

    return true; 
  },

  fizzBuzz: function(last){  
    var results = [];

    for (var i = 1; i <= last; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        results.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        results.push("FIZZ");
      } else if (i % 5 === 0) {
        results.push("BUZZ");
      } else {
        results.push(i);
      }
    }

    return results;
  },

  myMap: function(array, method){  
    var result = [];

    array.forEach(function(element) {
      result.push(method(element));
    });

    return result;
  },

  primes: function(number){  
    var results = [];

    var prime = function(integer) {
      if (integer === 2) return true;
      if (integer % 2 === 0) return false;
      for (var i = 3; i <= Math.sqrt(integer); i += 2) {
        if (integer % i === 0) return false;
      }
      return true;
    };

    for (var i = 2; i <= number; i++) {
      if (prime(i)) results.push(i);
    }
    return results;
  },

  bubbleSort: function(original_array) {
    var array = original_array;
    var again = true;
    while(again) {
      again = false;

      for(var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          var temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          again = true;
        }
      }
    }

    return array;
  },

  mergeSort: function(original_array) {
    var array = original_array;
    var middle = array.length / 2;

    if (array.length === 1) return array;

    var left = sprintFunctions.mergeSort(array.slice(0, middle));
    var right = sprintFunctions.mergeSort(array.slice(middle));

    var left_index = 0, right_index = 0;
    for (var i = 0; i < array.length; i++) {
      if (left_index >= left.length) {
        array[i] = right[right_index];
        right_index++;
      } else if (right_index >= right.length) {
        array[i] = left[left_index];
        left_index++;
      }
      else if (left[left_index] < right[right_index]) {
        array[i] = left[left_index];
        left_index++;
      } else {
        array[i] = right[right_index];
        right_index++;
      }
    }

    return array;
  },

  quickSort: function(original_array) {
    var array = original_array;
    var pivot = array[array.length - 1];
    var left = [], right = [];

    if (array.length < 2) return array;

    for(var i = 0; i < array.length - 1; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    left = sprintFunctions.quickSort(left);
    right = sprintFunctions.quickSort(right);
    left.push(pivot);
    return left.concat(right);
  }
}