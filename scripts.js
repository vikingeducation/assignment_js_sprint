// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    for (var i = 0; i < array.length; i ++) {
      var a = 0;
      var b = 0;
      if (a < array[i]) {
        b = array[i];
      }
    }
    return b;
  },

  reversed: function(array){
    return array.split("").reverse().join("");
  },

  loudSnakeCase: function(string){
    var otherOtherSnakeString = string.replace("  ", " ");
    var otherSnakeString = otherOtherSnakeString.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '');
    var snakeString = otherSnakeString.split(" ");
    var snakeArray = function (array) {
      for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
      }
    }

    snakeArray(snakeString);
    var snakeStringTwo = snakeString.join("_");
    return snakeStringTwo;


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
