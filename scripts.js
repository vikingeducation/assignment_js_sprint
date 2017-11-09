// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(){  
    // your code here
      arr.map((acc,curr) => Math.max(acc, curr));
  },
  
  reversed: function(){  
    // your code here
    if (str === "") {
     return "";
    }
    else {
        return str.charAt(0) + reversedRecursion(str.substr(1));
    }
  },

  loudSnakeCase: function(){  
    // your code here
    str.replace("\s"/g,"_");
    return str;
  },

  compareArrays: function(){ 
    // your code here (replace the return)
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
    return arr.forEach(func);
  },

  primes: function(){  
    // your code here
      let arr = [];
      for (let i = 2; i < num; i++) {
        if (num % i !== 0) {
          return false;
        }
        arr.push(i);
      }
      return arr;
  },
}