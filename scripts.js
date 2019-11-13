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
    let fizzArr = [];  //added new array to return at the end
    for (let i = 0; i < arr.length; i++) {
      if ( ( arr[i] % 5 == 0 ) && ( arr[i] % 3 == 0  ) ) {
          fizzArr.push("FIZZBUZZ");
        }
        else if ( arr[i] % 5 == 0 ) {
            fizzArr.push("BUZZ");
        }
        else if ( arr[i] % 3 == 0 ) {
          fizzArr.push("FIZZ");
        }
        else {
          fizzArr.push(arr[i]);
      }
    } return fizzArr; //return here only.
  },
    //was using return for each if/else condition, resulting in the script ending prematurely. 
  
    //original function - doesn't work 
  myMap: function(){
    inputArr.map(inputFunc); 
  },

    //var inputArr = [1,2,3,4,5];
    //var inputFunc = function(el){ return el*2; };
  
    //new function 
    myMap: function(inputArr, inputFunc) {
        for (var i = 0; i < inputArr.length; i++) {
            inputArr[i] = func(inputArr[i]);
        }
        return inputArr;
    },
    
//I still don't really understand. I thought the whole point of the .map method was to not have to create a new array or push the values to the new array. 
    
    
    
    
  primes: function(input){
    // did not know a good way to check for prime value

//liked this solution the best
      //create new array to return later
    let primesArr = []; 
      // incrementally cycle through numbers up to value of the input variable
    for ( let i=1; i <= input; i++ ) {
        // incrementally cycle through numbers lower than the current value being checked
      for ( let j=(i-1); j >= 1; j-- ) {
        // if the divisor is 1, push to the array  
        if ( j === 1 ) {
          primesArr.push(i);
        // but if a number doesn't leave a remainder, then skip it    
        } else if ( i % j === 0 ) {
          break;
        }
      }
    }
      //return the array of only primes
    return primesArr;
  },
}
