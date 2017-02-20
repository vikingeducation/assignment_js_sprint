// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    return arr.sort()[arr.length-1];
  },
  
  reversed: function(str){  
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function (str){  
    var wordsArray = str.split(/\s+/);
    for(var i = 0; i < wordsArray.length; i++) {
      wordsArray[i] = wordsArray[i].replace(/[^A-z]+/g, '');
      wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
    }
    return wordsArray.join("_");
  },

  compareArrays: function(arr1, arr2){ 
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]){
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(num){  
    var arr = [];
    for (var i = 1; i <= num ; i++) {
      console.log(i, num);
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        arr.push("FIZZ");
      } else if (i % 5 === 0) {
        arr.push("BUZZ");
      } else {
        arr.push(i);
      }
    }
    return arr;
  },

  myMap: function(arr, fn){  
    var fnOnElements = [];
    arr.forEach(function(el) {
      fnOnElements.push(fn(el));
    });
    return fnOnElements;
  },

  primes: function(num){

    var primesArr = [];

    for (var i = 0; i <= num; i++){

      var isPrime = true;
        
      if (i <= 1) {
        isPrime = false;
      } else {
          for (var j = 2; j < i; j++) {
            if(i % j === 0) {
              isPrime = false;
            }
          }
        }
          
      if (isPrime) {
        primesArr.push(i);
      }
    }

    return primesArr;
  }
}