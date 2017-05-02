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