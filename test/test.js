var loudSnakeCase = function(string){
  // your code here
  var i = 0
  while(true){
    string = string.replace(/[.!@#$%^&*()<>,.?]/,"")
    i += 1
    if (i > 100) {break}
  }
  while(true){
    string = string.replace(" ", "_")
    i += 1
    if (i > 200) {break}
  }
  string = string.replace("__", "_")
  return string.split("_").map(function(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }).join("_");
}

console.log(loudSnakeCase("I am a strange code.  I like it though!"));

//replace(" " || "  ", "_")
