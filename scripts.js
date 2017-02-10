// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(largest){
    // your code here
    largest.sort;
    return largest[largest.length - 1]
  },

  reversed: function(word){
    // your code here
    return word.split("").reverse().join("");
  },


  loudSnakeCase: function(string){
    var sentence = string[0];
    var loud = []
    var arr = sentence.replace(/\W+/g, " ").trim().split(" ");
    for (var i = 0; i < arr.length; i++) {
        var loudCase = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        loud.push(loudCase);
    };
    return loud.join("_");
  },

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    //return "Finish compareArrays first!"
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i])
            return false;
    }
    return true;
  },

  fizzBuzz: function(num){
    // your code here
    var answer = [];
    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FIZZBUZZ");
        } else if (i % 3 === 0) {
            answer.push("FIZZ");
        } else if (i % 5 === 0) {
            answer.push("BUZZ");
        } else {
            answer.push(i);
        }
    }
    return answer;
  },

  myMap: function(arr, func){
    // your code here
    map = [];
    for (var i = 0; i < arr.length; i++) {
        map.push(func(arr[i]));
    }
    return map;
  },

  primes: function(num){
    // your code here
    var prime = []
    for (var i = 2; i <= num; i++) {
        var numPrime = true;
        for (var a = 2; a <= Math.sqrt(i); a++) {
            if (i % a === 0) {
                numPrime = false;
            }
        }
        if (numPrime) {
            prime.push(i);
        }
    }
    return prime;
  },
}
