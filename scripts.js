// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    var largest = arr[0],
      position = 1
    while( position <= arr.length ){
      number =  arr[position]; //iterates to next number in array
      if (number > largest){
        largest =  number;
        position ++;
      } else{
        position ++;
      }
    }    
    return largest;
  },
  
  reversed: function(str){
    var strArr = str.split(""),
      revArr = strArr.reverse(),
      revStr = revArr.join("");
    return  revStr;    
  },

  loudSnakeCase: function(str){  
    // your code here
    var strArr = str.split(" "),
      newArr = [],
      snakeStr = "";
  var capitalizeItem = function(string){
    var first = string.charAt(0).toUpperCase(),
        capitalizedString = first + string.slice(1,string.length); 
    return capitalizedString;
  }
  var myFunction = function(item){
    if (item === ""){
      return;
    } else if(item.match(/[^a-zA-Z0-9_]{1}$/)) {
     
      item = item.slice(0, item.length-1);
    } else {
      item = item;
    }
    item = capitalizeItem(item);
    newArr.push(item);
    
    //console.log(newArr);
    snakeStr = newArr.join("_");
  };
  
  strArr.forEach(myFunction);
  console.log(snakeStr);
  
  return snakeStr;
  },

  compareArrays: function(arr1, arr2){ 
    // your code here (replace the return)
    if (arr1.length === arr2.length){
      var position = 0;
      
      while (position  <= arr1.length){
        if (arr1[position] === arr2[position]){         
          position ++; //iterates to next items
        } else {
          return false; //different lengths
        }
      }
      return true;
    } else {
      return false; //different elements in array
    }
  },

  fizzBuzz: function(num){ 
    var returnArr = [],
        start = 1;
    
    while (returnArr.length < num){
      
      if (start % 3 === 0 && start % 5 === 0){
        returnArr.push("FIZZBUZZ");
      }else if(start % 3 === 0){
        
        returnArr.push("FIZZ");
      } else if(start % 5 === 0 ){
        returnArr.push("BUZZ");
      } else {
        returnArr.push(start);
      }
      start ++;
    }    
    console.log(returnArr);
    return returnArr;
  },

  myMap: function(arr, func){ 
    var position = 0,
        newArr = [];
  
    while(position < arr.length){
      newArr.push(func.call('undefined', arr[position]));
      position ++;
      }
    console.log(newArr);
    return newArr;
  },

  primes: function(num){ 
    var newArr = [],
        startNum = 1;
    var testPrime = function(item){
        if(item === 1){
          return false;
        } else if (item === 2){
          return true;
        } else {
          for(i = 2; i < item; i++){
            if (item % i === 0){
              return false;
            } 
          } // end for
          return true;
        } // end else 
    }

    while(startNum < num){
      if(testPrime(startNum)){
        newArr.push(startNum);
        startNum ++;
      } else{
        startNum++;
      }
    }
    console.log(newArr);
    return newArr;
  },
}