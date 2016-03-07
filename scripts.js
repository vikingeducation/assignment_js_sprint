// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    // your code here
    return Math.max.apply(null, arr)
  },
  
  reversed: function(s){  
    // your code here
    leng = s.length
    var ret_s = ""
    for(var i = 0; i <leng; i++)
    {
      ret_s += s[leng - i - 1]
    }
    return ret_s
  },

  loudSnakeCase: function(str){  
    // your code here
    var ret_s = str[0].toUpperCase();
    var lastCharSpace = false
    for (var i = 1; i < str.length; i++) {
      if (str[i] == " ") {
        if (!lastCharSpace) {
          ret_s += "_"
        }
        lastCharSpace = true
      } else if (["!", ",", "."].indexOf(str[i]) != -1) {
        // do nothing
        lastCharSpace = false
      } else {
        if (lastCharSpace) {
          ret_s += str[i].toUpperCase()
        } else {
          ret_s += str[i].toLowerCase()
        }
      lastCharSpace = false
      } 
    }
    return ret_s
  },

  compareArrays: function(arr1, arr2){ 
    // your code here (replace the return)
    if (arr1.length != arr2.length) return false;

    for (var i = 1; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i] )
        return false
    }

    return true;
    //return "Finish compareArrays first!" 
  },

  fizzBuzz: function( limit ){  
    // your code here
    var ret_arr = [];
    for (var i = 1; i <= limit; i++) {
      if( i % 3 !== 0 && i % 5 !== 0)
      {
        ret_arr.push( i );
      }
      if( i % 3 === 0 && i % 5 !== 0)
      {
        ret_arr.push( "FIZZ" );
      }
      if( i % 3 !== 0 && i % 5 === 0)
      {
        ret_arr.push( "BUZZ" );
      }
      if( i % 3 === 0 && i % 5 === 0)
      {
        ret_arr.push( "FIZZBUZZ" );
      }
    }
    return ret_arr;
  },

  myMap: function(arr, func){  
    // your code here
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
      ret_arr.push( func(arr[i]) );
    }
    return ret_arr;
  },

  primes: function(){  
    // your code here
  },
}