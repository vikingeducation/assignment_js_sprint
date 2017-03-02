// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  

    var num = 0;
    for(var i = 0; i < array.length; i++){
      if(num < array[i]){
        num = array[i];
      }
    }
          return num;
  },
  
  reversed: function(myString){  
    myString = myString.split("").reverse().join("");
    return myString;
  },

  loudSnakeCase: function(string){  
    string = string.split("");
    for(var i = 0; i < string.length; i++){
        string[i] = string[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()/]/g, '').trim();
        string[i] = string[i];
    }
    console.log(string);
    string = string.join("_");
    return console.log(string);
  },

  compareArrays: function(){ 
    // your code here (replace the return)
    return "Finish compareArrays first!" 
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