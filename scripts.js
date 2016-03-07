

// FILL IN THE FUNCTIONS BELOW


var sprintFunctions = {
  largestEl: function(array){
    var largest = 0;
    array.forEach(function(el){
      if (el > largest){
        largest = el;
      }
    });
    return largest;
  },

  reversed: function(string){
    // your code here
    var array = [];
    for (var i = string.length - 1; i >= 0; i--){
      array += string[i];
    }
    return array;
  },

  loudSnakeCase: function(str){
    var stripped = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var arr = stripped.split(' ');
    var filtered = arr.filter(function(n){ return n !== "" });

    String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
    }
    
    for (var i = 0; i < filtered.length; i++){
      filtered[i] = filtered[i].capitalize();
    }
    console.log(filtered.join("_"));
    return filtered.join("_");
  },

  fizzBuzz: function(number){
    var array = [];
    for (var i = 1; i <= number; i++) {
      if (i % 5 === 0 && i % 3===0) {
        array.push("FIZZBUZZ");
      }
      else if (i % 3 === 0) {
       array.push("FIZZ");
      }
      else if (i % 5 === 0) {
        array.push("BUZZ");
      }
      else {
        array.push(i);
      }
    }
    console.log(array)
   return array;
  },

  compareArrays: function(array_1, array_2){
    // your code here (replace the return)
    for (var i = 0; i < array_1.length; i++) {
      if (array_1[i] !== array_2[i]) {
        return false;
      }
    }
    return true;
  },

  myMap: function(array, maps)
  {
    var results = [];
    array.forEach(function(el){
      results.push(maps(el));
    });
    return results;
  },

  primes: function(number){
    var is_prime = function(num){
      for (var i = 2; i < num; i++){
        if(num % i === 0){
          return false;
        }
      }
      return true;
    }
    var results = [2];
    for (var i = 3; i <= number; i++){
      if (is_prime(i)){
        results.push(i);
      }
    }
    console.log(results);
    return results;
  },
};

console.log(sprintFunctions.largestEl([1,2,3]));
