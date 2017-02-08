// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){
    input.sort(function(a,b) {
      return b>a;
    });
    return input[0];
  },

  reversed: function(input){
   var arr = input.split('');
   arr.reverse();
   var str = arr.join('');
   return str;
  },

  loudSnakeCase: function(input){
    var arr = input.split(' ');
    var newarr = [];
    arr.forEach(function(item) {
      item = item[0].toUpperCase() + item.slice(1).toLowerCase();
      var newitem = item.replace(/[^A-Za-z]/, '');
      newarr.push(newitem);
    });
      var string = newarr.join('_');
      return string;
  },

  compareArrays: function(a,b){
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
      }
    return true;
  },

  fizzBuzz: function(input){
    var arr = [];
    for (i=1; i<input+1; i++) {
      if ((i%3 ===0 && i%5 ===0) === true) {
          arr.push("FIZZBUZZ");
      }
      else if ((i%5===0) === true) {
        arr.push("BUZZ");
      }
      else if ((i%3===0) === true) {
        arr.push("FIZZ");
        }
      else {arr.push(i);}
    }
    return arr;
  },

  myMap: function(inputArr, inputFunc){
    var newArr = [];
    for (i=0; i<inputArr.length; i++){
     newArr.push(inputFunc(inputArr[i]));
    }
    return newArr;
  },

  primes: function(input){
   var isPrime = function(n) {
   if(n < 2) return false;
   for (var i =2; i<n; i++) {
    if (n%i === 0) return false;
   }
   return true;
   };

   var nArr = [];

   for (var i=2; i<input; i++) {
    if (isPrime(i) === true) {
     nArr.push(i);
    }
   }
   return nArr;
  },
}
