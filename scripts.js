// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    //Loop through each element in the array
    var currLargest; // To keep track of largest number
    for (var i = 0; i < array.length; i++) {
      if(!currLargest) { //If currLargest has no value yet, set it to this element
        currLargest = array[i];
      }
      else if (array[i] > currLargest){ //Else compare it with current element and set the larger one to currLargest
        currLargest = array[i];
      }
    }
    return currLargest;
  },

  reversed: function(inputString){
    var strArray = inputString.split(''); //convert string to array
    var reversedStr = strArray.reverse().join(''); //reverse the string
    return reversedStr;
  },

  loudSnakeCase: function(inputString){
    var escStr = inputString.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "");
    var splitStr = escStr.trim().split(/\s+/);
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
    }
    var repStr = splitStr.join('_');
    return repStr;
  },

  compareArrays: function(arr1, arr2){
    if(arr1.length !== arr2.length) {
      return false;
    }
    else {
      for(var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
  },

  fizzBuzz: function(maxNum){
    var fbArr = [];
    var currNum = 0;
    for (var i = 0; i < maxNum; i++) {
      currNum = i + 1;
      if (currNum % 3 === 0 && currNum % 5 === 0) {
        fbArr[i] = "FIZZBUZZ";
      }
      else if (currNum % 3 === 0) {
        fbArr[i] = "FIZZ";
      }
      else if (currNum % 5 === 0) {
        fbArr[i] = "BUZZ";
      }
      else {
        fbArr[i] = currNum;
      }
    }
    return fbArr;

  },

  myMap: function(arr, myFunc){
    var returnArr = [];
    for(var el in arr) {
      returnArr.push(myFunc(arr[el]));
    }
    return returnArr;
  },

  primes: function(maxNum){
    var primeArr = [];
    for(var i = 2; i < maxNum; i++) {
      for (var j = 2; j <= i; j++) {
        if (j === i) {
          primeArr.push(i);
        }
        else if(i % j === 0) {
          break;
        }
      }
    }
    return primeArr;
  },
}
