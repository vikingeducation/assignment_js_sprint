// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    let placeholder = 0
    for (i = 0; i < array.length; i++) {
      if (array[i] > placeholder) {
        placeholder = array[i];
      };
    };
    return placeholder;
  },
  
  reversed: function(string){  
    let return_value = [];
    for (i = 0; i < string.length; i++) {
      return_value.unshift(string[i]);
    };
    return return_value.join("");
  },

  loudSnakeCase: function(string){
    let string_array = string.split(" ");
    let modified_array = [];
    for (i=0; i<string_array.length; i++) {
      if (string_array[i]!=="") {
        let stripped_word = string_array[i].match(/\w+/);
        modified_array.push((stripped_word[0][0].toUpperCase())+(stripped_word[0].slice(1)));
      };
    };
    return modified_array.join("_");
  },

  compareArrays: function(first, second){
    let return_value = false;
    if (first.length !== second.length) {
      return false; 
    } else {
      for (i=0; i<first.length; i++) {
        if (first[i] === second[i]) {
          return_value = true;
        } else {
          return_value = false;
          break;
        };
      };
    };
    return return_value;
  },

  fizzBuzz: function(input){
    let fizzbuzz_array = [];
    if (typeof input === "number") {
      for (i=1; i<=input; i++) {
        if (i%3===0 && i%5===0) {
          fizzbuzz_array.push("FIZZBUZZ");
        } else if (i%3===0) {
          fizzbuzz_array.push("FIZZ");
        } else if (i%5===0) {
          fizzbuzz_array.push("BUZZ");
        } else {
          fizzbuzz_array.push(i);
        };
      };
    };
    return fizzbuzz_array;
  },

  myMap: function(array, func){ 
    let return_array = [];
    for (i=0; i<array.length; i++) {
      return_array.push(func(array[i]));
    }
    return return_array;
  },

    primes: function(input){ 
      let prime_array = [];
      for (i=2; i<input; i++) {
        let is_prime = true
          for (n=2; n<i; n++) {
            if (i%n===0) {
              is_prime = false;
            }
          };
        if (is_prime) {
          prime_array.push(i);
        };
      };
      return prime_array;
    }
};

