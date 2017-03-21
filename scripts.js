// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(inputArr){
    // Reference: w3schools.com/jsref/jsref_sort.asp
    inputArr.sort(function(a, b){return b-a});
    return inputArr[0];
  },

  reversed: function(inputString){
    var arr = inputString.split("");
    arr.reverse();
    var outputString = arr.join("");
    return outputString;
  },

  loudSnakeCase: function(str){
    /*Step 1: Replace all non-characters from the string
              \w is any digit, letter, or underscore.
              \s is any whitespace.
              [^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
              Reference: stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex */
    var str2 = str.replace(/[^\w\s]/g, "").replace(/\s+/g, " ");
    //Step 2: Convert string to lower case
    str2.toLowerCase();
    //Step 3: Convert string to an array
    var arr = str2.split(' ');
    //Step 4: convert each word to title case
    for(var i=0; i<arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //Step 5: Convert array to string using underscore as connector
    //var newStr = newArr.join('_');
    var newStr = arr.join('_');
    //Step 6: Return the final string
    return newStr;
  },

  compareArrays: function(input1, input2){
    var len1 = input1.length;
    var len2 = input2.length;
    var areEqual = true;
    if(len1 != len2) {
      areEqual = false;
    }
    else {
      for(var i=0; i<len1; i++){
        if(input1[i] != input2[i]){
          areEqual = false;
          break;
        }
      }
    }
    return areEqual;
  },

  fizzBuzz: function(input){
    var output = [];
    if(isNaN(parseFloat(input))){ // validating input
      alert("Invalid input");
    }
    else{
      for (var i = 1; i<input+1; i++){
        if(i%3 === 0 || i%5 === 0){
          if(i%15 === 0){
            output.push("FIZZBUZZ");
          }
          else if (i%3 === 0) {
            output.push("FIZZ");
          }
          else{
            output.push("BUZZ");
          }
        }
        else{
          output.push(i);
        }
      }
    }
    return output;
  },

  myMap: function(inputArr, callBackFunction){
    var newArr = inputArr.map(callBackFunction);
    return newArr;
  },

  primes: function(number){
    var outputArr = [];
    if(number < 2){
      return "Prime number need to be atleast 2 or higher";
    }
    else if(number === 2){
      outputArr.push(2);
    }
    else{
      outputArr.push(2);
      for(var i = 3; i<number; i++){
        for(var j = 2; j<i; j++){
          if(i % j === 0){
            break;
          }
          if(j==i-1){
            outputArr.push(i);
          }
        }
      }
    }
    return outputArr;
  },
}
