// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    return arr.sort().splice(-1);
  },
  
  reversed: function(str){  
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function(str){  
    var arr = str.split(/\W+/);
    if( arr[arr.length-1] == "" ){
      arr.pop();
    };
    var output = [];
    arr.forEach( function(word){
      var firstLetter = word.slice(0,1).toUpperCase();
      var restOfWord = word.slice(1);
      var capWord = firstLetter + restOfWord;
      output.push(capWord);
    });
    return output.join("_")
  },

  compareArrays: function(arr1, arr2){ 
    matched = true
    if(arr1.length != arr2.length){
      matched = false;
    }
    arr1.forEach( function(el,index){
      if(el != arr2[index]){
        matched = false;
      };
    });
    return matched;
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
