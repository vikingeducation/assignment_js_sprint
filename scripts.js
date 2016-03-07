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
    // spaces + punctuation
    str = str.replace(/[^a-zA-Z]+/g, "_");
    // capitalize first letter of each word
    str = str.replace(/_./g, function(s) { 
      return "_" + s[1].toUpperCase();
    });
    // remove trailing underscore
    if (str[str.length-1] === "_") {
      str = str.substring(0, str.length-1);
    }
    // capitalize first letter
    return str[0].toUpperCase() + str.substring(1);

    // "I messed. up the sentence."
    // "Thi.s one too!" ==> Thi_S_One_Too


    // var ret_s = str[0].toUpperCase();
    // var lastCharSpace = false;
    // for (var i = 1; i < str.length; i++) {
    //   if (str[i] == " ") {
    //     if (!lastCharSpace) {
    //       ret_s += "_";
    //     }
    //     lastCharSpace = true;
    //   } else if (["!", ",", "."].indexOf(str[i]) != -1) {
    //     // don't add it to new string
    //     lastCharSpace = false;
    //   } else {
    //     if (lastCharSpace) {
    //       ret_s += str[i].toUpperCase();
    //     } else {
    //       ret_s += str[i].toLowerCase();
    //     }
    //   lastCharSpace = false;
    //   } 
    // }
    // return ret_s;
  },

  compareArrays: function(arr1, arr2){ 
    if (arr1.length != arr2.length) return false;

    for (var i = 1; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i] )
        return false
    }
    return true;
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

  fizzBuzz2: function(limit) {  
    var retArr = [];
    for (var i = 1; i <= limit; i++) {
      var item = i;
      if (i % 15 === 0) {
        item = "FIZZBUZZ";
      } else if (i % 5 === 0) {
        item = "BUZZ";
      } else if (i % 3 === 0) {
        item = "FIZZ";
      }
      retArr.push(item);
    }
    return retArr;
  },

  myMap: function(arr, func){  
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
      ret_arr.push( func(arr[i]) );
    }
    return ret_arr;
  },

  primes: function(limit){  
    var prime_nums = [2]
    for (var i = 3; i < limit; i++) {
      for (p in prime_nums) {
        if (i % prime_nums[p] == 0) {
          break;
        } else {
          if (prime_nums[p] > Math.sqrt(i)) {
            prime_nums.push(i)
            break;
          }
        }
      }
    }
    return prime_nums;
  },


  bubbleSort: function(arr) {
    do {
      madeSwap = false;
      for (var i = 0; i < arr.length-1; i++) {
        left = arr[i];
        right = arr[i+1];
        if (left > right) {
          arr[i] = right;
          arr[i+1] = left;
          madeSwap = true;
        }
      }
    } while (madeSwap);
    return arr;
  },
};


