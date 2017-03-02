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

  loudSnakeCase: function(sentence){  
      sentence = sentence.replace(/\s/g, '_');
     sentence = sentence.replace(/\W/g, '');
     sentence = sentence.replace(/_+/g, '_');
     sentence = sentence.replace(/_\s*([a-z])/g, function(C) {
       return C.toUpperCase();
     });
     return sentence;
  },

  compareArrays: function(arr1, arr2){ 
    // your code here (replace the return)
    if(arr1.length !== arr2.length){
        return false;
    }
    var loop = 0;
    while(loop < arr1.length){
        if(arr1[loop] == arr2[loop]){
            console.log(arr1[loop], arr2[loop]);
        } else {
            return false;
        }
        loop++;
    }
    return true;
  },

  fizzBuzz: function(num){  
    var myArray = [];
    for(var i = 1; i <= num; i++){
        if(i % 15 === 0){
            myArray.push("FIZZBUZZ");
        } else if(i % 3 === 0){
            myArray.push("FIZZ");
        } else if(i % 5 === 0){
            myArray.push("BUZZ");
        } else {
            myArray.push(i);
        }
    }
    return myArray;
  },

  myMap: function(array, func){  
    var arr = [];
    
    array.map(function(element){
      arr.push(func(element));
    });
    return arr;
  },

  primes: function(num){  
    var arr = [];
    for(var i = 2; i < num; i++){
        if((i % 2 !== 0 || i < 4) && (i % 3 !== 0 || i < 4) && (i % 5 !== 0 || i == 5)) {
            arr.push(i);
        }
    }
    return arr;
  },
}