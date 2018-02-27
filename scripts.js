// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    var current = arr[0]
    for(i = 1; i< arr.length; i++){
      if(arr[i] > current){
        current = arr[i];
      }
    }
    return current;
  },
  
  reversed: function(str){  
    reversedStr = "";
    for(i = str.length-1 ; i>= 0; i--){
      reversedStr += str.charAt(i);
    }
    return reversedStr;
  },

  loudSnakeCase: function(sentence){  
    sentence = sentence.replace(/\b\w/g, function(l){ return l.toUpperCase(); })
    sentence = sentence.replace(/\s+/g, "_")
    return sentence.replace(/[!?.]/g, "")
  },

  compareArrays: function(arr1, arr2){ 
    res = true

    for(i=0; i< arr1.length; i++){
      if(arr1[i] != arr2[i]){
        res = false;
        break;
      }
    }
    return res; 
  },

  fizzBuzz: function(num){  
    arr = []
    for(i=1; i<=num; i++){
      if(i%3 === 0 && i%5 === 0) {
        arr.push("FIZZBUZZ");
      }
      else if(i%3 === 0 ){
        arr.push("FIZZ");
      }
      else if(i%5 === 0 ){
        arr.push("BUZZ");
      }
      else{
        arr.push(i);
      }
    }
    return arr
  },

  myMap: function(arr, func){ 
    newArr = [] 
    for(i=0; i<arr.length; i++){
      newArr.push(func(arr[i]))
    }
    return newArr;
  },

  primes: function(num){  
    arr =[]

    for(i=2; i<num; i++){
      is_prime = true
      for(j=i-1; j>=2; j--){
        if(i%j === 0){
          is_prime = false
        }
      }

      if(is_prime){
        arr.push(i);
      }
    }
    return arr
  },
