// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    
    //sort array in ascending and return the last element of array (largest!)
    let tempArr =  arr.sort();
    return tempArr[tempArr.length - 1];
  },
  
  reversed: function(str){  
    
    //split each char of string into an array, reverse array and convert it back to a string with join
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function(str){

    //replace spaces with _
    //then remove any char not a letter or a number
    let arr = [];
    str = str.replace(/\s+|_+/g, "_");
    str = str.toLowerCase().replace(/[^a-z0-9_]/g, "");
    
    //next, split string into words in an array wherever there is a _
    str = str.split("_");
    
    //convert first char of each word to uppercase
    for (let i = 0; i < str.length; i ++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }

    //join back all words in array to a string of words connected by _
    return str.join("_");
  },

  compareArrays: function(arr1, arr2){ 

    //check length first
    //next, check each item in arr1 against corresponding item in arr2
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true; 
  },

  fizzBuzz: function(num){

    //start with empty str
    let arr = [];
    let str = "";

    for (let i = 1; i <= num; i++) {

      //if divisible by 3 
      if ((i % 3) === 0) {
        str += "FIZZ";
      }

      //if divisible by 5
      if ((i % 5) === 0) {
        str += "BUZZ";
      }

      //if str empty, i.e., not divisible by either 3 or 5 
      //add current number to array
      //else add thhe value of str
      if (str === "") {
        arr.push(i);
      } else {
        arr.push(str);
      }

      //reset str
      str = "";
    }

    return arr;
  },

  myMap: function(arr, func){  
    // using map function
    return arr.map(func);
  },

  primes: function(num){  
    

    let arr = [];

    //add number to array if prime and skip if not
    for(let i = 0; i < num; i++) {
      if (isPrime(i)) {
        arr.push(i);
      }
    }
    return arr;

    //checks if given number is a prime or not
    function isPrime(value) {
      for(let i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
      }
      return value > 1;
    }

  },
}