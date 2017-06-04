// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){
    var high = input[0];
    for(var i = 1; i < input.length; i++){
      if(input[i] > high){
        high = input[i]
      }
    }
    return high;
  },

  reversed: function(input){
    var output = "";
    var count = input.length;

    for(var i = 0; i < input.length; i++){
      output += input.slice(count - 1, count);
      count--;
    }
    return output;
  },

  loudSnakeCase: function(input){
    var output = "";
    // replace all non characters with space
    output = input.replace(/[^A-Za-z]/g,' ');

    // replace all multispaces
    output = output.replace(/[\s]{2,}/g, ' ');

    // flush all leading and ending spaces
    if(output.charAt(0) == ' '){
      output = output.slice(1, output.length);
    }
    if(output.charAt(output.length - 1) == ' '){
      output = output.slice(0, output.length - 1);
    }

    output = output.replace(/\s/g, '_');
    outputChar = output.split('');

    outputChar[0] = outputChar[0].toUpperCase();
    for(var i = 0; i < outputChar.length - 1; i++){
      if(outputChar[i] == '_'){
        outputChar[i+1] = outputChar[i+1].toUpperCase();
      }
    }

    return outputChar.join("");
  },

  fizzBuzz: function(input){
    var output = [];
    for(var i = 1; i <= input; i++){
      output[i - 1] = i;
      if(i % 3 == 0){
        output[i - 1] = "FIZZ";
        if(i % 5 == 0){
          output[i - 1] = "FIZZBUZZ";
        }
      }else if(i % 5 == 0){
        output[i - 1] = "BUZZ";
      }
    }
    return output;
  },

  compareArrays: function(array_1, array_2){
    if(array_1.length != array_2.length) return false;

    for(var i = 0; i < array_1.length; i++){
      if(array_1[i] != array_2[i]) return false;
    }
    return true;
  },

  myMap: function(inputArr, inputFunc){
    var output = [];
    for(var i = 0; i < inputArr.length; i++){
      output[i] = inputFunc(inputArr[i]);
    }
    return output;
  },

  primes: function(input){
    var isPrime = function(input){
      if(input < 2) return false;
      for(var i = 2; i < input - 1; i++){
        if(input % i == 0) return false;
      }
      return true;
    }

    var output = []; var count = 0;
    for(var i = 2; i < input; i++){
      if(isPrime(i)){
        output[count] = i;
        count++;
      }
    }
    return output;
  }
}
