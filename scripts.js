// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    var keeper = 0;
    for(var i = 0; i < array.length; i++){
      if(keeper > array[i]){
        continue;
      }else{
        keeper = array[i];
      }
    }
    return keeper;
  },

  reversed: function(string){
    // your code here
    var trader = [];
    for(var i = string.length; i > 0; i--){
      trader.push(string[i-1]);
    }
    return trader.join("");
  },

  loudSnakeCase: function(string){
    // your code here
    var newArray = [];
    for (var i = 0; i < string.length; i++){
      if (string[i].match(/^[A-Za-z _]+$/)){
        if(string[i] == " " && string[i-1] == " "){
          continue;
        }else if (i === 0 || string[i-1] == " "){
          newArray.push(string[i].toUpperCase());
        }else if(string[i] == " "){
          newArray.push("_");
        }else{
          newArray.push(string[i]);
        }
      }
    }
    return newArray.join("");
  },

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    var tester = true;
    var highCount;
    if(array1.length > array2.length){
      highCount = array1.length;
    }else{
      highCount = array2.length;
    }
    if(Array.isArray(array1) && Array.isArray(array2)){
      for(var i = 0; i < highCount; i++){
        if(array1[i] == array2[i]){
          continue;
        }else{
          return tester = false;
        }
      }
    }else{
      tester = false;
    }
    return tester;
  },

  fizzBuzz: function(num){
    // your code here
      var newArray = [];
    for(i = 1; i <= num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        newArray.push("FIZZBUZZ");
      }else if(i % 3 === 0){
        newArray.push("FIZZ");
      }else if( i % 5 === 0){
        newArray.push("BUZZ");
      }else{
        newArray.push(i);
      }
    }
    return newArray;
  },

  myMap: function(array, callback){
    // your code here
    var newArray = [];
    for(var i = 0; i < array.length; i++){
      newArray.push(callback(array[i]));
    }
    return newArray;
  },

  primes: function(num){
    // your code here
    var primal = [];
    for(var i = 1; i < num; i++){
      if( i === 1){
        continue;
      }else{
        for(var j = 2; j <= i; j++){
          if( i === j ){
            primal.push(i);
          }else if( i % j !== 0){
            continue;
          }else{
            break;
          }
        }
      }
    }
    return primal;
  },
}
