// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    // your code here
    return Math.max(...arr);
  },
  
  reversed: function(string){  
    // your code here
    reverse = string.split('').reverse().join("")
    return reverse;
  },
  
  loudSnakeCase: function(sentence){  
    /* WORKS in the console not the browser...

    var sentence = sentence.split(" ");
   
     function capitalize(word) {
      var word_array = word.split("")
      word_array.shift();
      var end_word = word_array.join("");

      var word = word[0].toUpperCase() + end_word;
      return word
    };

    var new_sentence = [];

    sentence.forEach(function(word) {
      new_sentence.push(capitalize(word));
    });

    return new_sentence.join("_"); 
        */
  },

  compareArrays: function(arr1, arr2){ 

    if(typeof arr1 !== "object" || typeof arr2 !== "object"){
      return false;
    };

    if (arr1.length !== arr2.length) {
      return false;
      
    };

    

    var same = true;
    var i = 0;
    for(var i; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]){
        same = false;
      };
    }

    return same;
  },

  fizzBuzz: function(limit){  
    var array = [];
    function converter(num) {
      if (num % 15 === 0){
        return "FIZZBUZZ";
      } else if(num % 3 === 0){
        return "FIZZ";
      } else if (num % 5 === 0){
        return "BUZZ";
      } else {return num};
    };
    
    for(var i = 1; i <= limit; i++){
      array.push(converter(i));
    };

    return array;
    
  },

  myMap: function(arr, func){  
    var new_array = [];

    arr.forEach(function(el){
      new_array.push(func(el)); 
    });

    return new_array

  },

  primes: function(limit){ 

    function isPrime(num){
      var prime = true;

      for(var i = 2; i < num; i++){
        if(num % i === 0){
          prime = false;
        };
      };

      return prime
    }; 
    var prime_nums = [];
    for(var i = 2; i <= limit; i++){
      if (isPrime(i)){
        prime_nums.push(i);
      };
    };
    return prime_nums
  },
}