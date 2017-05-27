
// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(){  
    var arr = [];
    var last = arr.sort()[arr.length-1];
    return last
  }
  },
  
  reversed: function(){  
    // your code here
    function reverse(string) {
    var str = " ";
    var rev = str.split('').reverse().join('');
    return rev;
}
    
  },

  loudSnakeCase: function(){  
    // your code here
    var sent = " ";
    function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
    return toTitleCase(sent).split(' ').join('_');
  },

  compareArrays: function(arr1,arr2){ 
    // your code here (replace the return)
      for (i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
       return false;
      }
    }
     return true;
    
  },

  fizzBuzz: function(){  
    // your code here
    con = [];
    for (var i = 0; i < 21; i++) {
     if (i % 5 === 0 && i % 3 === 0) {
     con.push("FIZZBUZZ") 
}
    else if (i % 3 === 0) {
    con.push("FIZZ")
  }
    else if (i % 5 === 0) {
    con.push("BUZZ")
  }
     else {
      con.push(i);
    }
}
  },

  myMap: function(){  
    // your code here
    var arr = [];
    function function(element, index, array) {
      array[index] = element * 2;
    }
    arr.forEach(function);

    return arr;
  },


  primes: function(){  
   
  var primes = [2];

  function primes(inputnum) {
  var primearray = [];
  for (i = 2;i < inputnum; i++) {
    isPrime = true;

    for (j = i - 1; j > 1; j--) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime===true) {
      primearray.push(i);
    }
  }
  return primearray;
}

  },
}