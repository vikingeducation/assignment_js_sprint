// FILL IN THE FUNCTIONS BELOW


var sprintFunctions = {
  largestEl: function () {
    return Math.max.apply(Math, input);
  },
  

  reversed: function(){
    return input.split("").reverse().join("");
  },

  loudSnakeCase: function(){
  //remove punctuation
  input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  //remove any extra spaces
  input = input.replace(/  +/g, ' ');
  //proper case
  input = input.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
  //replace spaces with underscores
  input = input.replace(/\s/g,'_');
  return input;
  },

  compareArrays: function(){
    //  "startArr" vs "diffArr"
      //check they are the same length
    var i = startArr.length;
    if (i != diffArr.length) {
      return false;
    }
      //check each value
    while (i--) {
        if (startArr[i] !== diffArr[i]) {
          return false;
        }
    }
    return true;
  },
      
    
  fizzBuzz: function(){
    let arr = []; 
    for (let x = 1; x <= input; x++) {
        arr.push(x); 
    } 
    for (let i = 0; i < arr.length; i++) {
      if ( ( arr[i] % 5 == 0 ) && ( arr[i] % 3 == 0  ) ) {
          return ("FIZZBUZZ");
        }
        else if ( arr[i] % 5 == 0 ) {
          return ("BUZZ");
        }
        else if ( arr[i] % 3 == 0 ) {
          return ("FIZZ");
        }
        else {
          return (arr[i]);
      }
    }
  },
    
  myMap: function(){
    inputArr.map(inputFunc); 
  },

  
  primes: function(){
    // your code here
  },
}
