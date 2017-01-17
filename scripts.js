// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array_to_find_max){  
    // your code here

    var max = array_to_find_max[0];
    for( var i = 0; i < array_to_find_max.length; i++ ){
      if (array_to_find_max[i] > max){
        max = array_to_find_max[i]
      }
    }
    return max;
  },
  
  reversed: function(string_to_reverse){  
    // your code here
    return string_to_reverse.split("").reverse().join("");
  },

  loudSnakeCase: function(sentence){  
    // your code here
    console.log(sentence);
    var new_sentence = sentence.replace(/\!/g, "");
    new_sentence = new_sentence.replace(/\./g, "");
    new_sentence = new_sentence.replace(/\s\s/g, " ");
    var sentence_array = new_sentence.split(" ");
    for (var i = 0 ; i < sentence_array.length; i++) {
      curString = sentence_array[i];
      sentence_array[i] = curString.charAt(0).toUpperCase() + curString.slice(1);
    }
    new_sentence = sentence_array.join("_");
    //new_sentence = new_sentence.replace(/\s/g, "_");
    return new_sentence;
  },

  compareArrays: function(x, y){ 
    // your code here (replace the return)
    if (x.length != y.length){
      return false;
    }
    for (var i = 0; i < x.length; i++)  {
      if (x[i] != y[i]){
        return false;
      }   
    }
    return true;
  },
  fizzBuzz: function(n){  
    // your code here
    output_array = [];
    i = 1;
    while (i <= n){
      if (i % 15 == 0){
        output_array[i-1] = "FIZZBUZZ";
      }
      else if (i % 5 == 0){
        output_array[i-1] = "BUZZ";
      }
      else if (i % 3 == 0){
        output_array[i-1] = "FIZZ";
      }
      else{
        output_array[i-1] = i;
      }
      i++;
    }
    return output_array;
  },

  myMap: function(input_array, f_of_x){  
    // your code here
    result_array = []
    for (var i = 0; i < input_array.length ; i++) {
      input = input_array[i];
      result_array[i] = f_of_x(input);
    }
    return result_array;
  },

  primes: function(n){  
    // your code here
    result_array = [];
    result_array_index = 0;
    iterator_index = 2;
    while(iterator_index < n){
      // Check whether iterator_index is prime
      var not_prime = false;
      for (var i = 2; i < iterator_index ; i++) {
        if (iterator_index % i == 0){
          not_prime = true;
          break;
        }
      }
      if (!not_prime){
        result_array[result_array_index] = iterator_index;
        result_array_index++;
      }
      iterator_index++;
    }
    console.log(result_array);
    return result_array;
  },
}