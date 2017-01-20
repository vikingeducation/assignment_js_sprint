// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(input){
    // your code here
    input.sort;
    return input[input.length - 1]
  },

  reversed: function(input){
    // your code here
    var characters = input.split("");
    var revs = characters.reverse();
    var answer = revs.join("");
    return answer;
  },

  loudSnakeCase: function(input){
    // your code here
    String.prototype.capitalize = function() {
       return this.charAt(0).toUpperCase() + this.slice(1);
     };
    var capStrings = [];
   var stripString = input.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
   var indStrings = stripString.split(" ");
   indStrings.forEach(function(element){
     capStrings.push(element.capitalize());
   });
   for(var i = 0; i < (capStrings.length -1); i++) {
     if (capStrings[i] === "") capStrings.splice(i, 1);
   };
   var final = capStrings.join("_");
   return final;
},


  compareArrays: function(input1, input2){
    // your code here (replace the return)
    if (input1.length != input2.length) {
      return false;
    } else {
      for(var i = 0; i < (input1.length - 1); i++) {
        if (input1[i] != input2[i]) {
          return false;
        }
      }
    }
  return true;
  },

  fizzBuzz: function(input){
    // your code here
    var answer = [];
    for(var i = 1; i <= input; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        answer.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        answer.push("FIZZ");
      } else if (i % 5 === 0) {
        answer.push("BUZZ");
      } else {
        answer.push(i);
      }
    }
  return answer;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
