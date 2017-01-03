// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var largest = 0;
    array.forEach(function(element){
      if (element > largest) {
        largest = element;
      };
    });
    return largest;
  },

  reversed: function(string){
    var rstring = "";
    for (i = string.length - 1; i >= 0; i--) {
      rstring += string[i];
    };
    return rstring;
  },

  loudSnakeCase: function(string){
    var arr = string.split(/\s+/)
    // var lsc = string.replace(/\W/g, "")

    arr.forEach(function(element) {
      element = element.replace(/\W/g, "")
      var letter = element[0].toUpperCase()
      var rest = element.slice(1)
      var word = letter + rest
      console.log(arr)
    })
    // for (i = 0; i < lsc.length; i++) {
    //   if (lsc[i] === '_'){
    //     console.log(lsc[i+1])
    //     lsc = lsc.replace(lsc[i+1], lsc[i + 1].toUpperCase())
    //   }
    // };
    lsc = arr.join('_')
    console.log(lsc);
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
