// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    var el = arr[0];
    for(var i=1; i < arr.length; i++){
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
        console.log(str[i]);
        console.log(str[i-1]);
        if (str[i -1] !== " "){
          snaked = snaked.concat("_");
        }
      }
      else if ( (/\W/).test(str[i]) )
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
    console.log(snaked);
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

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
