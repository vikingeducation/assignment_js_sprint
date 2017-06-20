// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    array.sort(function(a,b) {
      return (b-a)
    });
    return array[0];
},

  reversed: function(string){
    var newString = "";
      for (var i=string.length-1; i>=0; i--){
        newString += string[i];
      }
      return newString;
  },

  loudSnakeCase: function(str){
    str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var strArray = str.split(" ");
    strArray = strArray.filter(String);
    for (var i = 0; i < strArray.length; i++) {
          strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
}
    strArray = strArray.join("_");
    return strArray;
  },

  compareArrays: function(arr1, arr2){
    if (arr1.join()===arr2.join()) {
      return true;
    } else {
      return false;
    }
  },

  fizzBuzz: function(number){
    var arr = [];
    for (var i = 1; i<=number; i++){
      if (i % 3 === 0 && i % 5 === 0){
        arr.push("FIZZBUZZ");
    }
    else if (i%3===0) {
        arr.push("FIZZ");
    }
    else if (i%5===0) {
        arr.push("BUZZ");
    }
    else {
        arr.push(i);
    }
  }
  return arr;
  },

  myMap: function(arr,func){
    for (var i=0; i<arr.length; i++){
      arr[i] = func(arr[i]);
    }
    return arr;
  },

  primes: function(num){
    var primeOutput = [];
    var sieve = [];
    var i;
    var j;
    for (i = 2; i < num; i++) {
      if (!sieve[i]) {
        primeOutput.push(i);
        for (j = i << 1; j <= num; j += i){
          sieve[j] = true;
        }
      }
    }
    return primeOutput;
  }
}
