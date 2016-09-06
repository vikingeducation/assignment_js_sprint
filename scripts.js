// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    var el = arr[0];
    for(var i = 1; i < arr.length; i++){
      if (arr[i] >= el ){
        el = arr[i];
      };
    };
    return el;
  },

  reversed: function(arr){
    var new_arr = [];
    for(var i = arr.length - 1; i >= 0; i--){
      new_arr.push(arr[i]);
    };
    return new_arr.join("");
  },

  loudSnakeCase: function(str){
    var snaked = str[0].toUpperCase();
    for(var i = 1; i < str.length; i++){
     if (str[i] === " "){
        if (str[i -1] !== " "){
          snaked = snaked.concat("_");
        }
      }
      else if ( (/\W/).test(str[i]))
      {
        continue;
      }
      else if (str[i - 1] === " "){
        snaked = snaked.concat(str[i].toUpperCase());
      }
      else{
        snaked = snaked.concat(str[i]);
      }
    }
    return snaked;
  },

  compareArrays: function(arr1, arr2){
    if (arr1.length !== arr2.length){
      return false;
    }
    for(var i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]){
        return false;
      }
    }
    return true;
    // return "Finish compareArrays first!"
  },

  fizzBuzz: function(num){
    var arr = [];
    for(var i = 1; i <= num; i++){
      if (i % 15 === 0){
        arr.push("FIZZBUZZ");
      }
      else if (i % 3 === 0){
        arr.push("FIZZ");
      }
      else if (i % 5 === 0){
        arr.push("BUZZ");
      }
      else{
        arr.push(i);
      }
    }
    return arr;
  },

  myMap: function(arr, fn){
    var new_arr = [];
    for(var i = 0; i < arr.length; i++){
      new_arr.push(fn(arr[i]));
    }
    return new_arr;
  },

  primes: function(num){
    var arr = Array.apply(null, Array(num)).map(function (_, i) {return i;});

    for( var i = 2; i * i < num; i++ ){
      if (arr[i] === null){
        continue;
      }
      for(var k = i + i; k < num; k += i){
        arr[k] = null;
      }
    }
    arr = arr.slice(2);
    return arr.filter(Boolean);
  },
}
