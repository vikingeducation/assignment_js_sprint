// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {

  largestEl: function(array){
    return Math.max.apply(null, array);
  },

  reversed: function(string){

      var newstring = "";
        for (var i = string.length - 1; i >= 0; i--){
          newstring += string[i];
        }
        return newstring;

  },
  loudSnakeCase: function(str){

    var snake1 = str.replace(/[!.]+/g, "");
    var snake2 = snake1.replace(/  +/g, " ");

    snake2 = snake2.toLowerCase().split(" ");
    console.log(snake2)
    for(var i = 0; i < snake2.length; i++) {
      snake2[i] = snake2[i].split("");
      snake2[i][0] = snake2[i][0].toUpperCase();
      snake2[i] = snake2[i].join("");
    }
    return snake2.join("_");


  },

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    if (array1.join() === array2.join()){
      return true;
    }
    else {
      return false;
    }
  },

  fizzBuzz: function(numb){
    var arr = [];
    for (var i = 1; i <= numb; i++){
      if (i % 3 === 0 && i % 5 === 0){
        arr.push("FIZZBUZZ");
      }
      else if (i % 3 === 0) {
        arr.push("FIZZ");
      }
      else if (i % 5 === 0) {
        arr.push("BUZZ");
      }
      else {
        arr.push(i);
      }

    }
    return arr;
  },

  myMap: function(arr, func ){
    // your code here
    var newArray = arr.map(func);
    return newArray;
  },

  primes: function(num){
    // your code here

    if(num < 2) return false;
    var arr = []

    for (var i = 2; i <= num; i++){
      var isPrime = true
      for (var j =2; j < i; j++){
        if (i % j == 0) {
          isPrime = false;
        }
      }
      if(isPrime) {
        arr.push(i)
      }
    }
  return arr;

  },
}
