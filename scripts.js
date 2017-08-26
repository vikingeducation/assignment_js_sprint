// FILL IN THE FUNCTIONS BELOW

/*
DC: Here's the template I used to test each function below: 
var sprintFunctions = {
  //>> Start function ... just copy the exact thing and place below
  largestEl: function(myArray){  
    //var input = [2,4,2,1,5,2,5];
    var max = 0;
    myArray.forEach(function(el) {
      if (el > max) {
        max = el;
      }
    });
    //console.log("max = " + max);
    return max;
  },
  //<< End function ... end in above line
};

var input = [2,4,2,1,5,2,5];
sprintFunctions.largestEl(input);
*/


var sprintFunctions = {
  //
  // takes array as argument
  // returns max element in argument
  // usage:
  //    sprintFunctions.largestEl(yourArray)
  //
  largestEl: function(myArray){  
    //var input = [2,4,2,1,5,2,5];
    var max = 0;
    myArray.forEach(function(el) {
      if (el > max) {
        max = el;
      }
    });
    //console.log("max = " + max);
    return max;
  },
//
//TO TEST
//
//var input = [2,4,2,1,5,2,5];
//sprintFunctions.largestEl(input);

  //
  // takes a string and reverses it
  // usage:
  //    sprintFunctions.reversed(yourString)
  //
  reversed: function(myString){  
    //var input = "I am a special string!";
    var myArray = [];
    //read string, char by char into array to manipulate it
    for (var i = 0; i < myString.length; i++) {
      myArray[i] = myString.charAt([i]);
    }
    //save the array in a reserved fashion by using reserve()
    var reversedArray = [];
    reversedArray = myArray.reverse();
    //put the array back into a string with join()
    var reversedString = reversedArray.join('');
    //console.log("reservedString = " + reversedString);
    return reversedString;
  },
//
//TO TEST
//
//var input = "I am a special string!";
//sprintFunctions.reversed(input); 

  // 
  // takes a string and returns it in Loud_Snake_Case
  // regular expression: \w ... matches A-Za-z0-9
  // usage: 
  //    sprintFunctions.loudSnakeCase(yourString
  //
  loudSnakeCase: function(myString){  
    //var input = "I am a strange code.  I like it though!";
    //remove all non(alphanum and white space chars)
    var try1 = myString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    //console.log('try1 = ' + try1);
    // remove extra white space with just 1 space
    var try2 = try1.replace(/\s{2,}/g," ");
    //console.log('try2 = ' + try2);
    //put myString into array with elements as words
    var myArray = [];
    myArray = try2.split(" ");
    var try3 = [];
    //console.log('try3 = ' + myArray);
    //update elements with uppercased first letter
    var myCappedArray = [];
    for (var i = 0; i < myArray.length; i++) {
      // If lowercase
      if (97 <= myArray[i].charCodeAt(0) && myArray[i].charCodeAt(0) <= 122) {
        myCappedArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);
     } else {
        myCappedArray[i] = myArray[i];
     }
    }
    //console.log('try4 = ' + myCappedArray);
    //return word + _
    var try5 = '';
    for (var i = 0; i < myCappedArray.length; i++) {
      if (i === myCappedArray.length -1) {
        try5 = try5 + myCappedArray[i];
      } else {
        try5 = try5 + myCappedArray[i] + '_';
      }
    }
    //console.log('try5 = ' + try5);
    return try5;
  },
//
//TO TEST
//
//var input = "I am a strange code.  I like it though!";
//sprintFunctions.loudSnakeCase(input);  

  //
  //this function compares 2 arrays
  //returns true if arrays are the same
  //returns false if arrays are different
  //sameness defined by same contents, same order (obviously)
  //usage: 
  //  compareArrays(array1, array2);
  //
  compareArrays: function(myArray1, myArray2){ 
    //start with simple test of comparing the array sizes
    //instantly returns false if doesn't even past this test
    if (myArray1.length !== myArray2.length) {
      //console.log("arrays are diff! to return FALSE!");
      return false;
    } else {
      //arrays have same size, so continue
      //loop through each element to test if value is equal
      //if find an element not equal, instantly retuns false and break out of loop
      for (var i=0; i < myArray1.length; i++) {
        if (myArray1[i] !== myArray2[i]) {
          //console.log("arrays are diff! to return FALSE!");
          //break;
          return false;
        } 
      }
      //console.log("arrays are same! to return TRUE!");
      return true;
    }
  },
//
//TO TEST
//
//var startArr = [1,2,4,3];
//var diffArr = [1,2,4,3];
//var diffArr = [1,2,3,4];
//sprintFunctions.compareArrays(startArr,diffArr);

  //
  //takes input an integer
  //returns array of elements of 1 to your input, according to the following subs: 
  //each element / 3 --> "FIZZ"
  //each element / 5 --> "BUZZ"
  //each element / both 3 and 5 --> "FIZZBUZZ"
  //eg: fizzbuzz(6) ==> [1,2,"FIZZ",4,"BUZZ","FIZZ"]
  //
  fizzBuzz: function(input){  
    var myArray = [];
    //loop from 1 to input number
    for (var i = 1; i <= input ; i++) {
      if (i%3 === 0) {
        myArray[i] = 'FIZZ';
        if (i%5 ===0) {
          myArray[i] = myArray[i] + "BUZZ";
        }
      } else if (i%5 === 0) {
        myArray[i] = 'BUZZ';
      } else {
        myArray[i] = i;
      }
    }
    //finally splice off myArray[0] since I started at index 1 to make computation easier
    myArray.splice(0,1);
    //console.log(myArray);
    return myArray;
  },
//
// to TEST
//
//var input = 16;
//sprintFunctions.fizzBuzz(input);  

  //
  //takes an array and function. 
  //passes every element in array to be executed in function
  //the returned array should be mutated by what the new function returns
  //
  myMap: function(myArray, myFunc){  
    var updatedArray = [];
    for (var i = 0; i < myArray.length; i++) {
      updatedArray[i] = myFunc(myArray[i]);
    }
    return updatedArray;
  },
//
// to TEST
//
// var inputArr = [1,2,3,4,5];
// var inputFunc = function(el){ return el*2; }; 
// var outputArr = [];
// outputArr = sprintFunctions.myMap(inputArr, inputFunc);
// console.log(outputArr);

  //
  //takes number input and outputs array of prime numbers occur less than input
  //eg: primes(8) ==> [2,3,5,7]
  //
  primes: function(myNumber){  
    //compute prime number starting with 2 to myNumber
    var myArray = [];
    var prime = true;
    for (var i = 2; i <= myNumber; i++) {
      for (var j = 1; j <= i; j++) {
        if (i%j === 0) {
          if ((j===1) || (j===i)) {
            prime = true;
          } else {
            prime = false;
            break;
          }
        }
      }
      if (prime) {
        myArray.push(i);
      }
    }
    return myArray;
  }
}
//
//TO TEST
//
//var input = 12;
//sprintFunctions.primes(input);
