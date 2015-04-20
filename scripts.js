// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    return Math.max.apply(Math, array);
  },

  reversed: function(string){
    // your code here
    return string.split("").reverse().join("");
  },

  loudSnakeCase: function(sentence){
    // your code here
    var result = [];
    var sentence_array = sentence.split(" ");
    var alphanumeric;
    sentence_array.forEach(function(element){
      alphanumeric = element.replace(/[^a-z0-9]/gi,'');
      if(alphanumeric !== ""){
      result.push(alphanumeric[0].toUpperCase() + alphanumeric.slice(1));
      }
    });
    return result.join("_");
  },

  compareArrays: function(array_1, array_2){
    // your code here (replace the return)
    if (array_1.length !== array_2.length){
      return false;
    }
    var false_flag = true;
    array_1.forEach(function(element, index){
      console.log(element + " " + array_2[index]);
      if (element != array_2[index]){
        // return false; WTF doesn't work?!? Note to self: SO this
        false_flag = false;
      }
    });
    return false_flag;
  },

  fizzBuzz: function(number){
    // your code here
    var iteration = 1;
    var array_of_numbers = [];
    while (iteration <= number){
      if ((iteration%5 === 0) && (iteration%3 === 0)){
        array_of_numbers.push("FIZZBUZZ");
      } else if ((iteration%5 === 0)){
        array_of_numbers.push("BUZZ");
      } else if ((iteration%3 === 0)){
        array_of_numbers.push("FIZZ");
      } else{
        array_of_numbers.push(iteration);
      }
      iteration++;
    }
    return array_of_numbers;
  },

  myMap: function(array, element_function){
    // your code here
    var filled_array = [];
    array.forEach(function(element){
      filled_array.push(element_function(element));
    });
    return filled_array;
  },

  primes: function(number){
    // your code here
    var array_of_primes = [];
    var iteration = 2;
    while(iteration <= number){
      var start = 2;
      var is_prime = true;
      while(start <= iteration/2){
        if((iteration%start) === 0){
          is_prime = false;
        }
        start++;
      }
      if (is_prime){
        array_of_primes.push(iteration);
      }
      iteration++;
    }
    return array_of_primes;
  },
}